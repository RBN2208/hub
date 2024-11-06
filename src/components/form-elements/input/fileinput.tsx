import React, { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import { StyledInputBase } from '../../../global-styles';

interface InputProps {
  callback: (value: string) => void;
  label: string,
  id: string,
  placeholder?: string,
}

export default function FileInput({placeholder, label, id, callback}: InputProps) {
  const fileInputRef = useRef<null | HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    callback(event.target.value);
  }

  const triggerUpload = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <FakedInputBox onClick={triggerUpload}>Bilder hochladen</FakedInputBox>
      <input type="file"
                   id={id}
                   ref={fileInputRef}
                   multiple={true}
                   placeholder={placeholder}
                   onInput={handleChange}
      />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const FakedInputBox = styled.button`
  padding: 0.5rem
`
