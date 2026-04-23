---
title: Positioning
description: 'Learn how to position the KendoReact AppBar component in relation to the page content.'
components: ["appbar"]
slug: positioning_appbar
position: 2
---

# Positioning

The AppBar enables you to specify its position relative to the page content.

## Position

To specify where the AppBar will be displayed, use the [`position`]({% slug api_layout_appbarprops %}#toc-position) property.

The AppBar provides the following options for setting its position:

-   `top`(Default)&mdash;Positions the AppBar at the top of the content. Setting the `position` property to `top` requires adding the AppBar component before the page content. The position property applies CSS `top: 0` style in [`fixed mode`]({% slug api_layout_appbarprops %}#toc-positionMode) and also adds a `box-shadow` to the bottom of the AppBar.
-   `bottom`&mdash;Positions the AppBar at the bottom of the content. Setting the `position` property to `bottom` requires adding the AppBar component after the page content. The position property applies CSS `bottom: 0` style in [`fixed mode`]({% slug api_layout_appbarprops %}#toc-positionMode) and also adds a `box-shadow ` to the top of the AppBar.

{% meta height:470 %}
{% embed_file appbar/position/func/app.tsx preview %}
{% embed_file appbar/position/func/main.tsx %}
{% endmeta %}

## Position Mode

To specify the type of positioning mode used for the AppBar, use the [`positionMode`]({% slug api_layout_appbarprops %}#toc-positionMode) property.

The AppBar provides the following options for setting the position mode:

-   `static`(Default)&mdash;Does not position the AppBar in any special way. It is positioned according to the normal flow of the page.
-   `sticky`&mdash;Positions the AppBar based on the user's scroll position. A sticky element toggles between static and fixed CSS [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property, depending on the scroll position.
-   `fixed`&mdash;Positions the AppBar relative to the viewport. It always stays in the same place even if the page is scrolled.

> When you render the AppBar with `positionMode={'fixed'}`, the dimension of the element doesn't impact the rest of the page. This can cause parts of the content to be invisible, behind the AppBar. In this case either set padding of the page content or set `sticky` position mode.

{% meta height:550 %}
{% embed_file appbar/position-mode/func/app.tsx preview %}
{% embed_file appbar/position-mode/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

*   [API Reference of the AppBar]({% slug api_layout_appbar %})
*   [API Reference of the AppBarProps]({% slug api_layout_appbarprops %})
