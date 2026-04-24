---
title: Overview
description: 'Get an overview of the features the KendoReact Pager delivers and use the component in React projects.'
components: ["pager"]
slug: overview_pager
position: 0
---

# KendoReact Pager Overview

The KendoReact Pager provides options for splitting content into pages.

<CtaPanelOverview></CtaPanelOverview>

The KendoReact Pager is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-data-tools package](https://www.npmjs.com/package/@progress/kendo-react-data-tools).

You can configure the Pager by using the following properties:

-   [`buttonCount`]({% slug api_data-tools_pagerprops %}#toc-buttonCount)&mdash;Sets the maximum numeric buttons count before the buttons are collapsed.
-   [`info`]({% slug api_data-tools_pagerprops %}#toc-info)&mdash;Toggles the information about the current page and the total number of records.
-   [`type`]({% slug api_data-tools_pagerprops %}#toc-type)&mdash;Accepts the `numeric` (buttons with numbers) and `input` (input for typing the page number) values.
-   [`pageSizes`]({% slug api_data-tools_pagerprops %}#toc-pageSizes)&mdash;Displays a menu for selecting the page size.
-   [`previousNext`]({% slug api_data-tools_pagerprops %}#toc-previousNext)&mdash;Toggles the **Previous** and **Next** buttons.
-   [`responsive`]({% slug api_data-tools_pagerprops %}#toc-responsive)&mdash;Toggles the responsive layout.
-   [`adaptive`]({% slug api_data-tools_pagerprops %}#toc-adaptive)&mdash;Toggles the adaptive page sizes drop-down.
-   [`adaptiveTitle`]({% slug api_data-tools_pagerprops %}#toc-adaptiveTitle)&mdash;Specifies the text that is rendered as title in the adaptive page sizes drop-down element.

{% meta height:450 %}
{% embed_file pager/overview/func/app.tsx preview %}
{% embed_file pager/overview/func/main.tsx %}
{% embed_file pager/overview/func/configurator.tsx %}
{% endmeta %}

> The Pager is part of the [KendoReact Data Tools]({% slug overview_datatools %}) component library. The procedures for installing, importing, and using the Data Tools are identical for all components in the package. To learn how to use the Pager and the rest of the Data Tools, see the [Getting Started with the KendoReact Data Tools]({% slug overview_datatools %}) guide.

## Key Features

The Pager provides [globalization support]({% slug globalization_datatools %}).

## Suggested Links

-   [API Reference of the Pager Props]({% slug api_data-tools_pagerprops %})
