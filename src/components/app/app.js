import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import { MainPage } from '../../pages';
import './app.css';

//state user data
// private long id;
// private String loginName;
// private String email;
// private boolean tempPassword;
// private String firstName;
// private String lastName;
// private boolean active;
// private String office;
// private List<String> roles;
// private String token;

export default class App  extends Component{

  state = {};

  render() {
    return (
      <>
        <Header />
        <MainPage />

      </>
    );

  }
   
};

