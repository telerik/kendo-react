---
title: Load On Demand
description: 'Get started with the KendoReact OrgChart and learn how to load its data on demand'
components: ["orgchart"]
slug: load_on_demand_orgchart
position: 3
---

# Load On Demand

The KendoReact OrgChart components allows you to lazy load its items.

The following example demonstrates this approach by setting a timeout in the [`onExpandChange`]({% slug api_orgchart_orgchartprops %}#toc-onExpandChange) event handler. After a specific interval, the new expanded state and new data are set, and the `LoadingPanel` component is removed from display.

{% meta height:680 %}
{% embed_file load-on-demand/app.tsx preview %}
{% embed_file load-on-demand/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with KendoReact](https://www.telerik.com/try/kendo-react-ui)
-   [API Reference of the KendoReact OrgChart]({% slug api_orgchart %})
-   [KendoReact End User License Agreement](https://www.telerik.com/purchase/license-agreement/progress-kendoreact)
