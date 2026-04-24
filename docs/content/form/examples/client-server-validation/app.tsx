import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FormFieldSet } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { Loader } from '@progress/kendo-react-indicators';
import { simulateServerValidation, type ValidationErrors } from './serverMock';

const EMAIL_REGEX = /\S+@\S+\.\S+/;

const ValidatedInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;

    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [formErrors, setFormErrors] = React.useState<ValidationErrors>({});

    const formValidator = React.useCallback(
        (values: any) => {
            const errors: ValidationErrors = {};

            const { username, email, password, confirmPassword } = values;

            if (username.length < 3) {
                errors.username = 'Username must be at least 3 characters (client validation)';
            }

            if (!EMAIL_REGEX.test(email)) {
                errors.email = 'Invalid email format (client validation)';
            }

            if (password && confirmPassword && password !== confirmPassword) {
                errors.confirmPassword = 'Passwords do not match (client validation)';
            }

            return Object.keys(errors).length > 0 ? errors : undefined;
        },
        [formErrors]
    );

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

    const handleSubmit = React.useCallback(async (values: { [name: string]: any }) => {
        setIsSubmitting(true);

        try {
            const { errors: serverValidationErrors } = await simulateServerValidation(values);

            if (Object.keys(serverValidationErrors).length > 0) {
                setFormErrors(serverValidationErrors);
                setIsSubmitting(false);
                return;
            }

            alert('Form submitted successfully!\n\n' + JSON.stringify(values, null, 2));
        } catch (error) {
            console.error('Server validation error:', error);
            alert('Server error occurred during validation');
        } finally {
            setIsSubmitting(false);
        }
    }, []);

    const initialFormValues = React.useMemo(
        () => ({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }),
        []
    );

    return (
        <div style={{ maxWidth: 800, margin: '20px auto', padding: '20px' }}>
            <Form
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
                validator={formValidator}
                errors={formErrors}
                onChange={handleChange}
                render={(formRenderProps: FormRenderProps) => (
                    <FormElement>
                        <FormFieldSet legend="User Registration">
                            <div className="mb-3">
                                <Field
                                    name="username"
                                    component={ValidatedInput}
                                    label="Username"
                                    placeholder="Type 'admin' then click Submit"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="mb-3">
                                <Field
                                    name="email"
                                    type="email"
                                    component={ValidatedInput}
                                    label="Email"
                                    placeholder="Type 'test@blocked.com' then click Submit"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="mb-3">
                                <Field
                                    name="password"
                                    type="password"
                                    component={ValidatedInput}
                                    label="Password"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="mb-3">
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    component={ValidatedInput}
                                    label="Confirm Password"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </FormFieldSet>

                        <div className="k-form-buttons">
                            <Button disabled={!formRenderProps.allowSubmit || isSubmitting} type="submit">
                                {isSubmitting ? <Loader type="pulsing" /> : 'Submit'}
                            </Button>

                            <Button
                                disabled={isSubmitting}
                                onClick={() => {
                                    formRenderProps.onFormReset();
                                }}
                            >
                                Reset
                            </Button>
                        </div>
                    </FormElement>
                )}
            />
        </div>
    );
};

export default App;
