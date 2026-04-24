---
title: Overview
description: 'Get an overview of the features the KendoReact Filter delivers and use the component in React projects.'
components: ["filter"]
slug: overview_filter
position: 0
---

# KendoReact Filter Overview

The KendoReact Filter provides options for building and editing a [`CompositeFilterDescriptor`]({% slug api_kendo-data-query_compositefilterdescriptor %}) object.

<CtaPanelOverview></CtaPanelOverview>

The KendoReact Filter is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-data-tools package](https://www.npmjs.com/package/@progress/kendo-react-data-tools).

You can configure the Filter by using the following properties:

-   [`fields`]({% slug api_data-tools_filterprops %}#toc-fields)&mdash;Sets the fields settings which describes field names, labels, filter editor components and filter operators.
-   [`value`]({% slug api_data-tools_filterprops %}#toc-value)&mdash;Sets the value of the filter.
-   [`onChange`]({% slug api_data-tools_filterprops %}#toc-onchange)&mdash;The onChange event which will be triggered when the Filter value is changed.

{% meta height:785 %}
{% embed_file filter/overview/app.tsx preview %}
{% embed_file filter/overview/main.tsx %}
{% endmeta %}

> The Filter is part of the [KendoReact Data Tools]({% slug overview_datatools %}) component library. The procedures for installing, importing, and using the Data Tools are identical for all components in the package. To learn how to use the Filter and the rest of the Data Tools, see the [Getting Started with the KendoReact Data Tools]({% slug overview_datatools %}) guide.

## Key Features

The Filter provides [globalization support]({% slug globalization_datatools %}).

## Suggested Links

-   [API Reference of the Filter Props]({% slug api_data-tools_filterprops %})
