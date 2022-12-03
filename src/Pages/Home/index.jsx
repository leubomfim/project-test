import { useEffect, useState } from 'react';

import * as S from './styles';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { useInformationContext } from '../../contexts/context';

import {
  AiFillEdit,
  AiOutlineClose,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { Input } from '../../components/Input';

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
    document.title = `Home`;
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

    filter[0].tableInfo = logged.tableInfo;
    handleCloseModal();
  };

  const handleEditCrud = (id) => {
    setOpenEditModal(true);
    setEditId(id);
    const filter = logged.tableInfo.filter((el) => {
      return el.id === id;
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
    filter[0].phone = phone;
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
              <Input
                required={true}
                id="name"
                value={name}
                handleChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />

              <Input
                required={true}
                value={email}
                id="email"
                handleChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />

              <Input
                required={true}
                id="address"
                value={address}
                type="text"
                handleChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />

              <Input
                type="tel"
                value={phone}
                required={true}
                handleChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                id="phone"
              />

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
              <Input
                required={true}
                id="name"
                value={name}
                handleChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />

              <Input
                required={true}
                value={email}
                id="email"
                handleChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />

              <Input
                required={true}
                id="address"
                value={address}
                type="text"
                handleChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />

              <Input
                type="tel"
                value={phone}
                required={true}
                handleChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Ex: (17) 99999-9999"
                id="phone"
              />

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
                <S.AddedDetails>
                  Details: {logged.tableInfo.length} added details
                </S.AddedDetails>
                <S.AddButton
                  onClick={() => {
                    setOpen(false);
                    handleOpenModal();
                  }}
                >
                  Add details
                </S.AddButton>
              </S.AddArea>

              <S.TableWrapper>
                {logged.tableInfo.length > 0 && (
                  <S.Table scope="row">
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
                      {logged.tableInfo.map((el) => (
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
                                onClick={() => {
                                  handleEditCrud(el.id);
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
                )}
              </S.TableWrapper>
              {logged.tableInfo.length === 0 && (
                <div>
                  <S.NoItems>No details added!</S.NoItems>
                </div>
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
