---
title: Keyboard Navigation
page_title: KendoReact ListView Documentation | Keyboard Navigation
description: "Get started with the KendoReact ListView and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_listview
position: 110
---

# Keyboard Navigation


## Managing the Focus


The ListView is a single tab stop component implementing the roving tab index pattern. By default its first item is part of the page tab sequece. To move the focus to another ListView item, arrow keys must be used. The ListView is also a templated component, and as such using the `Tab` key will move the focus through the focusable elements of the item template.


The ListView is composed by two structural elements:


 - ListView Content;
 - ListView Pager;

## Keyboard Shortcuts applicable to the Content element

| Shortcut | Behavior |
| -------- | -------- |
| `Right Arrow` | Moves the focus to the next rendered item. If the focus is on the last item, the focus does not move. |
| `Down Arrow` | Moves the focus to the next rendered item. If the focus is on the last item, the focus does not move. |
| `Left Arrow` | Moves the focus to the previous rendered item. If the focus is on the first item, the focus does not move. |
| `Up Arrow` | Moves the focus to the previous rendered item. If the focus is on the first item, the focus does not move. |
| `Home` | Moves the focus to the first rendered item. |
| `End` | Moves the focus to the last rendered item. |
| `Enter` | When there are focusable items within a ListView item - the focus moves to the first focusable item inside. |
| `Esc` | If the focus is on an element inside a ListView item - returns the focus back to the ListView item. |

## Keyboard Shortcuts applicable to the Pager element


The `Pager` component is focusable, and it's actions are described in the `Pager` keyboard navigation specification:

[Pager  specification]({% slug keyboard_navigation_pager %})

## Resources

[ARIA Authoring Practices: Roving Tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex)



{% meta height:500 %}
{% embed_file keyboard-navigation/func/app.tsx preview %}
{% embed_file keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also

* [Accessibility]({% slug accessibility_listview %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
