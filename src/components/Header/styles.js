import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid #333;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropMenuArea = styled.div`
  position: relative;
`;

export const DropMenu = styled.div`
  border-radius: 3px;
  padding: 10px 15px 15px 10px;
  position: absolute;
  top: 40px;
  background-color: rgb(25, 118, 210);
  z-index: 10;
`;

export const Button = styled.button`
  background-color: rgb(25, 118, 210);
  color: white;
  font-size: 20px;
  border-radius: 3px;
  padding: 5px 20px;
  cursor: pointer;
`;

export const Name = styled.h3`
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuItem = styled.li`
  & > a {
    color: white;
    font-size: 20px;
    width: 100%;
  }
`;
