---
title: Prevent Arrow Keys from Changing the Value in React DateRangePicker
description: Learn how to disable the arrow keys from modifying the selected value in the DateRangePicker component.
type: how-to
page_title: Prevent Arrow Keys from Changing the Value in DateRangePicker
slug: daterangepicker-prevent-arrow-keys
tags: daterangepicker, arrow keys, value, disable
ticketid:
res_type: kb
category: knowledge-base
components: ["daterangepicker"]
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
            <td>Progress® KendoReact DateRangePicker</td>
        </tr>
    </tbody>
</table>

## Description

In this guide, you will learn how to prevent the arrow keys from changing the selected value in the DateRangePicker component. This can be useful when you want to restrict the user from modifying the value using arrow keys.

## Solution

To prevent the arrow keys from modifying the selected value in the DateRangePicker, you can add event listeners for the keydown events of the input element and conditionally prevent the default behavior of the arrow keys.

Here is an example implementation:

{% meta height:560 %}
{% embed_file dateinputs/daterangepicker-prevent-arrow-keys/app.tsx preview %}
{% embed_file dateinputs/daterangepicker-prevent-arrow-keys/main.tsx %}
{% endmeta %}
