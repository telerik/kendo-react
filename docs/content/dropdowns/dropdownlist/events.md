---
title: Events
description: 'Using the KendoReact DropDownList events in React projects.'
components: ["dropdownlist"]
slug: events_dropdownlist
position: 160
---

# Events

The KendoReact DropDownList generates a variety of events that you can handle. This allows you to tailor the behavior of the DropDownList to your specific requirements.

The following example demonstrates the DropDownList events and how you can utilize the [`useAsyncFocusBlur`](slug:api_common_useasyncfocusblur) utility to handle the focus and blur events.

{% meta height:340 %}
{% embed_file dropdownlist/events/func/app.tsx preview %}
{% embed_file dropdownlist/events/func/main.tsx %}
{% endmeta %}

## Looping through Items

By default, you can select a DropDownList item by pressing a keyboard key. For example, if the DropDownList items are `Foo`, `Bar`, and `Baz` and the user presses the `B` letter key, based on the alphabetical order of the items, the keypress selects the first item which starts with a `B`.

> The keyboard selection is available only if the filtering functionality is disabled.

## Suggested Links

-   [API Reference of the KendoReact DropDownList]({% slug api_dropdowns_dropdownlist %})
