---
title: Updating Selected Items
description: 'Learn how to work with TreeView data and update the selectable TreeView nodes by using the available approaches supported by the KendoReact TreeView in React projects.'
components: ["treeview"]
slug: selection_ways_treeview
position: 2
---

# Updating Selected Items

The TreeView provides specific approaches for working with its data and updating the `selected` field.

The available options are:

-   [Mutating the items directly](#toc-mutating-the-items-directly)
-   [Wrapping the items and mutating the wrapper objects](#toc-mutating-the-wrapper-objects)
-   [Creating copies of data before each update](#toc-copying-data-before-each-update)
-   [Using a helper function](#toc-using-a-helper-function)

## Mutating the Items Directly

The following example demonstrates how to directly update the selected items in a TreeView with single selection.

{% meta height:320 %}
{% embed_file selection-update/func/app.tsx preview %}
{% embed_file selection-update/func/main.tsx %}
{% endmeta %}

## Mutating the Wrapper Objects

The following example demonstrates how to update the selected items by wrapping them before they are passed to a TreeView with multiple selection. In this way, the TreeView regards the `selected` field as part of the wrappers which makes the incoming data immutable.

```jsx
const tree = [
    {
        text: 'Furniture',
        items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
    },
    {
        text: 'Decor',
        items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
    }
];

function wrapTreeViewItems(items) {
    return items.map((item) => {
        return { item, items: item.items && wrapTreeViewItems(item.items) };
    });
}

];

const App = () => {
    const [data, setData] = React.useState(wrapTreeViewItems(tree));

    const onItemClick = (event) => {
        event.item.selected = !event.item.selected;
        setData([...data]);
    };

    const onExpandChange = (event) => {
        event.item.expanded = !event.item.expanded;
        setData([...data]);
    };

    return (
        <TreeView
            data={data}
            textField="item.text"
            aria-multiselectable={true}
            onItemClick={onItemClick}
            expandIcons={true}
            onExpandChange={onExpandChange}
        />
    );
};
```

## Copying Data before Each Update

The TreeView allows you create a copy of the data before each item update and avoid the mutation of the data.

The following example demonstrates how to implement the suggested approach in a TreeView with multiple selection.

```jsx
const tree = [
    {
        text: 'Furniture',
        expanded: true,
        items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
    },
    {
        text: 'Decor',
        expanded: true,
        items: [{ text: 'Bed Linen', disabled: true }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
    }
];

const App = () => {
    const [data, setData] = React.useState(tree);

    const onItemClick = (event) => {
        const newData = data.slice();

        if (event.itemHierarchicalIndex.indexOf(SEPARATOR) < 0) {
            // A root item is selected.
            copyAndUpdateItem(Number(event.itemHierarchicalIndex), newData);
        } else {
            // A child item is selected.
            const parentIndex = Number(event.itemHierarchicalIndex.split(SEPARATOR)[0]);
            const childIndex = Number(event.itemHierarchicalIndex.split(SEPARATOR)[1]);

            newData[parentIndex] = { ...newData[parentIndex] };
            newData[parentIndex].items = newData[parentIndex].items.slice();
            copyAndUpdateItem(childIndex, newData[parentIndex].items);
        }
        setData(newData);
    };

    return (
        <TreeView
            data={data}
            aria-multiselectable={true}
            onItemClick={onItemClick}
        />
    );
};

const SEPARATOR = '_';
function copyAndUpdateItem(itemIndex, siblings) {
    siblings[itemIndex] = { ...siblings[itemIndex] };
    siblings[itemIndex].selected = !siblings[itemIndex].selected;
}
```

## Using a Helper Function

The [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) helper function updates the items in an immutable way, that is, works with a copy of the data. While using `processTreeViewItems` is similar to creating a copy of the data before each item update, the `data` field of the application state does not change. That is why, the helper function approach is useful when other components depend on the `data` field.

The following example demonstrates how to introduce an additional state field (`select`) which holds the IDs of the selected items and is passed to [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) on each re-render.

```jsx
const tree = [
    {
        text: 'Item1',
        items: [{ text: 'Item1.1' }, { text: 'Item1.2', items: [{ text: 'Item1.2.1' }] }]
    },
    {
        text: 'Item2',
        disabled: true,
        items: [{ text: 'Item2.1' }, { text: 'Item2.2' }, { text: 'Item2.3' }]
    },
    {
        text: 'Item3'
    }
];

const App = () => {
    const [state, setState] = React.useState({ items: tree, expand: [], select: [] });

    const onExpandChange = (event) => {
        let expand = state.expand.slice();
        const index = expand.indexOf(event.itemHierarchicalIndex);
        index === -1 ? expand.push(event.itemHierarchicalIndex) : expand.splice(index, 1);
        setState({ ...state, expand });
    };

    return (
        <TreeView
            data={processTreeViewItems(state.items, { expand: state.expand, select: state.select })}
            expandIcons={true}
            onExpandChange={onExpandChange}
            onItemClick={(event) => setState({ ...state, select: [event.itemHierarchicalIndex] })}
        />
    );
}
```

## Suggested Links

-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [`onItemClick`]({% slug api_treeview_treeviewitemclickevent %})
-   [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
-   [`onExpandChange`]({% slug api_treeview_treeviewexpandchangeevent %})
-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
