---
title: Keyboard Navigation
description: 'Use the KendoReact FloatingActionButton keyboard navigation in React projects.'
components: ["floatingactionbutton"]
slug: keyboard_navigation_floatingactionbutton
position: 8
---

# Keyboard Navigation

The keyboard navigation of the FloatingActionButton is always enabled.

The FloatingActionButton supports the following keyboard shortcuts:

| Shortcut      | Description                                                 |
| :------------ | :---------------------------------------------------------- |
| `Down Arrow`  | Focuses the next item.                                      |
| `Up Arrow`    | Focuses the previous item.                                  |
| `Right Arrow` | Focuses the next item.                                      |
| `Left Arrow`  | Focuses the previous item.                                  |
| `Home`        | Focuses the first item.                                     |
| `End`         | Focuses the last item.                                      |
| `Esc`         | Closes the popup and moves the focus to the button element. |
| `Tab`         | Moves focus to the next focusable element of the page.      |
| `Enter`       | Opens the popup and moves the focus to the first item.      |
| `Space`       | Opens the popup and moves the focus to the first item.      |

{% meta height:250 %}
{% embed_file floatingactionbutton/keyboard-navigation/func/app.tsx preview %}
{% embed_file floatingactionbutton/keyboard-navigation/func/main.tsx %}
{% endmeta %}

## Resources

[WAI-ARIA Authoring Practices: Navigation Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/)

## See Also

-   [Accessibility in KendoReact](https://www.telerik.com/kendo-react-ui/components/accessibility/)
-   [Accessibility Compliance and Keyboard Support in KendoReact](https://www.telerik.com/kendo-react-ui/components/accessibility/accessibility-compliance/)
