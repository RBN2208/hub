import {
  Paragraph,
  Document,
  HeadingLevel,
  Packer,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  ImageRun
} from 'docx';
import {saveAs} from 'file-saver'

import { GeneralAuditFormType, WCAGAuditFormType, WCAGAuditFormTypeList } from '../types/types';
import { Logger } from './utils';
import { GENERAL_AUDIT_FORM_TYPE_LABELS } from '../data/criterias';

export default function docxConverter(generalData: GeneralAuditFormType, criteriaData: WCAGAuditFormTypeList) {
  generateWCAGReport(generalData, criteriaData)
}

export function generateWCAGReport(generalData: GeneralAuditFormType, criteriaArray: WCAGAuditFormType[]) {
  const groupedCriteria = groupByCategoryAndGuideline(criteriaArray);

  const doc = new Document({
    sections: [
      {
        children: [
          createSectionHeading(HeadingLevel.HEADING_2, "Allgemeine Informationen"),
          createGeneralInfoTable(generalData),
          ...Object.entries(groupedCriteria).flatMap(([groupKey, criteriaList]) => {
            const [category, guideLine] = groupKey.split('::');
            const groupHeading = createSectionHeading(HeadingLevel.HEADING_3, `${category} - ${guideLine}`);

            const tablesForCriteria = criteriaList.map((criteria) => createCriteriaTable(criteria));
            return [groupHeading, ...tablesForCriteria];
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    Logger.log("Converter: Document created, init download");
    saveAs(blob, "TITLE DOCUMENT");
  });
}

function createGeneralInfoTable(generalData: GeneralAuditFormType): Table {
  const rows = Object.entries(generalData).map(([key, value]) =>
    new TableRow({
      children: [
        new TableCell({
          children: [
            createParagraph(GENERAL_AUDIT_FORM_TYPE_LABELS[key as keyof typeof GENERAL_AUDIT_FORM_TYPE_LABELS] || '')
          ],
          width: { size: 50, type: WidthType.PERCENTAGE }
        }),
        new TableCell({
          children: [
            createParagraph(value)
          ],
          width: { size: 50, type: WidthType.PERCENTAGE }
        })
      ]
    })
  );
  Logger.log('GeneralInfoTable, rows created', rows);

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: rows,
    margins: { top: 100, bottom: 100, left: 100, right: 100 }
  });
}

function groupByCategoryAndGuideline(criteriaArray: WCAGAuditFormType[]): Record<string, WCAGAuditFormType[]> {
  return criteriaArray.reduce((acc, criteria) => {
    const key = `${criteria.category}::${criteria.guideLine}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(criteria);
    return acc;
  }, {} as Record<string, WCAGAuditFormType[]>);
}

function createSectionHeading(level: any, text: string): Paragraph {
  return new Paragraph({
    heading: level,
    children: [new TextRun({ text, bold: true, font: "Arial" })],
    spacing: {
      after: 150,
      before: 150
    }
  });
}

function createParagraph(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: text,
        font: "Arial"
      })
    ]
  })
}

// Helper function to create a table for each criteria
function createCriteriaTable(criteria: WCAGAuditFormType): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              createParagraph(`${criteria.name} - ${criteria.level}`)
            ],
            shading: {
              fill: '#000000',
              color: '#ffffff'
            },
            columnSpan: 2,
            margins: {
              top: 50,
              right: 100,
              left: 100,
              bottom: 50
            }
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [
              createParagraph("Befund")
            ],
            shading: {
              fill: '#80a8ce'
            },
            margins: {
              top: 50,
              right: 100,
              left: 100,
              bottom: 50
            }
          })
        ]
      }),
      new TableRow({
        children: [
          new TableCell({
            children: createRichTextFromHTML(criteria.findings || ''),
            margins: {
              top: 50,
              right: 100,
              left: 100,
              bottom: 50
            }
          })
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [
              createParagraph('Bilder')
            ],
            shading: {
              fill: '#80a8ce'
            },
            margins: {
              top: 50,
              right: 100,
              left: 100,
              bottom: 50
            }
          })
        ]
      }),
      new TableRow({
        children: [
          new TableCell({
            margins: {
              top: 50,
              left: 50,
              right: 50,
              bottom: 50
            },
            children: criteria.uploads ?
              criteria.uploads.map((imageData) => {
                return new Paragraph({
                  children: [
                    new ImageRun({
                      type: "jpg",
                      data: imageData,
                      transformation: {
                        width: 200,
                        height: 200,
                      }
                    }),
                  ]
                })
              }) :
              [
                createParagraph('')
              ],
          }),
        ],
      }),
    ],
  });
}

function createRichTextFromHTML(htmlString: string): Paragraph[] {
  const container = document.createElement("div");
  container.innerHTML = htmlString;

  const elements = container.childNodes;

  const paragraphs: Paragraph[] = [];
  elements.forEach((element) => {
    if (element.nodeType === 1) { // Element-Knoten
      const el = element as HTMLElement;
      const tag = el.tagName.toLowerCase();

      switch (tag) {
        case "h2":
        case "h3":
        case "h4":
          paragraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: (element as HTMLElement).textContent || "",
                  bold: (element as HTMLElement).innerHTML.includes('<strong>'),
                  italics: (element as HTMLElement).innerHTML.includes('<i>'),
                  color: extractColorFromHTML((element as HTMLElement).innerHTML)
                })
              ],
              heading: tag === "h2" ? HeadingLevel.HEADING_2 : tag === "h3" ? HeadingLevel.HEADING_3 : HeadingLevel.HEADING_4,
            })
          );
          break;

        case "p":
          paragraphs.push(
            formattedParagraph(element as HTMLElement)
          );
          break;

        case "ul":
        case "ol":
          paragraphs.push(...createList(element as HTMLElement));
          break;

        case "div":
          if ((element as HTMLElement).classList.contains('raw-html-embed')) {
            paragraphs.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: (element as HTMLElement).innerHTML,
                    font: "Arial"
                  })
                ]
              })
            )
          }
          break;

        default:
          break;
      }
    }
  });

  return paragraphs;
}

function formattedParagraph(el: HTMLElement): Paragraph {
  const element = el as HTMLElement
  const isBold = element.innerHTML.includes('<strong>');
  const isItalic = element.innerHTML.includes('<i>');
  const fontColor = extractColorFromHTML(element.innerHTML); // color or black

  return new Paragraph({
    children: [
      new TextRun({
        text: element.textContent || "",
        bold: isBold,
        italics: isItalic,
        color: fontColor,
        font: 'Arial'
      })
    ]
  })
}

function createList(element: HTMLElement): Paragraph[] {
  const listItems: Paragraph[] = [];
  element.childNodes.forEach((child) => {
    if (child.nodeType === 1 && (child as HTMLElement).tagName.toLowerCase() === "li") {
      listItems.push(
        new Paragraph({
          text: (child as HTMLElement).textContent || "",
          bullet: { level: 0 },
        })
      );
    }
  });

  return listItems;
}

function extractColorFromHTML(htmlString: string): string {
  const colorRegex = /style=["'][^"']*color:\s*(#[0-9a-fA-F]{3,6})[^"']*["']/;
  const match = htmlString.match(colorRegex);
  return match ? match[1] : '#000000';
}

