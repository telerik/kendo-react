import * as React from 'react';

import { Label, Hint, Error } from '@progress/kendo-react-labels';
import { TextBox, TextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');
    const [touched, setTouched] = React.useState<Record<string, boolean>>({});

    const touch = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));

    const errors = {
        username: !username
            ? 'Username is required'
            : username.length < 4
            ? 'Username must be at least 4 characters'
            : '',
        email: !email ? 'Email is required' : !email.includes('@') ? 'Enter a valid email address' : '',
        password: !password
            ? 'Password is required'
            : password.length < 8
            ? 'Password must be at least 8 characters'
            : '',
        confirm: !confirm ? 'Please confirm your password' : confirm !== password ? 'Passwords do not match' : ''
    };

    const isFieldValid = (field: keyof typeof errors) => !touched[field] || !errors[field];

    return (
        <div className="demo-container">
            <div className="form-card">
                <div className="form-header">
                    <h3 className="form-title">Create Account</h3>
                    <p className="form-description">Fill in the form to get started</p>
                </div>

                <div className="form-fields">
                    <div className="form-field">
                        <Label editorId="username" editorValid={isFieldValid('username')}>
                            Username
                        </Label>
                        <TextBox
                            id="username"
                            value={username}
                            valid={isFieldValid('username')}
                            onChange={(e: TextBoxChangeEvent) => setUsername(e.value ?? '')}
                            onBlur={() => touch('username')}
                            ariaDescribedBy={!isFieldValid('username') ? 'usernameError' : undefined}
                        />
                        {!isFieldValid('username') && <Error id="usernameError">{errors.username}</Error>}
                    </div>

                    <div className="form-field">
                        <Label editorId="email" editorValid={isFieldValid('email')}>
                            Email
                        </Label>
                        <TextBox
                            id="email"
                            value={email}
                            valid={isFieldValid('email')}
                            onChange={(e: TextBoxChangeEvent) => setEmail(e.value ?? '')}
                            onBlur={() => touch('email')}
                            ariaDescribedBy={!isFieldValid('email') ? 'emailError' : undefined}
                        />
                        {!isFieldValid('email') && <Error id="emailError">{errors.email}</Error>}
                    </div>

                    <div className="form-row">
                        <div className="form-field">
                            <Label editorId="password" editorValid={isFieldValid('password')}>
                                Password
                            </Label>
                            <TextBox
                                id="password"
                                type="password"
                                value={password}
                                valid={isFieldValid('password')}
                                onChange={(e: TextBoxChangeEvent) => setPassword(e.value ?? '')}
                                onBlur={() => touch('password')}
                                ariaDescribedBy={!isFieldValid('password') ? 'passwordError' : 'passwordHint'}
                            />
                            {!isFieldValid('password') ? (
                                <Error id="passwordError">{errors.password}</Error>
                            ) : (
                                <Hint id="passwordHint">At least 8 characters</Hint>
                            )}
                        </div>
                        <div className="form-field">
                            <Label editorId="confirm" editorValid={isFieldValid('confirm')}>
                                Confirm Password
                            </Label>
                            <TextBox
                                id="confirm"
                                type="password"
                                value={confirm}
                                valid={isFieldValid('confirm')}
                                onChange={(e: TextBoxChangeEvent) => setConfirm(e.value ?? '')}
                                onBlur={() => touch('confirm')}
                                ariaDescribedBy={!isFieldValid('confirm') ? 'confirmError' : undefined}
                            />
                            {!isFieldValid('confirm') && <Error id="confirmError">{errors.confirm}</Error>}
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <Button themeColor="primary">Create Account</Button>
                    <Button fillMode="flat">Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default App;
