import React, { Component } from "react";
import { KendoGridContainer } from "./components/KendoGridContainer";
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_API_KEY.split("").reverse().join("")}`
      }
    });
  }
});

class App extends Component {
  state = {
    selected: 0
  }

  handleSelect = (e) => {
    this.setState({ selected: e.selected })
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <h1 className="demo-heading">GitHub Issues Demo</h1>
        <TabStrip selected={this.state.selected} onSelect={this.handleSelect} tabPosition={"top"}>
          <TabStripTab title="React Repo">
            <KendoGridContainer repo="react" />
          </TabStripTab>
          <TabStripTab title="GraphQL-JS Repo">
            <KendoGridContainer repo="gql" />
          </TabStripTab>
        </TabStrip>
      </ApolloProvider>
    );
  }
}

export default App;