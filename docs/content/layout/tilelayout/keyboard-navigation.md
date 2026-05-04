---
title: Keyboard Navigation
page_title: KendoReact Tilelayout Documentation | Keyboard Navigation
description: "Get started with the KendoReact Tilelayout and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_tilelayout
position: 110
---

# Keyboard Navigation


## Managing the Focus


The navigation will be enabled by a `Navigable` parameter, like the Grid. When `Navigable` is true, all tiles will have a tabindex of `0`, and can be accessed through the reglar `Tab` key navigation.

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Tab` | Move focus to the next tile. If focus is on the last tile, focus the next focusable element on the page. |
| `Shift + Tab` | Move focus to the previous tile. If focus is on the first tile, focus the previous focusable element before the TileLayout. |
| `Enter` | Focuses the first focusable element within the tile. Focus is trapped and wrapped within the tile content and follows its natural Tab sequence. |
| `Escape` | Moves focus back to the TileLayout item wrapper when it is on a focusable element within the tile content. |
| `Shift + Right Arrow` | Reorders the focused tile with the next one (if such exists). |
| `Shift + Left Arrow` | Reorders the focused tile with the previous one (if such exists). |
| `Ctrl/Cmd(Mac) + Right Arrow` | Increments the focused tile width with one column (to a maximum of the preset columns count). |
| `Ctrl/Cmd(Mac) + Left Arrow` | Decrements the focused tile width with one column (to a minimum of 1). |
| `Ctrl/Cmd(Mac) + Down Arrow` | Increments the focused item height with one row (to a maximum of the preset rows count if such option exists). |
| `Ctrl/Cmd(Mac) + Up Arrow` | Decrements the focused item height with one row (to a minimum of 1). |

> Prevent the default browser behavior when using the Cmd + ArrowKey shortcuts for macOS.



## See Also
* [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
