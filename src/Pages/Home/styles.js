import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 50px;
`;

export const AddArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const AddedDetails = styled.h2`
  font-size: 28px;

  @media (max-width: 374px) {
    font-size: 22px;
  }
`;

export const AddButton = styled.button`
  padding: 5px 30px;
  background-color: #7FC047;
  color: white;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
`;

export const TableWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 39px;
  text-align: center;

  & thead {
    background-color:#7FC047 ;
    color: white;
  }

  & tbody tr td{
    white-space: nowrap;
  }

  & tbody tr{
    transition: all 500ms ease;

    &:hover {
      background-color: rgba(189, 185, 185, 0.466);
    }
  }

  & tbody tr:nth-child(even) {
    background-color: #ddd9d970;

    &:hover {
      background-color: rgba(189, 185, 185, 0.466);
    }
  }

  &, th,td {
    font-size: 20px;
    padding: 15px 10px;
  }
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
  font-size: 30px;
  font-weight: 600;
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
  gap: 20px;

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
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
  background-color: #7FC047;
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;
