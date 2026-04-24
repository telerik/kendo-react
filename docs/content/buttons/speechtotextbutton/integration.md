---
title: Integration
description: 'Learn how to integrate the KendoReact SpeechToTextButton component with other KendoReact components or external services.'
components: ["speechtotextbutton"]
slug: integration_speechtotextbutton
position: 3
---

# SpeechToTextButton Integration

The KendoReact SpeechToTextButton can be seamlessly integrated with other KendoReact components to create powerful voice-enabled user interfaces as well as third-party integration with external service providers. This article demonstrates common integration patterns and use cases.

## KendoReact TextArea Integration

One of the most practical integrations is using the SpeechToTextButton as a prefix/suffix for text input components. This allows users to dictate text directly into text areas, enhancing accessibility and user experience.

### TextArea with Speech-to-Text Suffix

The following example demonstrates how to integrate the SpeechToTextButton as a suffix for a TextArea component, creating a voice-enabled text input experience:

{% meta height:400 %}
{% embed_file speechtotextbutton/textarea-suffix/app.tsx preview %}
{% embed_file speechtotextbutton/textarea-suffix/main.tsx %}
{% embed_file speechtotextbutton/textarea-suffix/styles.css %}
{% endmeta %}

## External Service Integration

The SpeechToTextButton can be integrated with external speech recognition services or APIs, such as Google Cloud Speech-to-Text or OpenAI Whisper.

### Google Cloud Speech-to-Text Integration

The following example demonstrates how to integrate the SpeechToTextButton with the Google Cloud Speech-to-Text API by using async event handlers to record audio and send it to the Google Cloud service. To test the demo, copy it locally and set your API key to the `GOOGLE_API_KEY` variable.

```tsx
import { useRef, useState } from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';

const App = () => {
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const [transcript, setTranscript] = useState('');

    const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY_HERE'; // Replace with your actual Google API key

    const handleStart = async () => {
        setTranscript('');
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);

            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = handleAudioStop;

            mediaRecorder.start();
            console.log('Recording started');
        } catch (err) {
            console.error('Microphone access error:', err);
        }
    };

    const handleEnd = () => {
        if (mediaRecorderRef.current?.state === 'recording') {
            mediaRecorderRef.current.stop();
        }
        console.log('Recording stopped');
    };

    const handleAudioStop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });

        const arrayBuffer = await audioBlob.arrayBuffer();
        const audioBase64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

        try {
            const response = await fetch(`https://speech.googleapis.com/v1/speech:recognize?key=${GOOGLE_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    config: {
                        encoding: 'WEBM_OPUS',
                        sampleRateHertz: 48000,
                        languageCode: 'en-US'
                    },
                    audio: {
                        content: audioBase64
                    }
                })
            });

            const result = await response.json();

            if (result.results && result.results.length > 0) {
                const transcriptText = result.results.map((r: any) => r.alternatives[0].transcript).join(' ');
                setTranscript(transcriptText);
                console.log('Transcription result:', transcriptText);
            } else {
                console.log('No transcription result');
            }
        } catch (error) {
            console.error('Speech-to-Text API error:', error);
        }
    };

    const handleError = (e: any) => {
        console.error('Speech error:', e);
    };

    return (
        <div>
            <SpeechToTextButton integrationMode="none" onStart={handleStart} onEnd={handleEnd} onError={handleError} />
            <p>
                <strong>Transcript:</strong> {transcript}
            </p>
        </div>
    );
};

export default App;
```

When integrating the SpeechToTextButton with Google Cloud Speech-to-Text or other external services, several key configurations should be made:

-   **Async event handlers**: Configure the `onStart` and `onEnd` event handlers to return promises that resolve only after external service communication is complete. This ensures the component waits for your service calls.
-   **Integration mode**: Set the `integrationMode` prop to control how the component behaves with external services. Use `none` to disable built-in speech recognition when relying entirely on external services.

## See Also

-   [SpeechToTextButton Events](slug://events_speechtotextbutton)
-   [SpeechToTextButton Appearance](slug://appearance_speechtotextbutton)
-   [SpeechToTextButton Speech Configurations](slug://speech_configs_speechtotextbutton)
