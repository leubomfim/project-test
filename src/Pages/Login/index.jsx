import * as S from './styles';
import { useEffect, useState } from 'react';
import { useInformationContext } from '../../contexts/context';
import { FormModal } from '../../components/FormModal';
import { Link } from 'react-router-dom';
import { Background } from '../../components/Background';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import bg from '../../images/bg.png';

export const Login = () => {
  const [error, setError] = useState({});
  const [counter, setCounter] = useState(5);
  const [showPassword, setShowPassword] = useState(false);

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

    if (password.length < 6) {
      setError({
        errorTitle: 'Must have 6 or more letters!',
        errorText:
          'So that you can proceed, change the password and confirm the password field so that it has more than 6 letters',
      });
    } else {
      if (users.length > 0) {
        const cu = users.filter((el) => {
          return el.email === email;
        });
        if (cu[0] === undefined) {
          setError({
            errorTitle: "This user don't exist!",
            errorText:
              'Please check the completed fields as this account was not found in the account records.',
          });
        } else if (cu[0].email === email && cu[0].password === password) {
          setLogged(cu[0]);
          navigate('/');
          setEmail('');
          setPassword('');
        } else {
          setError({
            errorTitle: "This user don't exist!",
            errorText:
              'Please check the completed fields as this account was not found in the account records.',
          });
        }
      } else {
        setError({
          errorTitle: "This user don't exist!",
          errorText:
            'Please check the completed fields as this account was not found in the account records.',
        });
      }
    }
  };

  return (
    <>
      {Object.keys(logged).length === 0 && (
        <Background bg={bg}>
          <FormModal margin={false} text="Login">
            {Object.values(error).length === 0 && null}
            {Object.values(error).length > 0 && (
              <S.ErrorBox>
                <S.CloseError onClick={() => setError({})}>X</S.CloseError>
                <S.ErrorTitle>{error.errorTitle}</S.ErrorTitle>
                <S.ErrorText>{error.errorText}</S.ErrorText>
              </S.ErrorBox>
            )}
            <S.Form onSubmit={(e) => handleLogInto(e)}>
              <Input
                required={true}
                handleChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                type="email"
                placeholder="Email"
              />

              <Input
                required={true}
                handleChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              >
                <S.ShowPassword onClick={() => setShowPassword((s) => !s)}>
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </S.ShowPassword>
              </Input>

              <Button type="submit" text="Sing In" />
              <S.CreateAccount>
                Create Account? <Link to="/register">Click here</Link>
              </S.CreateAccount>
            </S.Form>
          </FormModal>
        </Background>
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
