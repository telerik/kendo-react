---
title: Optional
description: 'Define the optional state of the KendoReact FloatingLabel component in React projects.'
components: ["floatinglabel"]
slug: optional_floating_label
position: 4
---

# Marking the FloatingLabel as Optional

You can indicate that a form field is optional by setting the [`optional`]({% slug api_labels_floatinglabelprops %}#toc-optional) property of the FloatingLabel. When set to `true`, the FloatingLabel automatically renders an additional _(Optional)_ text within its contents.

The following example demonstrates the optional FloatingLabel in action.

{% meta height:180 %}
{% embed_file floatinglabel/optional/func/app.tsx preview %}
{% embed_file floatinglabel/optional/func/main.tsx %}
{% endmeta %}

You can customize the default optional content through custom messages the same way you can provide localization of the messages. You can set custom optional message by providing a value for the `labels.optional` message key in the messages object provided to the `loadMessages` function from the internalization package and wrapping the component in a `Localization.Provider`. For further information and an example refer to [Labels Globalization article]({% slug globalization_labels %}).

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [Globalization]({% slug globalization_labels %})
-   [API Reference of the FloatingLabel Component]({% slug api_labels_floatinglabelprops %})
