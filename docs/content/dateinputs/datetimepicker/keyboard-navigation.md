---
title: Keyboard Navigation
page_title: KendoReact DateTimePicker Documentation | Keyboard Navigation
description: "Get started with the KendoReact DateTimePicker and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_datetimepicker
position: 110
---

# Keyboard Navigation


## Managing the Focus


The initial focus is on the selected date.


Focus is trapped in the picker's popup. Meaning that once the popup is opened, Tab key will go only through its content.

## Keyboard Shortcuts

### Actions applied to the DateInput


The DateInput part of the component implements the specification for the DateInput component:

[DateInput  specification]({% slug keyboard_navigation_dateinput %})


In addition to that it also features the following shortcuts:

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Discards the selection and closes the popup. |
| `Enter` | Enters in time edit if calendar is the target. Otherwise, accepts the selected time and closes the popup. |
| `Alt/Opt(Mac) + Down` | Opens the dropdown and moves the focus to the displayed calendar. |
| `Alt/Opt(Mac) + Up` | Closes the dropdown and moves the focus to the input element. |

### Actions applied to the calendar part of the Popup


Calendar navigation is handled following the Calendar component specification:

[Calendar  specification]({% slug keyboard_navigation_calendar %})

### Actions applied to the time part of the Popup


TimePicker navigation is handled following the TimePicker component specification:

[TimePicker  specification]({% slug keyboard_navigation_timepicker %})

## Resources

[ARIA Authoring Practices: Date Picker Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/)



{% meta height:700 %}
{% embed_file datetimepicker/keyboard/func/app.tsx preview %}
{% embed_file datetimepicker/keyboard/func/main.tsx %}
{% endmeta %}


## Navigation Scenarios

When the popup of the DateTimePicker is opened, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [Calendar]({% slug keyboard_navigation_calendar %}) or the `time` part.

When the input of the DateTimePicker is focused, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [DateInput]({% slug keyboard_navigation_dateinput %}).

## See Also

* [Learn about KendoReact Free.](slug:free_components_introduction)
* [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepicker %})
* [Accessibility]({% slug accessibility_datetimepicker %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [React Date Inputs](slug:overview_dateinputs)
