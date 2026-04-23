---
title: Keyboard Navigation
page_title: KendoReact Splitter Documentation | Keyboard Navigation
description: "Get started with the KendoReact Splitter and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_splitter
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Up Arrow` | Moves up the split-bar in a vertical Splitter. |
| `Down Arrow` | Moves down a split-bar in a vertical Splitter. |
| `Left Arrow` | Moves left a split-bar in a horizontal Splitter. |
| `Right Arrow` | Moves right a split-bar in a horizontal Splitter. |
| `Ctrl/Cmd(Mac) + Up Arrow` | Moves the splitbar up to collapse/expand the adjacent panes in the up direction. |
| `Ctrl/Cmd(Mac) + Down Arrow` | Moves the splitbar down to collapse/expand the adjacent panes in the down direction. |
| `Ctrl/Cmd(Mac) + Left Arrow` | Moves the splitbar left to collapse/expand the adjacent panes in the left direction. |
| `Ctrl/Cmd(Mac) + Right Arrow` | Moves the splitbar right to collapse/expand the adjacent panes in the right direction. |
| `Enter` | Toggles the collapsed state of the nearest collapsible pane. |
| `Tab` | The key that allows focusing a splitter bar. Thus, all splitbars have `tabindex` and are included in the tab sequence. |

> Note 1:** The "splitter bar/split-bar" is the section between two panes that allows collapsing/resizing.

> Note 2:** Splitter bars can be expanded/collapsed when double clicked apart from clicking on the expand/collapse icon element. Double-clicking (or `Enter` key) toggles the closest collapsible pane (left pane has priority over right pane if both are collapsible).



{% meta height:500 %}
{% embed_file splitter/keyboard/func/app.tsx preview %}
{% embed_file splitter/keyboard/func/main.tsx %}
{% embed_file splitter/keyboard/func/styles.css %}
{% endmeta %}

## See Also

* [API Reference of the Splitter]({% slug api_layout_splitterprops %})
* [Accessibility]({% slug accessibility_splitter %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
