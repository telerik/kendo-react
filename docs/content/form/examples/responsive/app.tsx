import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper, FormFieldSet } from '@progress/kendo-react-form';
import { Error, Label, Hint } from '@progress/kendo-react-labels';
import { TextBox, MaskedTextBox } from '@progress/kendo-react-inputs';
import { DropDownList, ComboBox } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { DatePicker } from '@progress/kendo-react-dateinputs';

const titles: Array<string> = ['None', 'Mr.', 'Mrs.', 'Ms.'];
const countries: Array<string> = [
    'Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    'Bosnia & Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine',
    'United Kingdom',
    'Vatican City'
];

const FormDropDownList = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, colSpan, ...others } =
        fieldRenderProps;
    const editorRef = React.useRef(null);
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';
    return (
        <FieldWrapper style={wrapperStyle} colSpan={colSpan}>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
                className="k-form-label"
            >
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <DropDownList
                    ariaLabelledBy={labelId}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    ref={editorRef}
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
                    aria-describedby={`${hintId} ${errorId}`}
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

const FormComboBox = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, colSpan, adaptive, ...others } =
        fieldRenderProps;
    const editorRef = React.useRef(null);
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';
    return (
        <FieldWrapper style={wrapperStyle} colSpan={colSpan}>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
                className="k-form-label"
            >
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <ComboBox
                    ariaLabelledBy={labelId}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    ref={editorRef}
                    valid={valid}
                    id={id}
                    disabled={disabled}
                    adaptive={adaptive}
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

const requiredValidator = (value: string) => (value ? '' : 'Error: This field is required.');

const formBreakpoints = [
    { minWidth: 0, maxWidth: 768, value: 1 },
    { minWidth: 769, value: 2 }
];

const firstFieldSetBreakpoints = [
    { minWidth: 0, maxWidth: 499, value: 1 },
    { minWidth: 500, value: 6 }
];

const secondFieldSetBreakpoints = [
    { minWidth: 0, maxWidth: 499, value: 1 },
    { minWidth: 500, value: 2 }
];

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <>
            <Form
                onSubmit={handleSubmit}
                render={(formRenderProps: FormRenderProps) => (
                    <FormElement style={{ margin: '0 auto' }} cols={formBreakpoints}>
                        <FormFieldSet legend="Personal Information" cols={firstFieldSetBreakpoints}>
                            <Field
                                colSpan={[
                                    { minWidth: 0, maxWidth: 499, value: 1 },
                                    { minWidth: 500, value: 2 }
                                ]}
                                id={'title'}
                                name={'title'}
                                label={'Title'}
                                data={titles}
                                defaultValue={titles[0]}
                                component={FormDropDownList}
                                adaptive={true}
                            />
                            <Field
                                colSpan={[
                                    { minWidth: 0, maxWidth: 499, value: 1 },
                                    { minWidth: 500, value: 4 }
                                ]}
                                name={'fullName'}
                                component={FormInput}
                                label={'Full name'}
                                validator={nameValidator}
                                autoComplete="username"
                            />

                            <Field
                                colSpan={[
                                    { minWidth: 0, maxWidth: 499, value: 1 },
                                    { minWidth: 500, value: 3 }
                                ]}
                                id={'phoneNumber'}
                                name={'phoneNumber'}
                                label={'Phone Number'}
                                mask={'(999) 000-00-00-00'}
                                placeholder={'(___) ___-__-__-__'}
                                component={FormMaskedTextBox}
                                validator={phoneValidator}
                            />

                            <Field
                                colSpan={[
                                    { minWidth: 0, maxWidth: 499, value: 1 },
                                    { minWidth: 500, value: 3 }
                                ]}
                                id={'email'}
                                name={'email'}
                                type={'email'}
                                component={FormInput}
                                label={'Email'}
                                validator={emailValidator}
                                placeholder={'your@email.com'}
                                autoComplete="email"
                            />

                            <Field
                                id={'birthDate'}
                                name={'birthDate'}
                                label={'Birth Date'}
                                component={FormDatePicker}
                                format={'dd/MM/yyyy'}
                                placeholder={'dd/MM/yyyy'}
                                adaptive={true}
                                wrapperStyle={{
                                    width: '160px'
                                }}
                                validator={requiredValidator}
                            />
                        </FormFieldSet>
                        <FormFieldSet legend="Shipping Address" cols={secondFieldSetBreakpoints}>
                            <Field
                                colSpan={1}
                                key={'country'}
                                id={'country'}
                                name={'country'}
                                label={'Country'}
                                placeholder={'EU Country'}
                                component={FormComboBox}
                                data={countries}
                                validator={requiredValidator}
                                adaptive={true}
                            />

                            <Field
                                colSpan={1}
                                key={'city'}
                                id={'city'}
                                name={'city'}
                                label={'City'}
                                component={FormInput}
                                validator={requiredValidator}
                            />

                            <Field
                                colSpan={[
                                    { minWidth: 0, maxWidth: 499, value: 1 },
                                    { minWidth: 500, value: 2 }
                                ]}
                                key={'streetAddress'}
                                id={'streetAddress'}
                                name={'streetAddress'}
                                label={'Street Address'}
                                component={FormInput}
                                validator={requiredValidator}
                            />

                            <Field
                                colSpan={[
                                    { minWidth: 0, maxWidth: 499, value: 1 },
                                    { minWidth: 500, value: 2 }
                                ]}
                                key={'streetAddress2'}
                                id={'streetAddress2'}
                                name={'streetAddress2'}
                                label={'Street Address line 2'}
                                component={FormInput}
                            />
                        </FormFieldSet>
                        <div className="k-form-buttons">
                            <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                                Submit
                            </Button>
                        </div>
                    </FormElement>
                )}
            />
        </>
    );
};
export default App;
