---
title: Data Binding
page_title: Data Binding Overview - KendoReact
description: 'Learn how the KendoReact UI component library handles data binding and data operations, including binding to local & remote data and using server operations.'
components: ["general"]
slug: overview_data_binding
---

# KendoReact Data Binding Overview

You can data-bind all KendoReact components, for which it makes sense to connect a data set. This includes a long list of components, such as the React Data Grid, KendoReact Scheduler and many more. As a result, when [the state](https://reactjs.org/docs/state-and-lifecycle.html) updates, the [controlled components](https://reactjs.org/docs/forms.html#controlled-components) will re-render to reflect the changes in the UI.

To set the default values of the [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) KendoReact components, you can use any variable from the application.

<CtaPanelOverview></CtaPanelOverview>

The KendoReact components do not manipulate the data internally or make requests to the server. The components have a public API that allows you to make requests by providing events and parameters with important information about the event. This approach follows the React best practices to provide you with the freedom to use any server technology and tooling for interacting with the server.

## Binding to Local Data

When the data is locally available in [a JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON), you can:

-   Directly set the data to the respective prop of the component:

```jsx
const data = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
return <DropDownList data={data} />;
```

-   Set the local data in the state and set that state variable to the KendoReact component. This will automatically update the KendoReact component UI when the data in the state is updated:

```jsx
const [data, setData] = React.useState(['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large']);
return <DropDownList data={data} />;
```

## Binding to Remote Data

All KendoReact components can work with data from any server as long as it is received or parsed in JSON format. All KendoReact components follow the same flow when integrating with remote data. These are the most common cases:

-   [Load data from an API to the component.](#loading-data-from-an-api)
-   [Perform server operations like sorting, paging, filtering, etc.](#using-server-data-operations)
-   [Update the data on the server after editing.](#saving-changes-after-editing)

### Loading Data from an API

You can load the data by making a request to the server and then updating the state with it:

1. Bind the KendoReact component to a state variable.

```jsx
const [data, setData] = React.useState();
return <Grid data={data} />;
```

1. When the component loads or on any other event occurs, make a request to the API to get the data. You should make this request in the application layer inside the `useEffect` hook if you are using functional components, or `componentDidMount` for class components.
1. When the request is complete, update the state with the data from the API. This will automatically update the KendoReact component.

```jsx
React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        });
}, []);
```

### Using Server Data Operations

1. Bind the KendoReact component to a state variable.
1. Use the component event associated with the data operation that must be done on the server. For example, if you need server filtering for [`the DropDownList`]({% slug overview_dropdownlist %}), use its [onFilterChange]({% slug api_dropdowns_dropdownlistprops %}#toc-onfilterchange) event.
1. During that event, make a request to the server using the parameters provided inside the event arguments. The request has to be done on the application level by the developer.
1. When the data from the server is received, update the state variable that is bound to the component. This will automatically update the component with the new data.

### Saving Changes After Editing

Saving the changes on the server is done on the application level by the developer and based on user action. The exact implementation can vary based on the used component and the application requirements. For example, you can update a single item in a component after an update button is clicked or you can save the entire data state at once after editing multiple elements. All this is done by programmatically making a server request with the data that has to be updated.

## Suggested Links

-   [KendoReact Data Grid Local Data Operations]({% slug localoperations_grid %})
-   [KendoReact Data Grid OData Server Operations]({% slug odataserveroperations_grid %})
-   [KendoReact DropDownList Filtering]({% slug filtering_dropdownlist %})
