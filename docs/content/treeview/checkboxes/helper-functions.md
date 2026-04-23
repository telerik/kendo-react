---
title: Using Helper Functions
description: 'Learn how to check the KendoReact TreeView nodes by using check helper functions in React projects.'
components: ["treeview"]
slug: check_helper_funcs_treeview
position: 3
---

# Using Helper Functions

The TreeView enables you to update parent and child nodes as well as items in an indeterminate state by using helper functions.

## Setup

To implement such use case scenarios, use the following helper functions:

-   [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %})&mdash;Provides the ids of the checked TreeView items. Allows you to automatically check parent and child nodes, and to configure a single or multiple selection mode. For more information, refer to [`TreeViewCheckChangeSettings`]({% slug api_treeview_treeviewcheckchangesettings %}).
-   [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})&mdash;Based on the provided ids of the checked TreeView items, updates the data in an immutable way. Enables you to configure the application of an [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes) to the items.

{% meta height:520 %}
{% embed_file checkbox-helper/func/app.tsx preview %}
{% embed_file checkbox-helper/func/main.tsx %}
{% endmeta %}

## Customizing Single Item Checking

By default, [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %}) and [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) work with hierarchical item indices. Alternatively, you can use a custom item field which uniquely describes the item (for example, an **ID** column from a database) by setting the [`idField`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-idfield) of the TreeViewCheckDescriptor to the name of the custom field.

By default, a TreeView item is in an [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes) when its `checkIndeterminate` field is set to `true`. Also, the application of an [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes) to TreeView items is decoupled from the selection mode (single or multiple).

To enable the application of an indeterminate state, use the [`applyCheckIndeterminate`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-applycheckindeterminate) field of the TreeViewCheckDescriptor. To use a custom item field instead of the `checkIndeterminate` field:

1. Set the [`checkIndeterminateField`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-applycheckindeterminate) field of the TreeViewCheckDescriptor to the name of the custom field.
1. Set the [`checkIndeterminateField`]({% slug api_treeview_treeviewprops %}#toc-checkindeterminatefield) property of the TreeView to the name of the custom field.

```jsx
import React, { useState } from 'react';
import { TreeView } from '@progress/kendo-react-treeview';
import { handleTreeViewCheckChange, processTreeViewItems } from '@progress/kendo-react-treeview';

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

const checkIndeterminateField = 'checkUnknown';

const App = () => {
    const [check, setCheck] = useState({
        idField: 'text',
        applyCheckIndeterminate: true,
        checkIndeterminateField,
        ids: []
    });
    const [items] = useState(tree);

    const onCheckChange = (event) => {
        setCheck(
            handleTreeViewCheckChange(event, check, items, { singleMode: true })
        );
    };

    return (
        <div>
            <TreeView
                checkIndeterminateField={checkIndeterminateField}
                checkboxes={true}
                onCheckChange={onCheckChange}
                data={processTreeViewItems(items, { check })}
            />
            <div style={{ marginTop: 5 }}>
                <i>Press SPACE to check/uncheck the active item</i>
                <div className="example-config">Checked IDs: {check.ids.join(',')}</div>
            </div>
        </div>
    );
};

export default App;
```

## Customizing Multiple Item Checking

By default, [`handleTreeViewCheckChange`]({% slug api_treeview_handletreeviewcheckchange %}) and [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) work with hierarchical item indices. Alternatively, you can use a custom item field which uniquely describes the item (for example, an **ID** column from a database) by setting the [`idField`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-idfield) of the TreeViewCheckDescriptor to the name of the custom field.

By default, a TreeView item is checked when its `checked` field is set to `true`. To use a custom item field instead of the `checked` field:

1. Set the [`operationField`]({% slug api_treeview_treeviewcheckdescriptor %}#toc-operationfield) field of the TreeViewCheckDescriptor to the name of the custom field.
1. Set the [`checkField`]({% slug api_treeview_treeviewprops %}#toc-checkfield) property of the TreeView to the name of the custom field.

```jsx
import React, { useState } from 'react';
import { TreeView } from '@progress/kendo-react-treeview';
import { handleTreeViewCheckChange, processTreeViewItems } from '@progress/kendo-react-treeview';

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

const checkField = 'marked';

const App = () => {
    const [check, setCheck] = useState({ idField: 'text', operationField: checkField, ids: [] });
    const [items] = useState(tree);

    const onCheckChange = (event) => {
        const settings = { checkChildren: true, checkParents: true };
        setCheck(handleTreeViewCheckChange(event, check, items, settings));
    };

    return (
        <div>
            <TreeView
                checkField={checkField}
                checkboxes={true}
                onCheckChange={onCheckChange}
                data={processTreeViewItems(items, { check })}
            />
            <div style={{ marginTop: 5 }}>
                <i>Press SPACE to check/uncheck the active item</i>
                <div className="example-config">Checked IDs: {check.ids.join(',')}</div>
            </div>
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
