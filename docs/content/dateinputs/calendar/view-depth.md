---
title: View Selection Depth
description: 'Control the view depth of the KendoReact Calendar to which the user can navigate in React projects.'
components: ["calendar"]
slug: viewdepth_calendar
position: 7
---

# View Selection Depth

The Calendar enables you to limit the views to which the user can navigate. For example, you might want to constrain users to working only within the month view.

To determine its navigation view depth, use the [`bottomView`]({% slug api_dateinputs_calendarprops %}#toc-bottomview) property. To limit the topmost view that the user can reach, use the [`topView`]({% slug api_dateinputs_calendarprops %}#toc-topview) property.

The following demo lets you configure the views within which the user can navigate.

{% meta height:610 %}
{% embed_file calendar/view/func/app.tsx preview %}
{% embed_file calendar/view/func/main.tsx %}
{% embed_file calendar/view/func/ViewConfigurator.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Calendar]({% slug api_dateinputs_calendar %})
-   [React Date Inputs](slug:overview_dateinputs)
