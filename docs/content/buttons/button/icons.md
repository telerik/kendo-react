---
title: Icon Button
description: 'Enhance the visual content of the KendoReact Button by adding images, or predefined and custom icons to it in React projects.'
components: ["button"]
slug: icons_button
position: 3
---

# Icon Button

You can enhance the textual content of the Button by adding image, predefined, or custom icons to it.

With a view to the web standards, it is better to use a background image because icons are used for decoration and not for representing structural content.

The Button provides options for:

-   Using the [built-in KendoReact icons]({% slug icons %}). The built-in icons are applied through the [`icon`]({% slug api_buttons_buttonprops %}#toc-icon) property and displayed as a background for the Button. To see the full list of the web font icons in KendoReact, refer to the article on [`styles and layout`]({% slug icons %}).
-   Adding image icons. They are applied through the [`imageUrl`]({% slug api_buttons_buttonprops %}#toc-imageurl) property of the component.
-   Adding FontAwesome and other font icons. They are implemented by setting the required third-party CSS classes through the [`iconClass`]({% slug api_buttons_buttonprops %}#toc-iconclass) property.
-   Adding icons before and after the Button content by setting [`startIcon`]({% slug api_buttons_buttonprops %}#toc-starticon) and [`endIcon`]({% slug api_buttons_buttonprops %}#toc-endicon) properties.

> Use [`startIcon`]({% slug api_buttons_buttonprops %}#toc-starticon) and [`endIcon`]({% slug api_buttons_buttonprops %}#toc-endicon) with [SVGIcon]({% slug api_common_svgicon %}) or small [span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) type elements.

## SVG Icon Button

To display an SVG icon inside the Button set the [`svgIcon`]({% slug api_buttons_buttonprops %}#toc-svgIcon) property of the Button to the necessary [`SVGIcon`](slug:api_common_svgicon).

{% meta height:180 %}
{% embed_file button/icons/svg/app.tsx preview %}
{% embed_file button/icons/svg/main.tsx %}
{% embed_file button/icons/svg/styles.css %}
{% endmeta %}

## Font Icon Button

To display a font icon inside the Button, depending on the font icons library, you can set the:

-   [`icon`]({% slug api_buttons_buttonprops %}#toc-icon) property to a font icon in the Kendo UI theme.

    ```html
    <Button type="button" icon="calendar">Events</Button>
    ```

-   [`iconClass`]({% slug api_buttons_buttonprops %}#toc-iconClass) property to a third-party font icon library (such as [FontAwesome](https://fontawesome.com/)).
    ```html
    <Button type="button" iconClass="fa fa-heart"/>
    ```

The following example demonstrates how to set the `icon` property of the Button.

{% meta height:180 %}
{% embed_file button/icons/icon/app.tsx preview %}
{% embed_file button/icons/icon/main.tsx %}
{% embed_file button/icons/icon/styles.css %}
{% endmeta %}

The following example demonstrates how to set the `iconClass` property of the Button.

{% meta height:180 %}
{% embed_file button/icons/iconClass/app.tsx preview %}
{% embed_file button/icons/iconClass/main.tsx %}
{% embed_file button/icons/iconClass/styles.css %}
{% endmeta %}

## Image Icons

To display an image as the icon, use the [`imageUrl`]({% slug api_buttons_buttonprops %}#toc-imageurl) prop to pass the image path as URL.

{% meta height:180 %}
{% embed_file button/icons/imageurl/app.tsx preview %}
{% embed_file button/icons/imageurl/main.tsx %}
{% embed_file button/icons/imageurl/styles.css %}
{% endmeta %}

## Start and End Icons

To set a start or end icon, use the [`startIcon`]({% slug api_buttons_buttonprops %}#toc-starticon) and [`endIcon`]({% slug api_buttons_buttonprops %}#toc-endicon) props to pass an SVG icon or a custom element.

{% meta height:180 %}
{% embed_file button/icons/startendicons/app.tsx preview %}
{% embed_file button/icons/startendicons/main.tsx %}
{% embed_file button/icons/startendicons/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Button]({% slug api_buttons_buttonprops %})
-   [Integration with Styled Components](https://www.telerik.com/kendo-react-ui/components/knowledge-base/styled-components)
