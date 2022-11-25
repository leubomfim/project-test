import styled, { css } from 'styled-components';

export const BackRegisterModal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterModal = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: white;
  padding: 20px;
`;

export const HeadingRegister = styled.h2`
  color: black;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > a {
    color: black;
    text-align: center;
    font-size: 18px;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Select = styled.select`
  width: 100%;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  border: 1px solid #333;
`;

export const Option = styled.option`
  font-size: 18px;
  padding: 5px;
`;

export const Input = styled.input`
  ${({ error }) => css`
    ${error === 'error' && 'border: 1px solid red'}
    ${error === null && 'border: 1px solid #333;'}
  `};
  width: 100%;
  font-size: 18px;
  padding:10px;
  border-radius: 3px;
  border: 1px solid #333;
`;

export const Label = styled.label`
  font-size: 20px;
  color: #C4C2C4;
`;

export const Button = styled.button`
  color: white;
  width: 100%;
  padding: 10px 0;
  font-size: 20px;
  background-color: rgb(25, 118, 210);
  cursor: pointer;
`;

export const SmallError = styled.small`
  font-size: 14px;
  color: red;
`;
