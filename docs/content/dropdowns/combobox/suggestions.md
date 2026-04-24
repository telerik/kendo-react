---
title: Suggestions
description: 'Enable the suggestions of the KendoReact ComboBox during user input in React projects.'
components: ["combobox"]
slug: suggestions_combobox
position: 6
---

# Suggestions

The ComboBox provides suggestions that appear while the user types in its input field.

To turn them on, set the [`suggest`]({% slug api_dropdowns_comboboxprops %}#toc-suggest) property to `true`. Whenever the user modifies the input value, the ComboBox automatically completes the user input with the first text match. If the first text match does not begin with the current user input, the ComboBox does not display any suggestions.

{% meta height:340 %}
{% embed_file combobox/suggestions/func/app.tsx preview %}
{% embed_file combobox/suggestions/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
