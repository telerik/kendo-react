---
title: Overview
description: 'Get an overview of the features the KendoReact DateInput delivers and use the component in React projects.'
components: ["dateinput"]
slug: overview_dateinput
position: 1
---

# KendoReact DateInput Overview

The KendoReact DateInput represents an input field that recognizes and formats scheduling values such as dates.

The KendoReact DateInput component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-dateinputs package](https://www.npmjs.com/package/@progress/kendo-react-dateinputs).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the DateInput in action.

{% meta height:450 %}
{% embed_file dateinput/overview/basic/func/app.tsx preview %}
{% embed_file dateinput/overview/basic/func/main.tsx %}
{% embed_file dateinput/overview/basic/func/styles.css %}
{% endmeta %}

> The DateInput is part of the [KendoReact Date Inputs]({% slug overview_dateinputs %}) component library. The procedures for installing, importing, and using the Date Inputs are identical for all components in the package. To learn how to use the DateInput and the rest of the Date Inputs, see the [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %}) guide.

## Key Features

-   [Disabled state]({% slug disabled_dateinput %})&mdash;To prevent users from interacting with the DateInput, you can render it in a disabled state until specific requirements are met.
-   [Spin buttons]({% slug spinbuttons_dateinput %})&mdash;The end-users can take advantage of the intuitive spin buttons that increase or decrease the selected date by a predefined step.
-   [Incremental steps]({% slug incrementalsteps_dateinput %})&mdash;You can adjust the default step for increasing and decreasing each part of the date values.
-   [Date limits]({% slug dateranges_dateinput %})&mdash;You can configure a specific date limit that allows the user to select a date only within that predefined range.
-   [Formats]({% slug formats_dateinput %})&mdash;The `format` property allows you to control how the DateInput displays the dates.
-   [Placeholders]({% slug placeholders_dateinput %})&mdash; The DateInput allows you to render a text hint, floating label, and provide descriptions for its date format sections.
-   [Forms Support]({% slug forms_dateinput %})&mdash;With the forms, you can validate input values and prevent the submission of incomplete or invalid forms.
-   [Globalization]({% slug globalization_dateinputs %})&mdash;The DateInput comes with globalization features allowing you to create applications that can be used all over the world.
-   [Keyboard navigation]({% slug keyboard_navigation_dateinput %})&mdash;The DateInput supports various keyboard shortcuts that allow users to interact with the component.
-   [Accessibility]({% slug accessibility_dateinput %})&mdash;The DateInput is accessible for screen readers and provides full WAI-ARIA support.

## Suggested Links

-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %})
-   [React Date Inputs](slug:overview_dateinputs)
