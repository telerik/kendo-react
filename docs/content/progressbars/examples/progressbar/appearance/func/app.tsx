import * as React from 'react';

import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [value, setValue] = React.useState('');
    const [customText, setCustomText] = React.useState('Empty');
    const [emptyStyles, setEmptyStyles] = React.useState({
        color: '',
        background: ''
    });
    const [progressStyles, setProgressStyles] = React.useState({
        background: ''
    });
    const max = 9;

    const handleInputChange = (e: InputChangeEvent) => {
        if (e.value.length <= 9) {
            setValue(e.value);
        }

        switch (e.value.length) {
            case 0:
                updateAppearance('Empty', '', '', '');
                break;
            case 1:
                updateAppearance('Weak', 'red', '#ee9f05', '#ff000014');
                break;
            case 5:
                updateAppearance('Good', '#428bca', '#428bca', '#428bca1f');
                break;
            case 9:
                updateAppearance('Strong', '#8EBC00', '#8EBC00', '#8ebc0021');
                break;
            default:
        }
    };

    const updateAppearance = (text, textColor, progressBackground, emptyBackground) => {
        setCustomText(text);
        setEmptyStyles({ color: textColor, background: emptyBackground });
        setProgressStyles({ background: progressBackground });
    };

    const resetPassword = () => {
        setValue('');
        setCustomText('Empty');
        setEmptyStyles({ color: '', background: '' });
        setProgressStyles({ background: '' });
    };

    return (
        <>
            <div
                style={{
                    marginBottom: '20px',
                    padding: '15px',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '4px'
                }}
                id="password-instructions"
            >
                <strong>Password strength meter:</strong> Type a password (max {max} characters). The bar below
                indicates strength based on length.
            </div>
            <div className={'row'}>
                <div className={'col-12 mb-3'}>
                    <label htmlFor="password-input" className="k-label" style={{ display: 'block', fontWeight: 600 }}>
                        Password
                    </label>
                    <Input
                        id="password-input"
                        type="password"
                        placeholder="Enter password"
                        aria-describedby="password-instructions password-strength-label"
                        value={value}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={'col-12 mb-5'}>
                    <ProgressBar
                        value={value.length}
                        max={max}
                        progressStyle={progressStyles}
                        emptyStyle={emptyStyles}
                        aria-labelledby="password-strength-label"
                        label={() => {
                            return (
                                <strong id="password-strength-label" style={{ color: emptyStyles.color }}>
                                    {customText} ({value.length}/{max})
                                </strong>
                            );
                        }}
                    />
                </div>
                <div className={'col-12'}>
                    <Button type="button" onClick={resetPassword} themeColor={'primary'}>
                        Reset Password
                    </Button>
                </div>
            </div>
        </>
    );
};

export default App;
