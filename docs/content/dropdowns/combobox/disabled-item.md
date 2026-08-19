---
title: Disabled Items
description: 'Configure disabled items inside the KendoReact ComboBox component in React projects.'
components: ["combobox"]
slug: disableditem_combobox
position: 75
---

# Disabled ComboBox Items

Some specific scenarios require the control over the `enabled/disabled` state of the different ComboBox items. Once an item is disabled it cannot be selected as a value for the component but based on the accessibility requirements of your application it could be `focusable` or `not focusable`, when navigating the different items using a keyboard.

The [skipDisabledItems]({% slug api_dropdowns_comboboxprops %}#toc-skipdisableditems) property of the `ComboBox` controls how the disabled items will be handled in a keyboard navigation scenarios. In this article you can see how the component behaves in the following scenarios:

-   [Disabled items that are not focused when working with the keyboard](#toc-disabled-items-without-keyboard-focusing)
-   [Disabled items that are focused when working with the keyboard](#toc-disabled-items-with-keyboard-focusing)
-   [Grouped data that contains disabled items that are not focused when working with the keyboard](#toc-disabled-items-without-keyboard-focusing-grouping)
-   [Grouped data that contains disabled items that are focused when working with the keyboard](#toc-disabled-items-with-keyboard-focusing-grouping)

## Disabled Items Without Keyboard Focusing

The following example demonstrates ComboBox items that are disabled and cannot receive keyboard focus when navigating the list.

{% meta height:330 %}
{% embed_file combobox/disabled-item/disabled-item-not-focusable/app.tsx preview %}
{% embed_file combobox/disabled-item/disabled-item-not-focusable/main.tsx %}
{% endmeta %}

## Disabled Items With Keyboard Focusing

The following example demonstrates disabled ComboBox items that can still receive keyboard focus. Selecting a disabled item does not change the ComboBox value.

{% meta height:330 %}
{% embed_file combobox/disabled-item/disabled-item-focusable/app.tsx preview %}
{% embed_file combobox/disabled-item/disabled-item-focusable/main.tsx %}
{% endmeta %}

## Disabled Items Without Keyboard Focusing + Grouping

The following example demonstrates how to combine data grouping with disabled items that cannot receive keyboard focus.

{% meta height:330 %}
{% embed_file combobox/disabled-item/disabled-item-not-focusable-grouping/app.tsx preview %}
{% embed_file combobox/disabled-item/disabled-item-not-focusable-grouping/main.tsx %}
{% endmeta %}

## Disabled Items With Keyboard Focusing + Grouping

The following example demonstrates how to combine data grouping with disabled items that can receive keyboard focus but cannot be selected.

{% meta height:330 %}
{% embed_file combobox/disabled-item/disabled-item-focusable-grouping/app.tsx preview %}
{% embed_file combobox/disabled-item/disabled-item-focusable-grouping/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
