import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import { MainPage } from '../../pages';
import Footer from '../footer';
import './app.css';


const App = () => {
  return (
    <div>
     <Header />
     <MainPage />
     <Footer />

    </div>
    
  );
};

export default App;
