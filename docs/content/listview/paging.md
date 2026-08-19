---
title: Paging
description: 'Get started with the paging functionality of the KendoReact ListView and learn how to split content into pages.'
components: ["listview"]
slug: paging_listview
position: 2
---

# Paging

The KendoReact ListView can be easily integrated with the [KendoReact Pager]({% slug overview_pager %}) to split the content into multiple pages.

## Basic Usage

To page the ListView data, pass a data slice to the ListView and render a [Pager](slug:overview_pager) in the [`footer`]({slug:api_listview_listviewprops#footer) prop. Handle the [`onPageChange`](slug:api_data-tools_pagerprops#onPageChange) event to update the `skip` and `take` values and re-slice the data accordingly.

The following example demonstrates how to split ListView items across pages using the `Pager` component.

{% meta height:830 %}
{% embed_file paging/func/app.tsx preview %}
{% embed_file paging/func/main.tsx %}
{% embed_file paging/func/articles.json %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ListView]({% slug api_listview_listviewprops %})
