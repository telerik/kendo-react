import React, { useState } from 'react';
import { SpeechToTextButton, SpeechToTextButtonProps } from '@progress/kendo-react-buttons';
import {
    useConfigurator,
    sizeOptions,
    roundedOptions,
    fillModeOptions,
    themeColorOptions
} from '@docs-shared/configurator';

import './styles.css';

const App = () => {
    const config = useConfigurator({
        sections: [
            {
                label: 'Size',
                controls: [
                    {
                        type: 'segmented',
                        name: 'size',
                        options: sizeOptions(['small', 'medium', 'large']),
                        defaultValue: 'medium'
                    }
                ]
            },
            {
                label: 'Fill Mode',
                controls: [
                    {
                        type: 'segmented',
                        name: 'fillMode',
                        options: fillModeOptions(['solid', 'outline', 'flat', 'link']),
                        defaultValue: 'solid'
                    }
                ]
            },
            {
                label: 'Border Radius',
                controls: [
                    {
                        type: 'segmented',
                        name: 'rounded',
                        options: roundedOptions(['small', 'medium', 'large', 'full']),
                        defaultValue: 'medium'
                    }
                ]
            },
            {
                label: 'Theme Color',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'themeColor',
                        options: themeColorOptions([
                            'base',
                            'primary',
                            'secondary',
                            'tertiary',
                            'info',
                            'success',
                            'warning',
                            'error'
                        ]),
                        defaultValue: 'primary'
                    }
                ]
            }
        ]
    }) as {
        size: SpeechToTextButtonProps['size'];
        fillMode: SpeechToTextButtonProps['fillMode'];
        rounded: SpeechToTextButtonProps['rounded'];
        themeColor: SpeechToTextButtonProps['themeColor'];
    };

    const [statusMessage, setStatusMessage] = useState('');
    const [statusClass, setStatusClass] = useState('');

    const onStart = () => {
        setStatusMessage('Speech recognition started - speak now!');
        setStatusClass('listening');
    };

    const onEnd = () => {
        setStatusMessage('Speech recognition ended');
        setStatusClass('ended');
        setTimeout(() => setStatusMessage(''), 3000);
    };

    const onError = (event) => {
        setStatusMessage(`Error: ${event.error}`);
        setStatusClass('error');
        setTimeout(() => setStatusMessage(''), 5000);
    };

    const onResult = (event) => {
        const { isFinal, alternatives } = event;
        if (isFinal && alternatives.length > 0) {
            setStatusMessage(`Recognized: "${alternatives[0].transcript}"`);
            setStatusClass('result');
            setTimeout(() => setStatusMessage(''), 5000);
        }
    };

    return (
        <div className="example-wrapper-center">
            <SpeechToTextButton
                size={config.size}
                fillMode={config.fillMode}
                rounded={config.rounded}
                themeColor={config.themeColor}
                onStart={onStart}
                onEnd={onEnd}
                onError={onError}
                onResult={onResult}
            />

            {statusMessage && (
                <div className="status-section">
                    <div className={`status-message ${statusClass}`}>{statusMessage}</div>
                </div>
            )}
        </div>
    );
};

export default App;
