---
title: Keyboard Navigation
description: 'Use the KendoReact Chat with a keyboard in React projects.'
components: ["chat"]
slug: keyboard_navigation_chat
position: 90
---

# Keyboard Navigation

All Chat functions are accessible only to keyboard users.

In its page `Tab` sequence, the Chat includes the following stops:

-   Message list
-   Input text box
-   **Send** button

In the message list, the Chat supports the following keyboard shortcuts:

| Shortcut      | Context          | Description                                                                       |
| :------------ | :--------------- | :-------------------------------------------------------------------------------- |
| `Up Arrow`    | Message list     | Selects the previous Chat entry&mdash;a message, attachment, or suggested action. |
| `Down Arrow`  | Message list     | Selects the next Chat item&mdash;a message, attachment, or suggested action.      |
| `Left Arrow`  | Message list     | Selects the next attachment or quick action.                                      |
| `Right Arrow` | Message list     | Selects the next attachment or quick action.                                      |
| `Enter`       | Message list     | Executes the selected quick action and focuses the input text box.                |
| `Enter`       | Message text box | Sends the currently entered message.                                              |
| `F10`         | Message text box | Opens and focuses the Chat ToolBar (if present).                                  |

{% meta height:680 %}
{% embed_file chat/keyboard-navigation/app.tsx preview %}
{% embed_file chat/keyboard-navigation/main.tsx %}
{% endmeta %}

## See Also

-   [Accessibility in KendoReact](https://www.telerik.com/kendo-react-ui/components/accessibility/)
-   [Accessibility Compliance and Keyboard Support in KendoReact](https://www.telerik.com/kendo-react-ui/components/accessibility/accessibility-compliance/)
-   [API Reference of the Chat]({% slug api_conversational-ui %})
