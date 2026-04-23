---
title: Custom Pagination
description: 'Get started with the paging functionality of the KendoKendoReact Data Grid and learn how to split content into pages.'
components: ["datagrid"]
slug: custom_paging_grid
position: 20
tier: premium
subject: Custom Pagination feature of the Grid
---

# KendoReact Data Grid Custom Pagination

Custom paging in the KendoReact Data Grid allows you to replace the default pager with a custom component tailored to your needs.

<CtaPanelOverview></CtaPanelOverview>

## Implementing a Custom Pager

You can render a custom Pager component in the Grid through its [`pager`](slug:api_grid_gridprops#toc-pager) property.

To use a custom pager:

-   Set the [pageable](slug:api_grid_gridprops#toc-pageable) property to true.
-   Define the [pager](slug:api_grid_gridprops#toc-pager) property with a custom component.
-   Handle the [onPageChange](slug:api_grid_gridprops#toc-onpagechange) or [onDataStateChange](slug:api_grid_gridprops#toc-ondatastatechange) event to manage the paging state.

The following example demonstrates how to implement a custom pager using a [Slider]({% slug overview_slider %}) and [NumericTextBox]({% slug overview_numerictextbox %}) to navigate between pages.

{% meta height:470 %}
{% embed_file paging-custom-pager/func/app.tsx preview %}
{% embed_file paging-custom-pager/func/main.tsx %}
{% endmeta %}

## Custom Responsive Pager

It is possible to render a custom responsive pager by passing a component to the Grid [`pager`]({% slug api_grid_gridprops %}#toc-pager) prop. In the below example a [Pager]({% slug overview_pager %}) component is used with its [`responsive`]({% slug api_data-tools_pagerprops %}#toc-responsive) prop set to `true`

{% meta height:480 %}
{% embed_file custom-pager-responsive/func/app.tsx preview %}
{% embed_file custom-pager-responsive/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Paging APIs

-   [Grid Pageable Prop]({% slug api_grid_gridprops %}#toc-pageable)
-   [Grid Pager Prop]({% slug api_grid_gridprops %}#toc-pager)
-   [API Reference of the PagerSettings]({% slug api_grid_gridpagersettings %})

## Suggested Links

-   [Pager Component](slug:overview_pager)
-   [Numeric Paging](slug:basic_paging_grid)
