import * as S from './styles';
import P from 'prop-types';

import { ProgressEmpty } from '@styled-icons/entypo/ProgressEmpty';
import { AiFillEdit, AiOutlineCheck } from 'react-icons/ai';
import { BsFillTrashFill, BsThreeDots } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { useInformationContext } from '../../contexts/context';

export const ActionsArea = ({
  handleEditCrud,
  area,
  id,
  completed,
  inProgress,
}) => {
  const {
    logged,
    resetPage,
    setResetPage,
    setDeleteId,
    setDeleteArea,
    setOpenDeleteModal,
    setDeleteInProgressModal,
    setDeleteCompletedModal,
  } = useInformationContext();
  const [open, setOpen] = useState(false);

  const handleCompleteProject = (id, area) => {
    if (area === 'Front-end') {
      const filter = logged.frontProjects.filter((el) => {
        return el.id === id;
      });
      filter[0].complete = true;
      logged.completed.push(filter[0]);
      const filterDifferent = logged.frontProjects.filter((el) => {
        return el.id !== id;
      });
      logged.frontProjects = filterDifferent;
    } else if (area === 'Back-end') {
      const filterEqual = logged.backProjects.filter((el) => {
        return el.id === id;
      });
      filterEqual[0].complete = true;
      logged.completed.push(filterEqual[0]);
      const filterDifferent = logged.backProjects.filter((el) => {
        return el.id !== id;
      });
      logged.backProjects = filterDifferent;
    } else {
      const filterEqual = logged.uiDesignProjects.filter((el) => {
        return el.id === id;
      });
      filterEqual[0].complete = true;
      logged.completed.push(filterEqual[0]);
      const filterDifferent = logged.uiDesignProjects.filter((el) => {
        return el.id !== id;
      });
      logged.uiDesignProjects = filterDifferent;
    }
    setResetPage(!resetPage);
  };

  const handleSetInProgress = () => {
    if (area === 'Front-end') {
      const filter = logged.frontProjects.filter((el) => {
        return el.id === id;
      });
      logged.inProgress.push(filter[0]);
      const filterDifferent = logged.frontProjects.filter((el) => {
        return el.id !== id;
      });
      logged.frontProjects = filterDifferent;
    } else if (area === 'Back-end') {
      const filterEqual = logged.backProjects.filter((el) => {
        return el.id === id;
      });
      logged.inProgress.push(filterEqual[0]);
      const filterDifferent = logged.backProjects.filter((el) => {
        return el.id !== id;
      });
      logged.backProjects = filterDifferent;
    } else {
      const filterEqual = logged.uiDesignProjects.filter((el) => {
        return el.id === id;
      });
      logged.inProgress.push(filterEqual[0]);
      const filterDifferent = logged.uiDesignProjects.filter((el) => {
        return el.id !== id;
      });
      logged.uiDesignProjects = filterDifferent;
    }
    setResetPage(!resetPage);
  };

  const handleUnPlaceInProgress = () => {
    const filter = logged.inProgress.filter((el) => {
      return el.id === id;
    });
    if (area === 'Front-end') {
      logged.frontProjects.push(filter[0]);
    } else if (area === 'Back-end') {
      logged.backProjects.push(filter[0]);
    } else {
      logged.uiDesignProjects.push(filter[0]);
    }
    const filterDifferent = logged.inProgress.filter((el) => {
      return el.id !== id;
    });
    logged.inProgress = filterDifferent;
    setResetPage(!resetPage);
  };

  const completeInProgressProject = () => {
    const filter = logged.inProgress.filter((el) => {
      return el.id === id;
    });
    logged.completed.push(filter[0]);
    const filterDifferent = logged.inProgress.filter((el) => {
      return el.id !== id;
    });
    logged.inProgress = filterDifferent;

    setResetPage(!resetPage);
  };

  const handlePutInProgress = () => {
    console.log(area, id);

    const filter = logged.completed.filter((el) => {
      return el.id === id;
    });

    logged.inProgress.push(filter[0]);

    const filterDifferent = logged.completed.filter((el) => {
      return el.id !== id;
    });

    logged.completed = filterDifferent;

    setResetPage(!resetPage);
  };

  const notCompleteProject = () => {
    const filter = logged.completed.filter((el) => {
      return el.id === id;
    });
    if (area === 'Front-end') {
      logged.frontProjects.push(filter[0]);
    } else if (area === 'Back-end') {
      logged.backProjects.push(filter[0]);
    } else {
      logged.uiDesign.push(filter[0]);
    }
    const filterDifferent = logged.completed.filter((el) => {
      return el.id !== id;
    });

    logged.completed = filterDifferent;
    setResetPage(!resetPage);
  };

  const addClass = () => {
    document.querySelector('.header').classList.add('headerFilter');
    document.querySelector('.section').classList.add('sectionFilter');
    document.body.classList.add('bodyOverflow');
  };

  return (
    <>
      <S.Menu onClick={() => setOpen(!open)}>
        <BsThreeDots />
      </S.Menu>
      {!completed && !inProgress && (
        <S.ActionsArea className={open ? 'openActionMenu ' : 'closeActionMenu'}>
          <S.SetInProgressButton
            onClick={() => {
              setOpen(false);
              handleSetInProgress(id);
            }}
            title="Set project in progress!"
          >
            <ProgressEmpty />
            <S.Text>Put in progress</S.Text>
          </S.SetInProgressButton>
          <S.CompleteButton
            onClick={() => {
              handleCompleteProject(id, area);
              setOpen(false);
            }}
            title="Complete project"
          >
            <AiOutlineCheck />
            <S.Text>Complete project</S.Text>
          </S.CompleteButton>
          <S.EditButton
            id={id}
            name={area}
            onClick={() => {
              handleEditCrud(id, area);
              setOpen(false);
            }}
          >
            <AiFillEdit id={id} />
            <S.Text>Edit project</S.Text>
          </S.EditButton>
          <S.DeleteButton
            id={area}
            name={area}
            onClick={() => {
              addClass();
              setOpenDeleteModal(true);
              setDeleteArea(area);
              setDeleteId(id);
              setOpen(false);
            }}
          >
            <BsFillTrashFill id={id} />
            <S.Text>Delete project</S.Text>
          </S.DeleteButton>
        </S.ActionsArea>
      )}
      {completed && (
        <S.ActionsArea className={open ? 'openDeleteMenu ' : 'closeDeleteMenu'}>
          <S.SetInProgressButton
            onClick={() => {
              handlePutInProgress();
              setOpen(false);
            }}
            title="Set project in progress!"
          >
            <ProgressEmpty />
            <S.Text>Put in progress</S.Text>
          </S.SetInProgressButton>
          <S.CompleteButton
            not={true}
            onClick={() => {
              notCompleteProject();
              setOpen(false);
            }}
            title="Not completed"
          >
            <AiOutlineClose />
            <S.Text>Not completed</S.Text>
          </S.CompleteButton>
          <S.DeleteButton
            id={area}
            name={area}
            onClick={() => {
              addClass();
              setDeleteCompletedModal(true);
              setDeleteArea(area);
              setDeleteId(id);
              setOpen(false);
            }}
          >
            <BsFillTrashFill id={id} />
            <S.Text>Delete project</S.Text>
          </S.DeleteButton>
        </S.ActionsArea>
      )}

      {inProgress && (
        <S.ActionsArea className={open ? 'openPrgMenu' : 'closeActionMenu'}>
          <S.SetInProgressButton
            onClick={() => {
              setOpen(false);
              handleUnPlaceInProgress(id);
            }}
            title="take from in progress!"
          >
            <ProgressEmpty />
            <S.Text>Take from in progress</S.Text>
          </S.SetInProgressButton>
          <S.CompleteButton
            onClick={() => {
              completeInProgressProject();
              setOpen(false);
            }}
            title="Complete project"
          >
            <AiOutlineCheck />
            <S.Text>Complete project</S.Text>
          </S.CompleteButton>
          <S.DeleteButton
            id={area}
            name={area}
            onClick={() => {
              addClass();
              setDeleteInProgressModal(true);
              setDeleteArea(area);
              setDeleteId(id);
              setOpen(false);
            }}
          >
            <BsFillTrashFill id={id} />
            <S.Text>Delete project</S.Text>
          </S.DeleteButton>
        </S.ActionsArea>
      )}
    </>
  );
};

ActionsArea.propTypes = {
  id: P.number.isRequired,
  handleDeleteInfo: P.func,
  handleEditCrud: P.func,
  area: P.string.isRequired,
  completed: P.bool.isRequired,
  inProgress: P.bool.isRequired,
  handleOpenModal: P.func.isRequired,
  handleCloseModal: P.func.isRequired,
};
