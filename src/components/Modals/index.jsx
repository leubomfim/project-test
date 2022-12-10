import * as S from './styles';
import P from 'prop-types';
import { AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai';
import { Input } from '../Input/index';
import { useInformationContext } from '../../contexts/context';
import { useState } from 'react';

export const Modals = ({
  openModal,
  openEditModal,
  handleCloseModal,
  editArea,
}) => {
  const {
    users,
    logged,
    area,
    setArea,
    year,
    setYear,
    month,
    setMonth,
    editId,
    setEditId,
    setName,
    name,
    day,
    setDay,
    resetPage,
    setResetPage,
    actualYear,
    deleteCompletedModal,
    deleteInProgressModal,
    openDeleteModal,
    deleteId,
    deleteArea,
  } = useInformationContext();
  const [error, setError] = useState({});

  const handleEditInformation = (e) => {
    e.preventDefault();

    if (Number(year) < actualYear) {
      setError({
        errorTitle: `The year greater than or equal ${actualYear}!`,
        errorText: `To proceed, check that the year entered is greater than or equal to ${actualYear}`,
      });
      return;
    } else if (month === 'default') {
      setError({
        errorTitle: 'Select a month!',
        errorText: 'To proceed, select any month.',
      });
      return;
    }

    if (editArea === 'Front-end') {
      const filter = logged.frontProjects.filter((el) => {
        return el.id === editId;
      });
      filter[0].name = name;
      filter[0].date = `${year}/${month}/${day}`;
      filter[0].day = day;
      filter[0].year = year;
      filter[0].month = month;
      const userFilter = users.filter((user) => {
        return user.email === logged.email;
      });
      userFilter[0].frontProjects = logged.frontProjects;
    } else if (editArea === 'Back-end') {
      const filter = logged.backProjects.filter((el) => {
        return el.id === editId;
      });
      filter[0].name = name;
      filter[0].date = `${year}/${month}/${day}`;
      filter[0].day = day;
      filter[0].year = year;
      filter[0].month = month;
      const userFilter = users.filter((user) => {
        return user.email === logged.email;
      });
      userFilter[0].backProjects = logged.backProjects;
    } else {
      console.log(editArea);
      const filter = logged.uiDesignProjects.filter((el) => {
        return el.id === editId;
      });
      filter[0].name = name;
      filter[0].date = `${year}/${month}/${day}`;
      filter[0].day = day;
      filter[0].year = year;
      filter[0].month = month;
      const userFilter = users.filter((user) => {
        return user.email === logged.email;
      });
      userFilter[0].uiDesignProjects = logged.uiDesignProjects;
    }

    handleCloseModal();
    setResetPage(!resetPage);
    setMonth('default');
    setEditId('');
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    setResetPage(!resetPage);

    if (Number(year) < 2022) {
      setError({
        errorTitle: `The year must be greater than ${actualYear}`,
        errorText: `To proceed, check that the year entered is greater than the year ${actualYear}.`,
      });
      return;
    } else if (month === 'default') {
      setError({
        errorTitle: 'Select a month!',
        errorText: 'To proceed, select any month.',
      });
      return;
    } else if (area === 'default') {
      setError({
        errorTitle: 'Select an area!',
        errorText: 'To proceed, select an area.',
      });
      return;
    }

    let info = {
      name: name,
      area: '',
      date: `${year}/${month}/${day}`,
      complete: false,
      month: month,
      day: day,
      year: year,
      id: Date.now(),
    };

    const filter = users.filter((el) => {
      return el.email === logged.email;
    });

    if (area === 'front') {
      info.area = 'Front-end';
      logged.frontProjects.push(info);
      filter[0].frontProjects = logged.frontProjects;
    } else if (area === 'back') {
      info.area = 'Back-end';
      logged.backProjects.push(info);
      filter[0].backProjects = logged.backProjects;
    } else {
      info.area = 'Ui Design';
      logged.uiDesignProjects.push(info);
      filter[0].uiDesignProjects = logged.uiDesignProjects;
    }

    handleCloseModal();
  };

  const deleteCompletedProject = () => {
    setResetPage(!resetPage);

    const filter = logged.completed.filter((el) => {
      return el.id !== deleteId;
    });

    logged.completed = filter;
  };

  const handleDeleteCompleted = () => {
    setResetPage(!resetPage);

    const filter = logged.inProgress.filter((el) => {
      return el.id !== deleteId;
    });

    logged.inProgress = filter;
  };

  const handleDeleteInfo = () => {
    setResetPage(!resetPage);

    if (deleteArea === 'Front-end') {
      const filterFront = logged.frontProjects.filter((el) => {
        return el.id !== deleteId;
      });
      const filter = users.filter((el) => {
        return el.email === logged.email;
      });

      logged.frontProjects = filterFront;
      filter[0].frontProjects = filterFront;
    } else if (deleteArea === 'Back-end') {
      const filterBack = logged.backProjects.filter((el) => {
        return el.id !== deleteId;
      });
      const filter = users.filter((el) => {
        return el.email === logged.email;
      });

      logged.backProjects = filterBack;
      filter[0].backProjects = filterBack;
    } else {
      const filterUi = logged.uiDesignProjects.filter((el) => {
        return el.id !== deleteId;
      });
      const filter = users.filter((el) => {
        return el.email === logged.email;
      });

      logged.uiDesignProjects = filterUi;
      filter[0].uiDesignProjects = filterUi;
    }
  };

  return (
    <>
      {openDeleteModal && (
        <S.BackgroundModal>
          <S.DeleteButtonsBox>
            <S.ModalDeleteTitle>Are you sure?</S.ModalDeleteTitle>
            <div>
              <S.DeleteButtons
                onClick={() => {
                  handleDeleteInfo();
                  handleCloseModal();
                }}
              >
                Confirm
              </S.DeleteButtons>
              <S.DeleteButtons
                onClick={() => {
                  handleCloseModal();
                }}
              >
                Cancel
              </S.DeleteButtons>
            </div>
          </S.DeleteButtonsBox>
        </S.BackgroundModal>
      )}
      {deleteCompletedModal && (
        <S.BackgroundModal>
          <S.DeleteButtonsBox>
            <S.ModalDeleteTitle>Are you sure?</S.ModalDeleteTitle>
            <div>
              <S.DeleteButtons
                onClick={() => {
                  deleteCompletedProject();
                  handleCloseModal();
                }}
              >
                Confirm
              </S.DeleteButtons>
              <S.DeleteButtons
                onClick={() => {
                  handleCloseModal();
                }}
              >
                Cancel
              </S.DeleteButtons>
            </div>
          </S.DeleteButtonsBox>
        </S.BackgroundModal>
      )}
      {deleteInProgressModal && (
        <S.BackgroundModal>
          <S.DeleteButtonsBox>
            <S.ModalDeleteTitle>Are you sure?</S.ModalDeleteTitle>
            <div>
              <S.DeleteButtons
                onClick={() => {
                  handleDeleteCompleted();
                  handleCloseModal();
                }}
              >
                Confirm
              </S.DeleteButtons>
              <S.DeleteButtons
                onClick={() => {
                  handleCloseModal();
                }}
              >
                Cancel
              </S.DeleteButtons>
            </div>
          </S.DeleteButtonsBox>
        </S.BackgroundModal>
      )}
      {openModal && (
        <S.BackgroundModal>
          {Object.values(error).length > 0 && (
            <S.ErrorBox>
              <S.CloseError onClick={() => setError({})}>X</S.CloseError>
              <S.ErrorTitle>{error.errorTitle}</S.ErrorTitle>
              <S.ErrorText>{error.errorText}</S.ErrorText>
            </S.ErrorBox>
          )}
          <S.Modal>
            <S.HeaderModal>
              <S.ModalTitle>Register project</S.ModalTitle>
              <S.CloseModal
                onClick={() => {
                  setError({});
                  handleCloseModal();
                }}
              >
                <AiOutlineClose />
              </S.CloseModal>
            </S.HeaderModal>
            <S.ModalForm onSubmit={(e) => handleAddProject(e)}>
              <Input
                required={true}
                id="name"
                value={name}
                handleChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />

              <S.InputControl>
                <S.Input
                  maxLength={2}
                  type="text"
                  value={day}
                  required={true}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="Day"
                  id="date"
                />
                <S.Select
                  required
                  onChange={(e) => setMonth(e.target.value)}
                  defaultValue={month}
                >
                  <S.Option disabled value="default">
                    Month
                  </S.Option>
                  <S.Option value="01">January</S.Option>
                  <S.Option value="02">February </S.Option>
                  <S.Option value="03">March</S.Option>
                  <S.Option value="04">April</S.Option>
                  <S.Option value="05">May</S.Option>
                  <S.Option value="06">June</S.Option>
                  <S.Option value="07">July</S.Option>
                  <S.Option value="08">August</S.Option>
                  <S.Option value="09">September</S.Option>
                  <S.Option value="10">October</S.Option>
                  <S.Option value="11">November</S.Option>
                  <S.Option value="12">December</S.Option>
                </S.Select>
                <S.Input
                  maxLength={4}
                  type="text"
                  value={year}
                  required={true}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder={`Year (> ${actualYear})`}
                  id="date"
                />
              </S.InputControl>

              <S.Select
                required
                onChange={(e) => setArea(e.target.value)}
                defaultValue={area}
              >
                <S.Option disabled value="default">
                  Select project area!
                </S.Option>
                <S.Option value="front">Front-end</S.Option>
                <S.Option value="back">Back-end</S.Option>
                <S.Option value="ui">Ui design</S.Option>
              </S.Select>

              <S.ModalButton type="submit">
                <AiOutlineArrowRight />
              </S.ModalButton>
            </S.ModalForm>
          </S.Modal>
        </S.BackgroundModal>
      )}
      {openEditModal && (
        <S.BackgroundModal>
          {Object.values(error).length > 0 && (
            <S.ErrorBox>
              <S.CloseError onClick={() => setError({})}>X</S.CloseError>
              <S.ErrorTitle>{error.errorTitle}</S.ErrorTitle>
              <S.ErrorText>{error.errorText}</S.ErrorText>
            </S.ErrorBox>
          )}
          <S.Modal>
            <S.HeaderModal>
              <S.ModalTitle>Edit information</S.ModalTitle>
              <S.CloseModal
                onClick={() => {
                  setError({});
                  handleCloseModal();
                }}
              >
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

              <S.InputControl>
                <S.Input
                  maxLength={2}
                  type="text"
                  value={day}
                  required={true}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="Day"
                  id="date"
                />
                <S.Select
                  required
                  onChange={(e) => setMonth(e.target.value)}
                  defaultValue={month}
                >
                  <S.Option disabled value="default">
                    Month
                  </S.Option>
                  <S.Option value="01">January</S.Option>
                  <S.Option value="02">February </S.Option>
                  <S.Option value="03">March</S.Option>
                  <S.Option value="04">April</S.Option>
                  <S.Option value="05">May</S.Option>
                  <S.Option value="06">June</S.Option>
                  <S.Option value="07">July</S.Option>
                  <S.Option value="08">August</S.Option>
                  <S.Option value="09">September</S.Option>
                  <S.Option value="10">October</S.Option>
                  <S.Option value="11">November</S.Option>
                  <S.Option value="12">December</S.Option>
                </S.Select>
                <S.Input
                  maxLength={4}
                  type="text"
                  value={year}
                  required={true}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder={`Year (> ${actualYear})`}
                  id="date"
                />
              </S.InputControl>

              <S.ModalButton type="submit">
                <AiOutlineArrowRight />
              </S.ModalButton>
            </S.ModalForm>
          </S.Modal>
        </S.BackgroundModal>
      )}
    </>
  );
};

Modals.propTypes = {
  openModal: P.bool.isRequired,
  openEditModal: P.bool.isRequired,
  handleCloseModal: P.func.isRequired,
  editArea: P.string.isRequired,
};
