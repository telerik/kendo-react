---
title: Icon SplitButton
description: 'Add image, predefined, or custom icons to the KendoReact SplitButton in React projects.'
components: ["splitbutton"]
slug: icons_splitbutton
position: 3
---

# Icon SplitButton

You can enhance the textual content of the SplitButton by adding image, predefined, or custom icons to it.

With a view to the web standards, it is better to use a background image because icons are used for decoration and not for representing structural content.

The SplitButton provides options for:

-   Using the [built-in KendoReact icons]({% slug icons %}). They are applied through the [`icon`]({% slug api_buttons_splitbuttonprops %}#toc-icon) property and displayed as a background for the SplitButton.
-   Adding FontAwesome and other font icons. They are implemented by setting the required third-party CSS classes through the [`iconClass`]({% slug api_buttons_splitbuttonprops %}#toc-iconclass) property.
-   Adding image icons. They are applied through the [`imageUrl`]({% slug api_buttons_splitbuttonprops %}#toc-imageurl) property of the component.

The following example demonstrates how to use the different types of icons in a SplitButton.

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
```

{% meta height:340 %}
{% embed_file splitbutton/icons/func/app.tsx preview %}
{% embed_file splitbutton/icons/func/main.tsx %}
{% embed_file splitbutton/icons/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the SplitButton]({% slug api_buttons_splitbuttonprops %})
