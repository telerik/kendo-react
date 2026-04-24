title: Restrict the Window to the Viewport
description: An example of how to restrict the KendoReact Window to the viewport
type: how-to
page_title: Restrict the Window to the Viewport - KendoReact Window
slug: window-restrict-to-viewport
tags: window, restrict window, viewport
ticketid: 1659188
res_type: kb
category: knowledge-base

---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>8.1.1</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact Window</td>
        </tr>
    </tbody>
</table>

## Description

The KendoReact Window component can be dragged anywhere on the screen by the end user. How to restrict the end user from dragging it beyond a container viewport?

## Solution

You can achieve that by using the Window position to determine if it is inside the set boundaries of the desired area and to restrict its movement inside them.
In the [onMove]({% slug api_dialogs_windowprops %}#toc-onmove) event, you can get the left and top CSS positions of the Window component. You can use them to control the left and top positions of the Window, by setting them to state variables at a specific condition, and passing them to the [left]({% slug api_dialogs_windowprops %}#toc-left) and [top]({% slug api_dialogs_windowprops %}#toc-top) properties of the Window component.

{% meta  height:760 %}
{% embed_file window/restrict-window-to-viewport/app.jsx preview %}
{% embed_file window/restrict-window-to-viewport/main.jsx %}
{% endmeta %}
