import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet/>
    </div>
  );
};

export default App;