---
title: Fast Navigation Bar
description: 'Render and configure the side navigation bar of the KendoReact Calendar in React projects.'
components: ["calendar"]
slug: sidebar_calendar
position: 9
---

# Fast Navigation Bar

By default, the Calendar renders a left-hand side navigation bar. Based on the current [active view]({% slug activeview_calendar %}), the bar lets users quickly select a month or a year to work with.

You can hide the left-hand side navigation bar by setting the [`navigation`]({% slug api_dateinputs_calendarprops %}#toc-navigation) property of the Calendar. When set to `false`, the left-hand side navigation bar of the Calendar is hidden.

The following demo lets you show and hide the left-hand side navigation bar of the Calendar through a switch.

{% meta height:460 %}
{% embed_file calendar/sidebar/func/app.tsx preview %}
{% embed_file calendar/sidebar/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Calendar]({% slug api_dateinputs_calendar %})
-   [React Date Inputs](slug:overview_dateinputs)
