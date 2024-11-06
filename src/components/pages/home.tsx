import SectionWrapper from '../layout/sectionWrapper';
import Heading from '../common/heading/heading';
import ContentWrapper from '../layout/contentWrapper';

export default function Home() {
  return (
    <SectionWrapper>
      <Heading level="1">Home</Heading>
      <ContentWrapper headline="Was bietet diese Seite?" headingLevel="2">
        <p>Simples Tool für die folgenden Inhalte:</p>
        <ul>
          <li>Barrierefreiheit Testtool</li>
          <li>Lighthouse Test</li>
        </ul>
      </ContentWrapper>
    </SectionWrapper>
  );
}
