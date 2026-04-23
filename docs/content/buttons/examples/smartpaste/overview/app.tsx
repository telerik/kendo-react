import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import { Button, SmartPasteButton } from '@progress/kendo-react-buttons';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import { Loader } from '@progress/kendo-react-indicators';
import { Skeleton } from './Skeleton';
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
    const [isCopied, setIsCopied] = React.useState(false);
    const [showCopiedText, setShowCopiedText] = React.useState(false);
    const [isPasted, setIsPasted] = React.useState(false);

    const formValidator = React.useCallback((values: any) => {
        const errors: { [key: string]: string } = {};

        if (!values.fullName) {
            errors.fullName = 'Full Name is required';
        }

        if (!values.phone) {
            errors.phone = 'Phone Number is required';
        }

        return Object.keys(errors).length > 0 ? errors : undefined;
    }, []);

    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    const handleSmartPaste = async (e: any) => {
        setIsLoading(true);
        try {
            const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e.requestData)
            });
            const data = await response.json();
            e.setResponse(data);
            setIsPasted(true);
            setIsCopied(false);
            setShowCopiedText(false);
            clearSelection();
        } catch (error) {
            console.error('Smart paste request failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const clearSelection = () => {
        const selection = window.getSelection();
        if (selection) {
            selection.removeAllRanges();
        }
    };

    const handleReset = () => {
        setIsCopied(false);
        setShowCopiedText(false);
        setIsPasted(false);
        clearSelection();
    };

    const handleCopy = () => {
        setIsCopied(true);
        setShowCopiedText(true);
        setIsPasted(false);
    };

    const handleTextCopy = () => {
        setIsCopied(true);
        setIsPasted(false);
    };
    return (
        <div className="smartpaste-wrapper">
            <h4 className="smartpaste-title">Recommendation Letter</h4>
            <div className="smartpaste-container">
                <Skeleton
                    isCopied={isCopied}
                    onButtonCopy={handleCopy}
                    onTextCopy={handleTextCopy}
                    showCopiedText={showCopiedText}
                />
                <div className="form-container">
                    {isLoading && (
                        <div className="loader-container">
                            <Loader size="large" type="infinite-spinner" />
                        </div>
                    )}
                    <Form
                        onSubmit={handleSubmit}
                        validator={formValidator}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement>
                                <FieldWrapper>
                                    <Field
                                        name={'fullName'}
                                        id={'fullName'}
                                        component={ValidatedInput}
                                        placeholder={'e.g. John Doe'}
                                        label={'Full Name'}
                                        className={isPasted ? 'pasted-input' : ''}
                                    />
                                </FieldWrapper>

                                <FieldWrapper>
                                    <Field
                                        name={'city'}
                                        id={'city'}
                                        component={Input}
                                        placeholder={'e.g. London'}
                                        label={'City'}
                                        className={isPasted ? 'pasted-input' : ''}
                                    />
                                </FieldWrapper>

                                <FieldWrapper>
                                    <Field
                                        name={'phone'}
                                        id={'phone'}
                                        component={ValidatedInput}
                                        label={'Phone Number'}
                                        placeholder={'e.g. XXXXXXXXXX'}
                                        className={isPasted ? 'pasted-input' : ''}
                                    />
                                </FieldWrapper>

                                <div className="k-form-buttons">
                                    <Button
                                        svgIcon={arrowRotateCcwIcon}
                                        fillMode="flat"
                                        onClick={() => {
                                            formRenderProps.onFormReset();
                                            handleReset();
                                        }}
                                        type="button"
                                    />
                                    <SmartPasteButton onClick={handleSmartPaste}>Smart Paste</SmartPasteButton>
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
