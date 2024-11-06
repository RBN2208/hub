import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { StyledSelectBase } from '../../../global-styles';

interface SelectProps {
  options: { label: string, value: string, selected?: boolean }[];
  label: string;
  id: string,
  onSelect: (value: string) => void;
  value?: string,
}

export default function Select({id, label, value, options, onSelect}: SelectProps) {

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue);
  }

  return (
    <SelectWrapper>
      <label htmlFor={label}>{label}</label>
      <SelectElement name="filter-criteria-level" id={id} value={value || ""} onChange={handleSelectChange}>
        {options.map((option,index) => (
          <option key={index + option.value} value={option.value}>{option.label}</option>
        ))}
      </SelectElement>
    </SelectWrapper>
  )
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SelectElement = styled(StyledSelectBase)`
`
