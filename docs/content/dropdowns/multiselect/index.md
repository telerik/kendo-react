---
title: Overview
description: 'Get an overview of the features the KendoReact MultiSelect delivers and use the component in React projects.'
components: ["multiselect"]
slug: overview_multiselect
position: 1
---

# KendoReact MultiSelect Overview

The KendoReact MultiSelect is a form component that displays a list of options and allows for multiple selections from this list and supports custom rendering of popup items and tags, header and footer elements, virtualization, and configurable options for controlling the list behavior.

The KendoReact MultiSelect component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-dropdowns package](https://www.npmjs.com/package/@progress/kendo-react-dropdowns).

<CtaPanelOverview title="Use This React @Subject for Free" message="You can use the @TestLink of this @Subject in production—no sign-up or license required. It is part of KendoReact, an enterprise-grade UI library with 120+ @FreemiumShortLink and premium components. To test-drive premium functionality such as virtualization, @StartTrialLink.">
<span token="TestLink">

[free feature set](slug://free_components_introduction#react-multiselect)

</span>
</CtaPanelOverview>

The following example demonstrates the MultiSelect in action.

{% meta height:450 %}
{% embed_file multiselect/basic/func/app.tsx preview %}
{% embed_file multiselect/basic/func/main.tsx %}
{% embed_file multiselect/basic/func/styles.css %}
{% endmeta %}

> The MultiSelect is part of the [KendoReact Dropdowns]({% slug overview_dropdowns %}) component library. The procedures for installing, importing, and using the Dropdowns are identical for all components in the package. To learn how to use the MultiSelect and the rest of the Dropdowns, see the [Getting Started with the KendoReact Dropdowns]({% slug get_started_dropdowns %}) guide.

## Key Features

-   [Data and value binding]({% slug binding_multiselect %})&mdash;You can bind the MultiSelect to primitive (strings and numbers) or complex (objects) items.
-   [Custom values]({% slug custom_values_multiselect %})&mdash;You can allow the MultiSelect component to accept custom values.
-   [Filtering (premium)]({% slug filtering_multiselect %})&mdash;You can configure the MultiSelect to filter the results locally or on the server.
-   [Custom tags]({% slug customtags_multiselect %})&mdash;You can customize how to render each of the value tags.
-   [Custom rendering]({% slug customrendering_multiselect %})&mdash;You can customize the way the MultiSelect component renders its elements.
-   [Virtualization (premium)]({% slug virtualization_multiselect %})&mdash;The virtual scrolling feature is an alternative to paging and helps display large data sets.
-   [Floating labels]({% slug floatinglabels_dropdowns %})&mdash;You can show floating labels inside the KendoReact MultiSelect component.
-   [Forms support]({% slug forms_multiselect %})&mdash;You can use the React MultiSelect component with HTML form elements or with [the KendoReact Form component]({% slug overview_form %}).
-   [Globalization]({% slug globalization_dropdowns %})&mdash;The built-in globalization support allows you to create apps that are ready to be implemented worldwide.
-   [Keyboard navigation]({% slug keyboard_navigation_multiselect %})&mdash;The MultiSelect supports various keyboard shortcuts.
-   [Accessibility]({% slug accessibility_multiselect %})&mdash;The MultiSelect is accessible for screen readers and supports WAI-ARIA attributes.

> To learn more about the appearance, anatomy, and accessibility of the MultiSelect, visit the [Progress Design System documentation](https://www.telerik.com/design-system/docs/components/multiselect/)—an information portal offering rich component usage guidelines, descriptions of the available style variables, and globalization support details.

## Suggested Links

-   [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
