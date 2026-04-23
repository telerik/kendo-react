---
title: Wai-Aria Support
page_title: KendoReact Diagram Documentation | Diagram  Accessibility
description: 'Learn about the accessibility support in the KendoReact Diagram, including WAI-ARIA, WCAG 2.2 AA, and Section 508 compliance.'
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_diagram
position: 100
tier: premium
---

# Accessibility

The KendoReact Diagram is [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) compliant.

The component also follows [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) and the [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/) guidance for interactive graphics content.

The Diagram is an interactive Graphics Document. You can navigate between shapes and connections with the keyboard and move selected shapes through keyboard shortcuts.

## WAI-ARIA Support

The Diagram implements accessibility semantics for the container and for shape/connection items.

| Selector                              | Attribute                           | Usage                                                                               |
| ------------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| `.k-diagram`                          | `role=graphics-document`            | Indicates that the Diagram root is a Graphics Document.                             |
| `.k-diagram`                          | `aria-roledescription`              | Clarifies the Diagram type for assistive technologies.                              |
| `.k-diagram`                          | `aria-label`                        | Announces the user-provided Diagram label.                                          |
| `.k-diagram`                          | `aria-activedescendant=.k-focus id` | Points to the currently active shape or connection while the container keeps focus. |
| `[aria-roledescription='Shape']`      | `role=graphics-symbol`              | Defines Diagram shape role semantics.                                               |
| `[aria-roledescription='Shape']`      | `aria-roledescription=Shape`        | Describes the item as a Shape.                                                      |
| `[aria-roledescription='Shape']`      | `aria-label`                        | Announces a user-provided shape description.                                        |
| `[aria-roledescription='Connection']` | `role=graphics-symbol`              | Defines Diagram connection role semantics.                                          |
| `[aria-roledescription='Connection']` | `aria-roledescription=Connection`   | Describes the item as a Connection.                                                 |
| `[aria-roledescription='Connection']` | `aria-label`                        | Announces a user-provided connection description.                                   |

> The Diagram uses the active descendant pattern for keyboard navigation. The container remains focused, while `aria-activedescendant` points to the current shape or connection.

## Section 508

The KendoReact Diagram supports [Section 508](https://www.section508.gov/) accessibility requirements.

## Automated Testing

Accessibility checks are validated with [Axe Core](https://www.npmjs.com/package/axe-core).

## Screen Readers

| Environment    | Tool |
| -------------- | ---- |
| Firefox        | NVDA |
| Chrome         | JAWS |
| Microsoft Edge | JAWS |

## Suggested Links

-   [Keyboard Navigation](slug:keyboard_navigation_diagram)
-   [API Reference of the Diagram](slug:api_diagram)
-   [React Diagram Overview](slug:overview_diagram)
