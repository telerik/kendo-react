---
title: Overview
description: 'Accessibility support provided by the Kendo UI PromptBox for React.'
slug: accessibility_promptbox
position: 200
components: ['promptbox']
---

# Accessibility Overview

The KendoReact PromptBox component is [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) and [Section 508](http://www.section508.gov/) compliant. The component also follows the [WAI-ARIA best practices](https://www.w3.org/TR/wai-aria-practices/) for implementing the keyboard navigation for its component role, and is tested against the popular screen readers.

> Due to the rich feature set of the library and complexity of some components, the specific combination of configuration options may lead to inaccessible component rendering. Perform thorough testing on any modifications applied to the KendoReact components to ensure that they continue to comply with the desired level of accessibility standards.

The following example demonstrates the accessibility compliance of the PromptBox component. Open the example in a new window to evaluate it with [Axe Core](https://www.npmjs.com/package/axe-core) or other accessibility tools.

> The described level of compliance is achievable with the [Ocean Blue A11y Accessibility Swatch](slug:overview_accessibilty#color-contrast).

<demo metaUrl="conversational-ui/promptbox/overview/" height="500"></demo>

## WAI-ARIA Support

All relevant internal elements of the PromptBox component have the aria attributes and roles with their respective values, required for WCAG 2.2 compliance.

## Section 508

The PromptBox is compliant with the [Section 508](https://www.section508.gov/) requirements.

## Static Analyzers

The tool used for Automated Testing is [Axe Core](https://www.npmjs.com/package/axe-core).

## Screen Readers

| Environment    | Tool |
| -------------- | ---- |
| Firefox        | NVDA |
| Chrome         | JAWS |
| Microsoft Edge | JAWS |

## Suggested Links

-   [React Accessibility Overview](slug:overview_accessibilty)
-   [API Reference of the PromptBox](slug:api_conversational-ui_promptboxprops)
-   [Keyboard Navigation](slug:keyboard_navigation_promptbox)
