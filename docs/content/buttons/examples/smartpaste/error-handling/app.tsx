import * as React from 'react';
import {
    Form,
    Field,
    FormElement,
    FormRenderProps,
    FieldWrapper,
    FieldRenderProps,
    FormElementHandle
} from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import { Button, SmartPasteButton } from '@progress/kendo-react-buttons';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import { Loader } from '@progress/kendo-react-indicators';
import { ChatSkeleton } from './chatSkeleton';
import './styles.css';

const ValidatedInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, className, ...others } = fieldRenderProps;

    return (
        <div className={className}>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [populatedFields, setPopulatedFields] = React.useState<{ [key: string]: boolean }>({});
    const [formErrors, setFormErrors] = React.useState<{ [name: string]: string }>({});
    const formElementRef = React.useRef<FormElementHandle>(null);

    const formValidator = (values: { [name: string]: string }) => {
        const errors: { [name: string]: string } = {};

        if (!values.fullName || values.fullName.trim() === '') {
            errors.fullName = 'Full Name is required';
        }
        if (!values.city || values.city.trim() === '') {
            errors.city = 'City is required';
        }
        if (!values.postCode || values.postCode.trim() === '') {
            errors.postCode = 'Post Code is required';
        }

        return errors;
    };

    const handleChange = (fieldName: string) => {
        if (formErrors[fieldName]) {
            setFormErrors((prev) => {
                const { [fieldName]: _removed, ...rest } = prev;
                return rest;
            });
        }
    };

    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    const handleSmartPaste = async (e: any) => {
        setIsLoading(true);
        setFormErrors({});

        try {
            const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e.requestData)
            });

            if (response.ok) {
                const data = await response.json();
                e.setResponse(data);

                // Check which fields have valid data
                const populated: { [key: string]: boolean } = {};
                if (data.fullName && data.fullName.trim() !== '') {
                    populated.fullName = true;
                }
                if (data.city && data.city.trim() !== '') {
                    populated.city = true;
                }
                if (data.postCode && data.postCode.trim() !== '') {
                    populated.postCode = true;
                }
                setPopulatedFields(populated);

                if (formElementRef.current?.element) {
                    formElementRef.current.element.requestSubmit();
                }
            }
        } catch (err) {
            console.error('Smart paste error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="smartpaste-container">
            <ChatSkeleton />
            <div className="form-container">
                {isLoading && (
                    <div className="loader-container">
                        <Loader size="large" type="infinite-spinner" />
                    </div>
                )}
                <Form
                    onSubmit={handleSubmit}
                    validator={formValidator}
                    errors={formErrors}
                    onChange={handleChange}
                    render={(formRenderProps: FormRenderProps) => {
                        return (
                            <FormElement ref={formElementRef}>
                                <FieldWrapper>
                                    <Field
                                        id={'fullName'}
                                        name={'fullName'}
                                        component={ValidatedInput}
                                        placeholder={'e.g. John Doe'}
                                        label={'Full Name'}
                                        className={populatedFields.fullName ? 'pasted-input' : ''}
                                    />
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field
                                        id={'city'}
                                        name={'city'}
                                        component={ValidatedInput}
                                        placeholder={'e.g. London'}
                                        label={'City'}
                                        className={populatedFields.city ? 'pasted-input' : ''}
                                    />
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field
                                        id={'postCode'}
                                        name={'postCode'}
                                        component={ValidatedInput}
                                        label={'Post Code'}
                                        placeholder={'e.g. SW1A 1AA'}
                                        className={populatedFields.postCode ? 'pasted-input' : ''}
                                    />
                                </FieldWrapper>
                                <div className="k-form-buttons">
                                    <Button
                                        svgIcon={arrowRotateCcwIcon}
                                        fillMode="flat"
                                        onClick={() => {
                                            formRenderProps.onFormReset();
                                            setPopulatedFields({});
                                        }}
                                        type="button"
                                    />
                                    <SmartPasteButton onClick={handleSmartPaste} rounded="large">
                                        Smart Paste
                                    </SmartPasteButton>
                                </div>
                            </FormElement>
                        );
                    }}
                />
            </div>
        </div>
    );
};
export default App;
