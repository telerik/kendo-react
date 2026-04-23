---
title: Azure Cosmos DB
page_title: React Cloud Integration & Azure Cosmos DB - KendoReact
description: "Consume data from an existing KendoReact application that is built with Azure Cosmos DB through SQL .NET API and Azure Portal."
components: ["general"]
slug: cloud_cosmos_db
---

# Consuming Data from Azure Cosmos DB

This tutorial demonstrates how to create an application with Azure Cosmos DB through SQL .NET API and Azure Portal, and configure a KendoReact Grid to display Cosmos DB data and perform CRUD operations.

## Prerequisites

* Basic knowledge on the organization of [Azure Portal](https://docs.microsoft.com/en-us/azure/azure-portal/)

## Creating Azure Cosmos DB Applications

1. Follow the [Build a .NET web app with Azure Cosmos DB using the SQL API and the Azure Portal](https://docs.microsoft.com/en-us/azure/cosmos-db/create-sql-api-dotnet) quickstart guide. This guide demonstrates how to create an Azure Cosmos DB SQL API account, add data and a collection by using the Azure Portal, and build and deploy a sample **To-Do List** web application.
1. After successfully completing the quickstart guide, add KendoReact to the **To-Do List** sample application by implementing the endpoints for the CRUD operations and configuring the Grid to use these endpoints.

## Implementing the Create, Read, Update, and Destroy Actions

1. Add the following `using` statements to the `ItemController`.

    ```cs
    using System.Collections.Generic;
    using Newtonsoft.Json;
    using System.Linq;
    ```

1. Implement the four actions in the `ItemController` which will be called by the Grid on performing CRUD operations. Provide names for the actions&mdash;for example, `KendoRead`, `KendoCreate`, `KendoUpdate`, and `KendoDestroy`.

The following example demonstrates the `Read` action.

```cs
[ActionName("KendoRead")]
public async Task<ActionResult> KendoRead()
{
    var items = await DocumentDBRepository<Item>.GetItemsAsync(d => !d.Completed);

    return this.Json(items, JsonRequestBehavior.AllowGet);
}
```

The following example demonstrates the `Create` action.

```cs
[ActionName("KendoCreate")]
public async Task<ActionResult> KendoCreate(string models)
{
    var items = JsonConvert.DeserializeObject<IEnumerable<Item>>(models);


    if (items != null && ModelState.IsValid)
    {
        Item item = items.FirstOrDefault();
        await DocumentDBRepository<Item>.CreateItemAsync(item);
    }

    return Json(items, JsonRequestBehavior.AllowGet);
}
```

The following example demonstrates the `Update` action.

```cs
[ActionName("KendoUpdate")]
public async Task<ActionResult> KendoUpdate(string models)
{
    var items = JsonConvert.DeserializeObject<IEnumerable<Item>>(models);

    if (items != null && ModelState.IsValid)
    {
        Item item = items.FirstOrDefault();
        await DocumentDBRepository<Item>.UpdateItemAsync(item.Id, item);
    }

    return Json(items, JsonRequestBehavior.AllowGet);
}
```

The following example demonstrates the `Destroy` action.

```cs
[ActionName("KendoDestroy")]
public async Task<ActionResult> KendoDestroy(string models)
{
    var items = JsonConvert.DeserializeObject<IEnumerable<Item>>(models);

    if (items != null && ModelState.IsValid)
    {
        Item item = items.FirstOrDefault();
        await DocumentDBRepository<Item>.DeleteItemAsync(item.Id, item.Category);
    }

    return Json(items, JsonRequestBehavior.AllowGet);
}
```

## Consuming the Implemented CRUD Endpoints on the Client

To consume the data from the endpoints and display it in the Grid, make requests to the end point depending on the action.

> Based on the application logic, you can call all functions for loading, creating, updating, and deleting items by using the buttons inside and outside the Grid.

1. Bind the Grid to a `state` value.

    ```jsx
        <Grid data={this.state.gridData}></Grid>
    ```
1. Load data by making a `get` request to the `Read` action.

    ```jsx
        loadData = () => {
            let that = this
            fetch('http://localhost:43605/Item/KendoRead/')
                .then(function(response) {
                    return response.json();
                })
                .then(function(myJson) {
                    that.setState({
                        gridData: myJson
                    })
                });
        }
    ```

1. Create new items by making a request to the `Create` action.

    ```jsx
        addRecord = (newItem) => {
            let that = this;
            fetch(`http://localhost:43605/Item/KendoCreate?models=${JSON.stringify([newItem])}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(createdItem) {
                    let gridCurrentData = that.state.gridData
                    gridCurrentData.shift(newItem)
                    that.setState({
                        gridData: gridCurrentData // Set the new data to the Grid if CREATE is successful
                    })
                });
        }
    ```

1. Update items by making a request to the `Update` action.

    ```jsx
        updateRecord = (updatedItem) => {
            let that = this;
            fetch(`http://localhost:43605/Item/KendoUpdate?models=${JSON.stringify([updatedItem])}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(updatedRecord) {
                    let gridCurrentData = that.state.gridData
                    let index = gridCurrentData.findIndex(p => p === updatedRecord || updatedRecord.id && p.id === updatedRecord.id);
                    gridCurrentData[index] = updatedRecord;
                    that.setState({
                        gridData: gridCurrentData // Set the new data to the Grid if UPDATE is successful
                    })
                });
        }
    ```

1. Delete items by making a request to the `Destroy` action.

    ```jsx
            deleteRecord = (deletedItem) => {
            let that = this;
            fetch(`http://localhost:43605/Item/KendoDestroy?models=${JSON.stringify([deletedItem])}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(deletedRecord) {
                    let gridCurrentData = that.state.gridData
                    let index = gridCurrentData.findIndex(p => p === deletedRecord || deletedRecord.id && p.id === deletedRecord.id);
                    gridCurrentData = gridCurrentData.splice(index, 1);
                    that.setState({
                        gridData: gridCurrentData // Set the new data to the Grid if DESTROY is successful
                    })
                });
        }
    ```

## Suggested Links

* [Binding the Grid to Azure Functions]({% slug cloud_azure_functions %})
* [Consuming Data from Amazon Dynamo DB]({% slug cloud_amazon_dynamo_db %})
* [Consuming Data from Google Cloud Big Query]({% slug cloud_google_big_query %})
