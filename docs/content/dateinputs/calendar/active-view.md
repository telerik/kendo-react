---
title: Views
description: 'Define the first view that the KendoReact Calendar initially renders in React projects.'
components: ["calendar"]
slug: activeview_calendar
position: 6
---

# Views

By default the view of the Calendar is set to month.

The [`ActiveView`]({% slug api_dateinputs_activeview %}) type defines the following possible view options:

-   `month`&mdash;Shows the days of the month.
-   `year`&mdash;Shows the months of the year.
-   `decade`&mdash;Shows the years of the decade.
-   `century`&mdash;Shows the decades of the century.

To define the first view that the Calendar initially renders, use the [`defaultActiveView`]({% slug api_dateinputs_calendarprops %}#toc-defaultactiveview) property.

{% meta height:510 %}
{% embed_file calendar/active-view/app.tsx preview %}
{% embed_file calendar/active-view/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Calendar]({% slug api_dateinputs_calendar %})
-   [React Date Inputs](slug:overview_dateinputs)
