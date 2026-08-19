import * as React from 'react';

import { FloatingLabel, Label, Hint } from '@progress/kendo-react-labels';
import { TextBox, TextBoxChangeEvent, TextArea, TextAreaChangeEvent } from '@progress/kendo-react-inputs';
import { DatePicker, DatePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const roles = ['Developer', 'Designer', 'Product Manager', 'QA Engineer', 'Team Lead'];
const countries = ['United States', 'United Kingdom', 'Canada', 'Germany', 'Australia'];

const App = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [role, setRole] = React.useState('Developer');
    const [country, setCountry] = React.useState('United States');
    const [bio, setBio] = React.useState('');

    return (
        <div className="demo-container">
            <div className="form-card">
                <div className="form-header">
                    <h3 className="form-title">Create Account</h3>
                    <p className="form-description">Fill in your details to get started</p>
                </div>

                <div className="form-row">
                    <FloatingLabel label="First Name" editorId="firstName" editorValue={firstName}>
                        <TextBox
                            id="firstName"
                            value={firstName}
                            onChange={(e: TextBoxChangeEvent) => setFirstName(e.value ?? '')}
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Last Name" editorId="lastName" editorValue={lastName}>
                        <TextBox
                            id="lastName"
                            value={lastName}
                            onChange={(e: TextBoxChangeEvent) => setLastName(e.value ?? '')}
                        />
                    </FloatingLabel>
                </div>
                <div className="form-row">
                    <FloatingLabel label="Email Address" editorId="email" editorValue={email}>
                        <TextBox
                            id="email"
                            value={email}
                            onChange={(e: TextBoxChangeEvent) => setEmail(e.value ?? '')}
                        />
                    </FloatingLabel>
                </div>
                <div className="form-row">
                    <FloatingLabel label="Phone" editorId="phone" editorValue={phone} optional={true}>
                        <TextBox
                            id="phone"
                            value={phone}
                            onChange={(e: TextBoxChangeEvent) => setPhone(e.value ?? '')}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="Start Date"
                        editorId="startDate"
                        editorValue={startDate?.toLocaleDateString() ?? ' '}
                    >
                        <DatePicker
                            id="startDate"
                            value={startDate}
                            onChange={(e: DatePickerChangeEvent) => setStartDate(e.value)}
                        />
                    </FloatingLabel>
                </div>

                <div className="form-row">
                    <div className="form-field">
                        <Label editorId="role">Role</Label>
                        <DropDownList
                            id="role"
                            data={roles}
                            value={role}
                            onChange={(e: DropDownListChangeEvent) => setRole(e.value)}
                        />
                        <Hint>Select your primary role</Hint>
                    </div>
                    <div className="form-field">
                        <Label editorId="country">Country</Label>
                        <DropDownList
                            id="country"
                            data={countries}
                            value={country}
                            onChange={(e: DropDownListChangeEvent) => setCountry(e.value)}
                        />
                    </div>
                </div>

                <div className="form-field">
                    <Label editorId="bio" optional={true}>
                        Bio
                    </Label>
                    <TextArea
                        id="bio"
                        value={bio}
                        onChange={(e: TextAreaChangeEvent) => setBio(e.value ?? '')}
                        rows={3}
                    />
                    <Hint>Tell us a bit about yourself</Hint>
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
