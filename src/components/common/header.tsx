import Anchor from './anchor';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Anchor label="Accessibility Hub" url="/" />
      </div>
      <nav aria-label={'Navigation'}>
        <NavList>
          <li>
            <Anchor url="/report" label="Barrierefreiheit" />
          </li>
          <li>
            <Anchor url="/lighthouse" label="Lighthouse" />
          </li>
        </NavList>
      </nav>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  flex: 0 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #000;
`

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`
