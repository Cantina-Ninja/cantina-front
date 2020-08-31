import React, { ButtonHTMLAttributes, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import { Container } from './styles';
import { MenuContext } from '../../hooks/menu';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = () => {
  const history = useHistory();
  const { toggleMenuVisible } = useContext(MenuContext);
  const handleBack = useCallback(() => {
    toggleMenuVisible();
    history.goBack();
  }, []);

  return (
    <Container onClick={handleBack} type="button">
      <IoIosArrowBack />
    </Container>
  );
};

export default Button;
