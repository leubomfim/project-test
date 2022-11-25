import styled from 'styled-components';

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

export const Input = styled.input`
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

export const CentralizeRedirectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const RedirectBox = styled.div`
  padding: 20px;
  background-color: #a1f5a162;
  border: 2px solid #0aee0adc;
  border-radius: 5px;
  text-align: center;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const RedirectBoxTitle = styled.h2`
  font-size: 30px;
  color: #1cac1cdc;
`;

export const RedirectBoxText = styled.p`
  font-size: 20px;
`;

export const RedirectButton = styled.button`
  padding: 8px 0;
  background-color: #1cac1cdc;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
`;

export const SmallError = styled.small`
  font-size: 14px;
  color: red;
`;
