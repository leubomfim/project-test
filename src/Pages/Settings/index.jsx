import * as S from './styles';

import { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import { FormModal } from '../../components/FormModal';
import { useInformationContext } from '../../contexts/context';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import bg from '../../images/bg3.jpg';

export const Settings = () => {
  const { logged, users, navigate } = useInformationContext();
  const [attPage, setAttPage] = useState(false);
  const [name, setName] = useState(logged.name);
  const [email, setEmail] = useState(logged.email);
  const [password, setPassword] = useState(logged.password);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(users));
    localStorage.setItem('logged', JSON.stringify(logged));
    document.title = 'Settings';

    window.addEventListener('load', () => {
      if (Object.values(logged).length === 0) {
        navigate('/');
      }
    });

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, [attPage, navigate, logged, users]);

  const handleChangeAccount = (e) => {
    setAttPage(!attPage);
    e.preventDefault();
    const filter = users.filter((el) => {
      return el.email === logged.email;
    });
    console.log(filter[0]);
    logged.name = name;
    logged.email = email;
    logged.password = password;

    filter[0].email = email;
    filter[0].name = name;
    filter[0].password = password;
  };

  return (
    <Background bg={bg}>
      <FormModal margin={false} text="Settings">
        <S.Form onSubmit={(e) => handleChangeAccount(e)}>
          <Input
            placeholder="Name"
            value={name}
            id="name"
            type="text"
            handleChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            id="email"
            type="text"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            id="password"
            type={showPassword ? 'text' : 'password'}
            handleChange={(e) => setPassword(e.target.value)}
          >
            <S.ShowPassword onClick={() => setShowPassword((s) => !s)}>
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </S.ShowPassword>
          </Input>
          <Button type="submit" text="Confirm" />
        </S.Form>
      </FormModal>
    </Background>
  );
};
