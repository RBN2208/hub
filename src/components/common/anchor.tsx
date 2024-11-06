import styled from 'styled-components';

export default function Anchor({label = "", url = ""}: {label: string, url: string}) {
  return <ALink href={url} title={label}>{label}</ALink>
}

const ALink = styled.a`
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`
