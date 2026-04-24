---
title: Overview
page_title: 'React Grid Layout - Overview | KendoReact Docs & Demos'
description: 'The React Grid Layout component allows you to easily arrange the contents of the component in rows and columns in a grid structure.'
components: ["gridlayout"]
slug: overview_gridlayout
position: 1
---

# KendoReact GridLayout Overview

The KendoReact GridLayout component allows you to easily arrange the contents of the component in rows and columns in a grid structure.

It offers grid-layout system with rows and columns. It is based on the [CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/) where you can configure items per a specific row and column, as well as span content across them.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the React Grid Layout component in action and also showcases other KendoReact components&mdash;the [Calendar]({% slug overview_calendar %}), [ChipList]({% slug overview_chiplist %}) and [Card]({% slug overview_card %}) components. The components are arranged in a grid structure by defining the columns, rows, and gaps between them.

{% meta height:920 %}
{% embed_file gridlayout/overview/func/app.tsx preview %}
{% embed_file gridlayout/overview/func/main.tsx %}
{% embed_file gridlayout/overview/func/styles.css %}
{% embed_file gridlayout/overview/func/GridLayoutArticleHeader.tsx %}
{% embed_file gridlayout/overview/func/GridLayoutCardArticle.tsx %}
{% endmeta %}

> The GridLayout is part of the [KendoReact Layout]({% slug overview_layout %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the React Grid Layout and the rest of the components in the package, see the [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %}) guide.

## Key Features

-   [Rows and columns]({% slug layout_gridlayout %}#toc-rows-and-columns)&mdash; To configure the appearance of the GridLayout, you can use the `rows` and `cols` properties.
-   [Gaps]({% slug layout_gridlayout %}#toc-gaps)&mdash;The setting of the gaps is another way to alter the appearance of the GridLayout.
-   [Horizontal alignment]({% slug layout_gridlayout %}#toc-horizontal-alignment)&mdash;Four predefined values allows you to control the horizontal alignment.
-   [Vertical alignment]({% slug layout_gridlayout %}#toc-vertical-alignment)&mdash;Four predefined values allows you to control the vertical alignment.
-   [Items]({% slug items_gridlayout %}#toc-items)&mdash;The GridLayout enables you to control the position of its items.

## Frequently Asked Questions

### How to Make a Grid Layout in React? 

You can create a Grid Layout in React by leveraging the KendoReact GridLayout component. It allows you to create responsive and customizable grid layouts by utilizing the built-in grid-layout system with rows and columns.

### What is a Dynamic Grid Layout in React? 

A dynamic grid layout in React is a flexible, responsive grid system that adjusts its layout based on the content and screen size. This kind of grid layout automatically rearranges its items to fit the available space, making it an excellent choice for applications that need to handle varying content sizes, responsive designs, or complex grid structures.

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the GridLayout]({% slug api_layout_gridlayout %})
-   [API Reference of the GridLayoutProps]({% slug api_layout_gridlayoutprops %})
