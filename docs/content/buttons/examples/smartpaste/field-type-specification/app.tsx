import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { SmartPasteButton, Button, SmartPasteFormField } from '@progress/kendo-react-buttons';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { copyIcon, arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const priorities = ['High', 'Medium', 'Low'];

const sampleData = `Support Ticket #4521
Customer: Michael Chen
Contact: (555) 987-6543
Submitted: January 15, 2026
Priority: High
Estimated Hours: 8`;

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

// Kendo DatePicker component (for kendo-input type)
const FormDatePicker = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <DatePicker id={id} valid={valid} disabled={disabled} {...others} />
            </div>
        </FieldWrapper>
    );
};

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const formFields: SmartPasteFormField[] = [
        { field: 'customerName', type: 'string', description: 'Customer full name' },
        { field: 'phone', type: 'string', description: 'Phone number in format (XXX) XXX-XXXX' },
        { field: 'submittedDate', type: 'kendo-input', description: 'Date when ticket was submitted' },
        { field: 'priority', type: 'fixed-choices', description: 'Ticket priority level', allowedValues: priorities },
        { field: 'estimatedHours', type: 'number', description: 'Estimated hours to resolve' }
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
            <div className="field-types-demo">
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
                                <legend className="k-form-legend">Support Ticket</legend>

                                {/* Native HTML text input (string type) */}
                                <FieldWrapper>
                                    <label htmlFor="customerName" className="k-label k-form-label">
                                        Customer Name (string)
                                    </label>
                                    <div className="k-form-field-wrap">
                                        <input
                                            type="text"
                                            id="customerName"
                                            name="customerName"
                                            className="native-input"
                                            data-smartpaste-description="Customer full name"
                                        />
                                    </div>
                                </FieldWrapper>

                                {/* Native HTML text input (string type) */}
                                <FieldWrapper>
                                    <label htmlFor="phone" className="k-label k-form-label">
                                        Phone (string)
                                    </label>
                                    <div className="k-form-field-wrap">
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="native-input"
                                            data-smartpaste-description="Phone number"
                                        />
                                    </div>
                                </FieldWrapper>

                                {/* Kendo DatePicker (kendo-input type) */}
                                <Field
                                    name="submittedDate"
                                    id="submittedDate"
                                    component={FormDatePicker}
                                    label="Submitted Date (kendo-input)"
                                />

                                {/* Native HTML select (fixed-choices type) */}
                                <FieldWrapper>
                                    <label htmlFor="priority" className="k-label k-form-label">
                                        Priority (fixed-choices)
                                    </label>
                                    <div className="k-form-field-wrap">
                                        <select
                                            id="priority"
                                            name="priority"
                                            className="native-select"
                                            data-smartpaste-description="Ticket priority level"
                                        >
                                            <option value="">Select...</option>
                                            {priorities.map((item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </FieldWrapper>

                                {/* Native HTML number input (number type) */}
                                <FieldWrapper>
                                    <label htmlFor="estimatedHours" className="k-label k-form-label">
                                        Estimated Hours (number)
                                    </label>
                                    <div className="k-form-field-wrap">
                                        <input
                                            type="number"
                                            id="estimatedHours"
                                            name="estimatedHours"
                                            className="native-input"
                                            data-smartpaste-description="Estimated hours to resolve"
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
