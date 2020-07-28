import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/register" component={Register} /> */}
        {/* <Route path="/profile" component={Profile} /> */}
        {/* <Route path="/incident/new" component={NewIncident} /> */}
      </Switch>
    </BrowserRouter>
  );
}