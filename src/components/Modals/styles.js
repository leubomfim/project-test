import styled from 'styled-components';

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  background: rgba(46, 46, 46, 0.623);
  z-index: 50;
  filter: none;
  overflow: hidden;
`;

export const Modal = styled.div`
  position: relative;
  z-index: 60;
  max-width: 500px;
  width: 100%;

  @media (max-width: 600px) {
    width: 90%;
      align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderModal = styled.div`
  background-color: #7FC047;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  align-items: center;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ModalTitle = styled.h2`
  color: white;
  font-size: 28px;

  @media (max-width: 400px) {
    font-size: 23px;
  }

  @media (max-width: 374px) {
    font-size: 21px;
  }
`;

export const ModalDeleteTitle = styled.h2`
  color: black;
  margin-bottom: 15px;
  font-size: 23px;

  @media (max-width: 374px) {
    font-size: 21px;
  }
`;

export const CloseModal = styled.button`
  font-size: 22px;
  color: white;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`;

export const DeleteButtonsBox = styled.div`
  text-align: center;
  max-width: 300px;
  width: 100%;
  background: white;
  padding: 10px;
  color: black;
  border-radius: 10px;

  & div {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;

export const DeleteButtons = styled.button`
  font-size: 22px;
  color: black;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 10px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #55555534;
  }
`;

export const ModalForm = styled.form`
  position: relative;
  width: 100%;
  padding: 20px 20px 65px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const InputControl = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
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

export const ModalButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 5px 40px;
  border-radius: 5px;
  background-color: #7FC047;
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

export const ErrorBox = styled.div`
  background-color: #fda9a87c;
  position: absolute;
  top: 110px;
  right: 40px;
  padding: 17px 10px;
  border-radius: 5px;
  border: 2px solid red;
  width: 450px;

  @media screen and (max-width: 600px) {
    width: 82%;
    top: 80px;
  }
`;

export const ErrorTitle = styled.h3`
  font-size: 30px;
  color: red;
  margin-bottom: 5px;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CloseError = styled.button`
  position: absolute;
  background-color: transparent;
  top: 5px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
`;
