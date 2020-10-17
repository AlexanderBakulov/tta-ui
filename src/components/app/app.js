import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import { MainPage } from '../../pages';
import './app.css';


const App = () => {
  return (
    <div>
     <Header />
     <MainPage />

    </div>
    
  );
};

export default App;
