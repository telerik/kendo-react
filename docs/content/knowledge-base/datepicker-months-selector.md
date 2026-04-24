---
title: Customizing DatePicker to Render Months Instead of Days
description: Learn how to customize the KendoReact DatePicker component to render months of each year and allow the selection of a month.
type: how-to
page_title: Month Selector Using KendoReact DatePicker
meta_title: Month Selector Using KendoReact DatePicker
slug: datepicker-months-selector
tags: kendoreact, datepicker, months, customization
res_type: kb
ticketid: 1708259
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>KendoReact DatePicker</td>
</tr>
<tr>
<td> Version </td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I want to customize the [KendoReact DatePicker](slug:overview_datepicker) component to render only the months of each year. The goal is to allow users to select a month instead of a specific day in the calendar view.

This knowledge base article also answers the following questions:

-   How can I make the KendoReact DatePicker show months instead of days?
-   How to implement a month picker using KendoReact DatePicker?
-   What is the correct approach to customize the KendoReact DatePicker for month selection?

## Solution

To customize the KendoReact DatePicker component for rendering months instead of days, follow these steps:

1. Create a custom Calendar component to render months only.
2. Use the custom Calendar component within the DatePicker.

<demo metaUrl="knowledge-base/dateinputs/datepicker-months-selector/" height="430"></demo>

### Key Points

-   The `CustomCalendar` component replaces the standard calendar view with buttons representing months.
-   Use the `onChange` method to update the selected month.
-   Attach the `CustomCalendar` component to the `calendar` prop of the DatePicker.

## See Also

-   [KendoReact DatePicker Documentation](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/)
-   [KendoReact API Reference](https://www.telerik.com/kendo-react-ui/components/)
-   [StackBlitz Example of Month Picker Customization](https://stackblitz.com/edit/react-8dnkf2fe-sfgbkz55?file=app%2Fapp.jsx,app%2FcustomCalendar.jsx)
