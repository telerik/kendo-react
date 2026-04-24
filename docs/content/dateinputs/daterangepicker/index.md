---
title: Overview
description: 'Get an overview of the features the KendoReact DateRangePicker delivers and use the component in React projects.'
components: ["daterangepicker"]
slug: overview_daterangepicker
position: 1
---

# KendoReact DateRangePicker Overview

The KendoReact DateRangePicker combines the KendoReact DateInput and MultiViewCalendar components and enables the user to enter or pick a date-range value.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the DateRangePicker in action.

{% meta height:560 %}
{% embed_file daterangepicker/overview/basic/func/app.tsx preview %}
{% embed_file daterangepicker/overview/basic/func/main.tsx %}
{% embed_file daterangepicker/overview/basic/func/styles.css %}
{% endmeta %}

> The DateRangePicker is part of the [KendoReact Date Inputs]({% slug overview_dateinputs %}) component library. The procedures for installing, importing, and using the Date Inputs are identical for all components in the package. To learn how to use the DateRangePicker and the rest of the Date Inputs, see the [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %}) guide.

## Key Features

-   [Controlled mode]({% slug controlled_daterangepicker %})&mdash;By using the controlled mode, you can manage the date value and the state of the popup in the DateRangePicker.
-   [Default value]({% slug default_value_daterangepicker %})&mdash;The `defaultValue` property allows you to configure an initial value, while the `defaultShow` property sets the initial state of the popup.
-   [Disabled DateRangePicker]({% slug disabled_daterangepicker %})&mdash;To prevent users from interacting with the DateRangePicker, you can render it in a disabled state until specific requirements are met.
-   [Focused dates]({% slug focused_daterangepicker %})&mdash;The DateRangePicker enables you to change the default focused date.
-   [Date limits]({% slug dateranges_daterangepicker %})&mdash;You can configure a specific date limit that allows the user to select dates only within that predefined range.
-   [Reverse selection]({% slug reverse_daterangepicker %})&mdash;To improve the user experience, the DateRangePicker automatically corrects the selection when the end-user selects a start value that is after the end value.
-   [Custom rendering]({% slug custom_rendering_daterangepicker %})&mdash;The DateRangePicker allows you to customize its rendering and transform the appearance of its child components like start and end date, calendar, and popup.
-   [Configuration of child components]({% slug child_settings_daterangepicker %})&mdash;The DateRangePicker provides options for customizing its child components.
-   [Globalization]({% slug globalization_dateinputs %})&mdash;The DateRangePicker provides globalization features allowing you to create applications that can be used all over the world.
-   [Keyboard navigation]({% slug keyboard_navigation_daterangepicker %})&mdash;The DateRangePicker supports keyboard shortcuts that allow users to interact with the component.
-   [Accessibility]({% slug accessibility_daterangepicker %})&mdash;The DateRangePicker is accessible for screen readers and provides full WAI-ARIA support.

## Suggested Links

-   [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepickerprops %})
-   [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %})
-   [React Date Inputs](slug:overview_dateinputs)
