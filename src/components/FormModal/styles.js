import styled, { css } from 'styled-components';

export const BackgroundFormModal = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 450px;
  }
`;

export const FormModal = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: white;
  padding: 20px;
`;

export const FormTitle = styled.h2`
  ${({ margin }) => css`
    ${margin && 'margin-top: 100px;'}
  `}
  color: black;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;
