import SectionWrapper from '../../layout/sectionWrapper';
import ContentWrapper from '../../layout/contentWrapper';
import { AuditMultiPageForm } from '../../forms/audit-multi-page/AuditMultiPageForm';

export default function ReportPage() {

  return (
    <>
      <SectionWrapper>
        <ContentWrapper headline="Report"
                        description="Hier kannst du einen Bericht für eine Barrierefreiheitsprüfung erstellen."
                        headingLevel="1"
        />
      </SectionWrapper>
      <SectionWrapper>
        <AuditMultiPageForm />
      </SectionWrapper>
    </>
  );
}
