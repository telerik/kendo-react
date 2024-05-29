---
title: Implement a Context Menu in the Grid
description: "Learn how to add a context menu to a KendoReact Grid."
type: how-to
page_title: Add a Context Menu - KendoReact Grid
slug: grid-context-menu
tags: grid, kendoreact, contextmenu
ticketid: 1422874
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

How to add a context menu to the Grid?

## Solution

You can implement a context menu in the Grid by using the [KendoReact Popup component]({% slug overview_popup %}) and then and display it on a right click.

1. Attach the `onContextMenu` to the Grid rows and pass the row data to the context menu by utilizing the [`rowRender`]({% slug api_grid_gridprops %}#toc-rowRender) property.

    ```tsx-no-run
        rowRender = (trElement, dataItem) => {
            const trProps = {
            ...trElement.props,
            onContextMenu: (e) => {
                e.preventDefault()
                this.handleContextMenuOpen(e, dataItem.dataItem)
            }
            };
            return React.cloneElement(trElement, { ...trProps }, trElement.props.children);
        }
    ```

2. Define the desired content of the context menu in the Popup. As the elements inside the Popup are custom, they execute different actions depending on the desired functionality.

    ```tsx-no-run
        <Popup
            offset={this.offset}
            show={this.state.open}
            popupClass={'popup-content'}
        >
            <Menu vertical={true} style={{ display: 'inline-block' }} onSelect={this.handleOnSelect}>
                <MenuItem text="Move Up" />
                <MenuItem text="Move Down" />
                <MenuItem text="Delete" />
            </Menu>
        </Popup>
    ```

The following example demonstrates the full implementation of the suggested approach. The context menu provides options for moving the rows up and down, and for deleting an item.

{% meta height:480 %}
{% embed_file grid/context-menu/app.jsx preview %}
{% embed_file grid/context-menu/main.jsx %}
{% embed_file shared/shared-products.json %}
{% endmeta %}
