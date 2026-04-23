---
title: Controlled Mode
description: 'Control the KendoReact Calendar in React projects by setting its default values, controlling its state, or programmatically changing its selected value.'
components: ["calendar"]
slug: controlled_calendar
position: 2
---

# Controlled Mode

By default, the Calendar is in an uncontrolled state.

The Calendar provides options for:

-   [Setting default values for the uncontrolled state](#toc-setting-default-values)
-   [Controlling the state](#toc-controlling-the-state)
-   [Programmatically changing the selected value](#toc-dynamically-chaning-the-value)

## Setting Default Values

The Calendar enables you to provide the initial values without the need to fully control its state by using the [`defaultValue`]({% slug api_dateinputs_calendarprops %}#toc-defaultvalue), [`focusedDate`]({% slug api_dateinputs_calendarprops %}#toc-focuseddate), and [`defaultActiveView`]({% slug api_dateinputs_calendarprops %}#toc-defaultactiveview) properties.

{% meta height:410 %}
{% embed_file calendar/controlled-mode/default-values/func/app.tsx preview %}
{% embed_file calendar/controlled-mode/default-values/func/main.tsx %}
{% endmeta %}

## Controlling the State

To manage the state of the Calendar, use its [`value`]({% slug api_dateinputs_calendarprops %}#toc-value) and [`onChange`]({% slug api_dateinputs_calendarprops %}#toc-onchange) properties.

The following demo shows how you can control the value of the Calendar and display it.

{% meta height:480 %}
{% embed_file calendar/controlled-mode/controlled-state/func/app.tsx preview %}
{% embed_file calendar/controlled-mode/controlled-state/func/main.tsx %}
{% endmeta %}

## Programmatically Changing the Value

Each time the user selects a date, the Calendar calls the [`onChange`]({% slug api_dateinputs_calendarprops %}#toc-onchange) handler to update its [`value`]({% slug api_dateinputs_calendarprops %}#toc-value). To programmatically change the selected value based on external user interaction, set the new value through the state of the Calendar component.

The following demo lets you select the next or the previous Friday through external buttons by managing the state of the Calendar.

{% meta height:470 %}
{% embed_file calendar/controlled-mode/programmatically-changed-values/func/app.tsx preview %}
{% embed_file calendar/controlled-mode/programmatically-changed-values/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [React Date Inputs](slug:overview_dateinputs)
