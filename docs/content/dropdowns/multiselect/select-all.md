---
title: Select All
description: 'Enable a built-in Select all option in the KendoReact MultiSelect to quickly select or deselect all items in React projects.'
components: ['multiselect']
slug: select_all_multiselect
position: 6
tag: new
release_tag: Q3 2026
---

# Select All

The KendoReact MultiSelect provides a built-in Select all option that allows users to toggle all currently applicable items with a single interaction. This article covers the following scenarios:

-   [Basic usage](#toc-basic-usage)
-   [Checkboxes](#toc-checkboxes)
-   [Summary tags](#toc-summary-tags)
-   [Controlled select all with virtualization](#toc-controlled-select-all)

## Basic Usage

To enable the select all functionality, set the [`selectAll`]({% slug api_dropdowns_multiselectprops %}#toc-selectall) property to `true`. This renders a sticky "Select all" item at the top of the popup list. Clicking it selects all non-disabled items in the list; clicking it again deselects them.

{% meta height:440 %}
{% embed_file multiselect/select-all-basic/func/app.tsx preview %}
{% embed_file multiselect/select-all-basic/func/main.tsx %}
{% endmeta %}

## Checkboxes

To render checkboxes next to the select-all header and each list item, set the [`checkboxes`]({% slug api_dropdowns_multiselectprops %}#toc-checkboxes) property to `true`. The checkbox state reflects the current selection—fully checked when all items are selected, indeterminate when some are selected, and unchecked when none are selected.

{% meta height:510 %}
{% embed_file multiselect/select-all-checkboxes/func/app.tsx preview %}
{% embed_file multiselect/select-all-checkboxes/func/main.tsx %}
{% endmeta %}

## Summary Tags

When many items are selected, the MultiSelect can collapse tag chips into a summary. Use the [`summarizeAfter`]({% slug api_dropdowns_multiselectprops %}#toc-summarizeafter) property to specify how many individual tags to show before displaying a summary tag with the remaining count.

{% meta height:420 %}
{% embed_file multiselect/select-all-summarize/func/app.tsx preview %}
{% embed_file multiselect/select-all-summarize/func/main.tsx %}
{% endmeta %}

## Controlled Select All

For advanced scenarios such as virtualization where the MultiSelect only receives a page of data at a time, use the [`onSelectAllChange`]({% slug api_dropdowns_multiselectprops %}#toc-onselectallchange) event to delegate the select-all logic to the consumer. When `onSelectAllChange` is provided, the component fires the event instead of performing the built-in toggle, giving you full control over which items get selected.

The following example demonstrates using `onSelectAllChange` with virtual scrolling, filtering, grouping, and custom values.

{% meta height:470 %}
{% embed_file multiselect/select-all/func/app.tsx preview %}
{% embed_file multiselect/select-all/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
-   [Virtualization]({% slug virtualization_multiselect %})
-   [Filtering]({% slug filtering_multiselect %})
