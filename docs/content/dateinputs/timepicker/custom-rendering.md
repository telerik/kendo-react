---
title: Customization
description: 'Override or modify the default rendering for the child components of the KendoReact TimePicker.'
components: ["timepicker"]
slug: custom_rendering_timepicker
position: 10
---

# Customization

The TimePicker enables the user to render custom components instead of the default ones and, in this way, to customize most of the child TimePicker components which are otherwise inaccessible.

The user can replace the following TimePicker components with custom ones:

-   [`DateInput`](#toc-customizing-the-dateinput)&mdash;Renders the input field in the TimePicker.
-   [`Popup`](#toc-customizing-the-popup)&mdash;Renders the Popup which contains the Calendar.

## Customizing the DateInput

The TimePicker and the [DateInput]({% slug api_dateinputs_dateinput %}) communicate through the [`DateInputChangeEvent`]({% slug api_dateinputs_dateinputchangeevent %}). In order for the TimePicker to work correctly with any form of time selection, provide a fully working `input` which calls the `onChange` property.

The following example demonstrates how to replace the default DateInput component with three native `<input />` elements. To enable the user only to change a property and not have full control over the rendered content, pass a modified DateInput.

{% meta height:450 %}
{% embed_file timepicker/custom/dateinput/func/customDateInput.tsx %}
{% embed_file timepicker/custom/dateinput/func/app.tsx preview %}
{% embed_file timepicker/custom/dateinput/func/main.tsx %}
{% endmeta %}

## Customizing the Popup

The [Popup]({% slug overview_popup %}) component inside the TimePicker acts as a container element with an absolute position. The TimePicker changes the [`show`]({% slug api_popup_popupprops %}#toc-show) property on clicking the **Toggle** button or on `blur`. You can control `show` through the TimePicker.

The following example demonstrates how to further customize the Popup&mdash;the complete overriding of the Popup is also possible.

{% meta height:480 %}
{% embed_file timepicker/custom/popup/func/customPopup.tsx %}
{% embed_file timepicker/custom/popup/func/app.tsx preview %}
{% embed_file timepicker/custom/popup/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Time Picker](slug://overview_timepicker)
-   [API Reference of the DateInput]({% slug api_dateinputs_dateinput %})
-   [API Reference of the Popup]({% slug api_popup_popup %})
-   [React Date Inputs](slug:overview_dateinputs)
