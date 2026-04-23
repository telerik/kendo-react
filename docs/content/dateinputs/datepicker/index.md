---
title: Overview
description: 'Try the React DatePicker component by KendoReact that covers everything from configuring default values and date ranges to form validation and keyboard shortcuts.'
components: ["datepicker"]
slug: overview_datepicker
position: 0
---

# KendoReact DatePicker Overview

The KendoReact DatePicker component offers a highly customizable interface for the user to enter and pick dates supporting different locales.

Its features cover everything from setting a default value and selecting a date range to form validation and keyboard shortcuts.

<CtaPanelOverview></CtaPanelOverview>

{% meta height:550 %}
{% embed_file datepicker/overview/func/app.tsx preview %}
{% embed_file datepicker/overview/func/main.tsx %}
{% embed_file datepicker/overview/func/styles.css %}
{% endmeta %}

This demo implements some of the features that are available in the DatePicker:

-   When the React DatePicker is initially loaded, you can render a specific default value for that date.
-   You can change the date format and render a week number column.
-   With the globalization feature, you can change the languages and cultures by using the **Locale** drop-down list.

> The DatePicker is part of the [KendoReact Date Inputs]({% slug overview_dateinputs %}) component library. The procedures for installing, importing, and using the Date Inputs are identical for all components in the package. To learn how to use the DatePicker and the rest of the Date Inputs, see the [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %}) guide.

## Key Features

-   [Setting the default value]({% slug default_value_datepicker %})&mdash;Easily configure the initial value that the DatePicker renders.
-   [Form validation]({% slug forms_datepicker %})&mdash;Validate input values, set validation requirements (such as minimum and maximum date), and prevent the submission of invalid forms.
-   [Formats]({% slug formats_datepicker %}) and [placeholders]({% slug placeholders_datepicker %})&mdash;Control the date format and implement placeholders for its input field, including custom formats.
-   [Controlled state]({% slug controlled_datepicker %})&mdash;Control the date value and popup state of the DatePicker.
-   [Disabled state]({% slug disabled_datepicker %})&mdash;To disable input, just change a single property.
-   [JSON integration]({% slug jsonbinding_datepicker %})&mdash;You can also bind the DatePicker to dates that are serialized as strings.
-   [Custom rendering]({% slug custom_rendering_datepicker %})&mdash;You can replace the DatePicker input field, calendar, and popup child components with custom ones.
-   [Date limits]({% slug dateranges_datepicker %})&mdash;Enable the user to pick a date only within a predefined min and max date range.
-   [Focused dates]({% slug dates_datepicker %})&mdash;Configure the initial focused date that the DatePicker displays.
-   [Accessibility support]({% slug accessibility_datepicker %})&mdash;The DatePicker is compliant with WAI-ARIA and Section 508.
-   [Events]({% slug events_datepicker %})&mdash;To customize the behavior of the DatePicker, you can handle the numerous events that it generates.
-   KendoReact DatePicker and all KendoReact components are natively written with TypeScript and provide all the benefits of TypeScript, such as typings, IntelliSense, and many others.

## Suggested Links

-   [API Reference of the KendoReact DatePicker]({% slug api_dateinputs_datepicker %})
-   [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %})
-   [Support Options]({% slug overview_dateinputs %}#toc-support-options)
-   [React Date Inputs](slug:overview_dateinputs)
