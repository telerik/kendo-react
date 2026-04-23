---
title: Drilldown
description: 'Use the KendoReact Charts in React projects to drill-down data.'
components: ["chart"]
slug: drilldown_charts
subject: Drilldown Chart
position: 3
---

# Drilldown Charts

The KendoReact Charts supports drilldown functionality for exploring data.

The drilldown function allows users to click on a point (bar, pie segment, etc.) in order to navigate to a different view.
The new view usually contains finer grained data about the selected item, like breakdown by product of the selected category.

<CtaPanelOverview></CtaPanelOverview>

The view hierarchy is displayed in a breadcrumb for easy navigation back to previous views.

## Getting Started

To configure a chart series for drilldown:

-   Set the [`drilldownField`](slug:api_charts_chartseriesitemprops#toc-drilldownfield) prop to a field that contains the drilldown value. For categorical charts, this is typically the category field.
-   Create a component that will create the [`ChartSeriesItem`](slug:api_charts_chartseriesitem) for the detail series. The component should pass all props to the series.
-   Set the [`drilldownSeriesFactory`](slug:api_charts_chartseriesitemprops#toc-drilldownseriesfactory) prop to the component that will create the series.
-   Add a [`ChartBreadcrumb`](slug:api_charts_chartbreadcrumb) component.
-   Add a state variable to store the [`ChartDrilldownState`](slug:api_charts_chartdrilldownstate).
-   Add a shared handler for the Chart [`onDrilldown`](slug:api_charts_chartprops#toc-ondrilldown) event and the Breadcrumb [`onDrilldownStateChange`](slug:api_charts_chartbreadcrumb#toc-ondrilldownstatechange) event. Set the state variable to the [`nextState`](slug:api_charts_drilldownevent#toc-nextstate) passed to the handler.

{% meta height:500 %}
{% embed_file chart/drilldown/overview/func/app.tsx preview %}
{% embed_file chart/drilldown/overview/func/main.tsx %}
{% endmeta %}

## Adding Drilldown Levels

To add a drilldown level, set the [`drilldownSeriesFactory`](slug:api_charts_chartseriesitemprops#toc-drilldownseriesfactory) prop on the parent series to a component that returns a [`ChartSeriesItem`](slug:api_charts_chartseriesitem) for the drilldown series. The component must pass all props to the `ChartSeriesItem` component.

The following example demonstrates a Drilldown Chart with 3 levels.

{% meta height:500 %}
{% embed_file chart/drilldown/multi-level/func/app.tsx preview %}
{% embed_file chart/drilldown/multi-level/func/main.tsx %}
{% endmeta %}

## Customizing the Breadcrumb Root Item

To customize the root item of the Chart Breadcrumb, set the [`rootItem`](slug:api_charts_chartbreadcrumbprops#toc-rootitem) prop to an object implementing the Breadcrumb [`DataModel`](slug:api_layout_datamodel) interface.

{% meta height:500 %}
{% embed_file chart/drilldown/breadcrumb-custom-root/func/app.tsx preview %}
{% embed_file chart/drilldown/breadcrumb-custom-root/func/main.tsx %}
{% endmeta %}

## Custom Navigation

To implement a custom drilldown navigation:

-   Add a navigation component, such as the [`Breadcrumb`](slug:overview_breadcrumb).
-   Add a state variable to store the [`ChartDrilldownState`](slug:api_charts_chartdrilldownstate).
-   Update the navigation with the current dropdown level in the [`onDrilldown`](slug:api_charts_chartprops#toc-ondrilldown) handler for the Chart.
-   Update the drilldown state after navigation.

{% meta height:700 %}
{% embed_file chart/drilldown/custom-navigation/func/app.tsx preview %}
{% embed_file chart/drilldown/custom-navigation/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Breadcrumb - Overview](slug:overview_breadcrumb)
-   [API Reference of the Charts]({% slug api_charts %})
