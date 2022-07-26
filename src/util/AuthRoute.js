import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function AuthRoute(props) {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate replace to="/" />;
  } else {
    return <Outlet />;
  }
}

export default AuthRoute;
