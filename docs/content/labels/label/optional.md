---
title: Optional
description: 'Define the optional state of the KendoReact Label component in React projects.'
components: ["label"]
slug: optional_label
position: 3
---

# Marking the Label as optional

You can indicate that a form field is optional by setting the [`optional`]({% slug api_labels_labelprops %}#toc-optional) property of the Label. When set to `true`, the Label automatically renders an additional _(Optional)_ text within its contents.

The following example demonstrates the optional Label in action.

{% meta height:220 %}
{% embed_file label/optional/func/app.tsx preview %}
{% embed_file label/optional/func/main.tsx %}
{% endmeta %}

You can customize the default optional content through custom messages the same way you can provide localization of the messages. You can set custom optional message by providing a value for the `labels.optional` message key in the messages object provided to the `loadMessages` function from the internalization package and wrapping the component in a `Localization.Provider`. For further information and an example refer to [Labels Globalization article]({% slug globalization_labels %}).

## Suggested Links

-   [Globalization]({% slug globalization_labels %})
-   [API Reference of the Label Component]({% slug api_labels_labelprops %})
