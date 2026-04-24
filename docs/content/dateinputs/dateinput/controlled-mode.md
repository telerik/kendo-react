---
title: Controlled Mode
description: 'Control the KendoReact DateInput in React projects by setting its default values, controlling its state, or programmatically changing its selected value.'
components: ["dateinput"]
slug: controlled_dateinput
position: 3
---

# Controlled Mode

By default, the DateInput is in an uncontrolled state.

To manage the date value of the Dateinput:

1. Use its [`value`]({% slug api_dateinputs_dateinputprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_dateinputs_dateinputprops %}#toc-onchange) event.
1. Pass the new value through the props.

The following example demonstrates how to display the selected date in an outer field and how to programmatically reset the value through an external button.

{% meta height:320 %}
{% embed_file dateinput/controlled-mode/func/app.tsx preview %}
{% embed_file dateinput/controlled-mode/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Date Inputs](slug:overview_dateinputs)
