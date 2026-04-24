---
title: Checking All Items
description: 'Learn how to work with TreeView data and check all KendoReact TreeView nodes at once in React projects.'
components: ["treeview"]
slug: check_all_items_treeview
position: 4
---

# Checking All Items

While the TreeView does not provide a built-in feature for checking and unchecking all its items at once, the component supports such an implementation.

To enable the check-all mode for its items, set the `checked` field of each TreeView node to `true`. To enable the uncheck-all mode for its items, set the `checked` field of each TreeView node to a falsy value. You can further handle the checking and unchecking of all items depending on whether you [update the items directly](#toc-updating-items-directly) or [use the helper functions](#toc-using-helper-functions).

## Updating Items Directly

The following example demonstrates how to directly update the `checked` field of all TreeView items.

{% meta height:420 %}
{% embed_file checkbox-all/func/app.tsx preview %}
{% embed_file checkbox-all/func/main.tsx %}
{% endmeta %}

## Using Helper Functions

The following example demonstrates how to use the [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %}) and [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) helper functions to prepare the [`data`]({% slug api_treeview_treeviewprops %}#toc-data) of the TreeView and how to manually set the [`check`]({% slug api_treeview_treeviewoperationdescriptors %}#toc-check) descriptor to:

-   All hierarchical item indices upon checking all items.
-   An empty array upon unchecking all items.

```jsx
import React, { useState } from 'react';
import { TreeView } from '@progress/kendo-react-treeview';
import { processTreeViewItems, handleTreeViewCheckChange } from '@progress/kendo-react-treeview';

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
    const [data] = useState(tree);
    const [check, setCheck] = useState([]);

    const checkAll = () => {
        setCheck(['0', '0_0', '0_1', '0_2', '1', '1_0', '1_1', '1_2']);
    };

    const uncheckAll = () => {
        setCheck([]);
    };

    const onCheckChange = (event) => {
        setCheck(handleTreeViewCheckChange(event, check, data));
    };

    return (
        <div>
            <div className="example-config">
                <Button onClick={checkAll}>Check all</Button>
                <Button onClick={uncheckAll}>Uncheck all</Button>
            </div>
            <TreeView
                data={processTreeViewItems(data, { check: check })}
                checkboxes={true}
                onCheckChange={onCheckChange}
            />
        </div>
    );
};

export default App;
```

## Suggested Links

-   [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %})
-   [`TreeViewCheckChangeSettings`]({% slug api_treeview_treeviewcheckchangesettings %})
-   [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
-   [`TreeViewCheckDescriptor`]({% slug api_treeview_treeviewcheckdescriptor %})
-   [`onCheckChange`]({% slug api_treeview_treeviewcheckchangeevent %})
-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
