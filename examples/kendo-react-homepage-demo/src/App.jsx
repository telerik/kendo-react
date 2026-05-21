import React, { useState } from "react";
import { KendoGridContainer } from "./components/KendoGridContainer";
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `bearer ${import.meta.env.VITE_API_KEY.split("").reverse().join("")}`
      }
    });
  }
});

function App() {
  const [selected, setSelected] = useState(0);

  const handleSelect = (e) => {
    setSelected(e.selected);
  };

  return (
    <ApolloProvider client={client}>
      <h1 className="demo-heading">GitHub Issues Demo</h1>
      <TabStrip selected={selected} onSelect={handleSelect} tabPosition={"top"} tabAlignment={'end'}>
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

export default App;