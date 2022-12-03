import styled from 'styled-components';

export const FormControl = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  padding:10px;
  border-radius: 3px;
  border-bottom: 1px solid #7FC047;

  &::placeholder {
    color: #C4C2C4;
  }
`;
