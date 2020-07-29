import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home'
import Detalhes from '../pages/detalhes'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detalhes" component={Detalhes} />
      </Switch>
    </BrowserRouter>
  );
}