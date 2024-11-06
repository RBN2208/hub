import React, { useRef } from 'react';
import { MergedAuditState } from '../../../types/types';
import styled from 'styled-components';
import { useWCAGStore } from '../../../store/store';
import { Logger } from '../../../lib/utils';
import ContentWrapper from '../../layout/contentWrapper';
import TextInput from '../../form-elements/input/textinput';
import Select from '../../form-elements/select/select';
import Textarea from '../../form-elements/textarea/textarea';
import Button from '../../common/button';

export default function AuditGeneralForm() {
  const { generalData, updateGeneral, setStateFromUpload } = useWCAGStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const conformanceTarget = [
    {
      value: "",
      label: "Bitte auswählen",
      selected: true
    },
    {
      value: 'A',
      label: 'A',
      selected: false
    },
    {
      value: 'AA',
      label: 'AA',
      selected: false
    },
    {
      value: 'AAA',
      label: 'AAA',
      selected: false
    }
  ];
  const wcagVersion = [
    {
      value: "",
      label: "Bitte auswählen",
      selected: true
    },
    {
      value: '2.2',
      label: 'WCAG 2.2',
      selected: false
    },
    {
      value: '2.1',
      label: 'WCAG 2.1',
      selected: false
    },
    {
      value: '2.0',
      label: 'WCAG 2.0',
      selected: false
    }
  ]

  const handleVersionChange = (key: 'version' | 'conformance', value: string) => {
    updateGeneral(key, value);
  }

  const handleTargetChange = (key: 'version' | 'conformance', value: string) => {
    updateGeneral(key, value);
  }

  const uploadJson = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    Logger.log("uploadJson -> file", file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonContent: MergedAuditState = JSON.parse(e.target?.result as string);
          console.log(jsonContent)
          setStateFromUpload(jsonContent.general, jsonContent.criterias);
          Logger.log("Parsed json -> ", jsonContent);
        } catch (error) {
          Logger.error("Error while parsing JSON ->", error);
        }
      };
      reader.readAsText(file);
    }
  }

  const triggerUpload = () => {
    fileInputRef.current?.click();
  }

  return (
    <div>
      <ContentWrapper>
        <ContentWrapper>
          <Button label="Report hochladen" onclick={triggerUpload} />
          <FileUpload type="file" accept="application/json" ref={fileInputRef} onChange={uploadJson} />
        </ContentWrapper>

        <ContentWrapper>
          <TextInput id="12"
                     value={generalData.projectName}
                     label="Projektbeschreibung"
                     callback={(value) => updateGeneral('projectName', value)}
          />
          <TextInput id="12"
                     value={generalData.customer}
                     label="Kunde"
                     callback={(value) => updateGeneral('customer', value)}
          />
          <TextInput id="12"
                     value={generalData.module}
                     label="Website oder Modul"
                     callback={(value) => updateGeneral('module', value)}
          />
          <Select id=""
                  label="Geprüfte WCAG Version"
                  options={wcagVersion}
                  value={generalData.version}
                  onSelect={(value) => handleVersionChange('version', value)}
          />
          <Select id=""
                  label="Konformitätslevel"
                  options={conformanceTarget}
                  value={generalData.conformance}
                  onSelect={(value) => handleTargetChange('conformance', value)}
          />
          <Textarea id=""
                    label="Sonstiges"
                    value={generalData.miscellaneous}
                    callback={(value) => updateGeneral('miscellaneous', value)}
          />
        </ContentWrapper>
      </ContentWrapper>
    </div>
  )
}

const FileUpload = styled.input`
  visibility: hidden;
  display: none;
`