import React from 'react';
import styled from 'styled-components';

export type HeadingLevelType = '1' | '2' | '3' | '4' | '5' | '6';

interface HeadingProps {
  level: HeadingLevelType;
  children: React.ReactNode;
}

const StyledHeading1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const StyledHeading2 = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

const StyledHeading3 = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

const StyledHeading4 = styled.h4`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
`;

interface RenderedHeadingProps {
  level: HeadingLevelType;
  children: React.ReactNode;
}

const RenderedHeading: React.FC<RenderedHeadingProps> = ({ level = '2', children }) => {
  switch (level) {
    case '1':
      return <StyledHeading1>{children}</StyledHeading1>;
    case '2':
      return <StyledHeading2>{children}</StyledHeading2>;
    case '3':
      return <StyledHeading3>{children}</StyledHeading3>;
    case '4':
      return <StyledHeading4>{children}</StyledHeading4>;
    default:
      return <StyledHeading2>{children}</StyledHeading2>;
  }
};

export default function Heading({ level, children }: HeadingProps) {
  return <RenderedHeading level={level}>{children}</RenderedHeading>;
}
