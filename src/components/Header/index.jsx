import * as S from './styles';
import { Container } from '../Container';
import { Link } from 'react-router-dom';
import { useInformationContext } from '../../contexts/context';

export const Header = () => {
  const { open, setOpen, logged } = useInformationContext();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem('logged');
    window.onload();
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <S.Header className="header">
      <Container>
        <S.HeaderWrapper>
          <h1>Database</h1>
          <S.DropMenuArea>
            <S.Button onClick={handleToggle}>Menu</S.Button>
            {open ? (
              <>
                {Object.keys(logged).length > 0 && (
                  <S.DropMenu>
                    <S.Name>{logged.name}</S.Name>
                    <S.MenuList>
                      <S.MenuItem>
                        <Link to="/settings">Settings</Link>
                      </S.MenuItem>
                      <S.MenuItem>
                        <Link onClick={(e) => handleLogout(e)} to="/">
                          Logout
                        </Link>
                      </S.MenuItem>
                    </S.MenuList>
                  </S.DropMenu>
                )}{' '}
                {Object.keys(logged).length === 0 && (
                  <S.DropMenu>
                    <S.MenuList>
                      <S.MenuItem>
                        <Link to="/login">Login</Link>
                      </S.MenuItem>
                      <S.MenuItem>
                        <Link to="/register">Register</Link>
                      </S.MenuItem>
                    </S.MenuList>
                  </S.DropMenu>
                )}
              </>
            ) : null}
          </S.DropMenuArea>
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
};
