---
title: Masks
description: 'Set and configure the built-in mask rules of the KendoReact MaskedTextBox in React projects.'
components: ['maskedtextbox']
slug: masks_maskedtextbox
position: 6
---

# Masks

The MaskedTextBox supports a set of built-in masks.

The supported mask rules are:

-   `0`&mdash;Requires a digit (0-9).
-   `9`&mdash;Requires a digit (0-9) or a space.
-   `#`&mdash;Requires a digit (0-9), space, plus (+), or minus (-) sign.
-   `L`&mdash;Requires a letter (a-Z).
-   `?`&mdash;Requires a letter (a-Z) or a space.
-   `A`&mdash;Requires an alphanumeric (0-9, a-Z).
-   `a`&mdash;Requires an alphanumeric (0-9, a-Z) or a space.
-   `&`&mdash;Requires a character (excluding space).
-   `C`&mdash;Requires a character or a space.

You can also define custom rules by using the [`rules`]({% slug api_inputs_maskedtextboxprops %}#toc-rules) property.

Apart from the built-in and custom rules, you can also use static symbols in the mask pattern that are also known as literals. In the masked value, a literal is always rendered on the same position as the position where it is defined in the `mask` property.

> To escape a mask rule, use the slash (`\`) character. An escaped rule turns into a literal.

The following example demonstrates how to use the digit-requiring mask (`0`) and the literal (`-`) of the MaskedTextBox.

{% meta height:150 %}
{% embed_file maskedtextbox/mask/basic/func/app.tsx preview %}
{% embed_file maskedtextbox/mask/basic/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to extend the available mask rules.

{% meta height:280 %}
{% embed_file maskedtextbox/mask/extend/func/app.tsx preview %}
{% embed_file maskedtextbox/mask/extend/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the MaskedTextBox]({% slug api_inputs_maskedtextbox %})
