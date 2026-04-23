---
title: Prevent Mouse Wheel and Non-Numeric Characters in NumericTextBox
description: Learn how to prevent the mouse wheel from changing the value and restrict non-numeric characters in a NumericTextBox component.
type: how-to
page_title: Prevent Mouse Wheel and Non-Numeric Characters in KendoReact NumericTextBox
slug: numerictextbox-prevent-mousewheel-and-non-numeric-characters
tags: input, inputs, numerictextbox, mouse wheel, non-numeric characters
ticketid:
res_type: kb
category: knowledge-base
components: ["numerictextbox"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>10.1.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact NumericTextBox</td>
        </tr>
    </tbody>
</table>

## Description

This article explains how to prevent the mouse wheel from changing the value within a NumericTextBox component. It also provides a solution to restrict the input of non-numeric characters, allowing only numeric values and the decimal separator.

## Solution

To prevent the mouse wheel from changing the value and restrict non-numeric characters, you can add event listeners for the wheel and keydown events of the input element of the NumericTextBox. Within these event listeners, conditionally stop the propagation of the events.

Here's an example demonstrating this approach:

{% meta height:300 %}
{% embed_file inputs/numerictextbox-prevent-mousewheel-and-non-numeric-characters/app.jsx preview %}
{% embed_file inputs/numerictextbox-prevent-mousewheel-and-non-numeric-characters/main.jsx %}
{% endmeta %}
