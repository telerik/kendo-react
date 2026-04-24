---
title: Keyboard Navigation
page_title: KendoReact Calendar Documentation | Keyboard Navigation
description: 'Get started with the KendoReact Calendar and learn about the accessibility support it provides through its keyboard navigation functionality.'
components: ["calendar"]
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_calendar
position: 110
---

# Keyboard Navigation

## Keyboard Shortcuts

The keyboard navigation of the Calendar is always available.

The Calendar supports the following keyboard shortcuts:

| Shortcut                                   | Description                                  |
| :----------------------------------------- | :------------------------------------------- |
| `Up Arrow`                                 | Focuses a date in the previous week.         |
| `Down Arrow`                               | Focuses a date in the next week.             |
| `Left Arrow`                               | Focuses the previous available date.         |
| `Right Arrow`                              | Focuses the next available date.             |
| `Enter`                                    | Selects the focused date.                    |
| `Home`                                     | Focuses the first date in the month.         |
| `End`                                      | Focuses the last date in the month.          |
| `PageUp`                                   | Focuses the same date in the previous month. |
| `PageDown`                                 | Focuses the same date in the next month.     |
| `Ctrl`+`Up Arrow` & `Cmd`+`Up Arrow`       | Focuses the same date in the upper view.     |
| `Ctrl`+`Down Arrow` & `Cmd`+`Down Arrow`   | Focuses the same date in the lower view.     |
| `Ctrl`+`Right Arrow` & `Cmd`+`Right Arrow` | Navigates to the next period.                |
| `Ctrl`+`Left Arrow` & `Cmd`+`Left Arrow`   | Navigates to the previous period.            |
| `t`                                        | Focuses the today date.                      |

{% meta height:410 %}
{% embed_file calendar/keyboard/func/app.tsx preview %}
{% embed_file calendar/keyboard/func/main.tsx %}
{% endmeta %}

## See Also

-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [Accessibility in KendoReact](https://www.telerik.com/kendo-react-ui/components/accessibility/)
-   [Accessibility Compliance and Keyboard Support in KendoReact](https://www.telerik.com/kendo-react-ui/components/accessibility/accessibility-compliance/)
-   [React Date Inputs](slug:overview_dateinputs)
