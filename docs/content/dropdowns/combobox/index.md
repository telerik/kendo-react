---
title: Overview
description: 'Get an overview of the features the KendoReact ComboBox delivers and use the component in React projects.'
components: ["combobox"]
slug: overview_combobox
position: 1
---

# KendoReact ComboBox Overview

The KendoReact ComboBox is a form component that lets you choose a single predefined value from a list and is a richer version of the `<select>` element and supports filtering, virtualization, and entering of custom values.

The KendoReact ComboBox component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-dropdowns package](https://www.npmjs.com/package/@progress/kendo-react-dropdowns).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the ComboBox in action.

{% meta height:450 %}
{% embed_file combobox/basic/func/app.tsx preview %}
{% embed_file combobox/basic/func/main.tsx %}
{% embed_file combobox/basic/func/styles.css %}
{% endmeta %}

> The ComboBox is part of the [KendoReact Dropdowns]({% slug overview_dropdowns %}) component library. The procedures for installing, importing, and using the Dropdowns are identical for all components in the package. To learn how to use the ComboBox and the rest of the Dropdowns, see the [Getting Started with the KendoReact Dropdowns]({% slug get_started_dropdowns %}) guide.

## Key Features

-   [Data and value binding]({% slug binding_combobox %})&mdash;You can bind the ComboBox to primitive (strings and numbers) or complex (objects) items.
-   [Custom values]({% slug custom_values_combobox %})&mdash;You can allow the ComboBox component to accept custom values.
-   [Filtering]({% slug filtering_combobox %})&mdash;You can configure the ComboBox to filter the results locally or on the server.
-   [Grouping]({% slug grouping_combobox %})&mdash;You can display grouped data with visual labels for each group.
-   [Suggestions]({% slug suggestions_combobox %})&mdash;To turn the suggestions on, set the [`suggest`]({% slug api_dropdowns_comboboxprops %}#toc-suggest) property to `true`.
-   [Custom rendering]({% slug customrendering_combobox %})&mdash;You can customize the way the ComboBox component renders its elements.
-   [Virtualization]({% slug virtualization_combobox %})&mdash;The virtual scrolling feature is an alternative to paging and helps display large data sets.
-   [Floating labels]({% slug floatinglabels_dropdowns %})&mdash;You can show floating labels inside the KendoReact ComboBox component.
-   [Forms support]({% slug forms_combobox %})&mdash;You can use the React ComboBox component with HTML form elements or with [the KendoReact Form component]({% slug overview_form %}).
-   [Globalization]({% slug globalization_dropdowns %})&mdash;The built-in globalization support allows you to create apps that are ready to be implemented worldwide.
-   [Keyboard navigation]({% slug keyboard_navigation_combobox %})&mdash;The ComboBox supports various keyboard shortcuts.
-   [Accessibility]({% slug accessibility_combobox %})&mdash;The ComboBox is accessible for screen readers and supports WAI-ARIA attributes.

> To learn more about the appearance, anatomy, and accessibility of the ComboBox, visit the [Progress Design System documentation](https://www.telerik.com/design-system/docs/components/combobox/)—an information portal offering rich component usage guidelines, descriptions of the available style variables, and globalization support details.

## Suggested Links

-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
