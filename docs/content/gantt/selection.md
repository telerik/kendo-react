---
title: Selection
description: 'Get started with the React Gantt by KendoReact supporting selection of a single row or multiple rows.'
components: ["gantt"]
slug: selection_gantt
position: 6
---

# Selection

The Gantt enables the user to select single or multiple cells and rows. It also provides default selection implementation from the `getSelectedState` utility function.

## Getting Started

The Gantt selection can be enabled by:

1. Set the [`selectable`]({% slug api_gantt_ganttprops %}#toc-selectable) option.
1. Use the [`onSelectionChange`]({% slug api_gantt_ganttselectionchangeevent %}) event.
1. Optionally use the [`getSelectedState`]({% slug api_data-tools_getselectedstate %}) utility function for default selection behavior.

As a result, the Gantt allows you to:

-   Select single cell or row
-   Select multiple cells or rows
-   Select range of cells or rows by dragging

The `selectedField` option represents a field inside the data collection which determines the rows that will render as selected.

{% meta height:580 %}
{% embed_file selection-basic/func/app.tsx preview %}
{% embed_file selection-basic/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Gantt](slug://overview_gantt)
