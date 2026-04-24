---
title: Keyboard Navigation
page_title: KendoReact DatePicker Documentation | Keyboard Navigation
description: "Get started with the KendoReact DatePicker and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_datepicker
position: 110
---

# Keyboard Navigation


## Managing the Focus


Initial focus is on the selected date.

## Keyboard Shortcuts

### Actions applied to the DateInput:


The DatePicker implements the keyboard shortcuts for the DateInput component:

[DateInput  specification]({% slug keyboard_navigation_dateinput %})


Apart from that, it also features the following shortcuts related to ist Popup:

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Closes the popup |
| `Alt/Opt(Mac) + Down` | Opens the popup |
| `Alt/Opt(Mac) + Up` | Closes the popup |

### Actions applied to the Calendar:


Ones the popup is open, navigation is handled through the Calendar component:

[Calendar  specification]({% slug keyboard_navigation_calendar %})

## Resources

[ARIA Authoring Practices: Date Picker Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/)



{% meta height:400 %}
{% embed_file datepicker/keyboard/func/app.tsx preview %}
{% embed_file datepicker/keyboard/func/main.tsx %}
{% endmeta %}


## Navigation Scenarios

When the popup of the DatePicker is opened, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [Calendar]({% slug keyboard_navigation_calendar %}).

When the input of the DatePicker is focused, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [DateInput]({% slug keyboard_navigation_dateinput %}).

## See Also

* [Learn about KendoReact Free.](slug:free_components_introduction)
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [React Date Inputs](slug:overview_dateinputs)
