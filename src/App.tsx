import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';

import routes from './routes/routes';
import {Navbar, Nav} from 'react-bootstrap';
import logoImg from './assets/logo.png';
import Network from './containers/network/network';
import {withRouter} from "react-router";

const App = (props) => {
  const {location} = props;

  return (
    <div className="container-fluid">
      <div className="min-vh-100">
        <Navbar bg="light">
          <Navbar.Brand>
            <img alt="" src={logoImg} width="30" height="30" className="d-inline-block align-top" /> Cere Laboratory
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {
                Object.keys(routes).map((route) => (
                  <Nav.Link active={location.pathname === routes[route].link} href={`#${routes[route].link}`}>{routes[route].title}</Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Network/>
        <Switch>
          {Object.keys(routes).map((routeKey) => {
            const Component = routes[routeKey].component;

            return (
              <Route exact path={routes[routeKey].link} key={routeKey}>
                <div className="container-fluid">
                  <h3>{routes[routeKey].title}</h3>
                  <div className="p-3 mb-2 bg-light text-dark">{routes[routeKey].description}</div>
                  <Component />
                </div>
              </Route>
            );
          })}
          <Redirect from="/" to={routes.ACCOUNT_TRANSACTIONS.link} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
