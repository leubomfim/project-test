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
