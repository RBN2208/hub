import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/button';
import AuditGeneralForm from './AuditGeneralForm';
import AuditForm from './AuditForm';
import AuditPreviewForm from './AuditPreview';

export function AuditMultiPageForm() {
  const [subNav, setSubNav] = useState('general');

  // subnav mit steps Allgemein - Audit - Vorschau
  /*
    Allgemein: Grundlegende Infos über Audit, Kunde, Website oder Modul, Level (filtert Audit)
    Audit: Filter um auf bestimmtes Kriterium zu wechseln, vor / zurück button, speichern = nextPage
    Vorschau: Ansichtspreview zu jedem Kriterium, Download JSON, Download Word
  */

  const isGeneralForm = subNav === 'general';
  const isAuditForm = subNav === 'audit';
  const isPreviewForm = subNav === 'preview';

  return (
    <PageWrapper>
      <nav aria-label="Stufen des Audit Formulars">
        <SubNavList>
          <li>
            <Button label="Allgemein"
                    primary={isGeneralForm}
                    onclick={() => setSubNav('general')}
                    aria-selected={isGeneralForm}
            />
          </li>
          <li>
            <Button label="Audit"
                    primary={isAuditForm}
                    onclick={() => setSubNav('audit')}
                    aria-selected={isAuditForm}
            />
          </li>
          <li>
            <Button label="Vorschau"
                    primary={isPreviewForm}
                    onclick={() => setSubNav('preview')}
                    aria-selected={isPreviewForm}
            />
          </li>
        </SubNavList>
      </nav>
      { isGeneralForm && <AuditGeneralForm /> }
      { isAuditForm && <AuditForm />}
      { isPreviewForm && <AuditPreviewForm /> }
    </PageWrapper>
  )
}

const SubNavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
