---
title: Prevent Arrow Keys from Changing NumericTextBox Value
description: Learn how to prevent the ArrowUp and ArrowDown keys from increasing or decreasing the value of the KendoReact NumericTextBox while still allowing parent key events to fire.
type: how-to
page_title: Prevent Arrow Key Value Change in KendoReact NumericTextBox
slug: numerictextbox-prevent-arrow-key-value-change
tags: input, inputs, numerictextbox, arrow keys, prevent, onkeydown, controlled, onChange
ticketid: 1712227
res_type: kb
category: knowledge-base
components: ["numerictextbox"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>14.2.1</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact NumericTextBox</td>
        </tr>
    </tbody>
</table>

## Description

I want to prevent the ArrowUp and ArrowDown keys from increasing or decreasing the value in the NumericTextBox. Using `stopPropagation` in `onKeyDownCapture` blocks the event from reaching a parent `onKeyDown` handler (for example, on a wrapping `<td>`), which is not desirable.

## Solution

Intercept the value update inside the [`onChange`](slug:api_inputs_numerictextboxprops#onChange) handler. Check whether the change was triggered by an arrow key or mouse wheel event and, if so, skip the state update. This approach blocks the value change without calling `stopPropagation`, so the parent `onKeyDown` handler still fires normally.

<demo metaUrl="knowledge-base/inputs/numerictextbox-prevent-arrow-key-value-change/" height="350"></demo>

## See Also

-   [KendoReact NumericTextBox](slug:overview_numerictextbox)
-   [API Reference of the NumericTextBox](slug:api_inputs_numerictextboxprops)
