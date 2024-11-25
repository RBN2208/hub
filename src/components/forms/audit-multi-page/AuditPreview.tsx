import { useState } from 'react';
import styled from 'styled-components';
import { useWCAGStore } from '../../../store/store';
import { convertToJson, Logger } from '../../../lib/utils';
import { Table } from '../../custom/table/table';
import ContentWrapper from '../../layout/contentWrapper';
import Heading from '../../common/heading/heading';
import Button from '../../common/button';
import docxConverter from '../../../lib/word-convertion';
import { WCAGAuditFormType } from '../../../types/types';

type Categories = 'Perceivable' | 'Operable' | 'Understandable' | 'Robust';

export default function AuditPreviewForm() {
  const { criteriaData, generalData } = useWCAGStore();
  const [expandedCategories, setExpandedCategories] = useState<Record<Categories, boolean>>({
    Perceivable: false,
    Operable: false,
    Understandable: false,
    Robust: false,
  });

  const groupedCriteria: { [key: string]: WCAGAuditFormType[] } = criteriaData.reduce((groups, criteria) => {
    const category = criteria.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(criteria);
    return groups;
  }, {} as { [key: string]: WCAGAuditFormType[] });

  const toggleCategory = (category: Categories) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleDownloadJson = () => {
    const { asJson, filename } = convertToJson(generalData, criteriaData);
    downloadJson(asJson, filename);
  };

  const convertToWord = () => {
    docxConverter(generalData, criteriaData);
  };

  const downloadJson = (jsonData: string, filename: string) => {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    Logger.log('Blob and URL created -> ', blob, url);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'accessibility-report';
    a.click();
    URL.revokeObjectURL(url);
  };

  const generalTable = [
    { key: 'Projektname', value: generalData.projectName },
    { key: 'Kunde', value: generalData.customer },
    { key: 'Version', value: generalData.version },
    { key: 'Konformitätsstufe', value: generalData.conformance },
    { key: 'Sonstiges', value: generalData.miscellaneous },
  ];

  return (
    <div>
      <PreviewActions>
        <Button label="Download JSON" onclick={handleDownloadJson} />
        <Button label="Download Word" onclick={convertToWord} />
      </PreviewActions>

      <ContentWrapper>
        <Table caption="Allgemeine Informationen" data={generalTable} />
      </ContentWrapper>

      {['Perceivable', 'Operable', 'Understandable', 'Robust'].map((category) => (
        <div key={category}>
          <Heading level="2">
            <ToggleButton
              label={category}
              onclick={() => toggleCategory(category as Categories)}
            />
          </Heading>
          {expandedCategories[category as Categories] && (
            <ExpandInner>
              {groupedCriteria[category]?.map((criteria: WCAGAuditFormType, index: number) => {
                const findingsMarkup = { __html: criteria.findings || '' };
                return (
                  <GroupedContent key={index}>
                    <ContentWrapper>
                      <Heading level="3">{criteria.guideLine}</Heading>
                      <Heading level="4">{criteria.name}</Heading>
                      <p>
                        <strong>Status: </strong>
                        {criteria.checkedStatus}
                      </p>
                      <p>
                        <strong>Bericht:</strong>
                      </p>
                      <div dangerouslySetInnerHTML={findingsMarkup}></div>
                    </ContentWrapper>
                  </GroupedContent>
                );
              })}
            </ExpandInner>
          )}
        </div>
      ))}
    </div>
  );
}

const ToggleButton = styled(Button)`
  width: 100%;
`

const GroupedContent = styled.div`
  padding: 20px;
  border: 1px solid black;
`;

const ExpandInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid black;
  border-top: none;
`;

const PreviewActions = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;
