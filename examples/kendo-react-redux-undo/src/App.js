import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GridContainer from './components/GridContainer';
import '@progress/kendo-theme-default/dist/all.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GridContainer/>
      </div>
    );
  }
}

export default connect()(App);
