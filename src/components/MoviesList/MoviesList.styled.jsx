// For stylish components
import styled from 'styled-components';

// CSS in JS
export const List = styled.ul`
  padding: 0 20px 0 20px;
`;

export const Item = styled.li`
  font-weight: 700;
  margin-bottom: 0.5em;
  padding: 10px;
  background-color: #e3f0fd;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  box-shadow: 1px 1px 3px 0px rgba(134, 134, 134, 0.21);

  &:hover {
    background-color: #b6d8fa;
    cursor: pointer;
  }
`;
