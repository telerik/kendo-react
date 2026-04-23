---
title: ActionType
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ActionType."
api_reference: true
type: inner_api
slug: api_conversational-ui_actiontype
---

# ActionType
Specifies the button type of a quick action ([see examples](https://www.telerik.com/kendo-react-ui/components/conversational-ui/chat/quick-actions/suggested-actions)).

* `openUrl`&mdash;Opens a new browser window with the specified URL.
* `reply`&mdash;Sends the action value as a reply in the Chat.
* `call`&mdash;Treats a value as a phone number.
  Similar to clicking a [telephone link](https://css-tricks.com/the-current-state-of-telephone-links/).
* other&mdash;Handled in your code in the [`ExecuteActionEvent`](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/chatactionexecuteevent).

`type` ActionType = "openUrl" | "reply" | "call" | `any`;
