import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from '../header';
import { 
  LoginPage, 
  AdminPage, 
  TicketsAssignedPage, 
  TicketsCreatedPage,
  UsersPage,
  PasswordPage,
  ReportsPage,
  UserLinks
} from '../../pages';
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

export default class App extends Component {

  state = {
    isAuthorized: true,
    roles: ['ADMIN', 'MANAGER', 'USER']
  };


  render() {
    return (
      <>
     
          <Router>
            {/* how to hide to unauthorized user? */}
            <Header isAuthorized={this.state.isAuthorized} /> 
            <UserLinks isAuthorized={this.state.isAuthorized}/> 
            <Switch>
              <Route path="/" render={() => <h2>Welcome</h2>} exact />
              <Route exact path="/login"> 
                <LoginPage />
              </Route>
              <Route exact path="/password" > 
                <PasswordPage />
              </Route>
              <Route exact path="/admin" >
                <AdminPage />
              </Route>
              <Route exact path="/users/:id?" >
                <UsersPage />
              </Route>
              <Route exact path="/reports" >
                <ReportsPage />
              </Route>
              <Route path="/tickets-created/:id?" >
                <TicketsCreatedPage />
              </Route>
              <Route path="/tickets-assigned/:id?" >
                <TicketsAssignedPage />
              </Route>
              <Route render={() => <h2>404 Page not found</h2>} />

            </Switch>
            </Router>
      </>
    );

  }

};

