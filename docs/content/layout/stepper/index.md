---
title: Overview
description: 'Learn about the features that the KendoReact Stepper delivers and use the component in React projects.'
components: ["stepper"]
slug: overview_stepper
position: 1
tier: free
---

# KendoReact Stepper Overview

The KendoReact Stepper component enables the user to create a sequence of logical steps that visualizes progress.

It could also be used for navigation purposes.

The KendoReact Stepper component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-layout package](https://www.npmjs.com/package/@progress/kendo-react-layout).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the Stepper in action.

{% meta height:130 %}
{% embed_file stepper/getting-started/func/app.tsx preview %}
{% embed_file stepper/getting-started/func/main.tsx %}
{% endmeta %}

> The Stepper is part of the [KendoReact Layout]({% slug overview_layout %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the Stepper and the rest of the components in the package, see the [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %}) guide.

## Key Features

-   [Display Modes]({% slug display_modes_stepper %})&mdash;The various display modes allow you to configure the step layout and type.
-   [Linear Mode]({% slug linear_mode_stepper %})&mdash;The linear mode requires the user to complete the previous step before proceeding to the next one.
-   [Orientation]({% slug orientation_stepper %})&mdash;You can switch between `horizontal` and `vertical` orientation.
-   [Validation]({% slug validation_stepper %})&mdash;You can set the validation logic for each step.
-   [Custom Rendering]({% slug custom_rendering_stepper %})&mdash;The Stepper allows you to customize the rendering of each step.
-   [Keyboard Navigation]({% slug keyboard_navigation_stepper %})&mdash;The Stepper supports various keyboard shortcuts.
-   [Accessibility]({% slug accessibility_stepper %})&mdash;The Stepper component is accessible by screen readers and provides full WAI-ARIA support.

## Known Limitations

The Stepper component is not supported in IE 11 and below as its implementation relies entirely on the [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) Layout.

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the Stepper Props]({% slug api_layout_stepperprops %})
-   [API Reference of the Step Props]({% slug api_layout_stepprops %})
