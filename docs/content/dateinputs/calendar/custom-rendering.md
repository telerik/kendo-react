---
title: Customization
description: 'Override or modify the default rendering for the child components of the KendoReact Calendar.'
components: ["calendar"]
slug: custom_rendering_calendar
position: 11
---

# Customization

The Calendar enables the user to render custom components instead of the default ones and, in this way, to customize most of the child Calendar components which are otherwise inaccessible.

The user can replace the following default Calendar components with custom ones:

-   [`CalendarCell`](#toc-cells-inside-the-view)&mdash;Renders the cells inside the Calendar view.
-   [`CalendarWeekCell`](#toc-cells-inside-the-week-column)&mdash;Renders the cells inside the Calendar week column.
-   [`CalendarNavigationItem`](#toc-items-in-the-side-navigation)&mdash;Renders the items in the Navigation of the Calendar.
-   [`CalendarHeaderTitle`](#toc-titles-of-current-views)&mdash;Renders the title for the current Calendar view.

## Cells inside the View

You can customize or completely replace each individual cell inside the Calendar view with a custom component by passing it to the [`cell`]({% slug api_dateinputs_calendarprops %}#toc-cell) property to the Calendar. The `cell` property accepts either a `Class` or a `Function` React Component. Both `Class` and `Function` receive relevant information about the state of the cell through the [`props of the Calendar`]({% slug api_dateinputs_calendarcellprops %}).

### Modifying the Cells

To modify an individual cell inside the Calendar view, use the [`CalendarCell`]({% slug api_dateinputs_calendarcell %}) component from the `@progress/kendo-date-dateinputs` package. `CalendarCell` will acquire custom behavior and will modify only some of the cells.

> For the `CalendarCell` component to work properly, pass back all properties.

The following demo shows how you can customize the color ot the `CalendarCell` to display the weekend dates in red.

{% meta height:410 %}
{% embed_file calendar/custom/cell/func/app.tsx preview %}
{% embed_file calendar/custom/cell/func/main.tsx %}
{% endmeta %}

### Overriding the Default Properties

The `cell` property allows you to pass any `<td />` element as a `CalendarCell`. This approach is useful for gaining full control over the cell because the `CalendarCell` component will render additional elements for the default styling.

> For the custom cell to allow date selection, manually pass or handle the `onClick` event.

The following example demonstrates how you can override the CalendarCell and display a tooltip over the disabled dates.

{% meta height:410 %}
{% embed_file calendar/custom/override/func/app.tsx preview %}
{% embed_file calendar/custom/override/func/main.tsx %}
{% endmeta %}

## Other Child Components

Similar to the `cell` property, the Calendar allows you to modify or override other child element through its [`weekCell`]({% slug api_dateinputs_calendarprops %}#toc-weekcell), [`headerTitle`]({% slug api_dateinputs_calendarprops %}#toc-headertitle), and [`navigationItem`]({% slug api_dateinputs_calendarprops %}#toc-navigationitem) properties.

### Cells inside the Week Column

The [`CalendarWeekCell`]({% slug api_dateinputs_calendarweekcell %}) component represents the week number. `CalendarWeekCell` is only visible in the `month` view of the Calendar and if the [`weekNumber`]({% slug api_dateinputs_calendarprops %}#toc-weeknumber) property is set to `true`. `CalendarWeekCell` will receive relevant information about its state through the [`CalendarWeekCellProps`]({% slug api_dateinputs_calendarweekcellprops %}).

> For the `CalendarWeekCell` component to work properly, pass back all properties.

The following demo shows how you can use roman numbers in the week numbers column and customize their color with a custom css class.

{% meta height:410 %}
{% embed_file calendar/custom/weekCell/func/customProvider.tsx %}
{% embed_file calendar/custom/weekCell/func/customWeekCell.tsx %}
{% embed_file calendar/custom/weekCell/func/app.tsx preview %}
{% embed_file calendar/custom/weekCell/func/main.tsx %}
{% embed_file calendar/custom/weekCell/func/style.css %}
{% endmeta %}

### Items in the Side Navigation

The [`CalendarNavigationItem`]({% slug api_dateinputs_calendarnavigationitem %}) component represents a list item in the side navigation which provides fast navigation in the current view of the Calendar. `CalendarNavigationItem` will receive relevant information about its state through the [`CalendarNavigationItemProps`]({% slug api_dateinputs_calendarnavigationitemprops %}).

> For the `CalendarNavigationItem` component to work properly, pass back all properties.

The following example demonstrates how to change the color of the CalendarNavigationItem through custom css class.

{% meta height:410 %}
{% embed_file calendar/custom/navigationItem/func/customNavigationItem.tsx %}
{% embed_file calendar/custom/navigationItem/func/app.tsx preview %}
{% embed_file calendar/custom/navigationItem/func/main.tsx %}
{% embed_file calendar/custom/navigationItem/func/styles.css %}
{% endmeta %}

### Titles of Current Views

The [`CalendarHeaderTitle`]({% slug api_dateinputs_calendarheadertitle %}) component represents the title of the current Calendar view and also functions as a button for changing the current view. `CalendarHeaderTitle` will receive relevant information about its state through the [`CalendarHeaderTitleProps`]({% slug api_dateinputs_calendarheadertitleprops %})

> For the `CalendarHeaderTitle` component to work properly, pass back all properties.

The following demo displays how you can add an icon to the CalendarHeaderTitle that indicates whether the current view is century.

{% meta height:410 %}
{% embed_file calendar/custom/headerTitle/func/customHeaderTitle.tsx %}
{% embed_file calendar/custom/headerTitle/func/app.tsx preview %}
{% embed_file calendar/custom/headerTitle/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Calendar]({% slug api_dateinputs_calendar %})
-   [API Reference of the CalendarCell]({% slug api_dateinputs_calendarcell %})
-   [API Reference of the CalendarWeekCell]({% slug api_dateinputs_calendarweekcell %})
-   [API Reference of the CalendarNavigationItem]({% slug api_dateinputs_calendarnavigationitem %})
-   [API Reference of the CalendarHeaderTitle]({% slug api_dateinputs_calendarheadertitle %})
-   [React Date Inputs](slug:overview_dateinputs)
