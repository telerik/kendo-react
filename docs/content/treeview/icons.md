---
title: Icons
description: 'Enable the rendering customization of the KendoReact TreeView in React projects.'
components: ["treeview"]
slug: icons_treeview
position: 65
---

# TreeView Icons

The TreeView provides the option to add an icon for each node in the component. To render an icon you need to:

-   Set a value for the [`iconField`]({% slug api_treeview_treeviewprops %}#toc-iconfield) property.
-   Once the `iconField` is set, use its value as a property in the definition of each node for which you want to display an icon.

If the value of the `iconField` is set to **myIcon** the data passed to the TreeView should look similar to the following; each node definition has a `myIcon` property that receives an icon.

```js
const tree = [
  {
    text: "My Documents",
    myIcon: starIcon,
    expanded: true,
    items: [
      {
        text: "KendoReact Project",
        myIcon: xIcon,
        expanded: true,
        items: [
          {
            text: "about.html",
            myIcon: imageIcon,
          },
          .............
```

The following example demonstrates how to use the `iconField` property:

{% meta height:450 %}
{% embed_file icon/func/app.tsx preview %}
{% embed_file icon/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [TreeView Custom Rendering]({% slug rendering_treeview %})
-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
