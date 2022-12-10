import { useEffect, useState } from 'react';
import * as S from './styles';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { SwiperComponent } from '../../components/Swiper';

import { useInformationContext } from '../../contexts/context';

import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ActionsArea } from '../../components/ActionsArea';
import { Modals } from '../../components/Modals';

export const Home = () => {
  const {
    users,
    logged,
    setOpen,
    setArea,
    setYear,
    setMonth,
    setName,
    setEditId,
    setDay,
    resetPage,
    setResetPage,
    openDeleteModal,
    setOpenDeleteModal,
    setDeleteInProgressModal,
    setDeleteCompletedModal,
  } = useInformationContext();
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editArea, setEditArea] = useState('');

  useEffect(() => {
    document.title = `Home`;
    setName('');
    setOpen(false);
    setArea('default');
    setMonth('default');
    setYear('');
    setEditId('');
    setResetPage(false);
  }, [setOpen, setMonth, setArea, setYear, setName, setEditId, setResetPage]);

  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(users));
    localStorage.setItem('logged', JSON.stringify(logged));
  }, [users, logged, openEditModal, resetPage]);

  const handleOpenModal = () => {
    document.querySelector('.header').classList.add('headerFilter');
    document.querySelector('.section').classList.add('sectionFilter');
    document.body.classList.add('bodyOverflow');
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenEditModal(false);
    setOpenDeleteModal(false);
    setDeleteCompletedModal(false);
    setDeleteInProgressModal(false);
    setArea('default');
    setMonth('default');
    setName('');
    setYear('');
    setDay('');
    document.querySelector('.header').classList.remove('headerFilter');
    document.querySelector('.section').classList.remove('sectionFilter');
    document.body.classList.remove('bodyOverflow');
  };

  const handleEditCrud = (id, area) => {
    setOpenEditModal(true);
    setEditId(id);
    setEditArea(area);

    if (area === 'Front-end') {
      const filter = logged.frontProjects.filter((el) => {
        return el.id === id;
      });
      if (filter[0] === undefined) {
        return;
      }
      setName(filter[0].name);
      setMonth(filter[0].month);
      setYear(filter[0].year);
      setDay(filter[0].day);
    } else if (area === 'Back-end') {
      const filter = logged.backProjects.filter((el) => {
        return el.id === id;
      });
      if (filter[0] === undefined) {
        return;
      }
      setName(filter[0].name);
      setMonth(filter[0].month);
      setYear(filter[0].year);
      setDay(filter[0].day);
    } else {
      const filter = logged.uiDesignProjects.filter((el) => {
        return el.id === id;
      });
      if (filter[0] === undefined) {
        return;
      }
      setName(filter[0].name);
      setMonth(filter[0].month);
      setYear(filter[0].year);
      setDay(filter[0].day);
    }

    document.querySelector('.header').classList.add('headerFilter');
    document.querySelector('.section').classList.add('sectionFilter');
    document.body.classList.add('bodyOverflow');
  };

  const handleDeleteInfo = (id, area) => {
    setResetPage(!resetPage);

    if (area === 'Front-end') {
      const filterFront = logged.frontProjects.filter((el) => {
        return el.id !== id;
      });
      const filter = users.filter((el) => {
        return el.email === logged.email;
      });

      logged.frontProjects = filterFront;
      filter[0].frontProjects = filterFront;
    } else if (area === 'Back-end') {
      const filterBack = logged.backProjects.filter((el) => {
        return el.id !== id;
      });
      const filter = users.filter((el) => {
        return el.email === logged.email;
      });

      logged.backProjects = filterBack;
      filter[0].backProjects = filterBack;
    } else {
      const filterUi = logged.uiDesignProjects.filter((el) => {
        return el.id !== id;
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
      <Modals
        openModal={openModal}
        openEditModal={openEditModal}
        handleCloseModal={handleCloseModal}
        editArea={editArea}
      />
      <Header />
      <S.Section className="section">
        <Container>
          {Object.keys(logged).length > 0 && (
            <>
              <S.AddArea>
                <S.AddedDetails>Projects:</S.AddedDetails>
                <S.AddButton
                  onClick={() => {
                    setOpen(false);
                    handleOpenModal(setOpenModal);
                  }}
                >
                  Add project
                </S.AddButton>
              </S.AddArea>

              <S.ProjectsWrapper>
                {logged.completed.length === 0 && null}
                {logged.completed.length > 0 && (
                  <S.Project>
                    <S.ProjectTitle>Completed Projects:</S.ProjectTitle>
                    <SwiperComponent>
                      {logged.completed.map((el) => (
                        <SwiperSlide
                          className={el.area.toLowerCase()}
                          key={el.id}
                        >
                          <S.ProjectName>{el.name}</S.ProjectName>
                          <S.ProjectArea>{el.area}</S.ProjectArea>
                          <S.ProjectDate>
                            <S.ProjectSpan>Finished </S.ProjectSpan>
                          </S.ProjectDate>
                          <ActionsArea
                            inProgress={false}
                            completed={true}
                            id={el.id}
                            area={el.area}
                            handleCloseModal={handleCloseModal}
                            handleOpenModal={handleOpenModal}
                            openDeleteModal={openDeleteModal}
                          />
                        </SwiperSlide>
                      ))}
                    </SwiperComponent>
                  </S.Project>
                )}

                {logged.inProgress.length === 0 && null}
                {logged.inProgress.length > 0 && (
                  <S.Project>
                    <S.ProjectTitle>In Progress Projects:</S.ProjectTitle>
                    <SwiperComponent>
                      {logged.inProgress.map((el) => (
                        <SwiperSlide
                          className={`${el.area.toLowerCase()} ${el.area.toLowerCase()}-prg`}
                          key={el.id}
                        >
                          <S.ProjectName>{el.name}</S.ProjectName>
                          <S.ProjectArea>{el.area}</S.ProjectArea>
                          <S.ProjectDate>
                            <S.ProjectSpan>Date to finish: </S.ProjectSpan>
                            {el.date}
                          </S.ProjectDate>
                          <ActionsArea
                            inProgress={true}
                            completed={false}
                            id={el.id}
                            handleOpenModal={handleOpenModal}
                            area={el.area}
                            handleCloseModal={handleCloseModal}
                            openDeleteModal={openDeleteModal}
                          />
                        </SwiperSlide>
                      ))}
                    </SwiperComponent>
                  </S.Project>
                )}

                <S.Project bg="front">
                  <S.ProjectTitle>Front-end Projects:</S.ProjectTitle>
                  {logged.frontProjects.length > 0 ? (
                    <SwiperComponent>
                      {logged.frontProjects.map((el) => (
                        <SwiperSlide key={el.id}>
                          <S.ProjectName>{el.name}</S.ProjectName>
                          <S.ProjectArea>{el.area}</S.ProjectArea>
                          <S.ProjectDate>
                            <S.ProjectSpan>Date to finish: </S.ProjectSpan>
                            {el.date}
                          </S.ProjectDate>
                          <ActionsArea
                            completed={false}
                            inProgress={false}
                            handleOpenModal={handleOpenModal}
                            id={el.id}
                            handleCloseModal={handleCloseModal}
                            openDeleteModal={openDeleteModal}
                            area={el.area}
                            handleEditCrud={handleEditCrud}
                            handleDeleteInfo={handleDeleteInfo}
                          />
                        </SwiperSlide>
                      ))}
                    </SwiperComponent>
                  ) : (
                    <S.NoItems>No Front-end project!</S.NoItems>
                  )}
                </S.Project>

                <S.Project bg="back">
                  <S.ProjectTitle>Back-end Projects:</S.ProjectTitle>
                  {logged.backProjects.length > 0 ? (
                    <SwiperComponent>
                      {logged.backProjects.map((el) => (
                        <SwiperSlide key={el.id}>
                          <S.ProjectName>{el.name}</S.ProjectName>
                          <S.ProjectArea>{el.area}</S.ProjectArea>
                          <S.ProjectDate>
                            <S.ProjectSpan>Date to finish: </S.ProjectSpan>
                            {el.date}
                          </S.ProjectDate>
                          <ActionsArea
                            completed={false}
                            inProgress={false}
                            setResetPage={setResetPage}
                            resetPage={resetPage}
                            handleOpenModal={handleOpenModal}
                            id={el.id}
                            handleCloseModal={handleCloseModal}
                            openDeleteModal={openDeleteModal}
                            area={el.area}
                            handleEditCrud={handleEditCrud}
                            handleDeleteInfo={handleDeleteInfo}
                          />
                        </SwiperSlide>
                      ))}
                    </SwiperComponent>
                  ) : (
                    <S.NoItems>No Back-end project!</S.NoItems>
                  )}
                </S.Project>

                <S.Project bg="ui">
                  <S.ProjectTitle>Ui design Projects:</S.ProjectTitle>
                  {logged.uiDesignProjects.length > 0 ? (
                    <SwiperComponent>
                      {logged.uiDesignProjects.map((el) => (
                        <SwiperSlide key={el.id}>
                          <S.ProjectName>{el.name}</S.ProjectName>
                          <S.ProjectArea>{el.area}</S.ProjectArea>
                          <S.ProjectDate>
                            <S.ProjectSpan>Date to finish: </S.ProjectSpan>
                            {el.date}
                          </S.ProjectDate>
                          <ActionsArea
                            completed={false}
                            inProgress={false}
                            area={el.area}
                            handleCloseModal={handleCloseModal}
                            openDeleteModal={openDeleteModal}
                            handleOpenModal={handleOpenModal}
                            id={el.id}
                            handleEditCrud={handleEditCrud}
                            handleDeleteInfo={handleDeleteInfo}
                          />
                        </SwiperSlide>
                      ))}
                    </SwiperComponent>
                  ) : (
                    <S.NoItems>No Ui design project!</S.NoItems>
                  )}
                </S.Project>
              </S.ProjectsWrapper>
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
