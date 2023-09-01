---
title: Render a Loading Indicator
description: "Learn how to implement a loading indicator panel for showing the loading state of the KendoReact Grid."
type: how-to
page_title: Render a Loading Indicator - KendoReact Grid
slug: grid-loading-indicator
tags: grid, kendoreact, loading
ticketid: 1402875
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>4.5.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How to show a loading indication when loading data.

## Solution

### Rendering Loading Indicator

When the KendoReact Data Grid contains a huge amount of records and depending on the browser, the component might take longer to load its data.

In such cases, a loading indicator is suitable to indicate that the Grid is properly functioning and that its data will soon be displayed.

The following example demonstrates how to render a loading indicator once a request is made and hide it when the request is finished successfully.

{% meta id:loading-indicator height:650 %}
{% embed_file grid/odata-server-operations/main.jsx preview %}
{% embed_file shared/products-loader.jsx %}
{% endmeta %}

#### Setup

1. Create a component that will manage the data operations and the requests. This component will separate the data request and response logic from the declaration of the Grid.

    ```jsx-no-run
        <Grid ...gridOptions></Grid>
        <ProductsLoader
            dataState={this.state.dataState}
            onDataReceived={this.dataReceived}
        />

        dataReceived = (products) => {
            this.setState({
                ...this.state,
                products: products
            });
        }
    ```

1. Inside the ProductLoader component, indicate to the Grid when to display the loading indicator. The time when the loading indicator will be rendered depends on the logic of the application.

    ```jsx-no-run
        this.pending = toODataString(this.props.dataState);
        fetch(this.baseUrl + this.pending, this.init)
            .then(response => response.json())
            .then(json => {
                this.lastSuccess = this.pending;
                this.pending = '';
                if (toODataString(this.props.dataState) === this.lastSuccess) {
                    this.props.onDataReceived.call(undefined, {
                        data: json.value,
                        total: json['@odata.count']
                    });
                } else {
                    this.requestDataIfNeeded();
                }
            });
        }
    ```

    ```jsx-no-run
        render() {
            this.requestDataIfNeeded();
            return this.pending && <LoadingPanel />;
        }
    ```

1. Create a component that will show the `k-loading-mask` over the Grid container.

    ```jsx-no-run
        class LoadingPanel extends React.Component {
        render() {
            const loadingPanel = (
                <div className="k-loading-mask">
                    <span className="k-loading-text">Loading</span>
                    <div className="k-loading-image"></div>
                    <div className="k-loading-color"></div>
                </div>
            );

            const gridContent = document && document.querySelector('.k-grid-content');
            return gridContent ? ReactDOM.createPortal(loadingPanel, gridContent) : loadingPanel;
        }
      }
    ```
