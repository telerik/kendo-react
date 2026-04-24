---
title: Cards Layouts
description: "Arrange multiple KendoReact Cards in different layouts inside React projects."
components: ["card"]
slug: layouts_card
position: 5
---

# Layouts

The Cards can be arrange in three different built-in layouts inducing List, Group and Deck.

To arrange the Card in a specific layout, wrap the Cards in a container with on of the following classes:

* ***Card list*** - rendering cards detached from one another in a column through the `.k-card-list` class
* ***Card Group*** - rendering cards attached to one another on a single row through the `.k-card-group` class
* ***Card Deck*** - rendering cards detached from one another on a single row through the `.k-card-deck` class

## Basic usage

The following example demonstrates how to dynamically change the Cards layout.

{% meta height:700 %}
{% embed_file card/layouts/func/app.tsx preview %}
{% embed_file card/layouts/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the Card]({% slug api_layout_cardprops %})
