import * as S from './styles';

import { useInformationContext } from '../../contexts/context';
import logo from '../../images/logo.png';

export const LogoAndBackArea = () => {
  const { navigate } = useInformationContext();
  return (
    <>
      <S.Logo src={logo} alt="Details logo" />
      <S.Back onClick={() => navigate('/')}>Back</S.Back>
    </>
  );
};
