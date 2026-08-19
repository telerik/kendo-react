import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { TextBox, TextBoxChangeEvent, TextArea, TextAreaChangeEvent } from '@progress/kendo-react-inputs';
import { DatePicker, DatePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const courses = [
    'React Fundamentals',
    'Advanced TypeScript',
    'State Management Patterns',
    'UI/UX Design Principles',
    'Cloud Architecture'
];

const App = () => {
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [course, setCourse] = React.useState('React Fundamentals');
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [notes, setNotes] = React.useState('');

    const isValid = Boolean(fullName && email && course && startDate);

    const clearForm = () => {
        setFullName('');
        setEmail('');
        setPhone('');
        setCourse('React Fundamentals');
        setStartDate(null);
        setNotes('');
    };

    return (
        <div className="demo-container">
            <div className="form-card">
                <div className="form-header">
                    <h3 className="form-title">Course Registration</h3>
                    <p className="form-description">Sign up for an upcoming course</p>
                </div>

                <div className="form-fields">
                    <div className="form-row">
                        <div className="form-field">
                            <Label editorId="fullName">Full Name</Label>
                            <TextBox
                                id="fullName"
                                value={fullName}
                                onChange={(e: TextBoxChangeEvent) => setFullName(e.value ?? '')}
                            />
                        </div>
                        <div className="form-field">
                            <Label editorId="email">Email</Label>
                            <TextBox
                                id="email"
                                value={email}
                                onChange={(e: TextBoxChangeEvent) => setEmail(e.value ?? '')}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-field">
                            <Label editorId="phone" optional={true}>
                                Phone
                            </Label>
                            <TextBox
                                id="phone"
                                value={phone}
                                onChange={(e: TextBoxChangeEvent) => setPhone(e.value ?? '')}
                            />
                        </div>
                        <div className="form-field">
                            <Label editorId="course">Course</Label>
                            <DropDownList
                                id="course"
                                data={courses}
                                value={course}
                                onChange={(e: DropDownListChangeEvent) => setCourse(e.value)}
                            />
                        </div>
                    </div>

                    <div className="form-field">
                        <Label editorId="startDate">Preferred Start Date</Label>
                        <DatePicker
                            id="startDate"
                            value={startDate}
                            onChange={(e: DatePickerChangeEvent) => setStartDate(e.value)}
                        />
                    </div>

                    <div className="form-field">
                        <Label editorId="notes" optional={true}>
                            Additional Notes
                        </Label>
                        <TextArea
                            id="notes"
                            value={notes}
                            onChange={(e: TextAreaChangeEvent) => setNotes(e.value ?? '')}
                            rows={3}
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <Button themeColor="primary" disabled={!isValid}>
                        Register
                    </Button>
                    <Button fillMode="flat" onClick={clearForm}>
                        Clear
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;
