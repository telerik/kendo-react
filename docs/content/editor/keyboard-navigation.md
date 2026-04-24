---
title: Keyboard Navigation
page_title: KendoReact Editor Documentation | Keyboard Navigation
description: "Get started with the KendoReact Editor and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_editor
position: 110
---

# Keyboard Navigation


## Managing the Focus


The editor integrates the **Toolbar** component and inherits all shortcuts from it. So, the component has two tab stops - one the toolbar and one the content area. When using the single click tools by mouse, the focus remains on the content.

### Actions applied to Editor content area:

| Shortcut | Behavior |
| -------- | -------- |
| `Ctrl/Cmd(Mac)+B` | Executes bold command. |
| `Ctrl/Cmd(Mac)+I` | Executes italic command. |
| `Ctrl/Cmd(Mac)+U` | Executes underline command. |
| `Ctrl/Cmd(Mac)+Z` | Executes undo command. |
| `Ctrl/Cmd(Mac)+Y` | Executes redo command. |
| `Shift+Enter` | Adds `<br/>` to content. |
| `Enter` | Adds `<p>` to content. |

## Resources

[ARIA Authoring Practices: Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)



{% meta height:810 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% endmeta %}

## See Also

* [API Reference of the Editor]({% slug api_editor_editor %})
* [Toolbar keyboard navigation]({% slug keyboard_navigation_toolbar %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
