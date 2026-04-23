---
title: Responsive Design
description: 'Get started with the KendoReact Pager and use its responsive design support.'
components: ["pager"]
slug: responsive_pager
position: 1
---

# Responsive Design

The Pager supports responsive web design by adapting its layout based on the set width or the available screen size. To enable the responsive layout, set the [`responsive`](slug://api_data-tools_pagerprops#toc-responsive) property to `true`.

## Visible Pager Elements

Based on its width, the Pager component determines which internal elements will be rendered. When the Pager width is greater than or equal to 768 pixels, it will display all elements as follows:

-   The [**Previous**](slug://api_data-tools_pagerprops#toc-previousNext) and [**Next**](slug://api_data-tools_pagerprops#toc-previousNext) buttons.
-   Page number buttons or a numeric input:
    -   If the Pager's [`type`](slug://api_data-tools_pagerprops#toc-type) is set to `'numeric'`, then the page number buttons will be rendered.
    -   If the Pager's [`type`](slug://api_data-tools_pagerprops#toc-type) is set to `'input'`, a numeric input will be rendered.
-   The [drop-down list with the page sizes](slug://api_data-tools_pagerprops#toc-pageSizes).
-   The [`info`](slug://api_data-tools_pagerprops#toc-info) element.

## Breakpoints

When the Pager width is less than the width of the screen, some of its elements are hidden as follows:

-   If Pager's [`type`](slug://api_data-tools_pagerprops#toc-type) is set to `'numeric'`, it transforms to `'input'`.
-   Then the `info` element will be hidden.
-   Then the `Page` title will be hidden.
-   Then the `items per page` title will be hidden.
-   Then the page-size drop-down list will also be hidden.

The following example demonstrates the different Pager layouts based on its width. Try to resize the browser width to see the different layouts:

{% meta height:220 %}
{% embed_file pager/responsive/func/app.tsx preview %}
{% embed_file pager/responsive/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the Pager Props](slug://api_data-tools_pagerprops)
