import { WCAGAuditFormType } from '../../../types/types';
import styled from 'styled-components';
import { Divider } from '../../../global-styles';
import { useWCAGStore } from '../../../store/store';
import { noop, toBase64 } from '../../../lib/utils';
import ContentWrapper from '../../layout/contentWrapper';
import Heading from '../../common/heading/heading';
import TextInput from '../../form-elements/input/textinput';
import CKEditorWrapper from '../../custom/ckeditor/ckeditor';
import Select from '../../form-elements/select/select';
import { DragAndDrop } from '../../form-elements/drag-drop/drag-and-drop-field';

interface ReportEntryFormProps {
  criteria: WCAGAuditFormType
}

export default function AuditFormBlock({ criteria }: ReportEntryFormProps) {
  const labelToId = criteria.name.toLowerCase().split(' ').join('-');
  const { updateCriteria } = useWCAGStore();

  // image to base64 creates to big strings which overload localstorage. disable until better variant, cloudinary?
  const enableDragAndDrop = false;

  const checkedOptions = [
    {
      label: "Bitte auswählen",
      value: ""
    },
    {
      label: "Unchecked",
      value: "unchecked"
    },
    {
      label: "passed",
      value: "passed"
    },
    {
      label: "Failed",
      value: "failed"
    },
    {
      label: "Not present",
      value: "notpresent"
    },
  ]

  const handleFindingsChange = (richText: string) => {
    updateCriteria(criteria.name, { findings: richText });
  }

  const handleCheckedStatusChange = (value: string) => {
    updateCriteria(criteria.name, { checkedStatus: value });
  }

  const handleFilesSelected = async (files: File[]) => {
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const base64 = await toBase64(files[i]);
      newImages.push(base64);
    }
    updateCriteria(criteria.name, {uploads: newImages});
  }

  return (
    <CriteriaEntryForm>
      <ContentWrapper>
        <Heading level="2">
          {criteria.category}
        </Heading>
        <Heading level="3">
          {criteria.guideLine}
        </Heading>
        <CriteriaLevel>{criteria.level}</CriteriaLevel>
        <CriteriaReference href={criteria.reference}>{criteria.name}</CriteriaReference>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <TextInput id={labelToId + 'criteria'}
                   value={criteria.name}
                   label="Kriterium"
                   disabled={true}
                   callback={noop}
        />
        <Select options={checkedOptions}
                label="Status" id={labelToId + 'checked'}
                value={criteria.checkedStatus || ""}
                onSelect={(value) => handleCheckedStatusChange(value)}
        />
        <CKEditorWrapper getRichTextData={handleFindingsChange}
                         value={criteria.findings || ""}
        />
        {enableDragAndDrop && <DragAndDrop onFilesSelected={handleFilesSelected} imagesFromUploadState={criteria.uploads || []}/>}
      </ContentWrapper>
    </CriteriaEntryForm>
  )
}

const CriteriaEntryForm = styled.div`
  border: 1px solid black;
  padding: 20px;
`

const CriteriaLevel = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 3rem;
  font-weight: bold;
`
const CriteriaReference = styled.a`
  position: absolute;
  top: 3.3rem;
  right: 0;
`
