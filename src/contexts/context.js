import { createContext, useContext, useEffect, useState } from 'react';
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
  const [area, setArea] = useState('default');
  const [month, setMonth] = useState('default');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');
  const [editId, setEditId] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [deleteArea, setDeleteArea] = useState('');
  const [resetPage, setResetPage] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteInProgressModal, setDeleteInProgressModal] = useState(false);
  const [deleteCompletedModal, setDeleteCompletedModal] = useState(false);
  const date = new Date();
  const actualYear = date.getFullYear();
  const [logged, setLogged] = useState(getStorageLogged || {});
  const [width, setWidth] = useState(window.innerWidth);

  const detectSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  const userObject = {
    width,
    openDeleteModal,
    setOpenDeleteModal,
    deleteInProgressModal,
    setDeleteInProgressModal,
    deleteCompletedModal,
    setDeleteCompletedModal,
    actualYear,
    resetPage,
    setResetPage,
    setDeleteArea,
    setDeleteId,
    deleteId,
    deleteArea,
    area,
    editId,
    setEditId,
    setArea,
    year,
    setYear,
    month,
    day,
    setDay,
    setMonth,
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
