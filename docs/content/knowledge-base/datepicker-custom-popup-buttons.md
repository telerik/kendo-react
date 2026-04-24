---
title: DatePicker with Custom Popup Buttons and Focus Handling
description: Learn how to add custom buttons in the DatePicker popup for quick date selection while properly handling focus and blur events to control popup behavior.
type: how-to
page_title: DatePicker with Custom Popup Buttons and Focus Handling - KendoReact DateInputs
slug: datepicker-custom-popup-buttons
tags: kendoreact, datepicker, custom-popup, buttons, focus-handling, context, quick-selection
ticketid:
res_type: kb
category: knowledge-base
components: ["datepicker"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact DatePicker</td>
		</tr>
	</tbody>
</table>

## Description

How can I add custom buttons in the DatePicker popup for quick date selection (such as "Today" or "Next Week") while ensuring the popup behaves correctly—staying open when interacting with custom buttons but closing when clicking outside?

This knowledge base article also answers the following questions:

-   How to add custom buttons in the KendoReact DatePicker popup?
-   How to handle focus and blur events properly in DatePicker with custom popup?
-   How to keep the popup open when interacting with custom buttons?
-   How to use React Context to manage DatePicker values from custom components?
-   How to implement quick date selection functionality?

## Solution

To add custom buttons in the DatePicker popup with proper focus handling, you need to:

1. **Create a custom Popup component** using the `popup` property of the DatePicker
2. **Use React Context** for communication between custom buttons and the main component
3. **Handle focus/blur events** properly using the `useAsyncFocusBlur` hook from `@progress/kendo-react-common`
4. **Manage popup state** through DatePicker's event handlers

The following example demonstrates a complete implementation:

{% meta height:600 %}
{% embed_file dateinputs/datepicker-custom-popup-buttons/app.tsx preview %}
{% embed_file dateinputs/datepicker-custom-popup-buttons/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact DatePicker Documentation](slug:overview_datepicker)
-   [DatePicker Custom Popup](slug:custom_rendering_datepicker)
-   [KendoReact Popup Component](slug:overview_popup)
-   [useAsyncFocusBlur Hook](slug:api_common_useasyncfocusblur)
-   [React Context Documentation](https://react.dev/reference/react/useContext)
