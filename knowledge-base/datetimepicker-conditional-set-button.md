---
title: DateTimePicker disable Set button based on the selected date
description: An example on how to disable and enable the Set button based on the chosen date in the KendoReact DateTimePicker
type: how-to
page_title: Disable Set Button - KendoReact DateTimePicker
slug: datetimepicker-disable-set-button
tags: datetimepicker, set button, datetimepicker disabled
res_type: kb
category: knowledge-base
---

## Environment

<table>
<tbody>
<tr>
<td>Product Version</td>
<td>v7.2.3</td>
</tr>
<tr>
<td>Product</td>
<td>Progress® KendoReact</td>
</tr>
</tbody>
</table>

## Description

I want to enhance the DateTimePicker such that the `Set` Button is disabled and the component appears as invalid based on a the selected date. For example, I do not want to allow the user to selected any dates that are after today's date.

## Solution

You can achieve this by rendering a custom Calendar component for the DateTimePicker using its `calendar` property. This allows getting the selected date by the user and compare it with a certain condition (ex: if the date is after today's date).

In order to disable selecting a certain date based on the condition, you can add the `k-disabled` class to the `k-time-accept` DOM element, and remove it when the condition is true. Moreover, set a `valid` state variable to either true or false based on the condition, and pass it to the `valid` property of the DateTimePicker. This is done in order to highlight the component with a red border when the condition is false.

```jsx
if (date1 <= date2) {
  document
    .getElementsByClassName("k-time-accept")[0]
    .classList.remove("k-disabled");
  setValid(true);
} else {
  document
    .getElementsByClassName("k-time-accept")[0]
    .classList.add("k-disabled");
  setValid(false);
}
```

This is an example that demonstrates this approach.

{% meta id height:560 %}
{% embed_file dateinputs/datetimepicker-conditional-set-button/main.jsx preview %}
{% endmeta %}

For more information on customizing the Calendar of the DateTimePicker, and using its `valid` prop, check the following article respectively:

- https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/custom-rendering/#toc-customizing-the-calendar
- https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/forms/
