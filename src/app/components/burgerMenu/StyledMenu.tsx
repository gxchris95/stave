import styled from 'styled-components';

<<<<<<< HEAD
export const StyledMenu = styled.div<{open: boolean}>`
=======
export const StyledMenu = styled.div<{ open: boolean }>`
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding: 60px;
  position: absolute;
  top: 0;
<<<<<<< HEAD
  z-index: 20;
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

=======
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
  a {
    color: white;
    cursor: pointer;
    font-size: 20px;
    margin: 15px 0;
    text-decoration: none;
  }
`;
