import React from 'react';
import styled from 'styled-components';

type SectionWrapperType = {
  children: React.ReactNode
}
export default function SectionWrapper({children}: SectionWrapperType) {
  return (
    <SectionOuter>
      <SectionInner>
        {children}
      </SectionInner>
    </SectionOuter>
  )
}

const SectionOuter = styled.section`
  padding: 25px 0 35px;
  @media screen and (min-width: 600px) {
    padding: 35px 0 45px;
  }
  @media screen and (min-width: 1200px) {
    padding: 45px 0 55px;
  }
`

const SectionInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 25px;
  @media screen and (min-width: 600px) {
    padding: 0 50px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 90px;
  }
`
