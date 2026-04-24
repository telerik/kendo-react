---
title: Positioning
description: 'Learn how to position the KendoReact FloatingActionButton in a relation to web page or React components.'
components: ["floatingactionbutton"]
slug: positioning_floatingactionbutton
position: 4
---

# Positioning

The FloatingActionButton component provides options for positioning in relation to the page or React Component.
The position can be either fixed with regard to the browser viewport, or absolute with regard to a relative container.

## Alignment

The FloatingActionButton allows you to set horizontal and vertical alignment in relation to the container.

The available [align]({% slug api_buttons_floatingactionbuttonprops %}#toc-align) keys are:

-   `horizontal`&mdash; Defines the possible horizontal alignment of the Floating Action Button..
    -   `start`&mdash;Uses the start point of the container.
    -   `center`&mdash;Uses the center point of the container.
    -   `end`(Default)&mdash;Uses the end point of the container
-   `vertical`&mdash; Defines the possible vertical alignment of the Floating Action Button..
    -   `top`&mdash;Uses the top point of the container.
    -   `middle`&mdash;Uses the middle point of the container.
    -   `bottom`(Default)&mdash;Uses the bottom point of the container.

> Centering the Floating Action Button in both horizontal and vertical dimension is not a typical use case. Still, it is possible to achieve such a layout with appropriate offsets. Setting horizontal: "center" and vertical: "middle" at the same time is not supported.

{% meta height:500 %}
{% embed_file floatingactionbutton/position/align/func/app.tsx preview %}
{% embed_file floatingactionbutton/position/align/func/main.tsx %}
{% endmeta %}

## Align Offset

The FloatingActionButton allows you to specify an offset with regard to its current position set by the [align]({% slug api_buttons_floatingactionbuttonprops %}#toc-align) property.
To specify the offset, use the [alignOffset]({% slug api_buttons_floatingactionbuttonprops %}#toc-alignOffset) property.

Normally, the floating button is positioned next to the boundaries of its container with a default offset of `16px`.

If the button is in a corner, positive offsets will move the button horizontally or vertically further from this corner. For example, if the button is aligned at top-left, positive offsets can move it down or right. If the button is aligned at bottom-right, positive offsets will move it up or left.

Floating buttons in the middle of the container's boundary have a slightly different behavior. Positive offsets will move those buttons closer to a corner or closer to the center of the container. For example, if the button is aligned at bottom-center, a positive x offset will move it right, and a positive y offset will move it up.

Negative offsets can move floating buttons in the opposite direction. For example, they can be used to force a button to overflow the boundaries of its container.

The available [alignOffset]({% slug api_buttons_floatingactionbuttonprops %}#toc-alignOffset) keys are:

-   `x`&mdash; Defines the horizontal offset of the FloatingActionButton.
-   `y`&mdash; Defines the vertical offset of the FloatingActionButton.

{% meta height:200 %}
{% embed_file floatingactionbutton/position/align-offset/func/app.tsx preview %}
{% embed_file floatingactionbutton/position/align-offset/func/main.tsx %}
{% endmeta %}

## Position Mode

To specify the type of positioning used for the FloatingActionButton, use the [`positionMode`]({% slug api_buttons_floatingactionbuttonprops %}#toc-positionMode) property.

The FloatingActionButton provides the following options for setting the position mode:

-   `fixed`(Default)&mdash;Positions the FloatingActionButton relative to the viewport. It always stays in the same place even if the page is scrolled.
-   `absolute`&mdash;Positions the FloatingActionButton relative to the nearest positioned ancestor. If an absolutely positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

{% meta height:550 %}
{% embed_file floatingactionbutton/position/position-mode/func/app.tsx preview %}
{% embed_file floatingactionbutton/position/position-mode/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the FloatingActionButton]({% slug api_buttons_floatingactionbutton %})
-   [API Reference of the FloatingActionButtonProps]({% slug api_buttons_floatingactionbuttonprops %})
