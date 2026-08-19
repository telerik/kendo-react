---
title: Checkpoint
description: 'Learn how to use the KendoReact Checkpoint component to add conversation turn separators with Start Over and Redo actions to your agentic interface.'
slug: checkpoint_llmkit
position: 4
components: ["llmkit"]
---

# LLM Kit Checkpoint

Conversation flows can change as users explore different directions, revisit an earlier turn, or reconsider a response. Use the Checkpoint component to mark a recovery point between conversation turns.

The [Checkpoint component](slug:api_conversational-ui_checkpoint) adds an anchor point between conversation turns and offers explicit recovery actions: starting the conversation over from scratch, or regenerating just the most recent response without discarding the rest of the thread.

The following example demonstrates the Checkpoint component placed between and around conversation turns, responding to user interactions. Hover over the top of the conversation or between messages to reveal the Checkpoint and its actions.

<demo metaUrl="conversational-ui/llm-kit/checkpoint/" height="720"></demo>

## Configuring the State

Use the [`state`](slug:api_conversational-ui_checkpointprops#state) prop to configure the currently displayed recovery option. Provide a [`CheckpointState`](slug:api_conversational-ui_checkpointstate) value that represents the recovery action you want to offer.

The `CheckpointState` type supports three values:

- `startOver`&mdash;Represents an option to reset the conversation from the beginning.
- `restore`&mdash;Represents an option to return the conversation to an earlier turn.
- `redo`&mdash;Represents an option to regenerate the latest response.

These states describe the recovery option presented by the Checkpoint. The component updates the separator's content to reflect the current state, while your application defines the conversation logic that runs after the user selects that action.

When a user selects the Checkpoint action, [`onAction`](slug:api_conversational-ui_checkpointprops#onaction) receives a [`CheckpointActionEvent`](slug:api_conversational-ui_checkpointactionevent). Handle the event to perform the corresponding recovery operation.

```tsx
<Checkpoint state={checkpointState} onAction={handleCheckpointAction} />
```

```tsx
const handleCheckpointAction = (event: CheckpointActionEvent) => {
    if (event.action === 'startOver') {
        resetConversation();
    } else if (event.action === 'restore') {
        restoreConversation();
    } else {
        regenerateLastResponse();
    }
};
```

## Controlling the Visibility

By default, a Checkpoint is revealed on hover to keep the conversation layout compact. Set [`visible`](slug:api_conversational-ui_checkpointprops#visible) to `true` to keep the Checkpoint action visible, which is useful for touch interfaces where hover is unavailable.

```tsx
<Checkpoint state="restore" visible />
```

## Customizing the Content

Use the [`template`](slug:api_conversational-ui_checkpointprops#template) prop to replace the default state-specific content between the Checkpoint's separator lines. The custom React component can present an action or message while the Checkpoint continues to mark the location between conversation turns.

```tsx
const ReviewResponse = () => (
    <Button fillMode="flat" size="small">
        Review response
    </Button>
);

<Checkpoint visible template={ReviewResponse} />;
```

## Suggested Links

* [LLM Kit Overview](slug:overview_llmkit)
* [Tool Call](slug:toolcall_llmkit)
* [API Reference of the Checkpoint component](slug:api_conversational-ui_checkpoint)
