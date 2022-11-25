import * as S from './styles';
import { useEffect, useState } from 'react';
import { useInformationContext } from '../../contexts/context';
import { FormModal } from '../../components/FormModal';

export const Login = () => {
  const [counter, setCounter] = useState(5);
  const [errorLength, setErrorLength] = useState(null);
  const [userDontExist, setUserDontExist] = useState(null);
  const {
    users,
    email,
    password,
    setPassword,
    setEmail,
    logged,
    setLogged,
    navigate,
  } = useInformationContext();
  useEffect(() => {
    if (Object.keys(logged).length > 0) {
      const time = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);

      if (counter === 0) {
        clearTimeout(time);
        navigate('/');
      }
    }
  }, [counter, navigate, logged]);

  useEffect(() => {
    setEmail('');
    setPassword('');

    document.title = 'Login';

    localStorage.setItem('accounts', JSON.stringify(users));
    localStorage.setItem('logged', JSON.stringify(logged));
  }, [users, logged, setEmail, setPassword]);

  const handleLogInto = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      alert('Fill in the fields');
      return;
    } else if (password.length < 6) {
      setUserDontExist(null);
      setErrorLength('error');
    } else {
      if (users.length > 0) {
        setErrorLength(null);
        const cu = users.filter((el) => {
          return el.email === email;
        });
        if (cu[0] === undefined) {
          setUserDontExist('error');
        } else if (cu[0].email === email && cu[0].password === password) {
          setLogged(cu[0]);
          navigate('/');
          setEmail('');
          setPassword('');
        } else {
          setUserDontExist('error');
        }
      } else {
        setUserDontExist('error');
      }
    }
  };

  return (
    <>
      {Object.keys(logged).length === 0 && (
        <FormModal text="Login">
          {userDontExist === null && null}
          {userDontExist === 'error' && (
            <S.SmallError>{"This user don't exist!"}</S.SmallError>
          )}
          <S.Form onSubmit={(e) => handleLogInto(e)}>
            <S.FormControl>
              <S.Label htmlFor="email">Email</S.Label>
              <S.Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                type="email"
                placeholder="Set your email..."
              />
            </S.FormControl>
            <S.FormControl>
              <S.Label htmlFor="password">Password</S.Label>
              <S.Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                type="password"
                placeholder="Set your password..."
              />
              {errorLength === null && null}
              {errorLength === 'error' && (
                <S.SmallError>Must have 6 or more letters!</S.SmallError>
              )}
            </S.FormControl>
            <S.Button type="submit">Login</S.Button>
          </S.Form>
        </FormModal>
      )}
      {Object.keys(logged).length > 0 && (
        <S.CentralizeRedirectBox>
          <S.RedirectBox>
            <S.RedirectBoxTitle>Redirecting to home page...</S.RedirectBoxTitle>
            <S.RedirectBoxText>
              You are already logged in, and you will be redirected to the
              homepage! in:
            </S.RedirectBoxText>
            <S.RedirectBoxText>{counter}</S.RedirectBoxText>
            <S.RedirectBoxText>Or</S.RedirectBoxText>
            <S.RedirectButton onClick={() => navigate('/')}>
              click here
            </S.RedirectButton>
          </S.RedirectBox>
        </S.CentralizeRedirectBox>
      )}
    </>
  );
};
