---
title: Configuration
description: 'Configure the KendoReact TabStrip by using its configuration components and inline options.'
components: ["tabstrip"]
slug: configuration_tabstrip
position: 30
---

# Configuration

The following example demonstrates how to map a collection to TabStripTab components.

{% meta height:270 %}
{% embed_file tabstrip/configuration/func/app.tsx preview %}
{% embed_file tabstrip/configuration/func/main.tsx %}
{% embed_file tabstrip/configuration/func/styles.css %}
{% endmeta %}

## Dynamically Add Tabs

You can dynamically add tabs by creating a tab collection, pushing new items to it, and mapping the collection to TabStripTab components.

{% meta height:300 %}
{% embed_file tabstrip/dynamic-tabs/func/app.tsx preview %}
{% embed_file tabstrip/dynamic-tabs/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Tabstrip]({% slug api_layout_tabstripprops %})
-   [API Reference of the TabStrip Tab]({% slug api_layout_tabstriptabprops %})
