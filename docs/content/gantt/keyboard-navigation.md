---
title: Keyboard Navigation
page_title: KendoReact Gantt Documentation | Keyboard Navigation
description: "Get started with the KendoReact Gantt and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_gantt
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts


The Gantt component is a container that consists of 4 logically separated structural elements:


 - Toolbar (`role="toolbar"`);
 - Splitter (`role="separator"`);
 - TreeList (`role="treegrid"`);
 - TimeLine (`role="tree"`)


Each of them is part of the page tab sequence and can be navigated to using the `Tab` key of the keyboard. The list above illustrates the **focus sequence**.


The `Toolbar` implements the keyboard navigation specification for a `ToolBar component`:

[ToolBar  specification]({% slug keyboard_navigation_toolbar %})


The `Splitter` implements the keyboard navigation specification for a `Splitter component`

[Splitter  specification]({% slug keyboard_navigation_splitter %})

### Gantt shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Alt/Opt(Mac) + 1,2,3,...` | navigates to the view with the respective number |
| `F10` | Focuses the ToolBar. |

### TreeList shortcuts


The `TreeList` implements the keyboard navigation specification for a `TreeList component`:

[TreeList  specification]({% slug keyboard_navigation_treelist %})

| Shortcut | Behavior |
| -------- | -------- |
| `Tab` | Moves focus to the corresponding task in the TimeLine. |
| `Shift + Tab` | If focus has been previously on the same line in the treelist, moves focus to last focused cell. Otherwise, focus the last cell on the same line. |

### TimeLine Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Home` | Moves focus to first task. |
| `End` | Moves focus to the last task. |
| `Up Arrow` | Moves focus to previous task. |
| `Down Arrow` | Moves focus to the next task. |
| `Left Arrow` | Scrolls the view to the left. |
| `Right Arrow` | Scrolls the view to the right. |
| `Enter` | Gantt Popup Form is opened to provide editing of the task. The dependencies and field edit is made. On close focus is returned on the task. |
| `Delete` | The task gets deleted. The focus is moved to the previous task. |
| `Alt/Opt(Mac) + Right Arrow` | The task is expanded, if it contains child tasks. The task should remain in focus and the timeline should be scrolled to it. |
| `Alt/Opt(Mac) + Left Arrow` | The task is collapsed, if it contains child tasks. The task should remain in focus and the timeline should be scrolled to it. |



{% meta height:560 %}
{% embed_file keyboard-navigation/func/app.tsx preview %}
{% embed_file keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also

* [API Reference of the Gantt]({% slug api_gantt_gantt %})
* [API Index of the Gantt]({% slug api_gantt %})
* [navigatable]({% slug api_gantt_ganttprops %}#toc-navigatable)
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
