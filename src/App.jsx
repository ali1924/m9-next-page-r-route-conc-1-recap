import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h3>This is App page</h3>
      <Outlet/>
    </div>
  );
};

export default App;