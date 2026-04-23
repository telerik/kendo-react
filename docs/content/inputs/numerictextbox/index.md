---
title: Overview
description: 'Get an overview of the features the KendoReact NumericTextBox delivers and use the component in React projects.'
components: ["numerictextbox"]
slug: overview_numerictextbox
position: 1
---

# KendoReact NumericTextBox Overview

The KendoReact NumericTextBox lets the user edit and submit specific numeric values by typing or by using the spin buttons.

The KendoReact NumericTextBox component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-inputs package](https://www.npmjs.com/package/@progress/kendo-react-inputs).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the NumericTextBox in action.

{% meta height:480 %}
{% embed_file numerictextbox/overview/func/app.tsx preview %}
{% embed_file numerictextbox/overview/func/main.tsx %}
{% embed_file numerictextbox/overview/func/overview-styles.css %}
{% endmeta %}

> The NumericTextBox is part of the [KendoReact Inputs]({% slug overview_inputs %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the NumericTextBox and the rest of the components in the package, see the [Getting Started with the KendoReact Inputs]({% slug getstarted_inputs %}) guide.

## Key Features

-   [Predefined steps]({% slug predefinedsteps_numerictextbox %})&mdash;The predefined steps allow you to control the value of the increase or decrease step and fine-tune it for the specific application.
-   [Spin buttons]({% slug spinbuttons_numerictextbox %})&mdash;The NumericTextBox allows users to increase or decrease the input value with a predefined step by using the keyboard or the built-in buttons.
-   [Formats]({% slug formats_numerictextbox %})&mdash;You can control the format of the NumericTextBox input.
-   [Floating labels]({% slug floatinglabels_inputs %})&mdash;The floating labels functionality is integrated into the KendoReact NumericTextBox and can be easily configured through the `label` property.
-   [Forms support]({% slug forms_numerictextbox %})&mdash;You can integrate the NumericTextBox with an [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms), a [KendoReact Form]({% slug overview_form %}), or a third-party React form library.
-   [Globalization]({% slug globalization_inputs %})&mdash;The KendoReact NumericTextBox comes with globalization features that allow you to create applications that can be used all over the world.
-   [Keyboard navigation]({% slug keyboard_navigation_numerictextbox %})&mdash;The NumericTextBox allows users to interact with the component by using the up and down arrows on the keyboard.
-   [Accessibility]({% slug accessibility_numerictextbox %})&mdash;The NumericTextBox is accessible for screen readers and provides full WAI-ARIA support.

> To learn more about the appearance, anatomy, and accessibility of the NumericTextBox, visit the [Progress Design System documentation](https://www.telerik.com/design-system/docs/components/numerictextbox/)—an information portal offering rich component usage guidelines, descriptions of the available style variables, and globalization support details.

## Known Limitations

To keep its value, the NumericTextBox uses the [`Number`](https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types-number-type) JavaScript object. The `Number` JavaScript object persists its precision up to 15 digits, and units which are longer than that get converted to exponential numbers and lose their precision. Because the component relies on `Number`, it inherits the precision limitation and because the limitation is caused by the JavaScript logic, the NumericTextBox does not provide a workaround to handle it.

## Suggested Links

-   [Getting Started with the KendoReact Inputs]({% slug getstarted_inputs %})
-   [Getting Started with KendoReact](https://www.telerik.com/kendo-react-ui/components/getting-started/)
-   [API Reference of the NumericTextBox Props]({% slug api_inputs_numerictextboxprops %})
