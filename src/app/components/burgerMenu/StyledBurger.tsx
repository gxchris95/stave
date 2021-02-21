import styled from 'styled-components';

<<<<<<< HEAD
export const StyledBurger = styled.button<{open: boolean}>`
=======
export const StyledBurger = styled.button<{ open: boolean }>`
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 24px;
  justify-content: space-around;
  margin-right: 10px;
  position: relative;
  outline: none;
  padding: 0;
  width: 24px;
  z-index: 10;
<<<<<<< HEAD

  span {
    background-color: ${({open}) => (open ? 'white' : 'black')};
=======
  
  span {
    background-color: ${({ open }) => open ? 'white' : 'black'};
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    border-radius: 10px;
    height: 2px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    width: 24px;

    :first-child {
<<<<<<< HEAD
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({open}) => (open ? '0' : '1')};
    }
    :nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
=======
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    }
  }
`;
