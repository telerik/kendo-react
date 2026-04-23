---
title: Events
description: 'Handle events in the KendoReact SmartPasteButton component.'
components: ['smartpaste']
slug: events_smartpaste
position: 50
---

# SmartPasteButton Events

The KendoReact SmartPasteButton generates events that you can handle to integrate with AI services and respond to user interactions.

The [`onClick`](slug:api_buttons_smartpastebuttonprops#toc-onClick) event is the primary event for the SmartPasteButton. It fires when the user activates the button and provides access to clipboard content and form field metadata through the [`requestData`](slug:api_buttons_smartpasteclickevent#toc-requestData) property. Use this event to send data to your AI service and populate the form with the AI-generated results using the [`setResponse`](slug:api_buttons_smartpasteclickevent#toc-setResponse) function.

The following example demonstrates the SmartPasteButton events.

<demo metaUrl="buttons/smartpaste/events/" height="710"></demo>

## Suggested Links

-   [API Reference of the SmartPasteButton](slug:api_buttons_smartpastebuttonprops)
-   [Configuration](slug:configuration_smartpaste)
