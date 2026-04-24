---
title: Multiple Lists
description: 'Get started with the React ListBox package by KendoReact and learn how to connect multiple list to work together.'
components: ["listbox"]
slug: multiplelists_listbox
position: 70
---

# Multiple Lists

The KendoReact ListBox can be connected with multiple lists to allow moving an item between different states.

This can be useful in cases where a task can go through different stages or an item can move between many categories.

## Basic Usage

The following example demonstrates how to connect three ListBox components and move a task between `to do`, `in development` and `shipped` statuses.

{% meta height:500 %}
{% embed_file multiple-lists/func/app.tsx preview %}
{% embed_file multiple-lists/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ListBox]({% slug api_listbox_listboxprops %})
-   [API Reference of the ListBoxToolbar]({% slug api_listbox_listboxtoolbarprops %})
