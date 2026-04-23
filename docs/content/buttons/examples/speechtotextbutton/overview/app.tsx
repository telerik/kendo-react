import { SpeechToTextButton, SpeechToTextErrorEvent, SpeechToTextResultEvent } from '@progress/kendo-react-buttons';
import { useState } from 'react';
import './styles.css';

import { InputSeparator, InputSuffix, TextArea } from '@progress/kendo-react-inputs';

type SpeechSuffixProps = {
    isListening: boolean;
    onStart: () => void;
    onEnd: () => void;
    onError: (event: SpeechToTextErrorEvent) => void;
    onResult: (event: SpeechToTextResultEvent) => void;
};

const SpeechSuffix = ({ isListening, onStart, onEnd, onError, onResult }: SpeechSuffixProps) => (
    <>
        <InputSeparator orientation="horizontal" />
        <InputSuffix orientation="horizontal">
            <span className={`!k-font-size-md k-font-style-italic k-opacity-50 p-3 ${isListening ? 'listening' : ''}`}>
                {isListening ? 'Listening...' : 'Click the mic to speak'}
            </span>
            <span className="k-spacer"></span>
            <SpeechToTextButton
                size={'large'}
                className="mx-1"
                fillMode="flat"
                themeColor="primary"
                rounded="large"
                onStart={onStart}
                onEnd={onEnd}
                onError={onError}
                onResult={onResult}
            />
        </InputSuffix>
    </>
);

const App = () => {
    const [isListening, setIsListening] = useState(false);
    const [finalText, setFinalText] = useState('Describe a project you worked on that had a strong impact.');

    const onStart = () => {
        setIsListening(true);
    };

    const onEnd = () => {
        setIsListening(false);
    };

    const onError = (event: SpeechToTextErrorEvent) => {
        setIsListening(false);
        console.error('Speech recognition error:', event);
    };

    const onResult = (event: SpeechToTextResultEvent) => {
        const { isFinal, alternatives } = event;

        if (alternatives.length > 0) {
            const result = alternatives[0];

            if (isFinal) {
                setFinalText((prev) => (prev ? `${prev} ` : '') + result.transcript);
            }
        }
    };

    return (
        <>
            <div className="demo-container"></div>
            <div className="profile-demo card-container">
                <div className="k-card custom-card">
                    <div className="card-row">
                        <div className="card-column no-flex">
                            <div className="sidebar-container k-skeleton">
                                <div className="avatar-name-container">
                                    <div className="name-container">
                                        <div className="k-skeleton skeleton-text"></div>
                                        <div className="k-skeleton skeleton-small-text-short"></div>
                                    </div>
                                </div>
                                <div className="description-container">
                                    <div className="k-skeleton skeleton-small-text"></div>
                                    <div className="k-skeleton skeleton-small-text"></div>
                                    <div className="k-skeleton skeleton-small-text"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-column">
                            <div className="avatar-title-container">
                                <div className="k-skeleton skeleton-avatar"></div>
                                <h4 className="k-h4 k-font-size-xl">Additional Information</h4>
                            </div>
                            <div className="skeleton-container top">
                                <div className="k-skeleton skeleton-box-small"></div>
                                <div className="k-skeleton skeleton-box-large"></div>
                            </div>
                            <div className="component-container">
                                <span className="start">Project Impact Summary</span>
                                <TextArea
                                    value={finalText}
                                    onChange={(e) => setFinalText(e.value)}
                                    rows={4}
                                    className="!k-flex-col !k-font-size-lg"
                                    suffix={
                                        <SpeechSuffix
                                            isListening={isListening}
                                            onStart={onStart}
                                            onEnd={onEnd}
                                            onError={onError}
                                            onResult={onResult}
                                        />
                                    }
                                />
                            </div>
                            <div className="skeleton-container bottom">
                                <div className="k-skeleton skeleton-box-small"></div>
                                <div className="k-skeleton skeleton-box-large-double"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
