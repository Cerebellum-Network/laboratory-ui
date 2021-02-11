import React from 'react';
import {
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import routes from './routes/routes';
import {Navbar} from "react-bootstrap";
import logoImg from "./assets/logo.png";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="min-vh-100">
        <Navbar>
          <Navbar.Brand>
            <img
              alt=""
              src={logoImg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Cere Network
          </Navbar.Brand>
        </Navbar>
        <Switch>
          {
            Object.keys(routes).map((routeKey) => {
              const Component = routes[routeKey].component;

              return <Route exact path={routes[routeKey].link} key={routeKey}><Component/></Route>;
            })
          }
          <Redirect from="/" to={routes.ACCOUNT_TRANSACTIONS.link}/>
        </Switch>
      </div>
    </div>


  );
};

export default App;
