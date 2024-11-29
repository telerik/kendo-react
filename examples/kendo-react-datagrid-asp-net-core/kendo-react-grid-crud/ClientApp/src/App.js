import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/fetch-data' element={null} />
        </Routes>
      </Layout>
    );
  }
}
