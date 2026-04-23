import * as React from 'react';
import { Form, FormElement, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { SmartPasteButton, Button, SmartPasteFormField } from '@progress/kendo-react-buttons';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { copyIcon, arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const priorities = ['Critical', 'High', 'Medium', 'Low'];
const statuses = ['New', 'In Progress', 'On Hold', 'Resolved', 'Closed'];
const categories = ['Bug', 'Feature Request', 'Documentation', 'Support'];

const sampleData = `Issue Report
Title: Login page crashes on mobile devices
Category: Bug
Priority: Low
Status: In Progress
Reported by: Alex Thompson`;

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const formFields: SmartPasteFormField[] = [
        { field: 'title', type: 'string', description: 'Issue title or summary' },
        { field: 'category', type: 'fixed-choices', description: 'Issue category', allowedValues: categories },
        { field: 'priority', description: 'Priority level', type: 'kendo-input', allowedValues: priorities },
        { field: 'status', type: 'fixed-choices', description: 'Current status', allowedValues: statuses },
        { field: 'reporter', type: 'string', description: 'Person who reported the issue' }
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(sampleData);
    };

    const handleSmartPaste = async (e: any) => {
        setIsLoading(true);
        try {
            const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(e.requestData)
            });
            const data = await response.json();
            e.setResponse(data);
        } catch (error) {
            console.error('Smart paste failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="demo-wrapper">
            <div className="demo-hint">
                Copy the sample data to your clipboard, then click <strong>Smart Paste</strong> to automatically fill
                the form.
            </div>
            <div className="fixed-choice-demo">
                <Card className="sample-data-card">
                    <CardHeader>
                        <CardTitle>SAMPLE DATA</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div className="sample-data-content">{sampleData}</div>
                    </CardBody>
                    <CardActions layout="end">
                        <Button svgIcon={copyIcon} onClick={copyToClipboard} themeColor="primary">
                            Copy to Clipboard
                        </Button>
                    </CardActions>
                </Card>

                <div className="form-container">
                    <Form
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement cols={formBreakpoints}>
                                <legend className="k-form-legend">Issue Tracker</legend>

                                {/* Native HTML text input */}
                                <FieldWrapper>
                                    <label htmlFor="title" className="k-label k-form-label">
                                        Title
                                    </label>
                                    <div className="k-form-field-wrap">
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            className="native-input"
                                            data-smartpaste-description="Issue title or summary"
                                        />
                                    </div>
                                </FieldWrapper>

                                {/* Native HTML select (dropdown) */}
                                <FieldWrapper>
                                    <label htmlFor="category" className="k-label k-form-label">
                                        Category (dropdown)
                                    </label>
                                    <div className="k-form-field-wrap">
                                        <select
                                            id="category"
                                            name="category"
                                            className="native-select"
                                            data-smartpaste-description="Issue category"
                                        >
                                            <option value="">Select...</option>
                                            {categories.map((item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </FieldWrapper>

                                {/* Native HTML radio buttons */}
                                <FieldWrapper>
                                    <label className="k-label k-form-label">Priority (radio buttons)</label>
                                    <div className="k-form-field-wrap">
                                        <div className="radio-group" role="radiogroup">
                                            {priorities.map((item) => (
                                                <label key={item} className="radio-label">
                                                    <input
                                                        type="radio"
                                                        name="priority"
                                                        data-smartpaste-description={`Priority: ${item}`}
                                                        value={item}
                                                        className="k-radio k-radio-md"
                                                    />
                                                    <span className="k-radio-label">{item}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </FieldWrapper>

                                {/* Native HTML select (dropdown) */}
                                <FieldWrapper>
                                    <label htmlFor="status" className="k-label k-form-label">
                                        Status (dropdown)
                                    </label>
                                    <div className="k-form-field-wrap">
                                        <select
                                            id="status"
                                            name="status"
                                            className="native-select"
                                            data-smartpaste-description="Current status"
                                        >
                                            <option value="">Select...</option>
                                            {statuses.map((item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </FieldWrapper>

                                {/* Native HTML text input */}
                                <FieldWrapper>
                                    <label htmlFor="reporter" className="k-label k-form-label">
                                        Reported By
                                    </label>
                                    <div className="k-form-field-wrap">
                                        <input
                                            type="text"
                                            id="reporter"
                                            name="reporter"
                                            className="native-input"
                                            data-smartpaste-description="Person who reported the issue"
                                        />
                                    </div>
                                </FieldWrapper>

                                <div
                                    className="k-form-buttons"
                                    style={{ gridColumn: '1 / -1', justifyContent: 'flex-start' }}
                                >
                                    <Button
                                        svgIcon={arrowRotateCcwIcon}
                                        fillMode="flat"
                                        onClick={() => formRenderProps.onFormReset()}
                                        type="button"
                                        title="Clear form"
                                    />
                                    <SmartPasteButton
                                        disabled={isLoading}
                                        onClick={handleSmartPaste}
                                        formFields={formFields}
                                        themeColor="primary"
                                    >
                                        {isLoading ? 'Processing...' : 'Smart Paste'}
                                    </SmartPasteButton>
                                </div>
                            </FormElement>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
