---
title: Keyboard Navigation
page_title: KendoReact TimePicker Documentation | Keyboard Navigation
description: "Get started with the KendoReact TimePicker and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_timepicker
position: 110
---

# Keyboard Navigation


## Managing the Focus


Initial focus is on the selected time.


The time dropdown tab sequence is:  **hours** part, **minutes** part, **seconds** part, **Cancel** button, **Set** button, **Now** button (activated on Enter). The tab key is trapped in the popup.


Enhanced Mouse UX - when mouse is over a timelist - it gets the focus.

## Keyboard Shortcuts

### Actions applied to the input:

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Closes the popup |
| `Alt/Opt(Mac) + Down` | Opens the popup |
| `Alt/Opt(Mac) + Up` | Closes the popup |
| `Up` | Increases the value of the time segment that is highlighted. |
| `Down` | Decreases the value of the time segment that is highlighted. |
| `Left` | Moves to previous time segment in the input. |
| `Right` | Moves to next time segment in the input. |
| `Backspace` | Deletes value of the time segment. |

### Actions applied to the popup

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Closes the popup |
| `Shift + Tab` or `Left` | Focuses previous carousel. |
| `Tab` or `Right` | Focuses next carousel. |
| `Down` | Selects next value in the carousel. |
| `Up` | Selects previous value in the carousel. |



{% meta height:450 %}
{% embed_file timepicker/keyboard/func/app.tsx preview %}
{% embed_file timepicker/keyboard/func/main.tsx %}
{% endmeta %}

## See Also

* [API Reference of the TimePicker]({% slug api_dateinputs_timepicker %})
* [Accessibility]({% slug accessibility_timepicker %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [React Date Inputs](slug:overview_dateinputs)
