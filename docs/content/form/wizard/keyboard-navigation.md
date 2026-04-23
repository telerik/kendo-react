---
title: Keyboard Navigation
description: 'Get started with the Form Wizard and implement custom keyboard navigation.'
components: ["form"]
slug: form_wizard_keyboard_navigation
position: 7
---

# Keyboard Navigation

The KendoReact Stepper has enabled keyboard navigation support, but in the context of the Form Wizard the keyboard navigation can be customized by handling the onKeyDown event of an element wrapping the KendoReact Form and Stepper components.

The following example demonstrates how to handle the onKeyDown event of the wrapping DIV element to change the steps with CTRL+LeftArrow or CTRL+RightArrow:

{% meta height:460 %}
{% embed_file wizard/keyboard-navigation/func/app.tsx preview %}
{% embed_file wizard/keyboard-navigation/func/main.tsx %}
{% embed_file wizard/keyboard-navigation/func/styles.css %}
{% endmeta %}

<div class="spacer"></div>

The same approach can be used for introducing different actions with different key combinations.

## Suggested Links

-   [React Form](slug://overview_form)
-   [Get Started with the KendoReact Form Wizard]({% slug overview_form_wizard %})
-   [Get Started with the KendoReact Form component]({% slug overview_form %})
-   [Get Started with the KendoReact Stepper component]({% slug overview_stepper %})
