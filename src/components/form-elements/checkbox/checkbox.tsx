import { ChangeEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

interface CheckboxProps {
  option: { label: string, value: string };
  onChange: (value: string, checked: boolean) => void;
}

export default function Checkbox({option, onChange}: CheckboxProps) {
  const [labelId, setLabelId] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const getCheckboxValue = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    const state = event.target.checked;

    setIsChecked(state);
    onChange(selectedValue, state);
  }

  useEffect(() => {
    setLabelId(`${option.label.toLocaleLowerCase().trim()}-${uuidv4()}`);
  }, [])

  return (
    <CheckboxWrapper>
      <input id={labelId}
             type="checkbox"
             value={option.value}
             checked={isChecked}
             onChange={(e) => getCheckboxValue(e)}
      />
      <label htmlFor={labelId}>
        {option.label}
      </label>
    </CheckboxWrapper>
  )
}

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`
