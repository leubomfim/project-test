import styled from 'styled-components';

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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  & > a {
    color: black;
    text-align: center;
    font-size: 18px;
  }
`;

export const FormControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Select = styled.select`
  width: 100%;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  font-size: 18px;
  border-bottom: 1px solid #7FC047;
`;

export const Option = styled.option`
  font-size: 18px;
  padding: 5px;
`;

export const ErrorBox = styled.div`
  background-color: #fda9a87c;
  position: absolute;
  top: 110px;
  right: 40px;
  padding: 17px 10px;
  border-radius: 5px;
  border: 2px solid red;

  @media screen and (max-width: 600px) {
    width: 82%;
    top: 30px;
  }
`;

export const ErrorTitle = styled.h3`
  font-size: 30px;
  color: red;
  margin-bottom: 5px;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  width: 380px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CloseError = styled.button`
  position: absolute;
  background-color: transparent;
  top: 2px;
  right: 4px;
  font-size: 17px;
  cursor: pointer;
`;

export const ShowPassword = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  top: 12px;
  font-size: 18px;
`;
