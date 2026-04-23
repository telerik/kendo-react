---
title: Overview
description: 'Use the KendoReact DropDownTree component in a React project.'
components: ["dropdowntree"]
slug: overview_dropdowntree
position: 1
---

# KendoReact DropDownTree Overview

The KendoReact DropDownTree is a form component that lets you choose a single predefined value from a hierarchical list and is a richer version of the `<select>` element. Supports filtering, custom rendering, keyboard navigation, expand and collapse of the hierarchical data items.

The KendoReact DropDownTree component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-dropdowns package](https://www.npmjs.com/package/@progress/kendo-react-dropdowns).

<CtaPanelOverview></CtaPanelOverview>

The following example shows how to set up the DropDownTree component:

1. Set [`data`]({% slug api_dropdowns_dropdowntreeprops %}#toc-data), [`textField`]({% slug api_dropdowns_dropdowntreeprops %}#toc-textfield) and [`dataItemKey`]({% slug api_dropdowns_dropdowntreeprops %}#toc-dataitemkey) prop.
1. Set [`value`]({% slug api_dropdowns_dropdowntreeprops %}#toc-value), [`selectField`]({% slug api_dropdowns_dropdowntreeprops %}#toc-selectfield) and handle [`onChange`]({% slug api_dropdowns_dropdowntreeprops %}#toc-onchange) event.
1. Set [`expandField`]({% slug api_dropdowns_dropdowntreeprops %}#toc-expandfield) and handle [`onExpandChange`]({% slug api_dropdowns_dropdowntreeprops %}#toc-onexpandchange) event.

{% meta height:450 %}
{% embed_file dropdowntree/basic/func/app.tsx preview %}
{% embed_file dropdowntree/basic/func/main.tsx %}
{% embed_file dropdowntree/basic/func/overview-styles.css %}
{% endmeta %}

> The DropDownTree is part of the [KendoReact Dropdowns]({% slug overview_dropdowns %}) component library. The procedures for installing, importing, and using the Dropdowns are identical for all components in the package. To learn how to use the DropDownTree and the rest of the Dropdowns, see the [Getting Started with the KendoReact Dropdowns]({% slug get_started_dropdowns %}) guide.

## Key Features

-   [Filtering]({% slug filtering_dropdowntree %})&mdash;You can configure the DropDownTree to filter the results locally or on the server.
-   [Custom rendering]({% slug customrendering_dropdowntree %})&mdash;You can customize the way the DropDownTree component renders its elements.
-   [Forms support]({% slug forms_dropdowntree %})&mdash;You can use the React DropDownTree component with HTML form elements or with [the KendoReact Form component]({% slug overview_form %}).
-   [Keyboard navigation]({% slug keyboard_navigation_dropdowntree %})&mdash;The DropDownTree supports various keyboard shortcuts.
-   [Accessibility]({% slug accessibility_dropdowntree %})&mdash;The DropDownTree is accessible for screen readers and supports WAI-ARIA attributes.

## Suggested Links

-   [API Reference of the DropDownTree]({% slug api_dropdowns_dropdowntreeprops %})
-   [Controlled Components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
