import styled from 'styled-components';

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

export const ShowPassword = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  top: 12px;
  font-size: 18px;
  cursor: pointer;
`;

export const SuccessBox = styled.div`
  background-color: #a1f5a162;
  position: absolute;
  top: 110px;
  right: 40px;
  padding: 17px 10px;
  border-radius: 5px;
  border: 2px solid #0aee0adc;
  text-align: center;

  @media screen and (max-width: 1024px) {
    top: 150px;
  }

  @media screen and (max-width: 900px) {
    right: -100px;;
    top: 210px;
  }

  @media screen and (max-width: 600px) {
    width: 82%;
    top: 210px;
    right: 30px;;
  }

  @media screen and (max-width: 374px) {
    padding: 5px 10px;
  }
`;

export const SuccessTitle = styled.h3`
  font-size: 30px;
  color: #0aee0adc;
  margin-bottom: 5px;

  @media screen and (max-width: 1024px) {
    font-size: 22px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }

  @media screen and (max-width: 374px) {
    font-size: 20px;
  }
`;

export const CloseSuccess = styled.button`
  position: absolute;
  background-color: transparent;
  top: 2px;
  right: 4px;
  font-size: 17px;
  cursor: pointer;
`;
