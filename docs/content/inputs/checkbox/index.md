---
title: Overview
description: 'Get an overview of the features the KendoReact Checkbox delivers and use the component in React projects.'
components: ["checkbox"]
slug: overview_checkbox
position: 1
---

# KendoReact Checkbox Overview

The KendoReact Checkbox lets the user toggle between checked, unchecked and the optional indeterminate states.

The Checkbox is designed to replace the `<input type="checkbox">` HTML5 tag and provides the KendoReact specific styling.

<CtaPanelOverview></CtaPanelOverview>

The CheckBox is typically used to represent boolean values via a binary checked state. All regular [`input type="checkbox"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) HTML attributes are applicable.

The KendoReact Checkbox component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-inputs package](https://www.npmjs.com/package/@progress/kendo-react-inputs).

The following example demonstrates the Checkbox component in action.

{% meta height:100 %}
{% embed_file checkbox/main/func/app.tsx preview %}
{% embed_file checkbox/main/func/main.tsx %}
{% embed_file checkbox/main/func/styles.css %}
{% endmeta %}

## Size

{% meta height:100 %}
{% embed_file checkbox/main/size/app.tsx preview %}
{% embed_file checkbox/main/size/main.tsx %}
{% embed_file checkbox/main/size/styles.css %}
{% endmeta %}

## Border Radius

{% meta height:100 %}
{% embed_file checkbox/main/border-radius/app.tsx preview %}
{% embed_file checkbox/main/border-radius/main.tsx %}
{% embed_file checkbox/main/border-radius/styles.css %}
{% endmeta %}

## Indeterminate State

{% meta height:100 %}
{% embed_file checkbox/main/indeterminate/app.tsx preview %}
{% embed_file checkbox/main/indeterminate/main.tsx %}
{% embed_file checkbox/main/indeterminate/styles.css %}
{% endmeta %}

> The Checkbox is part of the [KendoReact Inputs]({% slug overview_inputs %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the Checkbox and the rest of the components in the package, see the [Getting Started with the KendoReact Inputs]({% slug getstarted_inputs %}) guide.

## Key Features

-   [Disabled Checkbox]({% slug disabled_checkbox %})&mdash;You can render a disabled Checkbox by setting a single property and keep it disabled until certain requirements are met.
-   [Controlled mode]({% slug controlled_checkbox %})&mdash;You can take advantage of the built-in options that allow you to control the value and the checked state of the Checkbox.
-   [Default state]({% slug default_checkbox %})&mdash;To control the initial value of the Checkbox, you can use the `defaultChecked` property.
-   [Labels]({% slug labels_checkbox %})&mdash;You can add labels and set their position. The Checkbox supports custom labels as well.
-   [Forms support]({% slug forms_support_checkbox %})&mdash;You can easily integrate the Checkbox with an [HTML5 form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms), the [`KendoReact Form component`]({% slug overview_form %}), or a third-party React form library.
-   [Globalization]({% slug globalization_inputs %})&mdash;The KendoReact Checkbox comes with globalization features that allow you to create applications that can be used all over the world.
-   [Keyboard navigation]({% slug keyboard_navigation_checkbox %})&mdash;The Checkbox supports numerous keyboard shortcuts that allow users to interact with the component.
-   [Accessibility]({% slug accessibility_checkbox %})&mdash;The Checkbox is accessible for screen readers and provides full WAI-ARIA support.

> To learn more about the appearance, anatomy, and accessibility of the CheckBox, visit the [Progress Design System documentation](https://www.telerik.com/design-system/docs/components/checkbox/)—an information portal offering rich component usage guidelines, descriptions of the available style variables, and globalization support details.

## Suggested Links

-   [Getting Started with the KendoReact Inputs]({% slug getstarted_inputs %})
-   [Getting Started with KendoReact](https://www.telerik.com/kendo-react-ui/components/getting-started/)
-   [API Reference of the Checkbox]({% slug api_inputs_checkbox %})
