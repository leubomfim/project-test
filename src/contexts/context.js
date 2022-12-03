import { createContext, useContext, useState } from 'react';
import P from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const getStorageAccount = JSON.parse(localStorage.getItem('accounts'));
  const getStorageLogged = JSON.parse(localStorage.getItem('logged'));
  const [open, setOpen] = useState(null);
  const [users, setUsers] = useState(getStorageAccount || []);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('default');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [logged, setLogged] = useState(getStorageLogged || {});

  const userObject = {
    open,
    setOpen,
    name,
    setName,
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    users,
    setUsers,
    age,
    setAge,
    genre,
    navigate,
    setGenre,
    logged,
    setLogged,
  };

  return (
    <userContext.Provider value={userObject}>{children}</userContext.Provider>
  );
};

export const useInformationContext = () => {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error(
      'useCheckoutContext must be used within a CheckoutProvider',
    );
  }
  return context;
};

UserProvider.propTypes = {
  children: P.node.isRequired,
};
