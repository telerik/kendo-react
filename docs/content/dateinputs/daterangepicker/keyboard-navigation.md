---
title: Keyboard Navigation
page_title: KendoReact DateRangePicker Documentation | Keyboard Navigation
description: "Get started with the KendoReact DateRangePicker and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_daterangepicker
position: 110
---

# Keyboard Navigation


## Managing the Focus


Focus goes through the two date inputs. The popup becomes the active element when it is opened, but it is not the focused element at any point.

## Keyboard Shortcuts

### Actions applied to the DateInput:


The DateRangePicker implements the keyboard shortcuts for the DateInput component:

[DateInput  specification]({% slug keyboard_navigation_dateinput %})


Apart from that, it also features the following shortcuts related to ist Popup:

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Closes the popup |
| `Alt/Opt(Mac) + Down` | Opens the popup |
| `Alt/Opt(Mac) + Up` | Closes the popup |

### Actions applied to the Calendar:


Ones the popup is open, navigation is handled through the **MultiViewCalendar** component:

[MultiViewCalendar  specification]({% slug keyboard_navigation_multiviewcalendar %})

## Resources

[ARIA Authoring Practices: Date Picker Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/)



{% meta height:600 %}
{% embed_file daterangepicker/keyboard/func/app.tsx preview %}
{% embed_file daterangepicker/keyboard/func/main.tsx %}
{% endmeta %}


## Navigation Scenarios

When the popup of the DateRangePicker is opened, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [MultiViewCalendar]({% slug keyboard_navigation_multiviewcalendar %}).

When the inputs of the DateRangePicker is focused, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [DateInput]({% slug keyboard_navigation_dateinput %}).

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [React Date Inputs](slug:overview_dateinputs)
