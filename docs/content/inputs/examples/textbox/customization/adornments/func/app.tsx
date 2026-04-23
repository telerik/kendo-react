import React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { InputPrefix, InputSuffix, TextBox, TextBoxChangeEvent, TextBoxProps } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { calendarIcon, searchIcon, envelopeIcon, userIcon, lockIcon, eyeIcon } from '@progress/kendo-svg-icons';

const EMPTY_VALUE = '';

const App = () => {
    const [eventValue, setEventValue] = React.useState<TextBoxProps['value']>('');
    const [emailValue, setEmailValue] = React.useState<TextBoxProps['value']>('');
    const [usernameValue, setUsernameValue] = React.useState<TextBoxProps['value']>('');
    const [passwordValue, setPasswordValue] = React.useState<TextBoxProps['value']>('');

    const handleEventChange = React.useCallback((event: TextBoxChangeEvent) => {
        setEventValue(event.target.value);
    }, []);

    const handleEmailChange = React.useCallback((event: TextBoxChangeEvent) => {
        setEmailValue(event.target.value);
    }, []);

    const handleUsernameChange = React.useCallback((event: TextBoxChangeEvent) => {
        setUsernameValue(event.target.value);
    }, []);

    const handlePasswordChange = React.useCallback((event: TextBoxChangeEvent) => {
        setPasswordValue(event.target.value);
    }, []);

    return (
        <>
            <h6>Event Search</h6>
            <TextBox
                value={eventValue}
                onChange={handleEventChange}
                placeholder="Search for an event"
                prefix={() => (
                    <InputPrefix>
                        <SvgIcon icon={calendarIcon} />
                    </InputPrefix>
                )}
                suffix={() => (
                    <InputSuffix>
                        <Button
                            disabled={eventValue === EMPTY_VALUE}
                            themeColor="primary"
                            fillMode={'flat'}
                            svgIcon={searchIcon}
                        />
                    </InputSuffix>
                )}
                style={{ width: 300 }}
            />
            <br />
            <br />

            <h6>Email Input</h6>
            <TextBox
                value={emailValue}
                onChange={handleEmailChange}
                placeholder="Enter email"
                prefix={() => (
                    <InputPrefix>
                        <SvgIcon icon={envelopeIcon} />
                    </InputPrefix>
                )}
                suffix={() => (
                    <InputSuffix>
                        <span className="k-input-suffix-text">@domain.com</span>
                    </InputSuffix>
                )}
                style={{ width: 300 }}
            />
            <br />
            <br />

            <h6>Username Input</h6>
            <TextBox
                value={usernameValue}
                onChange={handleUsernameChange}
                placeholder="Choose a username"
                prefix={() => (
                    <InputPrefix>
                        <SvgIcon icon={userIcon} />
                    </InputPrefix>
                )}
                suffix={() => (
                    <InputSuffix>
                        <Button
                            disabled={usernameValue === EMPTY_VALUE}
                            themeColor="primary"
                            fillMode={'flat'}
                            svgIcon={searchIcon}
                        />
                    </InputSuffix>
                )}
                style={{ width: 300 }}
            />
            <br />
            <br />

            <h6>Password Input</h6>
            <TextBox
                value={passwordValue}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Enter your password"
                prefix={() => (
                    <InputPrefix>
                        <SvgIcon icon={lockIcon} />
                    </InputPrefix>
                )}
                suffix={() => (
                    <InputSuffix>
                        <Button themeColor="primary" fillMode={'flat'} svgIcon={eyeIcon} />
                    </InputSuffix>
                )}
                style={{ width: 300 }}
            />
        </>
    );
};

export default App;
