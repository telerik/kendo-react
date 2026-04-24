---
title: Stack Order
description: 'Set the stack order (z-index) of the KendoReact Popup in React projects.'
components: ["popup"]
slug: stackorder_popup
position: 7
---

# Stack Order

The Popup component is often used with other components, such as the DropDownList or the DatePicker, to display specific related content.

> Since version `4.13.0`, the Popup component will automatically calculate its z-index with other KendoReact components. You still need to configure it when using third-party components.

To render the Popup on top of the other elements, set its `z-index` by using CSS. By default, the `z-index` of the Popup is 100.

If you use the Popup inside components whose `z-index` is higher than the `z-index` of the Popup (for example, the [Dialog]({% slug overview_dialog %}) or the [Window]({% slug overview_window %}), you have to increase the `z-index` stack order of the Popup element over CSS.

```jsx-no-run
.k-animation-container {
    z-index: 10003; // set the desired value based on the application requirements
}
```

## Suggested Links

-   [API Reference of the Popup]({% slug api_popup %})
