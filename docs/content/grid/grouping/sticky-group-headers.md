---
title: Sticky Group Headers and Footers
description: 'Learn how to enable sticky (pinned) group headers and footers in the KendoReact Data Grid so they remain visible while scrolling through grouped data.'
components: ['datagrid']
slug: groupingstickyheaders_grid
position: 40
subject: Grouping feature of the Grid
---

# Sticky Group Headers and Footers

The KendoReact Data Grid supports sticky (pinned) group header and footer rows that remain visible at the top or bottom of the scrollable area while the user scrolls through grouped data. This makes it easy to always see which group the current data belongs to and what the aggregate values are.

<CtaPanelOverview></CtaPanelOverview>

## Enabling Sticky Group Headers

To pin the group header row to the top of the Grid content area, set the [`stickyHeaders`]({% slug api_grid_gridgroupablesettings %}#toc-stickyheaders) property of the [`groupable`]({% slug api_grid_gridprops %}#toc-groupable) prop to `true`.

When the user scrolls down and the original group header row leaves the viewport, a sticky copy of it is displayed at the top of the visible area. As the user scrolls past the end of the group, the sticky header scrolls away with the group.

```tsx-no-run
<Grid
    groupable={{
        enabled: true,
        stickyHeaders: true
    }}
    // ...
>
```

## Enabling Sticky Group Footers

To pin the group footer row to the bottom of the Grid content area, set the [`stickyFooters`]({% slug api_grid_gridgroupablesettings %}#toc-stickyfooters) property of the [`groupable`]({% slug api_grid_gridprops %}#toc-groupable) prop to `true`. To display group footers, also set the [`footer`]({% slug api_grid_gridgroupablesettings %}#toc-footer) option to `'visible'` or `'always'`.

When the user scrolls and the original group footer row is not yet in the viewport, a sticky copy of it is displayed at the bottom of the visible area.

```tsx-no-run
<Grid
    groupable={{
        enabled: true,
        footer: 'visible',
        stickyHeaders: true,
        stickyFooters: true
    }}
    // ...
>
```

## Example

The following example demonstrates a Grid with both sticky group headers and sticky group footers enabled. Scroll the Grid content to see the headers and footers pinned at the edges of the viewport.

{% meta height:580 %}
{% embed_file sticky-group-headers/func/app.tsx preview %}
{% embed_file sticky-group-headers/func/main.tsx %}
{% embed_file sticky-group-headers/func/gd-products.ts %}
{% embed_file sticky-group-headers/func/gd-interfaces.ts %}
{% endmeta %}

## Suggested Links

-   [Overview of Grouping]({% slug groupingbasics_grid %})
-   [Grouping Aggregates]({% slug groupingaggregates_grid %})
-   [Locked Group Headers]({% slug groupinglockedcolumns_grid %})
-   [API Reference of the Grid Component]({% slug api_grid_gridprops %})
