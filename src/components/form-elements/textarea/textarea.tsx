import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { StyledTAreaBase } from '../../../global-styles';

interface InputProps {
  callback: (value: string) => void;
  label: string,
  id: string,
  value?: string,
  placeholder?: string,
}

export default function Textarea({value, placeholder, label, id, callback}: InputProps) {

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    callback(event.target.value);
  }

  return (
    <TextAreaWrapper>
      <label htmlFor={label}>{label}</label>
      <StyledTextArea value={value}
                      id={id}
                      placeholder={placeholder}
                      onChange={handleChange}
                      rows={5}
      />
    </TextAreaWrapper>
  )
}

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledTextArea = styled(StyledTAreaBase)`
`
