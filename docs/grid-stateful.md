---
title: Configure Stateful Grids
description: "Learn how to configure a stateful KendoReact Grid allowing you to perform paging, sorting, filtering, grouping, and editing, and to reuse it across apps."
type: how-to
page_title: Configure Stateful Grids - KendoReact Grid
slug: grid-stateful
tags: grid, kendoreact, stateful
ticketid: 1403874
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>3.15.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How to make a stateful and reusable Grid?

## Solution

#### Configuring Stateful Grids

[Stateful components](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541) are class components that have a state which gets initialized in the constructor.

You can configure a stateful KendoReact Data Grid to perform paging, sorting, filtering, grouping, and editing, and also reuse it in multiple applications and pages by setting its columns and desired data operations.

#### Data Operations

The stateful Grid performs its data operations by using the `process` method of the [`DataQuery`]({% slug overview_dataquery %}) library. To apply the changes and to save the current state of the grid data when a data operation is performed, handle the [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatachange) event.

```jsx-no-run
    onDataStateChange={(e) => {
        this.setState({
            result: process(this.state.unprocessedData ? this.state.unprocessedData : this.props.data, e.data),
            dataState:e.data});
        }}
```

#### Editing

To configure the stateful Grid for editing:

1. Set two different data collections. The first data collection will be displayed in the Grid after the data operations are applied. The second data collection will be used to edit and add items to the collection.

    > If the stateful Grid is not intended to be groupable, you can use only one data collection.

    ```jsx-no-run
        this.state = {
            result: process(this.props.data,{skip:0}),
            dataState: {skip: 0},
            unprocessedData: this.props.data };
    ```

1. Handle the [`onItemChange`]({% slug api_grid_gridprops %}#toc-onitemchange) event which will fire each time the user updates any of the editors.

    ```jsx-no-run
        itemChange = (event) => {
            var data = this.state.unprocessedData
            var currentDataState = data;

            if (event.field === this.props.editField && event.value === 'delete') {
                data.splice(data.findIndex(d => d === event.dataItem), 1);
            } else {
                event.dataItem[event.field] = event.value;
            }
            this.setState({ result: process(data,this.state.dataState), unprocessedData: data });
        };
    ```

1. Add items to the collection by using a function which you can call from a button click either inside the Grid toolbar or outside the Grid.

    ```jsx-no-run
        addNew = () => {
            var data = this.state.unprocessedData
            data.unshift({[this.props.editField]: true, Discontinued: false, ProductID: 0})
            this.setState({
                result: process(data, this.props.pageable ? {group:this.state.dataState.group, take: this.state.dataState.take,filter: this.state.dataState.filter , skip: 0, sort:this.state.dataState.sort } : this.state.dataState),
                unprocessedData: data,
                dataState: this.props.pageable ? {group:this.state.dataState.group, take: this.state.dataState.take,filter: this.state.dataState.filter skip: 0, sort:this.state.dataState.sort } : this.state.dataState
            });
        };
    ```

#### Local Data Operations with HOC

You can sort, filter, or page the local data to which the KendoReact Data Grid is bound by using the Kendo UI Data Query component.

The following example demonstrates how to create a [higher-order component (HOC)](https://reactjs.org/docs/higher-order-components.html) which uses the `process()` Data Query method to manage the local data operations. The HOC has its own state and adds the `filter`, `sort`, `total`, and `skip` props to the Grid to handle its [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event. The HOC function is then applied for binding two Grids to different sets of data without the need for you to write any logic for the filtering, sorting, and paging operations.

{% meta id:stateful height:700 %}
{% embed_file grid/stateful/main.jsx preview %}
{% embed_file grid/stateful/with-state.jsx %}
{% embed_file shared/products.json %}
{% endmeta %}
