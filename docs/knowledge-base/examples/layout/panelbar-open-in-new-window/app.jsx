
import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Team from './Team';
import Home from './Home';
import Products from './Products';
import PanelBarNavContainer from './PanelBarNavContainer';

const App = () => {
  return (
    <HashRouter>
      <PanelBarNavContainer>
        <Routes>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/products" component={Products} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/about/team" component={Team} />
        </Routes>
      </PanelBarNavContainer>
    </HashRouter>
  );
};

export default App;
