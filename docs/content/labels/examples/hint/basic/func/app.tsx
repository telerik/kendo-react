import * as React from 'react';

import { Label, Hint } from '@progress/kendo-react-labels';
import { TextBox, TextBoxChangeEvent, TextArea, TextAreaChangeEvent } from '@progress/kendo-react-inputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const categories = ['Bug Report', 'Feature Request', 'Performance Issue', 'Documentation', 'Security'];
const severities = ['Critical', 'High', 'Medium', 'Low'];

const App = () => {
    const [title, setTitle] = React.useState('');
    const [category, setCategory] = React.useState('Bug Report');
    const [severity, setSeverity] = React.useState('Medium');
    const [description, setDescription] = React.useState('');
    const [contact, setContact] = React.useState('');

    return (
        <div className="demo-container">
            <div className="form-card">
                <div className="form-header">
                    <h3 className="form-title">New Support Ticket</h3>
                    <p className="form-description">Describe your issue and we'll get back to you</p>
                </div>

                <div className="form-fields">
                    <div className="form-field">
                        <Label editorId="title">Title</Label>
                        <TextBox
                            id="title"
                            value={title}
                            onChange={(e: TextBoxChangeEvent) => setTitle(e.value ?? '')}
                            ariaDescribedBy="titleHint"
                        />
                        <Hint id="titleHint">Briefly describe the issue in one sentence</Hint>
                    </div>

                    <div className="form-row">
                        <div className="form-field">
                            <Label editorId="category">Category</Label>
                            <DropDownList
                                id="category"
                                data={categories}
                                value={category}
                                onChange={(e: DropDownListChangeEvent) => setCategory(e.value)}
                            />
                            <Hint>Select the most relevant category</Hint>
                        </div>
                        <div className="form-field">
                            <Label editorId="severity">Severity</Label>
                            <DropDownList
                                id="severity"
                                data={severities}
                                value={severity}
                                onChange={(e: DropDownListChangeEvent) => setSeverity(e.value)}
                            />
                            <Hint>Impact level of the issue</Hint>
                        </div>
                    </div>

                    <div className="form-field">
                        <Label editorId="description">Description</Label>
                        <TextArea
                            id="description"
                            value={description}
                            onChange={(e: TextAreaChangeEvent) => setDescription(e.value ?? '')}
                            rows={3}
                            ariaDescribedBy="descriptionHint"
                        />
                        <Hint id="descriptionHint">Include steps to reproduce and expected vs. actual behavior</Hint>
                    </div>

                    <div className="form-field">
                        <Label editorId="contact" optional={true}>
                            Contact Email
                        </Label>
                        <TextBox
                            id="contact"
                            value={contact}
                            onChange={(e: TextBoxChangeEvent) => setContact(e.value ?? '')}
                            ariaDescribedBy="contactHint"
                        />
                        <Hint id="contactHint">Leave blank to use your account email for follow-up</Hint>
                    </div>
                </div>

                <div className="form-actions">
                    <Button themeColor="primary">Submit Ticket</Button>
                    <Button fillMode="flat">Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default App;
