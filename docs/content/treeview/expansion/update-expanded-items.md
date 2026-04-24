---
title: Updating Expanded Items
description: 'Learn how to work with TreeView data and update the expandable TreeView nodes by using the available approaches supported by the KendoReact TreeView in React projects.'
components: ["treeview"]
slug: expansion_ways_treeview
position: 2
---

# Updating Expanded Items

The TreeView provides specific approaches for working with its data and updating the `expanded` field.

The available options are:

-   [Mutating the items directly](#toc-mutating-the-items-directly)
-   [Wrapping the items and mutating the wrapper objects](#toc-mutating-the-wrapper-objects)
-   [Creating copies of data before each update](#toc-copying-data-before-each-update)
-   [Using a helper function](#toc-using-a-helper-function)

## Mutating the Items Directly

The following example demonstrates how to directly update the TreeView items.

{% meta height:320 %}
{% embed_file items-expanded-directly/func/app.tsx preview %}
{% embed_file items-expanded-directly/func/main.tsx %}
{% endmeta %}

## Mutating Items with Search

The following example demonstrates how to update the TreeView items while incorporating search functionality.

{% meta height:400 %}
{% embed_file items-expanded-search/app.tsx preview %}
{% embed_file items-expanded-search/main.tsx %}
{% endmeta %}

## Mutating the Wrapper Objects

The following example demonstrates how to update the items by wrapping them before they are passed to the TreeView. In this way, the TreeView regards the `expanded` field as part of the wrappers which makes the incoming data immutable.

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

function App() {
    const [data, setData] = useState(wrapTreeViewItems(tree));
    const [updateTrigger, setUpdateTrigger] = useState(0);

    const onExpandChange = (event) => {
        event.item.expanded = !event.item.expanded;
        setUpdateTrigger(prev => prev + 1);
    };

    return (
        <TreeView
            data={data}
            textField="item.text"
            expandIcons={true}
            onExpandChange={onExpandChange}
        />
    );
}
```


## Copying Data before Each Update

The TreeView allows you create a copy of the data before each item update and avoid the mutation of the data.

```jsx
const tree = [
    {
        text: 'Furniture',
        expanded: true,
        items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
    },
    {
        text: 'Decor',
        items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
    }
];

function App() {
    const [data, setData] = useState(tree);

    const onExpandChange = (event) => {
        const newData = data.slice();
        const itemIndex = newData.indexOf(event.item);
        newData[itemIndex] = { ...event.item };
        newData[itemIndex].expanded = !newData[itemIndex].expanded;
        setData(newData);
    };

    return <TreeView data={data} expandIcons={true} onExpandChange={onExpandChange} />;
}
```

## Using a Helper Function

The [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) helper function updates the items in an immutable way, that is, works with a copy of the data. While using `processTreeViewItems` is similar to creating a copy of the data before each item update, the `data` field of the application state does not change. That is why, the helper function approach is useful when other components depend on the `data` field.

The following example demonstrates how to introduce an additional state field (`expand`) which holds the IDs of the expanded items and is passed to [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) on each re-render.

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

function App() {
    const [items] = useState(tree);
    const [expand, setExpand] = useState({ ids: ['Item2'], idField: 'text' });

    const onExpandChange = (event) => {
        let ids = expand.ids.slice();
        const index = ids.indexOf(event.item.text);

        // Add or remove the item ID (i.e.s the item text) depending on
        // whether the item is expanded or collapsed.
        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);

        setExpand({ ids, idField: 'text' });
    };

    return (
        <TreeView
            data={processTreeViewItems(items, { expand })}
            expandIcons={true}
            onExpandChange={onExpandChange}
        />
    );
}
```

## Suggested Links

-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [`onExpandChange`]({% slug api_treeview_treeviewexpandchangeevent %})
-   [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
