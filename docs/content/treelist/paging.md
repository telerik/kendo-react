---
title: Paging
description: 'Get started with the paging functionality of the KendoReact TreeList and learn how to split content into pages.'
components: ["treelist"]
slug: paging_treelist
position: 110
---

# Paging

The KendoReact Data TreeList enables you to split its content into pages.

## Getting Started

To enable paging:

1. Set the [`pager`]({% slug api_treelist_treelistprops %}#toc-pager) component, [`skip`]({% slug api_treelist_treelistprops %}#toc-skip), and [`take`]({% slug api_treelist_treelistprops %}#toc-take) options of the TreeList.
1. Handle the [`onPageChange`]({% slug api_treelist_treelistprops %}#toc-onpagechange) event and pass the new `skip` and `take` values to the TreeList props.

The following example demonstrates the required configuration for paging the TreeList records.

{% meta height:490 %}
{% embed_file paging/func/app.tsx preview %}
{% embed_file paging/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Pager]({% slug api_data-tools_pagerprops %})
-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
