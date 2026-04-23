---
title: Data Binding
description: 'Use the TreeView item fields to bind the component to data and load remote TreeView data on demand in React projects.'
components: ["treeview"]
slug: databinding_treeview
position: 20
---

# Data Binding

The TreeView enables you to work with various types of data.

## Basics

To bind the TreeView to data:

1. Add children items to an item with an `items` field.
1. Configure the [`data`]({% slug api_treeview_treeviewprops %}#toc-data) property.

{% meta height:320 %}
{% embed_file data-binding/func/app.tsx preview %}
{% embed_file data-binding/func/main.tsx %}
{% endmeta %}

## Item Fields

By default, the TreeView provides the following fields for its items:

| Field Name                                                                 | Description                                                                                                                                         |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| [`text`]({% slug api_treeview_treeviewprops %}#toc-textfield)              | The string representation of the item.                                                                                                              |
| `items`                                                                   | The children of the item.                                                                                                                           |
| [`expanded`]({% slug api_treeview_treeviewprops %}#toc-expandfield)        | If set to `true`, expands the item.                                                                                                                 |
| [`selected`]({% slug api_treeview_treeviewprops %}#toc-selectfield)        | If set to `true`, selects the item.                                                                                                                 |
| [`disabled`]({% slug api_treeview_treeviewprops %}#toc-disablefield)       | If set to `true`, disables the item.                                                                                                                |
| [`checked`]({% slug api_treeview_treeviewprops %}#toc-checkfield)          | If set to `true`, checks the item.                                                                                                                  |
| [`checkIndeterminate`]({% slug api_treeview_treeviewprops %}#toc-checkindeterminatefield) | If set to `true`, applies an indeterminate check to the item.                                                                                       |
| [`hasChildren`]({% slug api_treeview_treeviewprops %}#toc-haschildrenfield)| If set to `true`, notifies the TreeView that the item has children even if they are not initially passed. Used for implementing the load-on-demand feature. |

## Custom Item Fields

The KendoReact TreeView lets you use custom item fields. To use custom item fields:

1. Define your own field names in your data objects.
2. Map the corresponding TreeView property (for example, `textField`, `itemsField`, or `expandField`) to your custom field name.
3. For nested data, use the same structure or specify the property for each level.

The following code sample shows how to use custom field names with the TreeView component.

```tsx
import * as React from 'react';
import { TreeView, TreeViewExpandChangeEvent } from '@progress/kendo-react-treeview';

interface TreeItem {
    data: { text: string };
    opened?: boolean;
    items?: TreeItem[];
}

const initialTree: TreeItem[] = [
    {
        data: { text: 'Furniture' },
        opened: true,
        items: [
            { data: { text: 'Tables & Chairs' } },
            { data: { text: 'Sofas' } },
            { data: { text: 'Occasional Furniture' } }
        ]
    },
    {
        data: { text: 'Decor' },
        opened: true,
        items: [
            { data: { text: 'Bed Linen' } },
            { data: { text: 'Curtains & Blinds' } },
            { data: { text: 'Carpets' } }
        ]
    }
];

const App: React.FC = () => {
    const [tree, setTree] = React.useState<TreeItem[]>(initialTree);

    // Toggle the 'opened' property for the expanded/collapsed item
    const onExpandChange = React.useCallback((event: TreeViewExpandChangeEvent) => {
        const updateItems = (items: TreeItem[]): TreeItem[] =>
            items.map(item => {
                if (item === event.item) {
                    return { ...item, opened: !item.opened };
                }
                if (item.items) {
                    return { ...item, items: updateItems(item.items) };
                }
                return item;
            });

        setTree(prev => updateItems(prev));
    }, []);

    return (
        <TreeView
            data={tree}
            textField="data.text"
            expandIcons={true}
            expandField="opened"
            onExpandChange={onExpandChange}
        />
    );
};

export default App;
```

## Loading Data on Demand

The following example demonstrates how to fetch remote data and bind the TreeView to it, with error handling included.

To implement the load-on-demand feature:

1. Set the `hasChildren` field of the root items.
1. Provide their children afterwards.

```tsx
import * as React from 'react';
import { TreeView, TreeViewExpandChangeEvent } from '@progress/kendo-react-treeview';

interface CategoryItem {
    text: string;
    id: number;
    hasChildren?: boolean;
    expanded?: boolean;
    items?: CategoryItem[];
}

const baseUrl = 'https://services.odata.org/V4/Northwind/Northwind.svc/Categories';
const requestInit: RequestInit = { method: 'GET', headers: { accept: 'application/json' } };

const App: React.FC = () => {
    const [data, setData] = React.useState<CategoryItem[]>([]);
    const [error, setError] = React.useState<string | undefined>(undefined);

    // Fetch root categories on mount
    React.useEffect(() => {
        fetch(baseUrl, requestInit)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then((json) => {
                const categories: CategoryItem[] = json.value.map(({ CategoryID, CategoryName }: any) => ({
                    text: CategoryName,
                    id: CategoryID,
                    hasChildren: true
                }));
                setData(categories);
                setError(undefined);
            })
            .catch((err) => {
                setError(`Failed to load categories: ${err.message}`);
            });
    }, []);

    // Create a new array and a shallow copy of the target category for immutability
    const copyDataAndCategory = (categoryIndex: number) => {
        // Make a new list from the old one
        const newData = data.slice();
        // Copy the category we want to change
        const category = { ...newData[categoryIndex] };
        // Put the copied category back into the list
        newData[categoryIndex] = category;
        // Return both the new list and the copied category
        return { data: newData, category };
    };

    // Fetch products for a category and add them as children
    const loadProducts = (categoryIndex: number, categoryId: number) => {
        // Get products from the server
        fetch(`${baseUrl}(${categoryId})/Products`, requestInit)
            .then((response) => {
                // Check if the server gave a good answer
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                // Turn the answer into data we can use
                return response.json();
            })
            .then((json) => {
                // Copy the data and category so we don't change the old ones
                const { data: newData, category } = copyDataAndCategory(categoryIndex);
                // Add the products as children to the category
                category.items = json.value.map(({ ProductName }: any) => ({
                    text: ProductName
                }));
                // Save the new data
                setData(newData);
                setError(undefined);
            })
            .catch((err) => {
                // Show an error if something goes wrong
                setError(`Failed to load products: ${err.message}`);
            });
    };

    // Handle expand/collapse and load products on demand
    const onExpandChange = React.useCallback((event: TreeViewExpandChangeEvent) => {
        const categoryIndex = Number(event.itemHierarchicalIndex);
        const { data: newData, category } = copyDataAndCategory(categoryIndex);
        category.expanded = !category.expanded;
        setData(newData);

        // Load products only if they haven't been loaded yet
        if (!category.items) {
            loadProducts(categoryIndex, (category as CategoryItem).id);
        }
    }, [data]);

    return (
        <div>
            {error && (
                <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>
            )}
            <TreeView
                data={data}
                expandIcons={true}
                expandField="expanded"
                onExpandChange={onExpandChange}
            />
        </div>
    );
};

export default App;
```

## Suggested Links

-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [`onExpandChange`]({% slug api_treeview_treeviewexpandchangeevent %})
-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
-   [React TreeView Accessibility]({% slug overview_accessibility_treeview %})
-   [React TreeView Appearance and Styling]({% slug appearance_treeview %})