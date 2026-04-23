---
title: Disabled Items
description: 'Configure disabled items inside the KendoReact AutoComplete component in React projects.'
components: ["autocomplete"]
slug: disableditem_autocomplete
position: 75
---

# Disabled AutoComplete Items

Some specific scenarios require the control over the `enabled/disabled` state of the different AutoComplete items. Once an item is disabled it cannot be selected as a value for the component but based on the accessibility requirements of your application it could be `focusable` or `not focusable`, when navigating the different items using a keyboard.

The [skipDisabledItems]({% slug api_dropdowns_autocompleteprops %}#toc-skipdisableditems) property of the `AutoComplete` controls how the disabled items will be handled in a keyboard navigation scenarios. In this article you can see how the component behaves in the following scenarios:

-   [Disabled items that are not focused when working with the keyboard](#toc-disabled-items-without-keyboard-focusing)
-   [Disabled items that are focused when working with the keyboard](#toc-disabled-items-with-keyboard-focusing)
-   [Grouped data that contains disabled items that are not focused when working with the keyboard](#toc-disabled-items-without-keyboard-focusing-grouping)
-   [Grouped data that contains disabled items that are focused when working with the keyboard](#toc-disabled-items-with-keyboard-focusing-grouping)

## Disabled Items Without Keyboard Focusing

The following demo showcases disabled items that cannot not be focused.

{% meta height:330 %}
{% embed_file autocomplete/disabled-item/disabled-item-not-focusable/app.tsx preview %}
{% embed_file autocomplete/disabled-item/disabled-item-not-focusable/main.tsx %}
{% endmeta %}

## Disabled Items With Keyboard Focusing

The following demo showcases disabled items that cannot not be focused using the mouse but can be focused using the keyboard, selecting such item will not change the value of the AutoComplete.

{% meta height:330 %}
{% embed_file autocomplete/disabled-item/disabled-item-focusable/app.tsx preview %}
{% embed_file autocomplete/disabled-item/disabled-item-focusable/main.tsx %}
{% endmeta %}

## Disabled Items Without Keyboard Focusing + Grouping

The following demo displays how you can combine grouping with disabled items that cannot not be focused.

{% meta height:330 %}
{% embed_file autocomplete/disabled-item/disabled-item-not-focusable-grouping/app.tsx preview %}
{% embed_file autocomplete/disabled-item/disabled-item-not-focusable-grouping/main.tsx %}
{% endmeta %}

## Disabled Items With Keyboard Focusing + Grouping

The following demo displays how you can combine grouping with disabled items that cannot not be focused using the mouse but can be focused using the keyboard, selecting such item will not change the value of the AutoComplete.

{% meta height:330 %}
{% embed_file autocomplete/disabled-item/disabled-item-focusable-grouping/app.tsx preview %}
{% embed_file autocomplete/disabled-item/disabled-item-focusable-grouping/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
