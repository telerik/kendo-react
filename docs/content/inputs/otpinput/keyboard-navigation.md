---
title: Keyboard Navigation
page_title: KendoReact OTPInput Documentation | Keyboard Navigation
description: 'Get started with the KendoReact OTPInput and learn about the accessibility support it provides through its keyboard navigation functionality.'
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
components: ['otpinput']
slug: keyboard_navigation_otpinput
position: 12
---

# Keyboard Navigation

## Managing the Focus

The OTPInput is a composite component made up of individual input cells. Focus is managed internally — when a cell value is entered or deleted, the component automatically moves focus to the next or previous cell. The first cell receives focus when the user tabs into the component or clicks any cell.

## Keyboard Shortcuts

| Shortcut              | Behavior                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `Typing in the input` | Sets the value in the focused cell and automatically moves the focus to the next cell (if any).                                   |
| `Tab`                 | Focuses the next input in the OTP. If the focus is on the last input, focuses the next focusable element on the page.             |
| `Shift + Tab`         | Focuses the previous input in the OTP. If the focus is on the first input, focuses the previous focusable element before the OTP. |
| `ArrowRight`          | Moves the focus to the next focusable input in the OTP (if any).                                                                  |
| `ArrowLeft`           | Moves the focus to the previous focusable input in the OTP (if any).                                                              |
| `Backspace`           | Deletes the value of the focused input and moves the focus on the previous input (if any).                                        |
| `Delete`              | Deletes the value of the focused input without moving focus.                                                                      |

## Pasting Values

The OTPInput supports pasting values from the clipboard, starting from the focused cell. If the pasted value exceeds the total number of cells, it will be automatically trimmed to fit.

1. Copy the following code:

    ```text
    123456789
    ```

1. Paste it into the OTPInput using the `Ctrl+V` keyboard shortcut or the browser's context menu.

<demo metaUrl="inputs/otpinput/keyboard-navigation/func/" height="180"></demo>

## See Also

-   [Accessibility Support for the OTPInput]({% slug accessibility_otpinput %})
-   [Accessibility in KendoReact]({% slug overview_accessibilty %})
-   [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
