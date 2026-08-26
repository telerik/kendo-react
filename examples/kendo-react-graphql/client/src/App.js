import React, { Component } from 'react';
import 'bootstrap';
import './App.css';
import GridContainer from './components/GridContainer'
import ProductsForm from './components/ProductForm'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';


// apollo client setup
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
});

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
        <div className="app-layout">
          <ProductsForm selectedItem={this.state.selectedItem} inEdit={this.state.inEdit} addItem={this.addItem}/>
          <GridContainer changeRowSelection={this.changeRowSelection} addItem={this.addItem} inEdit={this.state.inEdit}/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
