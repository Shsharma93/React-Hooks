import React, { useContext } from 'react';
import { AuthContext } from '../Auth-Context';

const Header = props => {
  const auth = useContext(AuthContext);

  return (
    <header>
      {auth.status ? <button onClick={props.onLoadTodos}>Todo</button> : ''}
      <button onClick={props.onLoadAuth}>Auth</button>
    </header>
  );
};

export default Header;
