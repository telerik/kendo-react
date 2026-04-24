---
title: Keyboard Navigation
page_title: KendoReact Scheduler Documentation | Keyboard Navigation
description: "Get started with the KendoReact Scheduler and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_scheduler
position: 110
---

# Keyboard Navigation


## Managing the Focus


The component is a single tab stop, so the arrows must be used for internal navigation.


The navigation will be always on, and won't need a `Navigable` parameter like the Grid. Focusing the Component will have the following effect, depending on whether appointments are loaded, or the component is empty:


 - empty scheduler - the focus is on the scheduler component itself.
 - non-empty - the first appointment is focused.


Roving tab index is used to track the currently focused appointment.


After CRUD operation, if the manipulated appointment remains in the current view, the focus should return to that appointment. If it has been deleted, or it has been edited, so that it moves outside of the current view, the focus should reset to the first appointment in the view (if any), or to the Scheduler itself.

## Keyboard Shortcuts

### Scheduler Content

### Actions applied to the content

| Shortcut | Behavior |
| -------- | -------- |
| `t` | navigates to today's time period |
| `c` | opens the popup for creation of new appointment |
| `b` | toggles view between business hours and full day (where available) |
| `Shift+ Left Arrow` | navigates to the previous time period |
| `Shift+ Right Arrow` | navigates to the next time period |
| `Alt/Opt(Mac) + 1,2,3,...` | navigates to the view with the respective number |
| `F10` | Focuses the ToolBar. |

### Actions applied to focusable appointments


All of the content keyboard shortcuts work when focus is on the appointment. In addition to that we also have:

| Shortcut | Behavior |
| -------- | -------- |
| `Arrow Keys` | move focus through appointments and the `more events` button, then continue to the next appointment in sequence |
| `Enter` | opens the Edit Popup to modify the appointment |
| `Delete/Backspace` | opens the Delete confirmation popup to modify the appointment |

### Actions when Scheduler is in Year view


Scheduler content in Year view implements keyboard navigation spec for the **MultiViewCalendar**. In addition it also has the following shortcuts:

| Shortcut | Behavior |
| -------- | -------- |
| `Enter` | If date is focused, opens its Tooltip. |
| `Enter` | If Tooltip is focused, navigates to Day view displaying the Tooltip date. |
| `Delete/Backspace` | If a Tooltip is focused, closes that and returns focus to its target date. |

### Scheduler Toolbar

| Shortcut | Behavior |
| -------- | -------- |
| `Left/Right ArrowKeys` | move focus through tools |
| `Down ArrowKeys` | moves focus to the selected (if present), or the first event (if any) in the view |

### Scheduler Popups


Using the default Window component shortcuts



{% meta height:700 %}
{% embed_file keyboard-navigation/basic/func/app.tsx preview %}
{% embed_file keyboard-navigation/basic/func/main.tsx %}
{% endmeta %}

## See Also
* [Editing in the KendoReact Scheduler]({% slug editing_scheduler %})
* [API Reference of the KendoReact Scheduler]({% slug api_scheduler_schedulerprops %})
* [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [Learn about KendoReact Free.](slug:free_components_introduction)
