import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';
import { Input, TextArea } from '@progress/kendo-react-inputs';
import { SmartPasteButton, Button } from '@progress/kendo-react-buttons';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { copyIcon, arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const sampleData = `Meeting Notes - Q1 Review
Attendee: Jennifer Martinez, VP of Operations
Contact Email: j.martinez@acme.com
Discussion Summary: Reviewed quarterly targets, identified bottlenecks in supply chain, proposed automation solutions for warehouse operations.
Action Items: Finalize vendor contracts by Feb 15, schedule follow-up with IT team.`;

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

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false);

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
            <div className="field-desc-demo">
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
                                <legend className="k-form-legend">Meeting Notes</legend>

                                <Field
                                    name="attendee"
                                    id="attendee"
                                    component={FormInput}
                                    label="Attendee"
                                    data-smartpaste-description="The person's full name and job title who attended the meeting"
                                />

                                <Field
                                    name="email"
                                    id="email"
                                    component={FormInput}
                                    label="Email"
                                    data-smartpaste-description="Contact email address"
                                />

                                <Field
                                    colSpan={[
                                        { minWidth: 0, maxWidth: 599, value: 1 },
                                        { minWidth: 600, value: 2 }
                                    ]}
                                    name="summary"
                                    id="summary"
                                    component={FormTextArea}
                                    label="Summary"
                                    rows={3}
                                    data-smartpaste-description="Brief summary of the main discussion points from the meeting"
                                />

                                <Field
                                    colSpan={[
                                        { minWidth: 0, maxWidth: 599, value: 1 },
                                        { minWidth: 600, value: 2 }
                                    ]}
                                    name="actionItems"
                                    id="actionItems"
                                    component={FormTextArea}
                                    label="Action Items"
                                    rows={3}
                                    data-smartpaste-description="List of follow-up tasks and deadlines"
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
