import React, { useContext, Fragment } from 'react';
import { AuthContext } from '../Auth-Context';

const Auth = () => {
  const auth = useContext(AuthContext);

  return (
    <Fragment>
      <button onClick={auth.login}>Log in!</button>
      <button onClick={auth.logout}>Log out!</button>
    </Fragment>
  );
};

export default Auth;
