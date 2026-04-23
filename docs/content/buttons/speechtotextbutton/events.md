---
title: Events
description: 'Learn how to handle events in the KendoReact SpeechToTextButton component.'
components: ["speechtotextbutton"]
slug: events_speechtotextbutton
position: 8
---

# SpeechToTextButton Events

The KendoReact SpeechToTextButton provides a set of events that allow you to respond to user interactions and speech recognition states.

## Available Events

The SpeechToTextButton fires the following events:

-   [`onStart`](slug://api_buttons_speechtotextbuttonprops#onstart)&mdash;Triggered when speech recognition starts.
-   [`onResult`](slug://api_buttons_speechtotextbuttonprops#onresult)&mdash;Triggered when a speech recognition result is available.
-   [`onEnd`](slug://api_buttons_speechtotextbuttonprops#onend)&mdash;Triggered when speech recognition ends.
-   [`onError`](slug://api_buttons_speechtotextbuttonprops#onerror)&mdash;Triggered when an error occurs during speech recognition.

## Basic Usage

The following example demonstrates how to handle the basic events of the SpeechToTextButton:

{% meta height:500 %}
{% embed_file speechtotextbutton/events/app.tsx preview %}
{% embed_file speechtotextbutton/events/main.tsx %}
{% embed_file speechtotextbutton/events/Logger.tsx %}
{% embed_file speechtotextbutton/events/styles.css %}
{% endmeta %}

## Event Details

### onStart Event

The `onStart` event is fired when the user clicks the button and the speech recognition process begins.

```jsx
const onStart = () => {
    console.log('Speech recognition started');
    // Update UI to indicate that listening has started
};
```

### onResult Event

The `onResult` event is fired whenever a speech recognition result is available. This event provides the result data from the speech recognition process.

The event object contains:

-   `isFinal` (boolean)&mdash;Indicates whether this is a final result or an interim result.
-   `alternatives` (array)&mdash;An array of alternative results, each with:
    -   `transcript` (string)&mdash;The recognized text.
    -   `confidence` (number)&mdash;A value between 0 and 1 indicating the confidence level of the recognition.

```jsx
const onResult = (event: SpeechToTextResultEvent) => {
    const { isFinal, alternatives } = event;

    if (alternatives.length > 0) {
        const bestMatch = alternatives[0];
        console.log('Transcript:', bestMatch.transcript);
        console.log('Confidence:', bestMatch.confidence);

        if (isFinal) {
            // Process the final result
            processRecognizedText(bestMatch.transcript);
        } else {
            // Handle interim results (optional)
            updateIntermediateUI(bestMatch.transcript);
        }
    }
};
```

### onEnd Event

The `onEnd` event is fired when the speech recognition process ends. This can happen when:

-   The user clicks the button again to stop listening OR
-   The speech recognition system stops automatically after detecting silence.

```jsx
const onEnd = () => {
    console.log('Speech recognition stopped');
    // Update UI to indicate that listening has ended
};
```

### onError Event

The `onError` event is fired when an error occurs during the speech recognition process. The event object contains information about the error.

Common error types include:

-   `no-speech`&mdash;No speech was detected.
-   `aborted`&mdash;The recognition was aborted by the user or system.
-   `audio-capture`&mdash;Audio capture failed (e.g., no microphone available).
-   `network`&mdash;Network communication required for recognition failed.
-   `not-allowed`&mdash;The user denied permission to use the microphone.
-   `service-not-allowed`&mdash;The user denied permission to use the speech recognition service.
-   `bad-grammar`&mdash;There was an error in the grammar or language model.
-   `language-not-supported`&mdash;The language specified is not supported.

```jsx
const onError = (event: SpeechToTextErrorEvent) => {
    console.error('Speech recognition error:', event.error);

    // Handle specific error types
    switch (event.error) {
        case 'not-allowed':
            alert('Please allow microphone access to use speech recognition.');
            break;
        case 'no-speech':
            console.log('No speech detected.');
            break;
        case 'network':
            alert('Network error. Please check your connection.');
            break;
        default:
            console.error('Speech recognition error:', event.error);
    }
};
```

## See Also

-   [SpeechToTextButton API Reference](slug://api_buttons_speechtotextbuttonprops)
-   [SpeechToTextButton Appearance](slug://appearance_speechtotextbutton)
