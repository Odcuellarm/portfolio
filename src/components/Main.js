import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Projects from './Projects';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/projects" component={Projects} />
  </Switch>
);

export default Main;