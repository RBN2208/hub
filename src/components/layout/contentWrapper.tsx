import React from 'react';
import styled from 'styled-components';
import Heading, { HeadingLevelType } from '../common/heading/heading';

export interface IntroArticleProps {
  headline?: string,
  description?: string
  children?: React.ReactNode,
  headingLevel?: HeadingLevelType
}

export default function ContentWrapper({children, headline, description, headingLevel}: IntroArticleProps) {
  const hLevel = headingLevel || "2"
  return (
    <>
      <ContentOuter>
        {(headline || description) &&
          <div>
            {headline && <Heading level={hLevel}>{headline}</Heading>}
            {description && <p>{description}</p>}
          </div>
        }
        {children &&
          <ContentChildren>
            {children}
          </ContentChildren>
        }
      </ContentOuter>
    </>
  );
}

const ContentOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ContentChildren = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`