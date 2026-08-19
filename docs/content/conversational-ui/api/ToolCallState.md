---
title: ToolCallState
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ToolCallState."
api_reference: true
type: inner_api
slug: api_conversational-ui_toolcallstate
---

# ToolCallState
Represents the lifecycle state of a `ToolCall` component.

- `'active'` — the tool call is in progress
- `'completed'` — the tool call finished successfully
- `'awaitingApproval'` — the tool call requires user approval before it proceeds
- `'error'` — the tool call encountered an error

`type` ToolCallState = "active" | "completed" | "awaitingApproval" | "error";
