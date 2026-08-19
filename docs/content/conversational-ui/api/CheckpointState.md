---
title: CheckpointState
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the CheckpointState."
api_reference: true
type: inner_api
slug: api_conversational-ui_checkpointstate
---

# CheckpointState
Represents the lifecycle state of a `Checkpoint`.

- `'startOver'` — the checkpoint marks a point the user can restore to, with
  no prior messages beyond it.
- `'restore'` — the checkpoint marks a point the user can restore to.
- `'redo'` — the checkpoint has been restored and a redo action is available.

`Checkpoint` renders a built-in default action for each of these states
(`'startOver'`/`'restore'` render a "Restore Checkpoint" button; `'redo'`
renders a restored-state stamp followed by a "Redo" button). The `template`
prop, when supplied, replaces that default action entirely.

`type` CheckpointState = "startOver" | "restore" | "redo";
