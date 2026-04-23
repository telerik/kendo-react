---
title: Keyboard Navigation
description: 'Use keyboard navigation inside the KendoReact OrgChart'
components: ["orgchart"]
slug: keyboard_navigation_orgchart
position: 8
---

# KeyBoard Navigation

The keyboard navigation of the OrgChart can be enabled using the [`navigatable`]({% slug api_orgchart_orgchartprops %}#toc-navigatable) prop of the component.

The OrgChart supports the following keyboard shortcuts:

| SHORTCUT      | DESCRIPTION                                                                                                                    |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| `Down arrow`  | When focus is on a closed node, opens the node. When focus is on an open node, moves the focus to the first child node.        |
| `Up arrow`    | When focus is on an open node, closes the node. When focus is on an end node or a closed node, moves focus to its parent node. |
| `Left arrow`  | Moves focus to the previous node that is focusable without opening or closing a node.                                          |
| `Right arrow` | Moves focus to the next node that is focusable without opening or closing a node.                                              |
| `Home`        | Moves focus to the first node that is focusable without opening or closing a node.                                             |
| `End`         | Moves focus to the last node that is focusable without opening or closing a node.                                              |
| `Enter`       | Triggers the [`onItemAction`]({% slug api_orgchart_orgchartprops %}#toc-onItemAction) event                                    |

{% meta height:680 %}
{% embed_file keyboard-navigation/app.tsx preview %}
{% embed_file keyboard-navigation/main.tsx %}
{% embed_file keyboard-navigation/flat-data.js %}
{% endmeta %}

## Suggested Links

-   [Getting Started with KendoReact](https://www.telerik.com/try/kendo-react-ui)
-   [API Reference of the KendoReact OrgChart]({% slug api_orgchart %})
-   [KendoReact End User License Agreement](https://www.telerik.com/purchase/license-agreement/progress-kendoreact)
