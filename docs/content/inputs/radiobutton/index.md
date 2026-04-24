---
title: Overview
description: 'Get an overview of the features the KendoReact RadioButton delivers and use the component in React projects.'
components: ["radiobutton"]
slug: overview_radiobutton
position: 1
---

# KendoReact RadioButton Overview

The KendoReact RadioButton lets the user to choose only one from multiple options.

The RadioButton is designed to replace the `<input type="radio">` HTML5 tag and provides the KendoReact specific styling.

<CtaPanelOverview></CtaPanelOverview>

The RadioButton is typically used within a RadioGroup with the same `name` attribute. All regular [`input type="radio"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) HTML attributes are applicable.

The KendoReact RadioButton component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-inputs package](https://www.npmjs.com/package/@progress/kendo-react-inputs).

The following example demonstrates the RadioButton component in action.

{% meta height:180 %}
{% embed_file radiobutton/overview/func/app.tsx preview %}
{% embed_file radiobutton/overview/func/main.tsx %}
{% endmeta %}

## Size

{% meta height:130 %}
{% embed_file radiobutton/overview/size/app.tsx preview %}
{% embed_file radiobutton/overview/size/main.tsx %}
{% endmeta %}

> The RadioButton is part of the [KendoReact Inputs]({% slug overview_inputs %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the RadioButton and the rest of the components in the package, see the [Getting Started with the KendoReact Inputs]({% slug getstarted_inputs %}) guide.

## Key Features

-   [Disabled RadioButton]({% slug disabled_radiobutton %})&mdash;You can render a disabled RadioButton and keep it disabled until certain requirements are met.
-   [Labels]({% slug labels_radiobutton %})&mdash;You can add labels and set their position. The RadioButton supports custom labels as well.
-   [Globalization]({% slug globalization_inputs %})&mdash;The KendoReact RadioButton comes with globalization features that allow you to create applications that can be used all over the world.

> To learn more about the appearance, anatomy, and accessibility of the RadioButton, visit the [Progress Design System documentation](https://www.telerik.com/design-system/docs/components/radiobutton/)—an information portal offering rich component usage guidelines, descriptions of the available style variables, and globalization support details.

## Suggested Links

-   [Getting Started with the KendoReact Inputs]({% slug getstarted_inputs %})
-   [Getting Started with KendoReact](https://www.telerik.com/kendo-react-ui/components/getting-started/)
-   [API Reference of the RadioButton]({% slug api_inputs_radiobutton %})
-   [API Reference of the RadioButtonProps]({% slug api_inputs_radiobuttonprops %})
