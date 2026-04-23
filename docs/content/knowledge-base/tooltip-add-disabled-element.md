---
title: Adding a Tooltip to a Disabled Button in React
description: Learn how to add a tooltip to a disabled button in React applications using KendoReact Tooltip.
type: how-to
page_title: How to Add a Tooltip to a Disabled Button Using KendoReact Tooltip
slug: add-tooltip-disabled-button-react
tags: kendo, react, tooltip, button, disabled, ui
res_type: kb
ticketid: 1666182
components: ["tooltip"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>9.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Tooltip</td>
	    </tr>
    </tbody>
</table>

## Description

I want to add a tooltip to a disabled button in my React application. The button is part of the UI and should display additional information when hovered over, even though it is disabled. How can I achieve this functionality using the KendoReact Tooltip component?

This KB article also answers the following questions:

-   How to display tooltips for disabled elements?
-   How to use the KendoReact Tooltip with disabled buttons?
-   How can I show additional information on hover over a disabled UI element?

## Solution

To add a tooltip to a disabled button in a React application using the KendoReact Tooltip, follow these steps:

1. Wrap the KendoReact Button in a `<span>` HTML element.
2. Set the `title` attribute of the `<span>` that wraps the button.
3. Set the `display` CSS property of the `<span>` to `inline-block`.
4. Wrap the `<span>` and the disabled button both with the KendoReact Tooltip and set the `anchorElement` prop to `"target"`.

{% meta  height:900 %}
{% embed_file tooltip/add-to-disabled-element/app.tsx preview %}
{% embed_file tooltip/add-to-disabled-element/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact Tooltip Documentation](https://www.telerik.com/kendo-react-ui/components/tooltip/)
-   [KendoReact Button Documentation](https://www.telerik.com/kendo-react-ui/components/buttons/button/)
-   [Online Demo: Tooltip for Disabled Elements](https://stackblitz.com/edit/react-rjdfsk-zx5sap?file=app%2Fapp.tsx)
