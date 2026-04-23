---
title: Overview
description: 'Use the KendoReact DropDownList component in a React project.'
components: ["dropdownlist"]
slug: overview_dropdownlist
position: 1
---

# KendoReact DropDownList Overview

The KendoReact DropDownList is a form component that lets you choose a single predefined value from a list and is a richer version of the `<select>` element and supports filtering, default items, and virtualization.

The KendoReact DropDownList component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-dropdowns package](https://www.npmjs.com/package/@progress/kendo-react-dropdowns).

<CtaPanelOverview title="Use This React @Subject for Free" message="You can use the @TestLink of this @Subject in production—no sign-up or license required. It is part of KendoReact, an enterprise-grade UI library with 120+ @FreemiumShortLink and premium components. To test-drive premium functionality such as virtualization, @StartTrialLink.">
<span token="TestLink">

[free feature set](slug://free_components_introduction#react-dropdownlist)

</span>
</CtaPanelOverview>

The following example demonstrates the DropDownList in action.

{% meta height:450 %}
{% embed_file dropdownlist/basic/func/app.tsx preview %}
{% embed_file dropdownlist/basic/func/main.tsx %}
{% embed_file dropdownlist/basic/func/overview-styles.css %}
{% endmeta %}

> The DropDownList is part of the [KendoReact Dropdowns]({% slug overview_dropdowns %}) component library. The procedures for installing, importing, and using the Dropdowns are identical for all components in the package. To learn how to use the DropDownList and the rest of the Dropdowns, see the [Getting Started with the KendoReact Dropdowns]({% slug get_started_dropdowns %}) guide.

## Key Features

-   [Value and data binding]({% slug binding_dropdownlist %})&mdash;You can bind the DropDownList to primitive (strings and numbers) or complex (objects) items.
-   [Default item]({% slug defaultitem_dropdownlist %})&mdash;You can set an initial item to act as a placeholder for the DropDownList.
-   [Filtering (premium)]({% slug filtering_dropdownlist %})&mdash;You can configure the DropDownList to filter the results locally or on the server.
-   [Custom rendering]({% slug customrendering_dropdownlist %})&mdash;You can customize the way the DropDownList component renders its elements.
-   [Virtualization (premium)]({% slug virtualization_dropdownlist %})&mdash;The virtual scrolling feature is an alternative to paging and helps display large data sets.
-   [Floating labels]({% slug floatinglabels_dropdowns %})&mdash;You can show floating labels inside the KendoReact DropDownList component.
-   [Forms support]({% slug forms_dropdownlist %})&mdash;You can use the React DropDownList component with HTML form elements or with [the KendoReact Form component]({% slug overview_form %}).
-   [Globalization]({% slug globalization_dropdowns %})&mdash;The built-in globalization support allows you to create apps that are ready to be implemented worldwide.
-   [Keyboard navigation]({% slug keyboard_navigation_dropdownlist %})&mdash;The DropDownList supports various keyboard shortcuts.
-   [Accessibility]({% slug accessibility_dropdownlist %})&mdash;The DropDownList is accessible for screen readers and supports WAI-ARIA attributes.

> To learn more about the appearance, anatomy, and accessibility of the DropDownList, visit the [Progress Design System documentation](https://www.telerik.com/design-system/docs/components/dropdownlist/)—an information portal offering rich component usage guidelines, descriptions of the available style variables, and globalization support details.

## Suggested Links

-   [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
-   [Controlled Components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
