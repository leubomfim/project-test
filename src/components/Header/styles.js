import styled from 'styled-components';

export const Header = styled.header`
  padding: 5px 0;
  border-bottom: 1px solid #333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  background-color: white;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 75px;
`;

export const MenuSideBarBg = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
  background-color: rgba(46,46,46,0.623);
`;

export const MenuSideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  position: absolute;
  background-color: #7FC047;
  z-index: 10;
  right: 0;
  width: 80%;
  height: 100%;
  max-width: 400px;
  text-align: center;
  top: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 35px;
  cursor: pointer;
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: white;
  font-size: 35px;
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 30px;
`;

export const Name = styled.h3`
  font-size: 28px;
  color: white;
  margin-bottom: 20px;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MenuItem = styled.li`
  & > a {
    color: white;
    font-size: 25px;
    width: 100%;
  }
`;
