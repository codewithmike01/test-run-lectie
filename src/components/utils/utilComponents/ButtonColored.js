import React from 'react';
import { ButtonColoredContainer } from './styles/Button.styles';

const ButtonColoured = ({ content, func, color }) => {
  return (
    <ButtonColoredContainer
      color={color}
      type="button"
      onClick={func ? () => func() : () => {}}
    >
      <span className="t-mid">{content}</span>
    </ButtonColoredContainer>
  );
};

export default ButtonColoured;
