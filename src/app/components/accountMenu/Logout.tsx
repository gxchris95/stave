import React from 'react';
<<<<<<< HEAD
import {useHistory} from 'react-router-dom';
import {logout} from '../../lib/api';
=======
import { useHistory } from 'react-router-dom';
import { logout } from '../../lib/api';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

function Logout() {
  const history = useHistory();
  function handleLogout() {
    logout().then(() => {
      history.push('/login');
    });
  }
<<<<<<< HEAD
  return <div onClick={() => handleLogout()}>Logout</div>;
=======
  return (
    <div onClick={() => handleLogout()}>Logout</div>
  );
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
}

export default Logout;
