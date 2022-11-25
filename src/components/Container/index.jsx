import P from 'prop-types';
import * as S from './styles';

export const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

Container.propTypes = {
  children: P.node.isRequired,
};
