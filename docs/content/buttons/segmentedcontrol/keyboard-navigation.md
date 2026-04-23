---
title: Keyboard Navigation
page_title: KendoReact SegmentedControl Documentation | Keyboard Navigation
description: 'Get started with the KendoReact SegmentedControl and learn about the accessibility support it provides through its keyboard navigation functionality.'
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_segmentedcontrol
position: 110
---

# Keyboard Navigation

The following demo shows the keyboard navigation capabilities of the SegmentedControl. Click the control and use arrow keys, Tab, Enter, or Space to navigate and select items.

<demo metaUrl="buttons/segmentedcontrol/keyboard/" height="300"></demo>

## Managing the Focus

The SegmentedControl items are rendered as native `<button>` elements, which are natively focusable and included in the tab sequence of the page.

## Keyboard Navigation

The SegmentedControl supports the following keyboard shortcuts:

| Shortcut           | Behavior                                                       |
| ------------------ | -------------------------------------------------------------- |
| `Tab`              | Moves focus to the next focusable item in the page.            |
| `Shift`+`Tab`      | Moves focus to the previous focusable item in the page.        |
| `Enter` or `Space` | Selects the focused item and triggers the `onChange` callback. |

## See Also

-   [SegmentedControl Overview](slug:overview_segmentedcontrol)
-   [Appearance](slug:appearance_segmentedcontrol)
-   [Accessibility in KendoReact](slug:overview_accessibilty)
-   [Accessibility Compliance and Keyboard Support in KendoReact](slug:compliance_accessibilty)
-   [API Reference of the SegmentedControl](slug:api_buttons_segmentedcontrolprops)
