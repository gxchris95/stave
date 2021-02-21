<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
import Logout from './Logout';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function AccountMenu() {
<<<<<<< HEAD
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
=======
  const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

<<<<<<< HEAD
  return (
    <div>
      <div aria-controls="account-menu" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
=======
  return(
    <div>
      <div
        aria-controls="account-menu"
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
        </svg>
      </div>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Logout></Logout>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AccountMenu;
