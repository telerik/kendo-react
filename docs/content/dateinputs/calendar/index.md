---
title: Overview
description: 'Get an overview of the features the KendoReact Calendar delivers and use the component in React projects.'
components: ["calendar"]
slug: overview_calendar
position: 1
---

# KendoReact Calendar Overview

The KendoReact Calendar is a form component that represents a graphical Gregorian calendar and supports the selection of and navigation between dates and date ranges for scheduling appointments.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the Calendar in action.

{% meta height:410 %}
{% embed_file calendar/basic/func/app.tsx preview %}
{% embed_file calendar/basic/func/main.tsx %}
{% endmeta %}

> The Calendar is part of the [KendoReact Date Inputs]({% slug overview_dateinputs %}) component library. The procedures for installing, importing, and using the Date Inputs are identical for all components in the package. To learn how to use the Calendar and the rest of the Date Inputs, see the [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %}) guide.

## Key Features

-   [Disabled state]({% slug disabled_calendar %})&mdash;To prevent users from interacting with the Calendar, you can render it in a disabled state until specific requirements are met.
-   [Dates]({% slug dates_calendar %})&mdash;The built-in configuration options allow you to set the behavior of the focused and selected dates.
-   [Fast navigation bar]({% slug sidebar_calendar %})&mdash;The Calendar renders a navigation bar on the left, which allows users to switch quickly between date ranges.
-   [Active view]({% slug activeview_calendar %})&mdash;You can configure a default view that appears when the Calendar renders for the first time.
-   [View selection depth]({% slug viewdepth_calendar %})&mdash;The Calendar provides options for controlling the view depth to which the user can navigate.
-   [Date limits]({% slug dateranges_calendar %})&mdash;You can configure a specific date limit that allows the user to select dates only within that predefined range.
-   [Week number column]({% slug weeksnumbers_calendar %})&mdash;You can enable a column that displays the number of weeks.
-   [Custom rendering]({% slug custom_rendering_calendar %})&mdash;The Calendar provides various options for the rendering of custom child components, which allows you to alter the appearance of the Calendar.
-   [Integration with JSON]({% slug jsonintegration_calendar %})&mdash;As the Calendar works only with the `date` JavaScript instances, the component provides built-in options for binding it to dates that are serialized in a JSON format.
-   [Globalization]({% slug globalization_dateinputs %})&mdash;The Calendar comes with globalization features allowing you to create applications that can be used all over the world.
-   [Keyboard navigation]({% slug keyboard_navigation_calendar %})&mdash;The Calendar component supports numerous keyboard shortcuts that allow users to interact with the component.
-   [Accessibility]({% slug accessibility_calendar %})&mdash;The Calendar is accessible for screen readers and provides full WAI-ARIA support.

## Suggested Links

-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %})
-   [React Date Inputs](slug:overview_dateinputs)
