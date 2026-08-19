---
title: Sticky Group Headers and Footers
description: 'Learn how to enable sticky (pinned) group headers and footers in the KendoReact Grid so they remain visible while scrolling through grouped data.'
components: ['grid']
slug: groupingstickyheaders_grid
position: 40
subject: Grouping feature of the Grid
---

# Sticky Group Headers and Footers

The KendoReact Grid supports sticky (pinned) group header and footer rows that remain visible at the top or bottom of the scrollable area while the user scrolls through grouped data. This makes it easy to always see which group the current data belongs to and what the aggregate values are.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates a Grid with both sticky group headers and sticky group footers enabled. Scroll the Grid content to see the headers and footers pinned at the edges of the viewport.

{% meta height:700 %}
{% embed_file sticky-group-headers/func/app.tsx preview %}
{% embed_file sticky-group-headers/func/main.tsx %}
{% embed_file sticky-group-headers/func/gd-products.ts %}
{% embed_file sticky-group-headers/func/gd-interfaces.ts %}
{% endmeta %}

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

## Sticky Group Headers and Footers Across Grouping Modes

You can keep group header and footer rows visible while scrolling across all four `displayMode` values.

The following example demonstrates a Grid with sticky group headers and footers that you can toggle on and off. Use the display mode selector to verify that stickiness is preserved in every grouping layout mode.

<demo metaUrl="grid/grouping/sticky-headers-footers/" height="680"></demo>

## Suggested Links

- [Overview of Grouping]({% slug groupingbasics_grid %})
- [Grouping Aggregates]({% slug groupingaggregates_grid %})
- [Locked Group Headers]({% slug groupinglockedcolumns_grid %})
- [API Reference of the Grid Component]({% slug api_grid_gridprops %})
