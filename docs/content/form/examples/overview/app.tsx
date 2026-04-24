import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper, FormFieldSet } from '@progress/kendo-react-form';
import { Error, Label, Hint } from '@progress/kendo-react-labels';
import { TextBox, InputSuffix } from '@progress/kendo-react-inputs';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Upload } from '@progress/kendo-react-upload';
import { Avatar } from '@progress/kendo-react-layout';
import { eyeIcon, eyeSlashIcon } from '@progress/kendo-svg-icons';

const FormUpload = (fieldRenderProps) => {
    const { value, id, optional, label, hint, validationMessage, touched, colSpan, onImageUpload, ...others } =
        fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';
    const onChangeHandler = (event) => {
        fieldRenderProps.onChange({
            value: event.newState
        });
        // Extract image file and notify parent
        if (event.newState && event.newState.length > 0 && event.newState[0].getRawFile) {
            const file = event.newState[0].getRawFile();
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (onImageUpload) {
                        onImageUpload(e.target?.result);
                    }
                };
                reader.readAsDataURL(file);
            }
        } else if (onImageUpload) {
            onImageUpload(null);
        }
    };

    const onRemoveHandler = (event) => {
        fieldRenderProps.onChange({
            value: event.newState
        });
        if (onImageUpload) {
            onImageUpload(null);
        }
    };
    return (
        <FieldWrapper colSpan={colSpan}>
            <Label id={labelId} editorId={id} optional={optional} className="k-form-label">
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <Upload
                    id={id}
                    autoUpload={false}
                    showActionButtons={false}
                    multiple={false}
                    files={value}
                    onAdd={onChangeHandler}
                    onRemove={onRemoveHandler}
                    aria-describedby={`${hintId} ${errorId}`}
                    ariaLabelledBy={labelId}
                    {...others}
                />
                {showHint && <Hint id={hintId}>{hint}</Hint>}
                {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormInput = (fieldRenderProps) => {
    const {
        validationMessage,
        touched,
        label,
        id,
        valid,
        disabled,
        hint,
        type,
        optional,
        colSpan,
        autoComplete,
        ...others
    } = fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const [togglePassword, setTogglePassword] = React.useState(type === 'password');

    const togglePasswordVisibility = () => {
        setTogglePassword(!togglePassword);
    };
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
                    type={togglePassword ? 'password' : 'text'}
                    id={id}
                    disabled={disabled}
                    aria-describedby={`${hintId} ${errorId}`}
                    autoComplete={autoComplete}
                    suffix={
                        type === 'password' &&
                        (() => {
                            return (
                                <InputSuffix>
                                    <Button
                                        svgIcon={togglePassword ? eyeSlashIcon : eyeIcon}
                                        fillMode="clear"
                                        onClick={() => {
                                            // Toggle password visibility
                                            togglePasswordVisibility();
                                        }}
                                    />
                                </InputSuffix>
                            );
                        })
                    }
                    {...others}
                />
                {showHint && <Hint id={hintId}>{hint}</Hint>}
                {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
            </div>
        </FieldWrapper>
    );
};

const FormMultiSelect = (fieldRenderProps) => {
    const {
        validationMessage,
        touched,
        label,
        id,
        valid,
        disabled,
        hint,
        wrapperStyle,
        colSpan,
        optional,
        data,
        defaultValue,
        textField,
        dataItemKey,
        adaptive,
        ...others
    } = fieldRenderProps;
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
                optional={optional}
            >
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <MultiSelect
                    ariaLabelledBy={labelId}
                    aria-describedby={`${hintId} ${errorId}`}
                    ref={editorRef}
                    valid={valid}
                    id={id}
                    disabled={disabled}
                    data={data}
                    defaultValue={defaultValue}
                    textField={textField}
                    dataItemKey={dataItemKey}
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
    !value ? 'Name is required' : value.length < 3 ? 'Name should be at least 3 characters long.' : '';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');

const passwordValidator = (value) => (value && value.length > 8 ? '' : 'Password must be at least 8 symbols.');

const interests = [
    { text: 'Sports', value: 'sports' },
    { text: 'Music', value: 'music' },
    { text: 'Movies', value: 'movies' },
    { text: 'Books', value: 'books' },
    { text: 'Travel', value: 'travel' },
    { text: 'Technology & Gadgets', value: 'technology-and-gadgets' }
];

const responsiveBreakpoints = [
    { minWidth: 0, maxWidth: 499, value: 1 },
    { minWidth: 500, value: 2 }
];

const App = () => {
    const [avatarSrc, setAvatarSrc] = React.useState(null);

    const handleImageUpload = (src) => {
        setAvatarSrc(src);
    };

    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <>
            <Form
                onSubmit={handleSubmit}
                render={(formRenderProps: FormRenderProps) => (
                    <FormElement style={{ maxWidth: 670, margin: '0 auto' }}>
                        <FormFieldSet legend="Your Account" cols={responsiveBreakpoints}>
                            <Avatar size={'large'} themeColor={'primary'} type={avatarSrc ? 'image' : 'text'}>
                                {avatarSrc ? <img src={avatarSrc} alt="avatar" /> : 'JS'}
                            </Avatar>

                            <Field
                                colSpan={responsiveBreakpoints}
                                id={'avatarUpload'}
                                name={'avatarUpload'}
                                label={'Upload picture'}
                                optional={'(Optional)'}
                                component={FormUpload}
                                onImageUpload={handleImageUpload}
                            />
                            <Field
                                colSpan={1}
                                name={'firstName'}
                                component={FormInput}
                                label={'First name'}
                                validator={nameValidator}
                                autoComplete="username"
                            />

                            <Field
                                colSpan={1}
                                name={'lastName'}
                                component={FormInput}
                                label={'Last name'}
                                validator={nameValidator}
                                autoComplete="username"
                            />

                            <Field
                                colSpan={1}
                                name={'password'}
                                component={FormInput}
                                label={'Password'}
                                hint={'Password must be at least 8 characters.'}
                                validator={passwordValidator}
                                type="password"
                                autoComplete="new-password"
                            />

                            <Field
                                colSpan={1}
                                name={'confirm-password'}
                                component={FormInput}
                                label={'Confirm Password'}
                                hint={'Must be the same as Password.'}
                                validator={passwordValidator}
                                type="password"
                                autoComplete="new-password"
                            />

                            <Field
                                colSpan={1}
                                name={'email'}
                                type={'email'}
                                component={FormInput}
                                label={'Email'}
                                validator={emailValidator}
                                placeholder={'your@email.com'}
                                autoComplete="email"
                            />

                            <Field
                                colSpan={responsiveBreakpoints}
                                name={'interests'}
                                component={FormMultiSelect}
                                labelClassName={'k-form-label'}
                                label={'Interests'}
                                optional={'(Optional)'}
                                data={interests}
                                defaultValue={[
                                    { text: 'Music', value: 'music' },
                                    { text: 'Technology & Gadgets', value: 'technology-and-gadgets' }
                                ]}
                                textField="text"
                                dataItemKey="value"
                                adaptive={true}
                            />
                        </FormFieldSet>
                        <div className="k-form-buttons">
                            <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                                Login
                            </Button>
                            <Button onClick={formRenderProps.onFormReset}>Reset</Button>
                        </div>
                    </FormElement>
                )}
            />
        </>
    );
};
export default App;
