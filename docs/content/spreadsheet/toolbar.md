---
title: Toolbar
description: 'Explore the toolbar feature of the KendoReact Spreadsheet component and start using it in your React projects.'
components: ["spreadsheet"]
slug: toolbar_spreadsheet
position: 20
---

# Toolbar

The Spreadsheet toolbar can render both built-in and [custom tools](#toc-custom-tools). In this article, you will learn which are the available tools in the Spreadsheet toolbar, how to reorder them, and how to define your custom tools collection.

## Built-in Tools

By default, the Spreadsheet displays all its built-in tools rendered in three different tabs—**File**, **Home**, and **Insert**. You can use the `toolbar` prop to enable only some of the tools, customize the tabs, or change their default order.

The following example demonstrates the basic configuration options for the Spreadsheet toolbar tools, which will be used by default if no [`tools`]({% slug api_spreadsheet_spreadsheettab %}) are set. You can also add `ToolbarSeparator` components to visually split the tools.

{% meta height:740 %}
{% embed_file toolbar/func/app.tsx preview %}
{% embed_file toolbar/func/main.tsx %}
{% embed_file toolbar/func/toolbar.ts %}
{% endmeta %}

## Custom Tools

The Spreadsheet allows you to define an entirely custom collection of tabs and tools. In the sample below, you will see how to add a custom `Alert JSON` tool to the Spreadsheet toolbar and pass it to the tools collection in a custom tab. You can also call any of the built-in tools functionality programmatically like demonstrated in the `Bold` button click handler below:

{% meta height:770 %}
{% embed_file custom-tools/func/app.tsx preview %}
{% embed_file custom-tools/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the KendoReact Spreadsheet]({% slug api_spreadsheet %})
-   [API Reference of the SpreadsheetTab]({% slug api_spreadsheet_spreadsheettab %})
