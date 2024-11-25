import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWCAGStore } from '../../../store/store';
import Button from '../../common/button';
import AuditFormBlock from './AuditFormBlock';
import Select from '../../form-elements/select/select';
import { convertToJson, Logger } from '../../../lib/utils';

export default function AuditForm() {
  const { criteriaData, generalData } = useWCAGStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterValue, setFilterValue] = useState("");

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
  }

  const changeOnSelect = (value: string) => {
    setFilterValue(value);
    const index = criteriaData.findIndex((criterion) => criterion.name === value);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }

  const mappedCriteria = criteriaData.map((criteria, index) => ({
      value: criteria.name,
      label: criteria.name,
      selected: index === activeIndex,
    }));


  useEffect(() => {
    const intervalId = setInterval(() => {
      Logger.log('##### Autosave #####');
      const { asJson } = convertToJson(generalData, criteriaData);
      localStorage.setItem('audit', asJson);
    }, 30000);

    return () => clearInterval(intervalId);
  }, [generalData, criteriaData])

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
      {criteriaData.length > 0 && criteriaData[activeIndex] && (
        <AuditFormBlock criteria={criteriaData[activeIndex]} />
      )}
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
