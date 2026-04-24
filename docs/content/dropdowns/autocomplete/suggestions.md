---
title: Suggestions
description: 'Enable the suggestions of the KendoReact AutoComplete during user input in React projects.'
components: ["autocomplete"]
slug: suggestions_autocomplete
position: 4
---

# Suggestions

The AutoComplete provides suggestions that appear while the user types in its input field. Whenever the user modifies the input value, the AutoComplete automatically completes the user input with the first text match. If the first text match does not begin with the current user input, the AutoComplete does not display any suggestions.

## In Uncontrolled Mode

To turn the suggestions on in uncontrolled mode, set the [`suggest`]({% slug api_dropdowns_autocompleteprops %}#toc-suggest) property to `true`.

{% meta height:310 %}
{% embed_file autocomplete/suggestions/uncontrolled/func/app.tsx preview %}
{% embed_file autocomplete/suggestions/uncontrolled/func/main.tsx %}
{% embed_file autocomplete/suggestions/controlled/func/shared-dd-countries.ts %}
{% endmeta %}

## In Controlled Mode

To turn the suggestions on in controlled mode, utilize the [`suggestion`]({% slug api_dropdowns_autocompletechangeevent %}#toc-suggestion) value from the [`onChange`]({% slug api_dropdowns_autocompleteprops %}#toc-onchange) event of the AutoComplete to set the [`suggest`]({% slug api_dropdowns_autocompleteprops %}#toc-suggest) property.

{% meta height:310 %}
{% embed_file autocomplete/suggestions/controlled/func/app.tsx preview %}
{% embed_file autocomplete/suggestions/controlled/func/main.tsx %}
{% embed_file autocomplete/suggestions/controlled/func/shared-dd-countries.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
