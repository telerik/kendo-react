---
title: Sparkline
description: 'Get an overview of the features the KendoReact Sparkline delivers and use the component in React projects.'
components: ["chart"]
slug: overview_sparkline_charts
subject: Sparkline Chart
position: 2
---

# KendoReact Sparkline Overview

The KendoReact Sparkline is a tiny chart without axes, coordinates, legends, titles, or other chart-specific elements.

<CtaPanelOverview></CtaPanelOverview>

Generally, Sparklines are simple, word-sized graphics that can be embedded in tables, headlines, or chunks of text. The concept for their graphical representation was developed by [Edward Tufte](https://en.wikipedia.org/wiki/Edward_Tufte). The KendoReact Sparkline is a version of the [KendoReact Chart]({% slug overview_chart_charts %}) which is tailored for this specific application. While the standard KendoReact Chart component behaves like a block element, due to its rendering inside a `div` element to allow for an easy embedding in texts, the Sparkline behaves like an inline element due to its rendering inside a `span` element.

While, typically, Sparklines are line charts, they can also be rendered as the following Chart types:

-   Line (default)
-   Bar (Data Bars)
-   Column
-   Area
-   Pie
-   Bullet

The KendoReact Sparkline component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-charts package](https://www.npmjs.com/package/@progress/kendo-react-charts).

The following example demonstrates the Sparkline in action.

{% meta height:300 %}
{% embed_file sparkline/func/app.tsx preview %}
{% embed_file sparkline/func/main.tsx %}
{% endmeta %}

The procedures for installing, importing, and using all components from the [KendoReact Charts library]({% slug overview_charts %}) are identical. To learn how to use the Sparkline and the rest of the components from the package, see the [Getting Started with the KendoReact Charts]({% slug getstarted_charts %}) guide.

## Key Features

-   Sparklines include shortcuts for setting the [`data`]({% slug api_charts_sparklineprops %}#toc-data) and [`type`]({% slug api_charts_sparklineprops %}#toc-type) series options.
-   The Sparkline also supports all configuration options that are applicable for the Categorical series type of the [Chart]({% slug overview_seriestypes_charts %}).

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [Series Types]({% slug area_seriestypes_charts %})
-   [Troubleshooting]({% slug troubleshooting_charts %})
-   [Glossary]({% slug glossary_charts %})
