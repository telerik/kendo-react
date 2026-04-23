---
title: View Selection
description: 'Define the first view that the KendoReact MultiViewCalendar initially renders in React projects and control the view level to which the user can navigate.'
components: ["multiviewcalendar"]
slug: viewselection_multiviewcalendar
position: 6
---

# View Selection

The MultiViewCalendar allows the user to pre-define its initially rendered view or the depth of its view selection.

## Active Views

To define the first view that the MultiViewCalendar initially renders, use the [`defaultActiveView`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-defaultactiveview) property. The [`ActiveView`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-activeview) type defines the following possible view options:

-   `month`&mdash;Shows the days of the month.
-   `year`&mdash;Shows the months of the year.
-   `decade`&mdash;Shows the years of the decade.
-   `century`&mdash;Shows the decades of the century.

{% meta height:380 %}
{% embed_file multiviewcalendar/views/active/func/app.tsx preview %}
{% embed_file multiviewcalendar/views/active/func/main.tsx %}
{% endmeta %}

## View Selection Depth

The MultiViewCalendar enables you to control the view depth to which the user can navigate. To determine its navigation view depth, use the [`bottomView`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-bottomview) property. To limit the topmost view that user can reach, use the [`topView`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-topview) property.

{% meta height:380 %}
{% embed_file multiviewcalendar/views/depth/func/app.tsx preview %}
{% embed_file multiviewcalendar/views/depth/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiViewCalendar]({% slug api_dateinputs_multiviewcalendarprops %})
-   [React Date Inputs](slug:overview_dateinputs)
