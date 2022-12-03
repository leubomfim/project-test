import * as S from './styles';
import P from 'prop-types';

export const Input = ({
  children,
  placeholder,
  type,
  handleChange,
  id,
  value,
  required = false,
}) => {
  return (
    <S.FormControl>
      <S.Input
        required={required}
        id={id}
        placeholder={placeholder}
        type={type}
        onChange={(e) => handleChange(e)}
        value={value}
      />
      {children}
    </S.FormControl>
  );
};

Input.propTypes = {
  children: P.node,
  placeholder: P.string.isRequired,
  type: P.string.isRequired,
  handleChange: P.func.isRequired,
  id: P.string.isRequired,
  value: P.string,
  required: P.bool,
};
