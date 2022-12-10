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

export const CreateAccount = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  & > a {
    font-weight: normal;
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }
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
    top: 120px;
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
