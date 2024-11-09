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
            createParagraph(GENERAL_AUDIT_FORM_TYPE_LABELS[key])
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
            children: [
              createParagraph(criteria.findings || '')
            ],
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
