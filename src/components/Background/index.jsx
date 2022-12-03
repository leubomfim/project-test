import * as S from './styles';
import P from 'prop-types';

export const Background = ({ children, bg }) => {
  return (
    <S.DisplayBackgroundAndForm>
      <S.Background>
        <S.Image src={bg} />
      </S.Background>
      {children}
    </S.DisplayBackgroundAndForm>
  );
};

Background.propTypes = {
  children: P.node.isRequired,
  bg: P.string.isRequired,
};
