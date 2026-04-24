---
title: Dynamic Steps
description: 'Discover how to use dynamic steps in the KendoReact Stepper used in the Form Wizard.'
components: ["form"]
slug: form_wizard_dynamic_steps
position: 3
---

# Dynamic Steps

The KendoReact Stepper component render its steps based on the array set to its "items" property. For showing dynamic steps in the Form Wizard we can update the items collection in a state variable either by external condition or by a choice within the KendoReact Form within the Form Wizard.

The following example demonstrates a Form Wizard (multi-step form) with dynamic step rendered based on a value from the Form:

{% meta height:530 %}
{% embed_file wizard/dynamic-steps/func/app.tsx preview %}
{% embed_file wizard/dynamic-steps/func/main.tsx %}
{% endmeta %}

<div class="spacer"></div>

## Suggested Links

-   [React Form](slug://overview_form)
-   [Get Started with the KendoReact Form component]({% slug overview_form %})
-   [Get Started with the KendoReact Stepper component]({% slug overview_stepper %})
