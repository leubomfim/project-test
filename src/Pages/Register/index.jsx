import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormModal } from '../../components/FormModal';
import { useInformationContext } from '../../contexts/context';
import * as S from './styles';

export const Register = () => {
  const [nameErrorLength, setNameErrorLength] = useState(null);
  const [passwordErrorLength, setPasswordErrorLength] = useState(null);
  const [errorNotEqual, setErrorNotEqual] = useState(null);
  const [passwordNotEqual, setPasswordNotEqual] = useState(null);
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
      tableInfo: [],
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

    if (
      name.length === 0 ||
      email.length === 0 ||
      confirmEmail.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0 ||
      genre === 'default'
    ) {
      alert('Fill in the fields');
      return;
    } else if (name.length < 3) {
      setNameErrorLength('error');
      return;
    } else if (email !== confirmEmail) {
      setNameErrorLength(null);
      setErrorNotEqual('error');
      return;
    } else if (password.length < 6) {
      setErrorNotEqual(null);
      setNameErrorLength(null);
      setPasswordErrorLength('error');
      return;
    } else if (confirmPassword !== password) {
      setErrorNotEqual(null);
      setPasswordErrorLength(null);
      setNameErrorLength(null);
      setPasswordNotEqual('error');
      return;
    } else if (emailUser.length > 0) {
      const filter = emailUser.filter((el) => {
        return el === email;
      });
      if (filter[0] === email) {
        setPasswordNotEqual(null);
        setErrorNotEqual(null);
        setNameErrorLength(null);
        setErrorNotEqual('error');
      } else {
        saveUser();
        localStorage.setItem('accounts', JSON.stringify(users));
        navigate('/login');
        setName('');
      }
    } else {
      saveUser();
      localStorage.setItem('accounts', JSON.stringify(users));
      navigate('/login');
      setName('');
    }
  };

  return (
    <FormModal text="Register">
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        <S.FormControl>
          <S.Label htmlFor="name">Name</S.Label>
          <S.Input
            error={nameErrorLength}
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Set your name..."
          />
          {nameErrorLength === null && null}
          {nameErrorLength === 'error' && (
            <S.SmallError>Must have 3 or more letters!</S.SmallError>
          )}
        </S.FormControl>
        <S.FormControl>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="email"
            placeholder="Set your email..."
          />
          {errorNotEqual === null && null}
          {errorNotEqual === 'error' && (
            <S.SmallError>Email must match!</S.SmallError>
          )}
        </S.FormControl>
        <S.FormControl>
          <S.Label htmlFor="confirm_email">Confirm your Email</S.Label>
          <S.Input
            onChange={(e) => setConfirmEmail(e.target.value)}
            value={confirmEmail}
            id="confirm_email"
            type="email"
            placeholder="Confirm your email..."
          />
          {errorNotEqual === null && null}
          {errorNotEqual === 'error' && (
            <S.SmallError>Email must match!</S.SmallError>
          )}
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
          {passwordNotEqual === null && null}
          {passwordNotEqual === 'error' && (
            <S.SmallError>Password must match!</S.SmallError>
          )}
          {passwordErrorLength === null && null}
          {passwordErrorLength === 'error' && (
            <S.SmallError>Must have 6 or more letters!</S.SmallError>
          )}
        </S.FormControl>
        <S.FormControl>
          <S.Label htmlFor="confirm_password">Confirm your Password</S.Label>
          <S.Input
            id="confirm_password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            placeholder="Confirm your password..."
          />
          {passwordNotEqual === null && null}
          {passwordNotEqual === 'error' && (
            <S.SmallError>Password must match!</S.SmallError>
          )}
        </S.FormControl>
        <S.FormControl>
          <S.Label htmlFor="genre">Select your gender</S.Label>
          <S.Select
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
        <S.Button type="submit">Register</S.Button>
        <Link to="/login">Already have an account?</Link>
      </S.Form>
    </FormModal>
  );
};
