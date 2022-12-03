import styled from 'styled-components';

export const Logo = styled.img`
  position: absolute;
  left: 40px;
  top: 18px;
  width: 150px;
  color: white;

  @media (max-width: 768px) {
    top: 18px;
    width: 200px;
    left: 50%;
    margin-left: -100px;
  }
`;

export const Back = styled.button`
  position: absolute;
  right: 40px;
  top: 40px;
  width: 150px;
  font-size: 20px;
  padding: 8px 0;
  background-color: #7FC047;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  @media (max-width: 768px) {
    top: 150px;
    right: 50%;
    margin-right: -75px;
  }
`;
