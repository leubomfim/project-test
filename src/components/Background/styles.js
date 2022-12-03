import styled from 'styled-components';

export const DisplayBackgroundAndForm = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
