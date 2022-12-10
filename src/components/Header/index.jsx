import * as S from './styles';
import { Container } from '../Container';
import { Link } from 'react-router-dom';
import { useInformationContext } from '../../contexts/context';
import logo from '../../images/logo.png';
import { FcMenu } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
  const { open, setOpen, logged } = useInformationContext();

  const handleOpenMenu = () => {
    setOpen(true);
    document.querySelector('.header').classList.add('headerFilter');
    document.querySelector('.section').classList.add('sectionFilter');
    document.body.classList.add('bodyOverflow');
  };

  const handleCloseMenu = () => {
    document.querySelector('.header').classList.remove('headerFilter');
    document.querySelector('.section').classList.remove('sectionFilter');
    document.body.classList.remove('bodyOverflow');
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('logged');
    window.onload();
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <>
      <>
        {Object.keys(logged).length > 0 && (
          <S.MenuSideBarBg
            open={open}
            className={open ? 'openMenu' : 'closeMenu'}
          >
            <S.MenuSideBar>
              <S.ButtonClose onClick={handleCloseMenu}>
                <AiOutlineClose />
              </S.ButtonClose>
              <S.Name open={open}>
                {logged.name.length > 15
                  ? logged.name.substring(0, 15) + '...'
                  : logged.name}
              </S.Name>
              <S.MenuList open={open}>
                <S.MenuItem onClick={() => setOpen(false)}>
                  <Link to="/settings">Settings</Link>
                </S.MenuItem>
                <S.MenuItem onClick={() => setOpen(false)}>
                  <Link onClick={(e) => handleLogout(e)} to="/">
                    Logout
                  </Link>
                </S.MenuItem>
              </S.MenuList>
            </S.MenuSideBar>
          </S.MenuSideBarBg>
        )}{' '}
        {Object.keys(logged).length === 0 && (
          <S.MenuSideBarBg
            open={open}
            className={open ? 'openMenu' : 'closeMenu'}
          >
            <S.MenuSideBar>
              <S.ButtonClose onClick={handleCloseMenu}>
                <AiOutlineClose />
              </S.ButtonClose>
              <S.MenuList open={open}>
                <S.MenuItem onClick={() => setOpen(false)}>
                  <Link to="/login">Login</Link>
                </S.MenuItem>
                <S.MenuItem onClick={() => setOpen(false)}>
                  <Link to="/register">Register</Link>
                </S.MenuItem>
              </S.MenuList>
            </S.MenuSideBar>
          </S.MenuSideBarBg>
        )}
      </>

      <S.Header className="header">
        <Container>
          <S.HeaderWrapper>
            <S.Logo src={logo} />
            <S.Button onClick={handleOpenMenu}>
              <FcMenu />
            </S.Button>
          </S.HeaderWrapper>
        </Container>
      </S.Header>
    </>
  );
};
