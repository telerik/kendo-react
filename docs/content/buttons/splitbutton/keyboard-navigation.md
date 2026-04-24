---
title: Keyboard Navigation
description: 'Use the KendoReact SplitButton keyboard navigation in React projects.'
components: ["splitbutton"]
slug: keyboard_navigation_splitbutton
position: 6
---

# Keyboard Navigation

The keyboard navigation of the SplitButton is always available.

The SplitButton supports the following keyboard shortcuts:

| SHORTCUT                     | DESCRIPTION                                                                                                                                                |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Enter` & `Space`            | If the popup is opened, activates the currently focused item and closes the popup. If the popup is closed, executes the default action of the SplitButton. |
| `Alt`+`Down Arrow`           | Opens the popup.                                                                                                                                           |
| `Alt`+`Up Arrow`             | Closes the popup.                                                                                                                                          |
| `Esc`                        | Closes the popup.                                                                                                                                          |
| `Up Arrow` & `Left Arrow`    | Sets the focus on the previously available item.                                                                                                           |
| `Down Arrow` & `Right Arrow` | Sets the focus on the next available item.                                                                                                                 |

{% meta height:250 %}
{% embed_file splitbutton/keyboard/func/app.tsx preview %}
{% embed_file splitbutton/keyboard/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the SplitButton]({% slug api_buttons_splitbuttonprops %})
-   [Accessibility]({% slug accessibility_splitbutton %})
