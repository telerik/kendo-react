---
title: Overview
description: 'React Time Picker allows users to select a time via dropdown or input, improving form functionality and UX in apps.'
components: ["timepicker"]
slug: overview_timepicker
position: 1
---

# React Time Picker Overview

The KendoReact TimePicker represents a time-list where the user can enter or pick time values.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the TimePicker in action.

{% meta height:570 %}
{% embed_file timepicker/overview/basic/func/app.tsx preview %}
{% embed_file timepicker/overview/basic/func/main.tsx %}
{% embed_file timepicker/overview/basic/func/styles.css %}
{% endmeta %}

> The React Time Picker is part of the [KendoReact Date Inputs]({% slug overview_dateinputs %}) component library. The procedures for installing, importing, and using the Date Inputs are identical for all components in the package. To learn how to use the TimePicker and the rest of the Date Inputs, see the [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %}) guide.

## React Time Picker Key Features

-   [Disabled TimePicker]({% slug disabled_timepicker %})&mdash;To prevent users from interacting with the TimePicker, you can render it in a disabled state until specific requirements are met.
-   [Controlled TimePicker]({% slug controlled_timepicker %})&mdash;By using the controlled mode, you can manage both the selected value and the visibility of the popup through React state.
-   [Default value]({% slug default_value_timepicker %})&mdash;The TimePicker allows you to configure an initial value and the initial state of the popup.
-   [Time limits]({% slug timeranges_timepicker %})&mdash;The TimePicker provides options for configuring a specific time limit that allows the user to select a time only within that predefined range.
-   [Incremental steps]({% slug incrementalsteps_timepicker %})&mdash;You can adjust the default step for increasing and decreasing the time values.
-   [Formats]({% slug formats_timepicker %})&mdash;The TimePicker allows you to control the time format.
-   [Placeholders]({% slug placeholders_timepicker %})&mdash; You can render a text hint for the TimePicker's input field and provide descriptions for the format sections.
-   [Forms support]({% slug forms_timepicker %})&mdash;You can easily integrate the TimePicker with the [KendoReact Form component]({% slug overview_form %}), set validation requirements, and prevent the submission of invalid forms.
-   [Custom rendering]({% slug custom_rendering_timepicker %})&mdash;The TimePicker allows you to customize its rendering and transform the appearance of its child components.
-   [Integration with JSON]({% slug jsonintegration_timepicker %})&mdash;You can bind the TimePicker to dates that are serialized as strings.
-   [Events]({% slug events_timepicker %})&mdash;You can further tailor the behavior of the TimePicker to your specific requirements by handling its events.
-   [Globalization]({% slug globalization_dateinputs %})&mdash;The TimePicker provides globalization features allowing you to create applications that can be used all over the world.
-   [Keyboard navigation]({% slug keyboard_navigation_timepicker %})&mdash;The TimePicker supports numerous keyboard shortcuts that allow users to interact with the component.
-   [Accessibility]({% slug accessibility_timepicker %})&mdash;The TimePicker is accessible for screen readers and provides full WAI-ARIA support.

## Suggested Links

-   [API Reference of the TimePicker]({% slug api_dateinputs_timepicker %})
-   [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %})
-   [React Date Inputs](slug:overview_dateinputs)
