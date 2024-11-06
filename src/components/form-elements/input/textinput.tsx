import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { StyledInputBase } from '../../../global-styles';

interface InputProps {
  id: string,
  label: string,
  callback: (value: string) => void;
  value?: string,
  disabled?: boolean
  placeholder?: string,
}

export default function TextInput({id, value, placeholder, label, disabled = false, callback}: InputProps) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    callback(event.target.value);
  }

  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <StyledInput id={id}
                   type="text"
                   value={value}
                   disabled={disabled}
                   placeholder={placeholder}
                   onChange={handleChange}
      />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledInput = styled(StyledInputBase)`
  border: ${({disabled}) => disabled ? 'none': '1px solid black'};
`
