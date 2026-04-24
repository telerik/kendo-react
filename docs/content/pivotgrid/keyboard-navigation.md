---
title: Keyboard Navigation
page_title: KendoReact PivotGrid Documentation | Keyboard Navigation
description: "Get started with the KendoReact PivotGrid and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_pivotgrid
position: 110
---

# Keyboard Navigation


## Managing the Focus


The PivotGrid component is a container that consists of two logically separated structural elements:


 - Data Grid (`role="grid"`);
 - Configurator (`role="dialog"`);


Opening and closing the Configurator is controlled through dedicated shortcuts, and focus is trapped in the respective section once an element inside it gets focused. Closing the Configurator returns focus to the Data Grid.

### Data Grid Focus


The Data Grid is a single tab stop component. Upon focusing the Data Grid, the initial focus is set to either the previously focused cell (if any), or the first data (`<td>`) cell in the Data Grid. The change of the focused cell should be implemented using one of the following two techniques:


 - Roving TabIndex components Practice for managing the focus. Meaning that going through the cells will update the tabindex of the cell.
 - Active descendant - keeping the focus always on the Data Grid and using the `aria-activedescendant` on the Data Grid element which points to the id of the currently focused cell.
 - When the Configurator is available, opening it moves the focus to the first focusable element inside. The focus is trapped and wrapped, meaning the focusable components inside will follow their natural tab index, and when the last/first element is reached `Tab`/`Shift-Tab` will focus the first/last element respectively.
 - Pressing `Escape` while the Configurator is opened and contains the focus, closes the Configurator panel and returns focus to the last focused PivotGrid cell or the first cell if no PivotGrid cell was previously focused.

## Keyboard Shortcuts

### All Grid cells

| Shortcut | Behavior |
| -------- | -------- |
| `Right Arrow` | Moves focus one cell to the right (if any) |
| `Left Arrow` | Moves focus one cell to the left (if any) |
| `Down Arrow` | Moves focus one cell down (if any) |
| `Up Arrow` | Moves focus one cell up (if any) |
| `Home` | Moves focus to the first cell in the row that contains focus. |
| `End` | Moves focus to the last cell in the row that contains focus. |
| `Ctrl/Cmd(Mac) + Home` | Moves focus to the first (top-left) data cell in the grid. |
| `Ctrl/Cmd(Mac) + End` | Moves focus to the last cell in the last row of the Grid. |
| `o` | Opens the configurator when available. |
| `Escape` | Closes the configurator when available and open. |

### Grid header cells

| Shortcut | Behavior |
| -------- | -------- |
| `Enter` & `Space` | If the header cell is expandable, toggles the current expanded state. |

### Configurator<sup>*</sup>

| Shortcut | Behavior |
| -------- | -------- |
| `Escape` | Closes the Configurator and returns focus to the last focused PivotGrid table cell (or the first cell). |
| `Tab` | Focuses the next focusable element or the first focusable element, if the focus is on the last focusable element. |
| `Shift + Tab` | Focuses the previous focusable element or the last focusable element, if the focus is on the first focusable element. |
| `Backspace` & `Delete` | Applicable when a Chip is focused. Removes the Chip, and the previous focusable element is focused. |
| `Ctrl/Cmd(Mac) + Shift + Left/Right Arrow` | Applicable when a Chip is focused. Switches the Chip with the next/previous one from the same section (if one is available). |
| `Ctrl/Cmd(Mac) + Shift + Up/Down Arrow` | Applicable when a Chip is focused. Moves a Chip from the Rows section to the Columns one or vice-versa. |
| `Alt/Opt(Mac) + Down Arrow` | Opens the Chip menu for the focused Chip. Focus goes to the first menu element is trapped in the menu popup. |

### Configurator Chip Menu<sup>*</sup>

| Shortcut | Behavior |
| -------- | -------- |
| `Escape` | Closes the menu and returns the focus to the Chip that triggered it. |
| `Tab` | Focuses the next focusable menu element or the first focusable element, if the focus is on the last focusable element. |
| `Shift + Tab` | Focuses the previous focusable element or the last focusable element, if the focus is on the first focusable element. |
| `Enter` | Triggers the default action associated with the focused menu item. |


<sup>* All inner Confurator and Chip Menu components follow their own keyboard navigation behavior when focused.</sup>

## Resources

[ARIA Authoring Practices: Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)

[ARIA Authoring Practices: Data Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/dataGrids/)



## See Also
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [Learn about KendoReact Free.](slug:free_components_introduction)
