---
title: Accessibility
description: 'Get started with the KendoReact TreeView and learn about its accessibility support for WCAG 2.2.'
components: ["treeview"]
slug: overview_accessibility_treeview
position: 90
---

# Accessibility

The KendoReact TreeView component is [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) and [Section 508](http://www.section508.gov/) compliant. The component also follows the [WAI-ARIA best practices](https://www.w3.org/WAI/ARIA/apg/) for implementing the [keyboard navigation]({% slug keyboard_navigation_treeview %}) for its component [role](https://www.w3.org/TR/wai-aria#roles), and is tested against the popular screen readers.

Due to the rich feature set of the library and complexity of some components, the specific combination of configuration options may lead to inaccessible component rendering. Perform thorough testing on any modifications applied to the KendoReact components to ensure that they continue to comply with the desired level of accessibility standards.

## WCAG 2.2 Compliance

[WCAG 2.2](https://www.w3.org/TR/WCAG22/) comes with a [Draggable Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) criteria as part of the Operable principle. Its objective is to ensure that any feature that relies on dragging actions also offers an alternative method to perform the same action using a single-click user interaction.

Our mission is to provide a flexible API that allows all functionalities to be triggered programmatically or externally, ensuring compatibility with various accessibility requirements for any application.

In the following example, we demonstrate how to achieve accessibility compliance with [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) by enabling node reordering through the TreeView Context Menu functionality. The TreeView component also has enabled [keyboard navigation]({% slug keyboard_navigation_treeview %}) and [built-in WAI ARIA Support]({% slug accessibility_treeview %}) for enhanced accessibility.

Open the example in a new window to evaluate it with [Axe Core](https://www.npmjs.com/package/axe-core) or other accessibility tools.

{% meta height:320 %}
{% embed_file accessibility/func/app.tsx preview %}
{% embed_file accessibility/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [KendoReact TreeView WAI ARIA Support]({% slug accessibility_treeview %})
-   [KendoReact Accessibility Overview](slug:overview_accessibilty)
-   [API Reference of the TreeView]({% slug api_treeview_treeview %})
-   [Keyboard Navigation]({% slug keyboard_navigation_treeview %})
-   [WAI-ARIA Resources](https://www.w3.org/WAI/ARIA/apg/)
