import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { useInformationContext } from '../../contexts/context';
import * as S from './styles';
import {
  AiFillEdit,
  AiOutlineClose,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

export const Home = () => {
  const { users, logged, setOpen } = useInformationContext();
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [editId, setEditId] = useState('');
  const [resetPage, setResetPage] = useState(false);
  const length = logged.tableInfo ? logged.tableInfo.length : null;

  useEffect(() => {
    setOpen(false);
    localStorage.setItem('accounts', JSON.stringify(users));
    localStorage.setItem('logged', JSON.stringify(logged));
  }, [users, logged, setOpen, length, openEditModal, resetPage]);

  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenEditModal(false);
    setEmail('');
    setName('');
    setPhone('');
    setAddress('');
    document.querySelector('.header').style.filter = 'none';
    document.querySelector('.section').style.filter = 'none';
  };

  const handleOpenModal = () => {
    document.querySelector('.header').style.filter = 'blur(2px)';
    document.querySelector('.section').style.filter = 'blur(2px)';
    setOpenModal(true);
  };

  const handleAddInformation = (e) => {
    e.preventDefault();

    const info = {
      name: name,
      email: email,
      address: address,
      phone: phone,
      id: Date.now(),
    };

    logged.tableInfo.push(info);
    const filter = users.filter((el) => {
      return el.email === logged.email;
    });

    filter[0] = logged;
    handleCloseModal();
  };

  const handleEditCrud = (e) => {
    setOpenEditModal(true);
    setEditId(Number(e.target.id));
    const filter = logged.tableInfo.filter((el) => {
      return el.id === Number(e.target.id);
    });
    if (filter[0] === undefined) {
      return;
    }
    setName(filter[0].name);
    setPhone(filter[0].phone);
    setEmail(filter[0].email);
    setAddress(filter[0].address);
    document.querySelector('.header').style.filter = 'blur(2px)';
    document.querySelector('.section').style.filter = 'blur(2px)';
  };

  const handleEditInformation = (e) => {
    e.preventDefault();

    const filter = logged.tableInfo.filter((el) => {
      return el.id === editId;
    });
    if (filter[0] === undefined) {
      return;
    }
    filter[0].name = name;
    filter[0].email = email;
    filter[0].phone = name;
    filter[0].address = address;

    document.querySelector('.header').style.filter = 'none';
    document.querySelector('.section').style.filter = 'none';
    setOpenEditModal(false);
    setEmail('');
    setName('');
    setPhone('');
    setAddress('');
  };

  const handleDeleteInfo = (id) => {
    setResetPage(!resetPage);
    const filterTable = logged.tableInfo.filter((el) => {
      return el.id !== id;
    });
    const filter = users.filter((el) => {
      return el.email === logged.email;
    });
    logged.tableInfo = filterTable;
    filter[0].tableInfo = filterTable;
  };

  return (
    <>
      {openModal && (
        <S.BackgroundModal>
          <S.Modal>
            <S.HeaderModal>
              <S.ModalTitle>Register information</S.ModalTitle>
              <S.CloseModal onClick={() => handleCloseModal()}>
                <AiOutlineClose />
              </S.CloseModal>
            </S.HeaderModal>
            <S.ModalForm onSubmit={(e) => handleAddInformation(e)}>
              <S.ModalFormControl>
                <S.ModalLabel htmlFor="name">Name</S.ModalLabel>
                <S.ModalInput
                  required
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Insert a name..."
                />
              </S.ModalFormControl>
              <S.ModalFormControl>
                <S.ModalLabel htmlFor="email">Email</S.ModalLabel>
                <S.ModalInput
                  required
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Insert a email..."
                />
              </S.ModalFormControl>
              <S.ModalFormControl>
                <S.ModalLabel htmlFor="address">Address</S.ModalLabel>
                <S.ModalInput
                  required
                  id="address"
                  value={address}
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Insert a address..."
                />
              </S.ModalFormControl>
              <S.ModalFormControl>
                <S.ModalLabel htmlFor="phone">Phone</S.ModalLabel>
                <S.ModalInput
                  type="tel"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: (17) 99999-9999"
                  id="phone"
                />
              </S.ModalFormControl>
              <S.ModalButton type="submit">
                <AiOutlineArrowRight />
              </S.ModalButton>
            </S.ModalForm>
          </S.Modal>
        </S.BackgroundModal>
      )}
      {openEditModal && (
        <S.BackgroundModal>
          <S.Modal>
            <S.HeaderModal>
              <S.ModalTitle>Edit information</S.ModalTitle>
              <S.CloseModal onClick={() => handleCloseModal()}>
                <AiOutlineClose />
              </S.CloseModal>
            </S.HeaderModal>
            <S.ModalForm onSubmit={(e) => handleEditInformation(e)}>
              <S.ModalFormControl>
                <S.ModalLabel htmlFor="name">Name</S.ModalLabel>
                <S.ModalInput
                  required
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Insert a name..."
                />
              </S.ModalFormControl>
              <S.ModalFormControl>
                <S.ModalLabel htmlFor="email">Email</S.ModalLabel>
                <S.ModalInput
                  required
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Insert a email..."
                />
              </S.ModalFormControl>
              <S.ModalFormControl>
                <S.ModalLabel htmlFor="address">Address</S.ModalLabel>
                <S.ModalInput
                  required
                  id="address"
                  value={address}
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Insert a address..."
                />
              </S.ModalFormControl>
              <S.ModalFormControl>
                <S.ModalLabel htmlFor="phone">Phone</S.ModalLabel>
                <S.ModalInput
                  type="tel"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: (17) 99999-9999"
                  id="phone"
                />
              </S.ModalFormControl>
              <S.ModalButton type="submit">
                <AiOutlineArrowRight />
              </S.ModalButton>
            </S.ModalForm>
          </S.Modal>
        </S.BackgroundModal>
      )}
      <Header />
      <S.Section className="section">
        <Container>
          {Object.keys(logged).length > 0 && (
            <>
              <S.AddArea>
                <h2>Details: {logged.tableInfo.length} added details</h2>
                <S.AddButton
                  onClick={() => {
                    handleOpenModal();
                  }}
                >
                  Add details
                </S.AddButton>
              </S.AddArea>

              <S.Table>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {logged.tableInfo.length > 0 &&
                    logged.tableInfo.map((el) => (
                      <tr id={el.id} key={el.id}>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.address}</td>
                        <td>{el.phone}</td>
                        <td>
                          <S.ActionsArea>
                            <S.DeleteButton
                              id={el.id}
                              onClick={() => {
                                handleDeleteInfo(el.id);
                              }}
                            >
                              <BsFillTrashFill id={el.id} />
                            </S.DeleteButton>
                            <S.EditButton
                              id={el.id}
                              onClick={(e) => {
                                handleEditCrud(e);
                              }}
                            >
                              <AiFillEdit id={el.id} />
                            </S.EditButton>
                          </S.ActionsArea>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </S.Table>
              {logged.tableInfo.length === 0 && (
                <S.NoItems>No informations!</S.NoItems>
              )}
            </>
          )}
          {Object.keys(logged).length === 0 && (
            <S.NoLogBox>
              <S.NoLogAccount>
                Log in to an account to access this area.
              </S.NoLogAccount>
            </S.NoLogBox>
          )}
        </Container>
      </S.Section>
    </>
  );
};
