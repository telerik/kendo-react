import React, { useState } from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import { DropDownList } from '@progress/kendo-react-dropdowns';

import './styles.css';

const sizeOptions: { text: string; value: 'small' | 'medium' | 'large' }[] = [
    { text: 'Small', value: 'small' },
    { text: 'Medium', value: 'medium' },
    { text: 'Large', value: 'large' }
];

const fillModeOptions: { text: string; value: 'solid' | 'outline' | 'flat' | 'link' }[] = [
    { text: 'Solid', value: 'solid' },
    { text: 'Outline', value: 'outline' },
    { text: 'Flat', value: 'flat' },
    { text: 'Link', value: 'link' }
];

const roundedOptions: { text: string; value: 'small' | 'medium' | 'large' | 'full' }[] = [
    { text: 'Small', value: 'small' },
    { text: 'Medium', value: 'medium' },
    { text: 'Large', value: 'large' },
    { text: 'Full', value: 'full' }
];

const themeColorOptions: {
    text: string;
    value: 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error';
}[] = [
    { text: 'Base', value: 'base' },
    { text: 'Primary', value: 'primary' },
    { text: 'Secondary', value: 'secondary' },
    { text: 'Tertiary', value: 'tertiary' },
    { text: 'Info', value: 'info' },
    { text: 'Success', value: 'success' },
    { text: 'Warning', value: 'warning' },
    { text: 'Error', value: 'error' }
];

const App = () => {
    const [config, setConfig] = useState<{
        size: { text: string; value: 'small' | 'medium' | 'large' };
        fillMode: { text: string; value: 'solid' | 'outline' | 'flat' | 'link' };
        rounded: { text: string; value: 'small' | 'medium' | 'large' | 'full' };
        themeColor: {
            text: string;
            value: 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error';
        };
    }>({
        size: sizeOptions[1],
        fillMode: fillModeOptions[0],
        rounded: roundedOptions[1],
        themeColor: themeColorOptions[1]
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [statusClass, setStatusClass] = useState('');

    const updateConfig = (key, item) => {
        setConfig((prev) => ({ ...prev, [key]: item }));
    };

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
        <div className="customization-demo">
            <div className="demo-section">
                <p>Customize the appearance of the SpeechToTextButton button using the controls below</p>

                <div className="customization-controls">
                    <div className="control-grid">
                        {['size', 'fillMode', 'rounded', 'themeColor'].map((key) => {
                            const options = {
                                size: sizeOptions,
                                fillMode: fillModeOptions,
                                rounded: roundedOptions,
                                themeColor: themeColorOptions
                            }[key];

                            return (
                                <div className="control-item" key={key}>
                                    <label htmlFor={`${key}-select`}>
                                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                                    </label>
                                    <DropDownList
                                        id={`${key}-select`}
                                        data={options}
                                        textField="text"
                                        dataItemKey="value"
                                        value={config[key]}
                                        onChange={(e) => updateConfig(key, e.target.value)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="button-demo-area">
                    <div className="demo-button-container">
                        <SpeechToTextButton
                            size={config.size.value}
                            fillMode={config.fillMode.value}
                            rounded={config.rounded.value}
                            themeColor={config.themeColor.value}
                            onStart={onStart}
                            onEnd={onEnd}
                            onError={onError}
                            onResult={onResult}
                        />
                    </div>

                    <div className="config-display">
                        <h5>Current Configuration:</h5>
                        <div className="config-details">
                            {Object.entries(config).map(([key, sel]) => (
                                <span className="config-item" key={key}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}: <code>{sel.value}</code>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {statusMessage && (
                    <div className="status-section">
                        <div className={`status-message ${statusClass}`}>{statusMessage}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
