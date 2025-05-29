import React, { Component } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import 'bootstrap';
import './App.css';
import GridContainer from './components/GridContainer'
import ProductsForm from './components/ProductForm'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedItem: {},
      inEdit: false
    }
  }

  changeRowSelection = (row) =>{
    this.setState({
      inEdit: true,
      selectedItem: row
    })
  }

  addItem = () =>{
    this.setState({
      inEdit: false
    })
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App row m-2">
          <ProductsForm selectedItem={this.state.selectedItem} inEdit={this.state.inEdit} addItem={this.addItem}/>
          <GridContainer changeRowSelection={this.changeRowSelection} addItem={this.addItem} inEdit={this.state.inEdit}/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
