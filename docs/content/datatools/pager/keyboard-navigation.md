---
title: Keyboard Navigation
page_title: KendoReact Pager Documentation | Keyboard Navigation
description: "Get started with the KendoReact Pager and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_pager
position: 110
---

# Keyboard Navigation


## Managing the Focus


The Pager wrapper element is part of the page tab sequence. When focused, it allows the user to press `Enter` to activate its inner navigation. The inner navigation in the component also relies on `Tab`. When the focus is inside the Pager, it is trapped.


Each specific implementation of the Pager component may offer a configuration option that allows you to change the default behavior of the component that is described in this section. The purpose of such alternative behavior may be to include all Pager elements directly in the document tab sequence or to implement `Arrow`-based navigation among the inner Pager elements.


Important notes:


 - All buttons in the Pager, including the disabled ones, are always focusable.
 - In scenarios when the currently focused button disappears from the Pager upon user interaction, for example, the **More pages** button, you must move the focus to the button representing the currently selected page.

## Keyboard Shortcuts


The following sections describe the keyboard navigation of the Pager according to the specific use-case scenario.

### All Scenarios


The following table lists the keyboard combinations supported by the Pager and valid for all scenarios.

| Shortcut | Behavior |
| -------- | -------- |
| `Home` | Loads the first page of data if the current page is not the first one. |
| `End` | Loads the last page of data if the current page is not the last one. |

### Focused Wrapper


The following table lists the keyboard combinations supported by the Pager when its wrapper element is focused.

| Shortcut | Behavior |
| -------- | -------- |
| `Enter` | Activates the inner Pager navigation. |
| `Tab` | Navigates to the next focusable element on the page. |
| `Shift` + `Tab` | Navigates to the previous focusable element on the page. |
| `Left Arrow` | Loads the previous page of data, if any. |
| `Right Arrow` | Loads the next page of data, if any. |
| `Page Up` | Loads the previous page of data, if any. |
| `Page Down` | Loads the next page of data, if any. |

### Activated Inner Navigation


The following table lists the keyboard combinations supported by the Pager when its inner navigatin is activated.

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Moves the focus back to the wrapper element. Deactivates the inner Pager navigation. |
| `Tab` | Navigates to the next focusable element in the Pager. If the current focus is on the last element, moves the focus to the first focusable item in the component. |
| `Shift` + `Tab` | Navigates to the previous focusable element in the Pager. If the current focus is on the first element, moves the focus to the last focusable item in the component. |
| `Enter` | For button items, and Pager input executes the currently focused action (page change). |



{% meta height:220 %}
{% embed_file pager/keyboard-navigation/func/app.tsx preview %}
{% embed_file pager/keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [API Reference of the Pager Props]({% slug api_data-tools_pagerprops %})
