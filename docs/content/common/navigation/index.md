---
title: Getting Started
page_title: React Keyboard Navigation Component & Overview | KendoReact UI
description: 'Get a free trial of the React Keyboard Navigation by KendoReact. Add out-of-the-box keyboard navigation to all your components and make them more accessible.'
components: ["general"]
slug: overview_navigation
position: 1
---

# KendoReact Keyboard Navigation Overview

The KendoReact Keyboard Navigation functionality helps you to implement keyboard navigation in a React application.

<CtaPanelOverview></CtaPanelOverview>

With the KendoReact Keyboard Navigation, you no longer have to spend time thinking about events handling and managing the focus in your application.

## Implementing KendoReact Keyboard Navigation

To enable the basic navigation with the left and right arrow keys:

1. Wrap the elements that require keyboard navigation in an HTML element. This is the root element (navigation scope).
1. Add a ref and a `keydown` event handler to the root element.
1. To initialize the Keyboard Navigation component, pass to it an object with the following properties:

-   `root`—The ref object of the root DOM element.
-   `selectors`—An array of CSS selectors, from which the navigation elements will be queried from the root element (e.g. `root.querySelectorAll(selectors.join(','))`). Make sure their order matches the navigation elements order.
-   `keyboardEvents`—Add a `keydown` object with `ArrowLeft` and `ArrowRight` handlers. The handlers' names match the `key` property of the [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
-   `tabIndex`—The tabIndex that the Navigation will use.

1. Attach `keydown` event to the root element.

The code snippet below shows how to configure basic navigation with the left and right arrows for a set of button components.

```js-no-run
const navigation = React.useMemo(
    () => new Navigation({
        root,
        selectors: ['.k-button-group > button'],
        keyboardEvents: {
            keydown: {
                ArrowRight: (target, nav, ev) => {
                    ev.preventDefault();
                    nav.focusNext(target);
                },
                ArrowLeft: (target, nav, ev) => {
                    ev.preventDefault();
                    nav.focusPrevious(target);
                }
            }
        },
        tabIndex: 0
    }), []
);
```

The following example demonstrates the above Keyboard Navigation configuration in action.

Use the `left` and `right` arrow keys to navigate.

{% meta height:200 %}
{% embed_file navigation/basic/app.tsx preview %}
{% embed_file navigation/basic/main.tsx %}
{% endmeta %}

## Using Keyboard Navigation in a List

The next example builds upon the basic configuration by adding the following:

-   Handling the `Space` key allows you to expand and collapse the TreeList items.
-   Scrolling to the viewport is added when the focused item is not visible.

Use the `up` and `down` arrow keys to navigate.

{% meta height:580 %}
{% embed_file navigation/list/app.tsx preview %}
{% embed_file navigation/list/main.tsx %}
{% embed_file navigation/list/nav-utils.ts %}
{% embed_file navigation/list/treelist.tsx %}
{% embed_file navigation/list/data.ts %}
{% endmeta %}

## Using Keyboard Navigation in an HTML Table

To implement the Keyboard Navigation for an HTML table, use additional functions that define which DOM element in the table to focus on every subsequent user action.

Use the `up`, `down`, `left` and `right` arrow keys to navigate.

{% meta height:300 %}
{% embed_file navigation/grid/app.tsx preview %}
{% embed_file navigation/grid/main.tsx %}
{% embed_file navigation/grid/utils.ts %}
{% endmeta %}

> The Keyboard Navigation is part of the [KendoReact Common Utilities]({% slug overview_common %}) component library. The procedures for installing, importing, and using the Common Utilities are identical for all components in the package. To learn how to use the Keyboard Navigation and the rest of the Common Utilities, see the [`Getting Started with the KendoReact Common Utilities`]({% slug overview_common %}) guide.

## Suggested Links

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Getting Started with KendoReact Navigation]({% slug api_common_navigation %})
-   [KendoReact Navigation Options]({% slug api_common_navigationoptions %})
