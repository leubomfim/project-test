import * as S from './styles';
import P from 'prop-types';

export const FormModal = ({ text, children }) => {
  return (
    <S.BackgroundFormModal>
      <S.FormModal>
        <S.FormTitle>{text}</S.FormTitle>
        {children}
      </S.FormModal>
    </S.BackgroundFormModal>
  );
};

FormModal.propTypes = {
  text: P.string.isRequired,
  children: P.node.isRequired,
};
