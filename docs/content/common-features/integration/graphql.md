---
title: GraphQL
page_title: React Third-Party Libraries & GraphQL - KendoReact
description: "Bind and edit KendoReact components by using GraphQL queries and mutations."
components: ["general"]
slug: graphql_integration
---

# GraphQL

KendoReact enables you to bind the components to [GraphQL](http://graphql.org/index.html) by using queries and mutations.

For more information on how to set up the server, the GraphQL schema, and the editing of the Grid, refer to the [source code of the sample project](https://github.com/telerik/kendo-react-graphql/). To compose the GraphQL queries and mutations, and to consume the received data, the sample project is using [apollo-graphql](https://www.apollographql.com/docs/react/essentials/get-started.html).

## Requesting Data with GraphQL Query

1. Bind the component to the GraphQL query by calling the `graphql` method and passing the `GraphQL` query that will be used to request the data from the server.

    ```jsx
        export default compose(
            graphql(getProductsQuery, { name: "getProductsQuery" })
        )(ComponentName);
    ```

1. The data from the query will be received inside the props of the component and you have to pass it to the `data` property of the Grid. As the request can acquire a loading status, check its value&mdash;otherwise the data will be undefined.

    ```jsx
        <Grid data={this.props.getProductsQuery.loading === true ? [] : this.props.getProductsQuery.products}
    ```

## Implementing Editing with GraphQL Mutations

1. Create the mutations for adding, updating, and deleting an item. For more information on how to compose mutations, refer to the [Apollo documentation](https://www.apollographql.com/docs/react/essentials/mutations.html).

    ```jsx
    const addProductMutation = gql`
        mutation AddProduct($ProductName: String!, $UnitPrice: Float!, $UnitsInStock: Float!){
            AddProduct(ProductName: $ProductName, UnitPrice: $UnitPrice, UnitsInStock: $UnitsInStock){
                ProductName
                ProductID
            }
        }
    `;

    const updateProductMutation = gql`
        mutation UpdateProduct($ProductID: ID!, $ProductName: String! ,$UnitPrice: Float!, $UnitsInStock: Float!){
            UpdateProduct(ProductID: $ProductID, ProductName: $ProductName, UnitPrice: $UnitPrice, UnitsInStock: $UnitsInStock){
                ProductID
            }
        }
    `;

    const deleteProductMutation = gql`
        mutation DeleteProduct($ProductID: ID!){
            DeleteProduct(ProductID: $ProductID){
                ProductID
            }
        }
    `;
    ```

1. Bind the component to the GraphQL mutations by using the `compose` method. This approach allows the use of multiple queries and mutations in a single component. All mutations will be accessible from the props of the component.

    ```jsx
    export default compose(
        graphql(addProductMutation, {name: "addProductMutation"}),
        graphql(deleteProductMutation, { name: "getProductsQuery" }),
        graphql(updateProductMutation, { name: "updateProductMutation" })
    )(ComponentName);
    ```

1. Call the corresponding mutations and query the mutated data. Once the mutation is called, use the [`refetchQueries`](https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-mutation-options-refetchQueries) option to make a new query to the GraphQL server to fetch the modified data.

    ```jsx
        this.props.updateProductMutation({
            variables: {
                ProductID: this.props.selectedItem.ProductID,
                ProductName: this.state.ProductName,
                UnitPrice: this.state.UnitPrice,
                UnitsInStock: this.state.UnitsInStock
            },
            refetchQueries: [{ query: getProductsQuery }]
        });
    ```

## Suggested Links

* [GraphQL](https://graphql.org/)
* [Sample Project on GraphQL Integration](https://github.com/telerik/kendo-react-graphql/)
* [Official Apollo Documentation](https://www.apollographql.com/docs/react/essentials/mutations.html)
