import styled from 'styled-components';

export const ButtonContainer = styled.div`
  button {
    border: none;
    background-color: transparent;
  }
`;

export const ButtonColoredContainer = styled.button`
  border: none;
  background-color: ${({ color }) => (color ? color : ' ')};
  padding: 8px 35px;
  cursor: pointer;
  border-radius: 8px;
  color: #fff;
  span {
    font-weight: 500;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 589px) {
    padding: 7px 25px;
  }
`;
