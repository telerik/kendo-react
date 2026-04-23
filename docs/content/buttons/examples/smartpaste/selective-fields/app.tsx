import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';
import { Input, NumericTextBox, TextArea } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { SmartPasteButton, Button, SmartPasteFormField } from '@progress/kendo-react-buttons';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { copyIcon, arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const sampleData = `Job Application
Applicant: Emily Watson
Email: emily.watson@email.com
Phone: (555) 123-4567
Years of Experience: 7
Expected Salary: $125,000
Available Start Date: February 1, 2026
Cover Letter: I am excited to apply for this position. With 7 years of experience in software development...`;

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

const FormInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <Input id={id} valid={valid} disabled={disabled} {...others} />
            </div>
        </FieldWrapper>
    );
};

const FormNumericTextBox = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <NumericTextBox id={id} valid={valid} disabled={disabled} {...others} />
            </div>
        </FieldWrapper>
    );
};

const FormTextArea = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <TextArea id={id} valid={valid} disabled={disabled} {...others} />
            </div>
        </FieldWrapper>
    );
};

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

    // Only these 3 fields will be populated by SmartPaste
    const formFields: SmartPasteFormField[] = [
        { field: 'fullName', type: 'string', description: 'Applicant full name' },
        { field: 'email', type: 'string', description: 'Email address' },
        { field: 'experience', type: 'number', description: 'Years of professional experience' }
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
            <div className="selective-demo">
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
                                <legend className="k-form-legend">Job Application</legend>

                                <Field name="fullName" id="fullName" component={FormInput} label="Full Name ✓" />

                                <Field
                                    name="experience"
                                    id="experience"
                                    component={FormNumericTextBox}
                                    label="Years of Experience ✓"
                                />

                                <Field name="phone" id="phone" component={FormInput} label="Phone" />

                                <Field
                                    name="salary"
                                    id="salary"
                                    component={FormNumericTextBox}
                                    label="Expected Salary"
                                    format="c0"
                                />

                                <Field name="email" id="email" component={FormInput} label="Email ✓" />

                                <Field
                                    name="startDate"
                                    id="startDate"
                                    component={FormDatePicker}
                                    label="Available Start Date"
                                />

                                <Field
                                    name="coverLetter"
                                    id="coverLetter"
                                    component={FormTextArea}
                                    label="Cover Letter"
                                    rows={3}
                                />

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
