import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

const name='Alex';
const sent =`Hello ${name}`;

const App = () => {
  return (
    <div>
      <h1>{sent}</h1>
    </div>
    
  );
};

export default App;
