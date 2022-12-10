import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { FormModal } from '../../components/FormModal';
import { Input } from '../../components/Input';
import { useInformationContext } from '../../contexts/context';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import * as S from './styles';

import bg from '../../images/bg2.webp';

export const Register = () => {
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    name,
    setName,
    setEmail,
    users,
    email,
    setPassword,
    password,
    setConfirmPassword,
    setConfirmEmail,
    confirmEmail,
    genre,
    setGenre,
    setUsers,
    confirmPassword,
    navigate,
    logged,
  } = useInformationContext();

  useEffect(() => {
    document.title = 'Register';
    localStorage.setItem('accounts', JSON.stringify(users));
    localStorage.setItem('logged', JSON.stringify(logged));
  }, [users, logged]);

  const saveUser = () => {
    const user = {
      name: name,
      password: password,
      email: email,
      genre: genre,
      id: Date.now(),
      completed: [],
      frontProjects: [],
      backProjects: [],
      uiDesignProjects: [],
      inProgress: [],
    };

    addUser(user);
  };

  const addUser = (user) => {
    const copyUser = [...users, user];
    setUsers(copyUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailUser = [];

    if (users.length > 0) {
      users.forEach((el) => {
        emailUser.push(el.email);
      });
    }

    if (name.length < 3) {
      setError({
        errorTitle: 'Must have 3 or more letters!',
        errorText:
          'Before you can proceed, change the name field so that it has more than 3 letters',
      });
    } else if (genre === 'default') {
      setError({
        errorTitle: 'Select your gender!',
        errorText: 'Select your genre, so you can proceed!',
      });
    } else if (email !== confirmEmail) {
      setError({
        errorTitle: 'The emails match each other!',
        errorText: 'Check the emails to make sure they match, to proceed!',
      });
    } else if (password.length < 6) {
      setError({
        errorTitle: 'Must have 6 or more letters!',
        errorText:
          'So that you can proceed, change the password and confirm the password field so that it has more than 6 letters',
      });
    } else if (confirmPassword !== password) {
      setError({
        errorTitle: 'The passwords match each other!',
        errorText:
          'Check the passwords entered in the areas, if they match each other.',
      });
    } else if (emailUser.length > 0) {
      const filter = emailUser.filter((el) => {
        return el === email;
      });
      if (filter[0] === email) {
        setError({
          errorTitle: 'This user already exists!',
          errorText:
            'This email is probably already registered check if you have already registered with it, if not try to contact us',
        });
      } else {
        saveUser();
        localStorage.setItem('accounts', JSON.stringify(users));
        navigate('/login');
        setName('');
        setConfirmEmail('');
        setConfirmPassword('');
      }
    } else {
      saveUser();
      localStorage.setItem('accounts', JSON.stringify(users));
      navigate('/login');
      setName('');
      setConfirmEmail('');
      setConfirmPassword('');
    }
  };

  return (
    <Background bg={bg}>
      <FormModal margin={true} text="Register">
        {Object.values(error).length === 0 && null}
        {Object.values(error).length > 0 && (
          <S.ErrorBox>
            <S.CloseError onClick={() => setError({})}>X</S.CloseError>
            <S.ErrorTitle>{error.errorTitle}</S.ErrorTitle>
            <S.ErrorText>{error.errorText}</S.ErrorText>
          </S.ErrorBox>
        )}
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <Input
            required={true}
            type="text"
            id="name"
            handleChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
          />

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
            handleChange={(e) => setConfirmEmail(e.target.value)}
            value={confirmEmail}
            id="confirm_email"
            type="email"
            placeholder="Confirm email"
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

          <Input
            required={true}
            id="confirm_password"
            handleChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm password"
          >
            <S.ShowPassword onClick={() => setShowConfirmPassword((s) => !s)}>
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </S.ShowPassword>
          </Input>

          <S.FormControl>
            <S.Select
              required
              id="genre"
              onChange={(e) => setGenre(e.target.value)}
              defaultValue="default"
            >
              <S.Option value={genre} disabled>
                Select your gender!
              </S.Option>
              <S.Option value="man">Man</S.Option>
              <S.Option value="woman">Woman</S.Option>
              <S.Option value="other">Other</S.Option>
            </S.Select>
          </S.FormControl>
          <Button type="submit" text="Register" />
          <Link to="/login">Already have an account?</Link>
        </S.Form>
      </FormModal>
    </Background>
  );
};
