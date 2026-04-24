import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { Input, TextArea } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { SmartPasteButton, Button } from '@progress/kendo-react-buttons';
import { Loader } from '@progress/kendo-react-indicators';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { copyIcon, arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const priorities = [
    { text: 'Low', value: 'low' },
    { text: 'Medium', value: 'medium' },
    { text: 'High', value: 'high' },
    { text: 'Critical', value: 'critical' }
];

const sampleData = `Ticket #12345
Customer: John Smith
Issue: Unable to login to account
Priority: High
Description: Customer reports getting "Invalid credentials" error when trying to login with correct password.`;

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

const FormInput = (fieldRenderProps: FieldRenderProps) => {
    const { label, id, valid, disabled, validationMessage, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <Input
                    id={id}
                    valid={valid}
                    disabled={disabled}
                    validationMessage={validationMessage ?? undefined}
                    {...others}
                />
            </div>
        </FieldWrapper>
    );
};

const FormTextArea = (fieldRenderProps: FieldRenderProps) => {
    const { label, id, valid, disabled, validationMessage, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <TextArea
                    id={id}
                    valid={valid}
                    disabled={disabled}
                    validationMessage={validationMessage ?? undefined}
                    {...others}
                />
            </div>
        </FieldWrapper>
    );
};

const FormDropDownList = (fieldRenderProps: FieldRenderProps) => {
    const { label, id, valid, disabled, validationMessage, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <DropDownList
                    id={id}
                    valid={valid}
                    disabled={disabled}
                    validationMessage={validationMessage ?? undefined}
                    {...others}
                />
            </div>
        </FieldWrapper>
    );
};

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [clipboardError, setClipboardError] = React.useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(sampleData);
    };

    const clearClipboard = () => {
        navigator.clipboard.writeText('');
    };

    const handleSmartPaste = async (e: any) => {
        // Pre-validate clipboard content before making API call
        const clipboardContent = e.requestData?.content;

        if (!clipboardContent || clipboardContent.trim() === '') {
            setClipboardError(true);
            setTimeout(() => setClipboardError(false), 3000);
            return;
        }

        setClipboardError(false);
        setIsLoading(true);

        try {
            const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(e.requestData)
            });

            if (response.ok) {
                const data = await response.json();
                e.setResponse(data);
            }
        } catch (error) {
            console.error('Smart paste failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    let buttonText = 'Smart Paste';
    if (isLoading) {
        buttonText = 'Processing...';
    } else if (clipboardError) {
        buttonText = 'Clipboard is empty';
    }

    return (
        <div className="demo-wrapper">
            <div className="demo-hint">
                Copy the sample data to your clipboard, then click <strong>Smart Paste</strong> to automatically fill
                the form.
            </div>
            <div className="validation-demo">
                {isLoading && (
                    <div className="loader-overlay">
                        <Loader size="large" type="infinite-spinner" />
                    </div>
                )}

                <Card className="sample-data-card">
                    <CardHeader>
                        <CardTitle>SAMPLE DATA</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div className="sample-data-content">{sampleData}</div>
                    </CardBody>
                    <CardActions layout="stretched">
                        <Button svgIcon={copyIcon} onClick={copyToClipboard} themeColor="primary">
                            Copy
                        </Button>
                        <Button onClick={clearClipboard}>Clear Clipboard</Button>
                    </CardActions>
                </Card>

                <div className="form-container">
                    <Form
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement cols={formBreakpoints}>
                                <legend className="k-form-legend">Support Ticket</legend>

                                <Field
                                    name="ticketNumber"
                                    id="ticketNumber"
                                    component={FormInput}
                                    label="Ticket Number"
                                    placeholder="e.g. #12345"
                                />

                                <Field
                                    name="customerName"
                                    id="customerName"
                                    component={FormInput}
                                    label="Customer Name"
                                    placeholder="e.g. John Smith"
                                />

                                <Field
                                    name="issue"
                                    id="issue"
                                    component={FormInput}
                                    label="Issue"
                                    placeholder="Brief description of the issue"
                                />

                                <Field
                                    name="priority"
                                    id="priority"
                                    component={FormDropDownList}
                                    label="Priority"
                                    data={priorities}
                                    textField="text"
                                    dataItemKey="value"
                                />

                                <Field
                                    colSpan={[{ minWidth: 0, value: 2 }]}
                                    name="description"
                                    id="description"
                                    component={FormTextArea}
                                    label="Description"
                                    placeholder="Detailed description..."
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
                                        themeColor={clipboardError ? 'error' : 'primary'}
                                        className={clipboardError ? 'clipboard-error' : ''}
                                    >
                                        {buttonText}
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
