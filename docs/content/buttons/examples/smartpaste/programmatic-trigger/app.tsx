import * as React from 'react';
import { SmartPasteButton, Button, SmartPasteButtonHandle } from '@progress/kendo-react-buttons';
import { Form, Field, FormElement, FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';
import { Input, MaskedTextBox, NumericTextBox } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Loader } from '@progress/kendo-react-indicators';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const departments = [
    { text: 'Sales', value: 'Sales' },
    { text: 'Marketing', value: 'Marketing' },
    { text: 'Engineering', value: 'Engineering' },
    { text: 'HR', value: 'HR' },
    { text: 'Finance', value: 'Finance' }
];

const sampleData = `New hire information:
Name: Sarah Johnson
Email: sarah.johnson@company.com
Phone: (555) 234-5678
Department: Engineering
Start Date: February 15, 2026
Salary: 95000`;

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

const FormMaskedTextBox = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <MaskedTextBox id={id} valid={valid} {...others} />
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

const FormDropDownList = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, ...others } = fieldRenderProps;

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className="k-form-field-wrap">
                <DropDownList id={id} valid={valid} disabled={disabled} {...others} />
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
    const smartPasteRef = React.useRef<SmartPasteButtonHandle>(null);

    const handleSmartPaste = async (event: any) => {
        setIsLoading(true);
        try {
            const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(event.requestData)
            });
            const data = await response.json();
            event.setResponse(data);
        } catch (error) {
            console.error('Smart paste failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fillForm = async () => {
        await navigator.clipboard.writeText(sampleData);
        smartPasteRef.current?.click();
    };

    return (
        <div className="demo-wrapper">
            <div className="demo-hint">
                Click <strong>Fill Form</strong> to copy sample data and automatically fill the form using programmatic
                trigger.
            </div>
            <div className="programmatic-demo">
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
                        <Button disabled={isLoading} onClick={fillForm} themeColor="primary">
                            Fill Form
                        </Button>
                    </CardActions>
                </Card>

                <div className="form-container">
                    <Form
                        render={(formRenderProps) => (
                            <FormElement>
                                <fieldset className="k-form-fieldset">
                                    <legend className="k-form-legend">New Hire Registration</legend>

                                    <div className="form-grid">
                                        <Field name="fullName" id="fullName" component={FormInput} label="Full Name" />

                                        <Field name="email" id="email" component={FormInput} label="Email" />

                                        <Field
                                            name="phone"
                                            id="phone"
                                            component={FormMaskedTextBox}
                                            label="Phone"
                                            mask="(000) 000-0000"
                                        />

                                        <Field
                                            name="department"
                                            id="department"
                                            component={FormDropDownList}
                                            label="Department"
                                            data={departments}
                                            textField="text"
                                            dataItemKey="value"
                                        />

                                        <Field
                                            name="startDate"
                                            id="startDate"
                                            component={FormDatePicker}
                                            label="Start Date"
                                        />

                                        <Field
                                            name="salary"
                                            id="salary"
                                            component={FormNumericTextBox}
                                            label="Salary"
                                            format="c0"
                                        />
                                    </div>
                                </fieldset>

                                <div className="k-form-buttons">
                                    <Button
                                        svgIcon={arrowRotateCcwIcon}
                                        fillMode="flat"
                                        onClick={formRenderProps.onFormReset}
                                        type="button"
                                        title="Clear form"
                                    />
                                </div>

                                <SmartPasteButton
                                    ref={smartPasteRef}
                                    onClick={handleSmartPaste}
                                    style={{ display: 'none' }}
                                >
                                    Smart Paste
                                </SmartPasteButton>
                            </FormElement>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
