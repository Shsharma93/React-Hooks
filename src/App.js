import React, { useState } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import {Provider} from './Auth-Context';

const App = () => {
  const [page, setPage] = useState('auth');

  const switchPage = pageName => {
    setPage(pageName);
  };

  return (
    <Provider>
      <div className='App'>
        <Header
          onLoadTodos={() => switchPage('todo')}
          onLoadAuth={() => switchPage('auth')}
        />
        <hr />
        {page === 'auth' ? <Auth /> : <Todo />}
      </div>
    </Provider>
  );
};

export default App;
