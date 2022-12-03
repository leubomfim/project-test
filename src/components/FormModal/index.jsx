import * as S from './styles';
import P from 'prop-types';
import { LogoAndBackArea } from '../LogoAndBackArea';

export const FormModal = ({ text, children, margin }) => {
  return (
    <S.BackgroundFormModal>
      <S.FormModal>
        <LogoAndBackArea />
        <S.FormTitle margin={margin}>{text}</S.FormTitle>
        {children}
      </S.FormModal>
    </S.BackgroundFormModal>
  );
};

FormModal.propTypes = {
  text: P.string.isRequired,
  children: P.node.isRequired,
  margin: P.bool.isRequired,
};
