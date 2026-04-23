---
title: Persisting the Focus on Data Reload
description: 'Persist the focus of the KendoReact TreeView on data reload in React projects.'
components: ["treeview"]
slug: datareload_treeview
position: 30
---

# Persisting the Focus on Data Reload

The TreeView enables you to keep the focus on the currently focused item while reloading the data.

## Using Hierarchical Item Indices

By default, the TreeView keeps the focus through hierarchical item indices. The indices are zero-based and the first root item has a `0` (zero) index. If the first root item has children, the first child acquires a `0_0` index, the second child&mdash;a `0_1` index, and so on.

The following example demonstrates how the focused item is preserved upon constant re-rendering of the TreeView.

{% meta height:320 %}
{% embed_file data-reload/func/app.tsx preview %}
{% embed_file data-reload/func/main.tsx %}
{% endmeta %}

## Using Item IDs

When you expect changes in the overall position of the TreeView items, set the [`focusIdField`]({% slug api_treeview_treeviewprops %}#toc-focusidfield) property to a field that uniquely describes the item&mdash;for example, an ID column from a database. The field id is not affected by position changes and the TreeView will be able to persist the focus on the current item.

The following example demonstrates how to add an item on every click before the clicked item and keep the focus on changing the item position. On each re-render, the TreeView executes a depth-first data search to resolve the focused item by its id because of possible position changes. For an additional optimization, set the [`getFocusHierarchicalIndex`]({% slug api_treeview_treeviewprops %}#toc-getfocushierarchicalindex) property to a custom function which will resolve a hierarchical item index by its id. For example, you can use `cache` which will be invalidated on each data reload.

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
        items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
    }
];

const App = () => {
    const addedItemsCounter = useRef(0);
    const [data, setData] = useState(tree);

    const onItemClick = (event) => {
        const newData = data.slice();

        if (newData.includes(event.item)) {
            newData.unshift({ text: `added item #${addedItemsCounter.current++}` });
        } else {
            const parentIndex = newData[newData.length - 1].items.includes(event.item) ? newData.length - 1 : newData.length - 2;

            newData[parentIndex] = Object.assign({}, newData[parentIndex], { items: newData[parentIndex].items.slice() });
            newData[parentIndex].items.unshift({ text: `added item #${addedItemsCounter.current++}` });
        }

        setData(newData);
    };

    return <TreeView focusIdField="text" data={data} onItemClick={onItemClick} />;
};
```

## Suggested Links

-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [`onItemClick`]({% slug api_treeview_treeviewitemclickevent %})
-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
