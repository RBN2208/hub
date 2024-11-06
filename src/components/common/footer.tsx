import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      Some informations...
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  color: white;
  padding: 25px;
`
