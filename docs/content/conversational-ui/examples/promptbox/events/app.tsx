import * as React from 'react';
import {
    PromptBox,
    PromptBoxChangeEvent,
    PromptBoxFocusEvent,
    PromptBoxBlurEvent,
    PromptBoxPromptActionEvent,
    PromptBoxSelectAttachmentsEvent,
    UploadButtonProps
} from '@progress/kendo-react-conversational-ui';
import {
    SpeechToTextButtonProps,
    SpeechToTextResultEvent,
    SpeechToTextErrorEvent
} from '@progress/kendo-react-buttons';
import { paperPlaneIcon, paperclipIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const [events, setEvents] = React.useState<string[]>([]);
    const [value, setValue] = React.useState<string>('');

    const logEvent = (eventName: string, eventData?: any) => {
        const dataStr = eventData !== undefined && eventData !== null ? `: ${JSON.stringify(eventData)}` : '';
        setEvents((prevEvents) => [`${eventName}${dataStr}`, ...prevEvents]);
    };

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setValue(event.value);
        logEvent('onChange', event.value);
    };

    const handleFocus = (event: PromptBoxFocusEvent) => {
        logEvent('onFocus', null);
    };

    const handleBlur = (event: PromptBoxBlurEvent) => {
        logEvent('onBlur', null);
    };

    const handlePromptAction = (event: PromptBoxPromptActionEvent) => {
        logEvent('onPromptAction', { value: event.value, attachments: event.attachments });

        setValue('');
    };

    const handleSelectAttachments = (event: PromptBoxSelectAttachmentsEvent) => {
        logEvent('onSelectAttachments', {
            selectedFiles: event.selectedFiles.map((f) => ({ name: f.name, size: f.size })),
            allFiles: event.allFiles.map((f) => ({ name: f.name, size: f.size }))
        });
    };

    const handleRemoveAttachment = (fileName: string) => {
        logEvent('onRemoveAttachment', { name: fileName });
    };

    const handleSpeechToTextStart = () => {
        logEvent('onStart', null);
    };

    const handleSpeechToTextEnd = () => {
        logEvent('onEnd', null);
    };

    const handleSpeechToTextError = (event: SpeechToTextErrorEvent) => {
        logEvent('onError', { errorMessage: event.errorMessage });
    };

    const handleSpeechToTextResult = (event: SpeechToTextResultEvent) => {
        logEvent('onResult', {
            isFinal: event.isFinal,
            transcript: event.alternatives[0]?.transcript,
            confidence: event.alternatives[0]?.confidence
        });
    };

    const uploadButtonConfig: UploadButtonProps = {
        svgIcon: paperclipIcon,
        onSelectAttachments: handleSelectAttachments,
        onRemoveAttachment: handleRemoveAttachment
    };

    const speechToTextButtonConfig: SpeechToTextButtonProps = {
        fillMode: 'flat',
        onStart: handleSpeechToTextStart,
        onEnd: handleSpeechToTextEnd,
        onError: handleSpeechToTextError,
        onResult: handleSpeechToTextResult
    };

    return (
        <div className="profile-demo card-container">
            <div className="main-layout">
                <div style={{ marginBottom: '30px' }}>
                    <PromptBox
                        value={value}
                        onChange={handleValueChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onPromptAction={handlePromptAction}
                        mode="single"
                        placeholder="Type your message..."
                        maxTextAreaHeight="150"
                        style={{ width: '500px' }}
                        actionButtonConfig={{
                            svgIcon: paperPlaneIcon,
                            fillMode: 'flat',
                            themeColor: 'primary'
                        }}
                        uploadButtonConfig={uploadButtonConfig}
                        speechToTextButtonConfig={speechToTextButtonConfig}
                    />
                </div>

                <div className="example-config" style={{ flex: 1, minWidth: 0 }}>
                    <h5>Event Log</h5>
                    <ul className="event-log">
                        {events.slice(0, 20).map((event, index) => (
                            <li
                                key={index}
                                style={{
                                    backgroundColor: index === 0 ? '#e8f5e8' : 'transparent',
                                    borderBottom: '1px solid #ddd'
                                }}
                            >
                                {event}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
