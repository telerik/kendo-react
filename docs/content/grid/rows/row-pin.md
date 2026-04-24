---
title: Locking Rows
description: 'Get started with the KendoKendoReact Data Grid enabling you to pin (lock) rows.'
components: ["datagrid"]
slug: locked_rows_grid
position: 40
tier: premium
subject: Grid Locked Rows feature
---

# Locking Rows

You can lock (pin) rows at the top of the Grid to make them always visible during scrolling.

<CtaPanelOverview></CtaPanelOverview>

## Getting Started

Pinning rows requires the followings steps:

1. Use the [`cells`]({% slug api_grid_gridprops %}#toc-cells) prop of the Grid to implement a custom data cell and add the `k-grid-row-sticky` class and the style `top` to the rows that will be locked.

    ```jsx-no-run
    const LockRowCell = (props: LockRowCellProps) => {
        let styles = props.style;
        let classNames = props.className;
        if (props.dataItem.locked) {
            styles!.top = props.getTop(props.dataItem);
            styles!.bottom = props.getBottom(props.dataItem);
            classNames += ' k-grid-row-sticky';
        }
        return (
            <td
                {...props.tdProps}
                style={{ textAlign: 'center', ...styles }}
                className={classNames}
                onClick={() => props.onClick(props.dataItem)}
            >
                {props.dataItem.locked ? <SvgIcon icon={pinIcon} /> : <SvgIcon icon={unpinIcon} />}
            </td>
        );
    };

    const getTop = (dataItem, data) => {
        const allLockedRows = filterBy(data,filterDescriptorLocked);
        const indexOfLockedItem = allLockedRows.findIndex(item=> dataItem.ProductID === item.ProductID);
        return indexOfLockedItem * rowHeight;
    }
    ```

1. Set [`rowHeight`]({% slug api_grid_gridprops %}#toc-rowheight) to the Grid as the locked rows `require` fixed equal height of all rows in order to correctly calculate their position.

In the following example we use [a custom data cell]({% slug api_grid_gridcolumnprops %}#toc-cells) to dynamically lock a row by clicking over the cell.

{% meta height:480 %}
{% embed_file row-locked/func/app.tsx preview %}
{% embed_file row-locked/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
