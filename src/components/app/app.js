import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './app.css';

const name='Alex';
const sent =`Hello ${name}`;

const App = () => {
  return (
    <div>{sent}</div>
    
  );
};

export default App;
