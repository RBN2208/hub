import React, { useState } from 'react';
import styled from 'styled-components';
import { useWCAGStore } from '../../../store/store';
import Button from '../../common/button';
import AuditFormBlock from './AuditFormBlock';
import Select from '../../form-elements/select/select';

export default function AuditForm() {
  const { criteriaData } = useWCAGStore();
  const [activeIndex, setActiveIndex] = useState(0);  // Track the index of the active criterion
  const [filterValue, setFilterValue] = useState("");  // Track the index of the active criterion

  const next = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex < criteriaData.length ? newIndex : 0;
    });
  }

  const prev = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : criteriaData.length - 1;
    });
    console.log(criteriaData)
  }

  const changeOnSelect = (value: string) => {
    setFilterValue(value);
    const index = criteriaData.findIndex((criterion) => criterion.name === value);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }

  const mappedCriteria = criteriaData.map((criteriaData, index) => {
    return {
      value: criteriaData.name,
      label: criteriaData.name,
      selected: index === activeIndex
    }
  })

  return (
    <>
      <PrevNextButtonContainer>
        <Button label="Vorheriges Kriterium" onclick={prev} />
        <Button label="Nächstes Kriterium" onclick={next} />
      </PrevNextButtonContainer>

      <FilterContainer>
        <Select options={mappedCriteria}
                label="Spezifisches Kriterium auswählen"
                id="specific-criteria-filter"
                value={filterValue}
                onSelect={(value) => changeOnSelect(value)}
        />
      </FilterContainer>

      <AuditFormBlock criteria={criteriaData[activeIndex]} />
    </>
  )
}

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
`

const PrevNextButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`