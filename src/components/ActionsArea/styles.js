import styled, { css } from 'styled-components';

export const Menu = styled.button`
  font-size: 35px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 20px;
  cursor: pointer;
`;

export const ActionsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  align-items: flex-start;
  bottom: 38px;
  right: 20px;
  overflow: hidden;
  background: white;
  border-radius: 10px;
  z-index: 3;
  overflow: hidden;

  & > button {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 27px;
    background-color: transparent;
    cursor: pointer;
  };

  & button:hover {
    text-decoration: underline;
  }
`;

export const DeleteButton = styled.button`
  & svg {
    color: rgb(247, 62, 62);
  };
`;

export const EditButton = styled.button`
  & svg {
    color: #B237DE;
  };
`;

export const CompleteButton = styled.button`
  ${({ not }) => css`
    & svg {
      ${not ? 'color: orange;' : 'color: #66F549;'}
  } ;
  `}
`;

export const Text = styled.p`
  font-size: 20px;
  white-space: nowrap;
`;

export const SetInProgressButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    color: #E04135;
    width: 27px;
  };
`;
