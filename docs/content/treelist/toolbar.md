---
title: Toolbar
description: 'Explore the integration of a Toolbar into the TreeList component for React.'
components: ["treelist"]
slug: toolbar_treelist
position: 150
---

# Toolbar

You can render a built-in Toolbar for the KendoReact TreeList component to let your end users manage the TreeList data and interact with the TreeList structure.

## Getting Started

To add a Toolbar to the TreeList, use the [`toolbar`](slug:api_treelist_treelistprops#toolbar) prop and pass a [`TreeListToolbar`](slug:api_treelist_treelisttoolbar) component as its value. Inside `TreeListToolbar`, you can render any content — buttons, inputs, or other controls.

```tsx
import { TreeList, TreeListToolbar } from '@progress/kendo-react-treelist';
import { Button } from '@progress/kendo-react-buttons';

<TreeList
    toolbar={
        <TreeListToolbar>
            <Button onClick={expandAll}>Expand All</Button>
            <Button onClick={collapseAll}>Collapse All</Button>
        </TreeListToolbar>
    }
    ...
/>
```

The following example demonstrates how to add a Toolbar to the TreeList, with **Expand All** and **Collapse All** buttons that toggle the expanded state of all rows at once.

{% meta height:580 %}
{% embed_file toolbar/app.tsx preview %}
{% embed_file toolbar/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
