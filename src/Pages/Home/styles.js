import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 50px;
`;

export const AddArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  padding: 5px 30px;
  background-color: rgb(25, 118, 210);
  color: white;
  border-radius: 3px;
  font-size: 20px;
  cursor: pointer;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 39px;
  text-align: center;
  border-radius: 3px;

  &, th,td {
    border: 1px solid #333;
    padding: 10px;
  }
`;

export const NoLogBox = styled.div`
  background-color: #fda9a87c;
  width: 100%;
  border: 1px solid red;
  border-radius: 3px;
  padding: 20px 0;
`;

export const NoLogAccount = styled.p`
  text-align: center;
  font-size: 22px;
  color: red;
`;

export const NoItems = styled.p`
  text-align: center;
  font-size: 22px;
  margin-top: 20px;
`;

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(46, 46, 46, 0.623);
  z-index: 50;
  filter: none;
  overflow: hidden;
  transition: all 0.3s linear;
`;

export const Modal = styled.div`
  position: relative;
  z-index: 60;
  max-width: 500px;
  width: 100%;
`;

export const HeaderModal = styled.div`
  background-color: rgb(25, 118, 210);
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ModalTitle = styled.h2`
  color: white;
  font-size: 28px;
`;

export const CloseModal = styled.button`
  font-size: 22px;
  color: red;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

export const ModalForm = styled.form`
  position: relative;
  width: 100%;
  padding: 20px 20px 65px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 15px;
`;

export const ModalFormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ModalLabel = styled.label`

`;

export const ModalInput = styled.input`
  border: 1px solid black;
  width: 100%;
  padding: 7px 10px;
  font-size: 18px;
`;

export const ModalButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 5px 40px;
  border-radius: 5px;
  background-color: rgb(25, 118, 210);
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

export const ActionsArea = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  & > button {
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  color: rgb(247, 62, 62);
`;

export const EditButton = styled.button`
  color: #0fb90fdc;
`;
