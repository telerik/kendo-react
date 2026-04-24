import React from 'react';
import {
    Form,
    Field,
    FormElement,
    FieldRenderProps,
    FormRenderProps,
    FieldWrapper,
    FormFieldSet
} from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');
const EmailInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    );
};

interface userInterface {
    firstName: string;
    lastName: string;
    email: string;
}

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    const [user, setUser] = React.useState<userInterface>({
        firstName: 'John',
        lastName: 'Smith',
        email: 'John.Smith@email.com'
    });
    const loadNewUser = () => {
        setUser({
            firstName: 'NewFirstName',
            lastName: 'NewLastName',
            email: 'NewEmails@email.com'
        });
    };
    return (
        <React.Fragment>
            <Button onClick={loadNewUser}> Load new user </Button>
            <hr className="k-hr" />
            <Form
                onSubmit={handleSubmit}
                initialValues={user}
                key={JSON.stringify(user)}
                render={(formRenderProps: FormRenderProps) => (
                    <FormElement style={{ maxWidth: 650 }}>
                        <FormFieldSet legend="Please fill in the fields:">
                            <FieldWrapper>
                                <div className="k-form-field-wrap">
                                    <Field
                                        name={'firstName'}
                                        component={Input}
                                        label={'First name'}
                                        labelClassName="k-form-label"
                                    />
                                </div>
                            </FieldWrapper>
                            <FieldWrapper>
                                <div className="k-form-field-wrap">
                                    <Field
                                        name={'lastName'}
                                        component={Input}
                                        label={'Last name'}
                                        labelClassName="k-form-label"
                                    />
                                </div>
                            </FieldWrapper>
                            <FieldWrapper>
                                <div className="k-form-field-wrap">
                                    <Field
                                        name={'email'}
                                        type={'email'}
                                        component={EmailInput}
                                        label={'Email'}
                                        validator={emailValidator}
                                        labelClassName="k-form-label"
                                    />
                                </div>
                            </FieldWrapper>
                        </FormFieldSet>
                        <div className="k-form-buttons">
                            <Button type={'submit'} disabled={!formRenderProps.allowSubmit}>
                                Submit
                            </Button>
                        </div>
                    </FormElement>
                )}
            />
        </React.Fragment>
    );
};
export default App;
