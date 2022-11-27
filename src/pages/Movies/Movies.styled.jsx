// For stylish components
import styled from 'styled-components';

export const SearchWrap = styled.div`
  width: 30%;
  position: relative;
  margin: auto;
  margin-bottom: 20px;
`;

export const FormStyled = styled.form`
  width: 100%;
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;

  :focus {
    color: #00b4cc;
  }
`;

export const Button = styled.button`
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;
