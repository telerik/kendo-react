---
title: Icon DropDownButton
description: 'Add image, predefined, or custom icons to the KendoReact DropDownButton in React projects.'
components: ["dropdownbutton"]
slug: icons_dropdownbutton
position: 3
---

# Icon DropDownButton

You can enhance the textual content of the DropDownButton by adding image, predefined, or custom icons to it.

With a view to the web standards, it is better to use a background image because icons are used for decoration and not for representing structural content.

The DropDownButton provides options for:

-   Using the built-in KendoReact SVG icons. They are applied through the [`svgIcon`]({% slug api_buttons_dropdownbuttonprops %}#toc-svgicon) property and displayed as a background for the DropDownButton. To see the full list of the web svg icons in KendoReact, refer to the article on our [`Design System Kit`](https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/).
-   Adding FontAwesome and other font icons. They are implemented by setting the required third-party CSS classes through the [`iconClass`]({% slug api_buttons_dropdownbuttonprops %}#toc-iconclass) property.
-   Adding image icons. They are applied through the [`imageUrl`]({% slug api_buttons_dropdownbuttonprops %}#toc-imageurl) property of the component.

The following example demonstrates how to use the different types of icons in a DropDownButton.

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
```

{% meta height:300 %}
{% embed_file dropdownbutton/icons/app.tsx preview %}
{% embed_file dropdownbutton/icons/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DropDownButton]({% slug api_buttons_dropdownbuttonprops %})
