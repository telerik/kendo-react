---
title: Keyboard Navigation
page_title: KendoReact Filter Documentation | Keyboard Navigation
description: "Get started with the KendoReact Filter and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_filter
position: 110
---

# Keyboard Navigation


## Managing the Focus


The Filter is a single tab stop component implementing the roving tab index pattern.


The Filter UI represents the filter query object, which can be built using the component. As that object can contain inner objects, the result is a hierarchical structure, which is also reflected visually in the UI. In order to represent the same structure in the accessibility tree, the `role=tree` must be assigned to the entire component. The entire Filter is a single tab stop component. Navigation among items is available using `Up Arrow` and `Down Arrow`. Internal ToolBar navigation can be activated upon pressing `Enter` on a `treeitem`. Navigation returns back to the `tree` when pressing `Esc`.

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Up Arrow` | Focuses the previous item (FilterGroup or FilterExpression) in the `tree`. |
| `Down Arrow` | Focuses the next item (FilterGroup or FilterExpression) in the `tree`. |


The FilterGroup or FilterExpression elements implement the KB navigation specification for the ToolBar component:

[ToolBar  specification]({% slug keyboard_navigation_toolbar %})


Upon deleting a FilterGroup/FilterExpression (pressing the `X` button), focus should be moved to the very next treeitem (FilterGroup/FilterExpression) in the Filter component. If there is no treeitem (FilterGroup/FilterExpression) after the deleted one, focus should be moved to the previous treeitem (FilterGroup/FilterExpression).

## Resources

[ARIA Authoring Practices: Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)



<sup>* All inner components within the FilterExpression follow their own keyboard navigation behavior.</sup>

{% meta height:450 %}
{% embed_file filter/keyboard-navigation/app.tsx preview %}
{% embed_file filter/keyboard-navigation/main.tsx %}
{% endmeta %}

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
