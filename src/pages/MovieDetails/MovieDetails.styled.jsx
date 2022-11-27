// For stylish components
import styled from 'styled-components';

// CSS in JS
export const BackButton = styled.button`
  border-radius: 6px;
  padding: 7px 10px;
  border: medium none transparent;
  outline: none;
  margin-left: 20px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background: #00b4cc;
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 20px 0px 20px 20px;
`;

export const PosterImage = styled.img`
  width: 250px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Overview = styled.p``;
