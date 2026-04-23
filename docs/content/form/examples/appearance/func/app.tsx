import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldWrapper, FormFieldSet } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24 }}>
            {/* Small Size */}
            <div
                style={{
                    width: '30%',
                    background: 'rgba(60,60,60,0.08)',
                    padding: 16,
                    borderRadius: 8
                }}
            >
                <Form
                    onSubmit={handleSubmit}
                    render={(formRenderProps: FormRenderProps) => (
                        <div>
                            <FormElement style={{ maxWidth: 650 }} size="small">
                                <FormFieldSet legend="Small">
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
                                                component={Input}
                                                label={'Email'}
                                                labelClassName="k-form-label"
                                            />
                                        </div>
                                    </FieldWrapper>
                                </FormFieldSet>
                                <div className="k-form-buttons">
                                    <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                                </div>
                            </FormElement>
                        </div>
                    )}
                />
            </div>

            {/* Medium Size */}
            <div
                style={{
                    width: '30%',
                    background: 'rgba(60,60,60,0.08)',
                    padding: 16,
                    borderRadius: 8
                }}
            >
                <Form
                    onSubmit={handleSubmit}
                    render={(formRenderProps: FormRenderProps) => (
                        <div>
                            <FormElement style={{ maxWidth: 650 }} size="medium">
                                <FormFieldSet legend="Medium">
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
                                                component={Input}
                                                label={'Email'}
                                                labelClassName="k-form-label"
                                            />
                                        </div>
                                    </FieldWrapper>
                                </FormFieldSet>
                                <div className="k-form-buttons">
                                    <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                                </div>
                            </FormElement>
                        </div>
                    )}
                />
            </div>

            {/* Large Size */}
            <div
                style={{
                    width: '30%',
                    background: 'rgba(60,60,60,0.08)',
                    padding: 16,
                    borderRadius: 8
                }}
            >
                <Form
                    onSubmit={handleSubmit}
                    render={(formRenderProps: FormRenderProps) => (
                        <div>
                            <FormElement style={{ maxWidth: 650 }} size="large">
                                <FormFieldSet legend="Large">
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
                                                component={Input}
                                                label={'Email'}
                                                labelClassName="k-form-label"
                                            />
                                        </div>
                                    </FieldWrapper>
                                </FormFieldSet>
                                <div className="k-form-buttons">
                                    <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                                </div>
                            </FormElement>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};
export default App;
