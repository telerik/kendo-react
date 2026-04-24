import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { Input, MaskedTextBox } from '@progress/kendo-react-inputs';
import { Label, Error } from '@progress/kendo-react-labels';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { SmartPasteButton, Button } from '@progress/kendo-react-buttons';
import { Loader } from '@progress/kendo-react-indicators';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { copyIcon, arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const departments = [
    { text: 'Sales', value: 'sales' },
    { text: 'Marketing', value: 'marketing' },
    { text: 'Engineering', value: 'engineering' },
    { text: 'HR', value: 'hr' },
    { text: 'Finance', value: 'finance' }
];

const sampleData = `New employee onboarding:
Name: Sarah Johnson
Email: sarah.johnson@company.com
Phone: (555) 234-5678
Date of Birth: March 15, 1990
Department: Engineering`;

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

const FormInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, disabled, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <Input id={id} valid={valid} disabled={disabled} {...others} />
                {validationMessage && <Error>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormMaskedTextBox = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, disabled, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <MaskedTextBox id={id} valid={valid} {...others} />
                {validationMessage && <Error>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormDatePicker = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, disabled, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <DatePicker id={id} valid={valid} disabled={disabled} {...others} />
                {validationMessage && <Error>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormDropDownList = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, disabled, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <DropDownList id={id} valid={valid} disabled={disabled} {...others} />
                {validationMessage && <Error>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [formErrors, setFormErrors] = React.useState<{ [name: string]: string }>({});

    const copyToClipboard = () => {
        navigator.clipboard.writeText(sampleData);
    };

    const handleClear = (formRenderProps: FormRenderProps) => {
        formRenderProps.onFormReset();
        setFormErrors({});
    };

    const validateResponse = (data: { [name: string]: any }) => {
        const errors: { [name: string]: string } = {};

        if (!data.fullName) {
            errors.fullName = 'Could not extract name from clipboard';
        }
        if (!data.email) {
            errors.email = 'Could not extract email from clipboard';
        }
        if (!data.phone) {
            errors.phone = 'Could not extract phone from clipboard';
        }
        if (!data.birthDate) {
            errors.birthDate = 'Could not extract birth date from clipboard';
        }
        if (!data.department) {
            errors.department = 'Could not extract department from clipboard';
        }

        return errors;
    };

    const handleSmartPaste = async (e: any) => {
        setIsLoading(true);
        setFormErrors({});

        try {
            const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(e.requestData)
            });

            if (response.ok) {
                const data = await response.json();
                e.setResponse(data);
                console.log('Smart paste response:', data);
                // Validate the response and set errors for missing fields
                const validationErrors = validateResponse(data.fieldValues);
                if (Object.keys(validationErrors).length > 0) {
                    setFormErrors(validationErrors);
                }
            }
        } catch (error) {
            console.error('Smart paste failed:', error);
        } finally {
            setIsLoading(false);
        }
    };
    const handleChange = React.useCallback(
        (fieldName: string) => {
            if (formErrors[fieldName]) {
                setFormErrors((prev) => {
                    const { [fieldName]: _removed, ...rest } = prev;
                    return rest;
                });
            }
        },
        [formErrors]
    );

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
                    <CardActions layout="end">
                        <Button svgIcon={copyIcon} onClick={copyToClipboard} themeColor="primary">
                            Copy to Clipboard
                        </Button>
                    </CardActions>
                </Card>

                <div className="form-container">
                    <Form
                        onChange={handleChange}
                        errors={formErrors}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement cols={formBreakpoints}>
                                <legend className="k-form-legend">Employee Registration</legend>

                                <Field
                                    name="fullName"
                                    id="fullName"
                                    component={FormInput}
                                    label="Full Name"
                                    placeholder="e.g. John Doe"
                                />

                                <Field
                                    name="email"
                                    id="email"
                                    component={FormInput}
                                    label="Email"
                                    placeholder="e.g. john.doe@company.com"
                                />

                                <Field
                                    name="phone"
                                    id="phone"
                                    component={FormMaskedTextBox}
                                    label="Phone"
                                    mask="(000) 000-0000"
                                    placeholder="(___) ___-____"
                                />

                                <Field
                                    name="birthDate"
                                    id="birthDate"
                                    component={FormDatePicker}
                                    label="Date of Birth"
                                />

                                <Field
                                    colSpan={[
                                        { minWidth: 0, maxWidth: 599, value: 1 },
                                        { minWidth: 600, value: 2 }
                                    ]}
                                    name="department"
                                    id="department"
                                    component={FormDropDownList}
                                    label="Department"
                                    data={departments}
                                    textField="text"
                                    dataItemKey="value"
                                />

                                <div
                                    className="k-form-buttons"
                                    style={{ gridColumn: '1 / -1', justifyContent: 'flex-start' }}
                                >
                                    <Button
                                        svgIcon={arrowRotateCcwIcon}
                                        fillMode="flat"
                                        onClick={() => handleClear(formRenderProps)}
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
