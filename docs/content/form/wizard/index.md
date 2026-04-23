---
title: Overview
description: 'Discover how to use the KendoReact Form and Stepper to create a Form Wizard.'
components: ["form"]
slug: overview_form_wizard
position: 0
---

# Form Wizard

The Form Wizard is a multi-step form that consists of one or more steps. Each step contains a set of controls and can have their own layout. The Form Wizard combines the KendoReact Form and Stepper components for creating multi-step form.

A common example is a longer form which is broken down into several steps, e.g. a payment account where one page is asking for personal information, another of the card information and so on.

The main advantage of the Form Wizard is that it allows customers to complete their information in smaller chunks, which creates a positive user experience and increases conversions.

The following example demonstrates a Form Wizard (multi-step form) with a validation of the controls on submit:

{% meta height:660 %}
{% embed_file wizard/overview/func/app.tsx preview %}
{% embed_file wizard/overview/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

## Validation

The Form Wizard can use the KendoReact Form component validation for validating the input and to also prevent the end user for moving to the next steps before completing the required fields on the current step.

## Dynamic Steps

The values of the KendoReact Form can be used for dynamically removing or adding steps to the Stepper component.

## Orientation

The KendoReact Stepper component provides horizontal and vertical rendering, which allows the Form Wizard to render the Stepper on left/right or top/bottom position in regards of the content.

<div class="spacer"></div>

## Suggested Links

-   [React Form](slug://overview_form)
-   [Get Started with the KendoReact Form component]({% slug overview_form %})
-   [Get Started with the KendoReact Stepper component]({% slug overview_stepper %})
