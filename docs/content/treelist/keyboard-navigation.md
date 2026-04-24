---
title: Keyboard Navigation
page_title: KendoReact TreeList Documentation | Keyboard Navigation
description: "Get started with the KendoReact TreeList and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_treelist
position: 110
---

# Keyboard Navigation


## Managing the Focus


The TreeList component is a container that consists of 2 logically separated structural elements:


 - Toolbar (`role="toolbar"`);
 - Tree Grid (`role="treegrid"`);


Each of them is part of the page tab sequence and can be navigated to using the `Tab` key of the keyboard.


The `Toolbar` implements the keyboard navigation specification for a ToolBar component.


The below description focuses only on the `Tree Grid` part (the element with `role="treegrid"`) of the composite component.

## Tree Grid Focus


The Tree Grid is a single tab stop component. Upon focusing the Tree Grid, the initial focus is set to either the previously focused cell (if any), or the first data (`<td>`) cell in the Tree Grid. The change of the focused cell should be implemented using one of the following two techniques:


 - Roving TabIndex components Practice for managing the focus. Meaning that going through the cells will update the tabindex of the cell.
 - Active descendant - keeping the focus always on the Data Grid and using the `aria-activedescendant` on the Tree Grid element which points to the id of the currently focused cell.


If a cell contains only one focusable element that does not itself require arrow keys for its inner navigation - focus goes to that element instead of its parent `<td>`.


If column header cells do not provide functions, such as sort, filter, or column menu, they may not be focusable.


If the TreeList contains no items (empty TreeList), the `No data` element in the TreeList should be focused. That applies also for the scenario when the last item in the Grid has been deleted.

## Keyboard Shortcuts


The TreeList implements the same keyboard shortcuts as the Grid component. In addition to that, here is the appropriate shortcut to expand/collapse a row:

| Shortcut | Behavior |
| -------- | -------- |
| `Enter` | In expandable and non-editable cell - expands or collapses the item. |

## Resources

[ARIA Authoring Practices: Treegrid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/)



{% meta height:580 %}
{% embed_file keyboard-navigation/func/app.tsx preview %}
{% embed_file keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also

* [API Reference of the TreeList]({% slug api_treelist_treelist %})
* [API Index of the TreeList]({% slug api_treelist %})
* [navigatable]({% slug api_treelist_treelistprops %}#toc-navigatable)
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
