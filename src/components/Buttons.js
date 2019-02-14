import styled from 'styled-components';

export const Buttons = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-color: ${props => props.buttons !== true ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${props => props.buttons !== true ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => props.buttons !== true ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);  
  }
  &:focus {
    outline: none;
  }
`;