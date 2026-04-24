---
title: Reverse Selection
description: 'Enable or disable reverse selection and swap button in the KendoReact DateRangePicker in React projects.'
components: ["daterangepicker"]
slug: reverse_daterangepicker
position: 7
---

# Reverse Selection

By default, the DateRangePicker auto-corrects the selection from its calendar to a range where the `start` value is always before the `end` value.

## Getting Started

However, the DateRangePicker allows you to implement reverse date-range selection by setting its [`allowReverse`]({% slug api_dateinputs_daterangepickerprops %}) property to `true`.

The following example demonstrates how to enable the reverse selection from the MultiViewCalendar component.

{% meta height:570 %}
{% embed_file daterangepicker/reverse/basic/func/app.tsx preview %}
{% embed_file daterangepicker/reverse/basic/func/main.tsx %}
{% endmeta %}

## Swapping Start and End Dates in Ranges

Along with the reverse selection logic, you can also render a button to swap the `start` and `end` date values. To display the swap button, set the [`swapButton`]({% slug api_dateinputs_daterangepickerprops %}#toc-swapbutton) and [`allowReverse`]({% slug api_dateinputs_daterangepickerprops %}#toc-allowreverse) properties to `true`.

> To enable the reverse selection from the MultiViewCalendar without rendering a swap button, provide the `allowReverse` property and set the `swapButton` property to `false`.

{% meta height:550 %}
{% embed_file daterangepicker/reverse/swap/func/app.tsx preview %}
{% embed_file daterangepicker/reverse/swap/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
