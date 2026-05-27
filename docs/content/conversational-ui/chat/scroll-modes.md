---
title: Scroll Modes
description: 'Configure scrollable and endless scrolling modes for the KendoReact Chat component.'
components: ['chat']
slug: scroll_modes_chat
tag: new
release_tag: Q2 2026
position: 75
---

# React Chat Scroll Modes

The Chat component supports two scroll modes that control how users navigate through message history&mdash;the default scrollable mode and the endless scrolling mode that loads messages on demand.

## Endless Scrolling

In endless scrolling mode, the Chat loads messages in batches as the user scrolls up through the conversation. This approach improves performance when you work with large conversation histories by rendering only a subset of messages at a time.

The Chat component fires the [`onLoadMoreMessages`](slug:api_conversational-ui_chatprops#onloadmoremessages) event when the user scrolls to the edge of the message list. The event provides the [`startIndex`](slug:api_conversational-ui_chatloadmoremessagesevent#startindex) and [`endIndex`](slug:api_conversational-ui_chatloadmoremessagesevent#endindex) values which you can use to fetch the next batch of messages from your data source.

You can use the endless scrolling mode with [local](#local-data) and [remote](#remote-data) data sources.

### Local Data

To enable endless scrolling with local data, set the [`scrollMode`](slug:api_conversational-ui_chatprops#scrollmode) property to `'endless'` and the [`pageSize`](slug:api_conversational-ui_chatprops#pagesize) property to control how many messages load in each batch. The default value is `50`. The Chat component handles pagination of the local messages array internally.

You can also configure the [Auto-Scroll Threshold](#auto-scroll-threshold) to control how the component brings new receiver messages into view.

The following example demonstrates endless scrolling with a local data source. Scroll up in the message list to load earlier messages in batches of 30.

{% meta height:670 %}
{% embed_file chat/scroll-modes/local/app.tsx preview %}
{% embed_file chat/scroll-modes/local/main.tsx %}
{% endmeta %}

### Remote Data

You can use the endless scrolling mode with a remote data source. This allows you to fetch messages from a server or other external source as needed, instead of loading the entire conversation history at once, which improves performance and reduces initial load times.

To enable endless scrolling with a remote data source, set the following properties in addition to [`scrollMode`](slug:api_conversational-ui_chatprops#scrollmode) and [`pageSize`](slug:api_conversational-ui_chatprops#pagesize):

-   [`total`](slug:api_conversational-ui_chatprops#total)&mdash;The total number of messages in the conversation.
-   [`startIndex`](slug:api_conversational-ui_chatprops#startindex)&mdash;The start of the currently loaded batch in the full message list.
-   [`endIndex`](slug:api_conversational-ui_chatprops#endindex)&mdash;The exclusive end of the currently loaded batch in the full message list.
-   [`pinnedMessages`](slug:api_conversational-ui_chatprops#pinnedmessages)&mdash;All pinned messages in the conversation.
-   [`repliedToMessages`](slug:api_conversational-ui_chatprops#repliedtomessages)&mdash;Reply target messages that exist outside the loaded `messages` array.

Handle the [`onReferencedMessageClick`](slug:api_conversational-ui_chatprops#onreferencedmessageclick) event to navigate to messages outside the loaded batch. The event provides the `id` of the referenced message so you can fetch it from the server if needed.

The following example demonstrates how to implement endless scrolling with a remote data source.

{% meta height:670 %}
{% embed_file chat/scroll-modes/remote/app.tsx preview %}
{% embed_file chat/scroll-modes/remote/main.tsx %}
{% embed_file chat/scroll-modes/remote/data-service.ts %}
{% endmeta %}

## Scrollable

The scrollable mode is the default scroll behavior of the Chat. In this mode, all bound messages render at once and the message list scrolls normally.

If you need to switch back from endless scrolling, set the [`scrollMode`](slug:api_conversational-ui_chatprops#scrollmode) property to `'scrollable'`. You can also configure the [Auto-Scroll Threshold](#auto-scroll-threshold) to control how the component brings new receiver messages into view.

The following example demonstrates the scrollable mode with all messages rendered at once.

{% meta height:670 %}
{% embed_file chat/scroll-modes/scrollable/app.tsx preview %}
{% embed_file chat/scroll-modes/scrollable/main.tsx %}
{% endmeta %}

## Auto-Scroll Threshold

The auto-scroll threshold feature allows keeping older messages visible when a new receiver message arrives. This prevents the component from scrolling if the user is actively reading older messages and a new message arrives.

By default, the threshold is set to `20%` of the visible message area height, but you can adjust this value as needed by setting the [`autoScrollThreshold`](slug:api_conversational-ui_chatprops#autoscrollthreshold) property to a string percentage or a number of pixels.

> Author messages always scroll to the bottom.

The following example demonstrates the auto-scroll threshold feature. Adjust the threshold value using the input field and click any of the suggestions to see how it affects the scroll behavior when new messages arrive.

{% meta height:740 %}
{% embed_file chat/scroll-modes/autoscroll-threshold/app.tsx preview %}
{% embed_file chat/scroll-modes/autoscroll-threshold/main.tsx %}
{% embed_file chat/scroll-modes/autoscroll-threshold/messages.ts %}
{% endmeta %}

## Suggested Links

-   [Data Binding](slug:databinding_standard_chat)
-   [Chat Events](slug:events_chat)
-   [API Reference of the Chat](slug:api_conversational-ui)
