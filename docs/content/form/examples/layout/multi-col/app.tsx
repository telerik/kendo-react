import * as React from 'react';
import {
    Form,
    Field,
    FormElement,
    FormRenderProps,
    FieldWrapper,
    FormFieldSet,
    FormSeparator
} from '@progress/kendo-react-form';
import { Error, Label, Hint } from '@progress/kendo-react-labels';
import { TextBox, MaskedTextBox, NumericTextBox, Checkbox, TextArea } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';

const FormInput = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, colSpan, ...others } =
        fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    return (
        <FieldWrapper colSpan={colSpan}>
            <Label
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
                optional={optional}
                className="k-form-label"
            >
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <TextBox
                    valid={valid}
                    type={type}
                    id={id}
                    disabled={disabled}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    {...others}
                />
                {showHint && <Hint id={hintId}>{hint}</Hint>}
                {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormMaskedTextBox = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, hint, optional, colSpan, ...others } = fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    return (
        <FieldWrapper colSpan={colSpan}>
            <Label editorId={id} editorValid={valid} optional={optional} className="k-form-label">
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <MaskedTextBox ariaDescribedBy={`${hintId} ${errorId}`} valid={valid} id={id} {...others} />
                {showHint && <Hint id={hintId}>{hint}</Hint>}
                {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormDatePicker = (fieldRenderProps) => {
    const {
        validationMessage,
        touched,
        label,
        id,
        valid,
        disabled,
        hint,
        wrapperStyle,
        hintDirection,
        colSpan,
        ...others
    } = fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';
    return (
        <FieldWrapper style={wrapperStyle} colSpan={colSpan}>
            <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <DatePicker
                    ariaLabelledBy={labelId}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    valid={valid}
                    id={id}
                    disabled={disabled}
                    {...others}
                />
                {showHint && (
                    <Hint id={hintId} direction={hintDirection}>
                        {hint}
                    </Hint>
                )}
                {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormNumericTextBox = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, colSpan, ...others } = fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    return (
        <FieldWrapper colSpan={colSpan}>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <NumericTextBox
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    valid={valid}
                    id={id}
                    disabled={disabled}
                    {...others}
                />
                {showHint && <Hint id={hintId}>{hint}</Hint>}
                {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormCheckbox = (fieldRenderProps) => {
    const {
        validationMessage,
        touched,
        id,
        valid,
        disabled,
        hint,
        optional,
        label,
        visited,
        modified,
        colSpan,
        ...others
    } = fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    return (
        <FieldWrapper colSpan={colSpan}>
            <div className={'k-form-field-wrap'}>
                <Checkbox
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    label={label}
                    labelOptional={optional}
                    valid={valid}
                    id={id}
                    disabled={disabled}
                    {...others}
                />
                {showHint && <Hint id={hintId}>{hint}</Hint>}
                {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormTextArea = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, hint, disabled, optional, colSpan, ...others } =
        fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    return (
        <FieldWrapper colSpan={colSpan}>
            <Label editorId={id} editorValid={valid} optional={optional} className="k-form-label">
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <TextArea
                    valid={valid}
                    id={id}
                    disabled={disabled}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    {...others}
                />
                {showHint && <Hint id={hintId}>{hint}</Hint>}
                {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const nameValidator = (value) =>
    !value ? 'Name is required' : value.length < 7 ? 'Name should be at least 7 characters long.' : '';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');

const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);
const phoneValidator = (value) =>
    !value ? 'Phone number is required.' : phoneRegex.test(value) ? '' : 'Not a valid phone number.';

const arrivalDateValidator = (value) => (value ? '' : 'Arrival Date is required.');

const nightsValidator = (value) => (value ? '' : 'Number of Nights is required.');

const guestsValidator = (value) => (!value ? 'Number of guests is required' : value < 5 ? '' : 'Maximum 5 guests');

const termsValidator = (value) => (value ? '' : "It's required to agree with Terms and Conditions.");

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <>
            <h5>Confirm Your Reservation</h5>
            <Form
                onSubmit={handleSubmit}
                render={(formRenderProps: FormRenderProps) => (
                    <FormElement cols={2} style={{ maxWidth: 850 }}>
                        <FormFieldSet legend="Personal Information" cols={2} colSpan={1}>
                            <Field
                                colSpan={1}
                                name={'firstName'}
                                component={FormInput}
                                label={'First name'}
                                placeholder={'John'}
                                validator={nameValidator}
                            />

                            <Field
                                colSpan={1}
                                name={'lastName'}
                                component={FormInput}
                                label={'Last name'}
                                placeholder={'Doe'}
                                validator={nameValidator}
                            />

                            <Field
                                colSpan={2}
                                name={'email'}
                                type={'email'}
                                component={FormInput}
                                label={'Email'}
                                validator={emailValidator}
                                placeholder={'johndoe@myemail.com'}
                            />

                            <Field
                                colSpan={2}
                                name={'phoneNumber'}
                                component={FormMaskedTextBox}
                                labelClassName={'k-form-label'}
                                label={'Phone number'}
                                mask={'(999) 000-00-00-00'}
                                validator={phoneValidator}
                            />
                        </FormFieldSet>
                        <FormFieldSet legend="Reservation Details" cols={2} colSpan={1}>
                            <Field
                                colSpan={2}
                                id={'arrivalDate'}
                                name={'arrivalDate'}
                                label={'Arrival Date'}
                                component={FormDatePicker}
                                validator={arrivalDateValidator}
                            />
                            <Field
                                colSpan={1}
                                id={'nightsCount'}
                                name={'nightsCount'}
                                label={'Number of Nights'}
                                format={'n0'}
                                component={FormNumericTextBox}
                                validator={nightsValidator}
                            />
                            <Field
                                colSpan={1}
                                id={'guestsCount'}
                                name={'guestsCount'}
                                label={'Number of Guests'}
                                hint={'Hint: Maximum 5 guests.'}
                                format={'n0'}
                                component={FormNumericTextBox}
                                validator={guestsValidator}
                            />
                            <Field
                                id={'terms'}
                                name={'terms'}
                                label={'I agree with terms and conditions'}
                                component={FormCheckbox}
                                validator={termsValidator}
                            />
                        </FormFieldSet>
                        <FormSeparator colSpan={2} />
                        <Field
                            colSpan={2}
                            id={'comments'}
                            name={'comments'}
                            label={'Comments'}
                            optional={true}
                            component={FormTextArea}
                        />
                        <div className="k-form-buttons">
                            <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                                Send Reservation Request
                            </Button>
                            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                        </div>
                    </FormElement>
                )}
            />
        </>
    );
};
export default App;
