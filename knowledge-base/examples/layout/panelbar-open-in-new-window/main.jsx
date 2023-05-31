import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import Team from './Team';
import Home from './Home';
import Products from './Products';
import PanelBarNavContainer from './PanelBarNavContainer';
ReactDOM.render(
  <HashRouter>
    <PanelBarNavContainer>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/products" component={Products} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/about/team" component={Team} />
      </Switch>
    </PanelBarNavContainer>
  </HashRouter>,
  document.querySelector('my-app')
);
