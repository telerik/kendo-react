---
title: ScrollMode
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ScrollMode."
api_reference: true
type: inner_api
slug: api_conversational-ui_scrollmode
---

# ScrollMode
Controls the scroll behavior of the message list.
- `scrollable`&mdash;Default mode. All messages are rendered with standard scroll behavior.
- `endless`&mdash;Endless scroll mode. The Chat starts by rendering the last `pageSize` messages
  and prepends older ones as the user scrolls up. DOM grows within a session; only pin clicks reset it.

`type` ScrollMode = "scrollable" | "endless";
