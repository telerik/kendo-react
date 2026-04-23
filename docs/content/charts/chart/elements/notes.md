---
title: Notes
description: 'Display metadata for the series points or a specific part of an axis in the KendoReact Chart.'
components: ["chart"]
slug: notes_chart_charts
---

# Notes

The Chart notes provide a way to display metadata for series points or for a specific part of an axis.

## Series Notes

To display additional information for series points, set the [`noteTextField`]({% slug api_charts_chartseriesitemprops %}#toc-notetextfield) of the series to a field from the data which contains the information.

### Setup

The following example demonstrates how to display notes for specific points.

{% meta height:470 %}
{% embed_file chart/notes/overview/func/app.tsx preview %}
{% embed_file chart/notes/overview/func/main.tsx %}
{% endmeta %}

### Appearance

To change the way the notes are displayed, use the [`series.notes`]({% slug api_charts_chartseriesitemprops %}#toc-notes) options.

The following example demonstrates how to customize the appearance of the notes.

{% meta height:465 %}
{% embed_file chart/notes/appearance/func/app.tsx preview %}
{% embed_file chart/notes/appearance/func/main.tsx %}
{% endmeta %}

## Axis Notes

To display additional information for a point of an axis, use the `notes` configuration of the axis. To specify the positions at which the notes will be displayed, use the `data.value` configuration. The value has to be a value on the axis or the index for category axis. To set the textual content of the notes, use the `data.label.text` option. Alternatively, set the `notes.labels.content` option to a function that returns the content of each note.

The following example demonstrates how to display notes for the axes.

{% meta height:465 %}
{% embed_file chart/notes/axis/func/app.tsx preview %}
{% embed_file chart/notes/axis/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
