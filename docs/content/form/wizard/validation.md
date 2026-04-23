---
title: Validation
description: 'Get started with the Form Wizard and validation using the KendoReact Form component.'
components: ["form"]
slug: multi_step_form
position: 2
---

# Validation

The Form Wizard uses the KendoReact Form component to check user input. You can block users from moving to the next step until they complete all required fields. You can also choose to check all fields only when a user submits the form.

This example shows a multi-step form that checks inputs at each step:

{% meta height:660 %}
{% embed_file wizard/validation/func/app.tsx preview %}
{% embed_file wizard/validation/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

To check inputs only on `onSubmit`, look at the Form Wizard [Overview]({% slug overview_form_wizard %}).

Find more details about KendoReact Form Field validation in the [Form Validation]({% slug validation_form %}) article.

## Suggested Links

-   [React Form](slug://overview_form)
-   [Get Started with the KendoReact Form component]({% slug overview_form %})
-   [KendoReact Form API](slug:api_form)
