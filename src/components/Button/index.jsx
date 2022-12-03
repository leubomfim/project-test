import * as S from './styles';
import P from 'prop-types';

export const Button = ({ text, type }) => {
  return <S.Button type={type}>{text}</S.Button>;
};

Button.propTypes = {
  text: P.string.isRequired,
  type: P.string.isRequired,
};
