---
title: Customization
description: 'Override or modify the default rendering for the child components of the KendoReact MultiViewCalendar.'
components: ["multiviewcalendar"]
slug: custom_rendering_multiviewcalendar
position: 9
---

# Customization

The MultiViewCalendar enables the user to render custom components instead of the default ones and, in this way, to customize most of the child MultiViewCalendar components which are otherwise inaccessible.

The user can replace the following MultiViewCalendar components with custom ones:

-   [`CalendarCell`](#toc-cells-inside-the-view)&mdash;Renders the cells inside the Calendar view.
-   [`CalendarWeekCell`](#toc-cells-inside-the-week-column)&mdash;Renders the cells inside the Calendar week column.
-   [`CalendarHeaderTitle`](#toc-titles-of-current-views)&mdash;Renders the title for the current MultiViewCalendar view.

## Cells inside the View

You can customize or completely replace with a custom component each individual cell inside the MultiViewCalendar view by passing a [`cell`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-cell) property to the MultiViewCalendar. The `cell` property accepts either a `Class` or `Function` React Component. Both `Class` and `Function` receive relevant information about the state of the cell through the [props of the Calendar]({% slug api_dateinputs_calendarcellprops %}).

### Modifying the Cells

To modify an individual cell inside the MultiViewCalendar view, use the [`CalendarCell`]({% slug api_dateinputs_calendarcell %}) component from the `@progress/kendo-date-dateinputs` package. `CalendarCell` will acquire custom behavior and will modify only some of the cells.

> For the `CalendarCell` component to work properly, pass back all properties.

```js-no-run
import { MultiViewCalendar, CalendarCell } from '@progress/kendo-react-dateinputs';
```

{% meta height:380 %}
{% embed_file multiviewcalendar/custom/cell/func/app.tsx preview %}
{% embed_file multiviewcalendar/custom/cell/func/main.tsx %}
{% endmeta %}

### Overriding the Default Properties

The `cell` property allows you to pass any `<td />` element as a `CalendarCell`. This approach is useful for gaining full control over the cell because the `CalendarCell` component will render additional elements for the default styling.

> For the custom cell to allow date selection, manually pass or handle the `onClick` event.

{% meta height:380 %}
{% embed_file multiviewcalendar/custom/default/func/app.tsx preview %}
{% embed_file multiviewcalendar/custom/default/func/main.tsx %}
{% endmeta %}

## Other Child Components

Similar to the `cell` property, the MultiViewCalendar allows you to modify or override other child element through its [`weekCell`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-weekcell), [`headerTitle`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-headertitle).

```js-no-run
    import {
        CalendarCell,
        CalendarWeekCell,
        CalendarHeaderTitle
    } from '@progress/kendo-react-dateinputs';
```

### Cells inside the Week Column

The [`CalendarWeekCell`]({% slug api_dateinputs_calendarweekcell %}) component represents the week number. `CalendarWeekCell` is only visible in the `month` view of the MultiViewCalendar and if the [`weekNumber`]({% slug api_dateinputs_calendarprops %}#toc-weeknumber) property is set to `true`. `CalendarWeekCell` will receive relevant information about its state through the [`CalendarWeekCellProps`]({% slug api_dateinputs_calendarweekcellprops %}).

{% meta height:380 %}
{% embed_file multiviewcalendar/custom/weekCell/func/customProvider.ts %}
{% embed_file multiviewcalendar/custom/weekCell/func/customWeekCell.tsx %}
{% embed_file multiviewcalendar/custom/weekCell/func/app.tsx preview %}
{% embed_file multiviewcalendar/custom/weekCell/func/main.tsx %}
{% endmeta %}

### Titles of Current Views

The [`CalendarHeaderTitle`]({% slug api_dateinputs_calendarheadertitle %}) component represents the title of the current MultiViewCalendar view and also functions as a button for changing the current view. `CalendarHeaderTitle` will receive relevant information about its state through the [`CalendarHeaderTitleProps`]({% slug api_dateinputs_calendarheadertitleprops %}).

> For the `CalendarHeaderTitle` component to work properly, pass back all properties.

{% meta height:380 %}
{% embed_file multiviewcalendar/custom/headerTitle/func/customHeaderTitle.tsx %}
{% embed_file multiviewcalendar/custom/headerTitle/func/app.tsx preview %}
{% embed_file multiviewcalendar/custom/headerTitle/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Customizing the DateRangePicker]({% slug custom_rendering_daterangepicker %})
-   [API Reference of the MultiViewCalendar]({% slug api_dateinputs_multiviewcalendar %})
-   [API Reference of the CalendarCell]({% slug api_dateinputs_calendarcell %})
-   [API Reference of the CalendarWeekCell]({% slug api_dateinputs_calendarweekcell %})
-   [API Reference of the CalendarHeaderTitle]({% slug api_dateinputs_calendarheadertitle %})
-   [React Date Inputs](slug:overview_dateinputs)
