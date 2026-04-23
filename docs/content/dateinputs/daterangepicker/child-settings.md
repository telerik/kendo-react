---
title: Configuring Child Components
description: 'Apply additional configuration to the child components of the KendoReact DateRangePicker.'
slug: child_settings_daterangepicker
position: 9
---

# Configuring Child Components

By default, the DateRangePicker sets only the [`value`]({% slug api_dateinputs_daterangepicker %}#toc-value) and [`show`]({% slug api_dateinputs_daterangepicker %}#toc-show) properties for its child components.

To implement additional settings, use the options which the DateRangePicker provides for the following child components:

-   [Date Inputs](#toc-configuring-dateinputs)
-   [Popups](#toc-configuring-the-popup)
-   [MultiViewCalendars](#toc-configuring-the-multiviewcalendar)

## Configuring DateInputs

To enable the passing of additional props to the start and end child Date Inputs, configure the [`startDateInputSettings`]({% slug api_dateinputs_daterangepickerprops %}#toc-startdateinputsettings) and [`endDateInputSettings`]({% slug api_dateinputs_daterangepickerprops %}#toc-enddateinputsettings).

{% meta height:430 %}
{% embed_file daterangepicker/settings/dateinputs/func/app.tsx preview %}
{% embed_file daterangepicker/settings/dateinputs/func/main.tsx %}
{% endmeta %}

## Configuring the Popup

To enable the passing of additional props to the Popup child component, configure the [`popupSettings`]({% slug api_dateinputs_daterangepickerprops %}#toc-popupsettings).

{% meta height:430 %}
{% embed_file daterangepicker/settings/popup/app.tsx preview %}
{% embed_file daterangepicker/settings/popup/main.tsx %}
{% endmeta %}

## Configuring the MultiViewCalendar

To enable the passing of additional props to the MultiViewCalendar child component, configure the [`calendarSettings`]({% slug api_dateinputs_daterangepickerprops %}#toc-calendarsettings).

{% meta height:430 %}
{% embed_file daterangepicker/settings/calendar/func/app.tsx preview %}
{% embed_file daterangepicker/settings/calendar/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepickerprops %})
-   [startDateInputSettings]({% slug api_dateinputs_daterangepickerprops %}#toc-startdateinputsettings)
-   [endDateInputSettings]({% slug api_dateinputs_daterangepickerprops %}#toc-enddateinputsettings)
-   [popupSettings]({% slug api_dateinputs_daterangepickerprops %}#toc-popupsettings)
-   [calendarSettings]({% slug api_dateinputs_daterangepickerprops %}#toc-calendarsettings)
-   [React Date Inputs](slug:overview_dateinputs)
