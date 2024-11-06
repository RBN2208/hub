import styled from 'styled-components';

type ButtonProps = {
  label: string,
  onclick: () => void,
  primary?: boolean
}

export default function Button({label, onclick, primary = true, ...props}: ButtonProps) {
  return <BaseButton title={label}
                     $primary={primary}
                     onClick={onclick}
    {...props}
  >
    {label}
  </BaseButton>
}

interface BaseButtonProps {
  $primary: boolean | undefined
}

export const BaseButton = styled.button<BaseButtonProps>`
  background-color: ${({$primary}) => $primary ? "#000" : "#fff"};
  color: ${({$primary}) => $primary ? "#fff" : "#000"};
  padding: 0.5rem 1rem;
  border: ${({$primary}) => $primary ? "1px solid #000" : "1px solid #000"};
  &:hover {
    background-color: ${({$primary}) => $primary ? "#fff" : "#000"};
    color: ${({$primary}) => $primary ? "#000" : "#fff"};
  }
`;
