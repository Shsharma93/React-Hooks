import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const Provider = (props) => {
  const [authState, setAuthStatus] = useState(false);

  const login = () => setAuthStatus(true);

  const logout = () => setAuthStatus(false);

  return (
    <AuthContext.Provider value={{ status: authState, login: login, logout: logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};


