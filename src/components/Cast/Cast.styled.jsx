import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin-top: 5px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
