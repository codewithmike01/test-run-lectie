import React from 'react';
import { ButtonContainer } from './styles/Button.styles';

const Button = ({ content, func }) => {
  return (
    <ButtonContainer>
      <button type="button" onClick={func ? () => func() : () => {}}>
        {content}
      </button>
    </ButtonContainer>
  );
};

export default Button;
