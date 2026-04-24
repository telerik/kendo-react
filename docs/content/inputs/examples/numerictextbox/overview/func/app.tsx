import * as React from 'react';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Form, Field, FormElement, FieldRenderProps, FormFieldSet, FormRenderProps } from '@progress/kendo-react-form';

import './overview-styles.css';

const App = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const NumericTextBoxField = (fieldRenderProps: FieldRenderProps) => {
        const { value, onChange, ...others } = fieldRenderProps;

        const handleChange = (event: any) => {
            onChange({ value: event.value });
        };

        return (
            <NumericTextBox
                value={value}
                onChange={handleChange}
                placeholder="please enter value"
                label="Weight"
                format="n2"
                {...others}
            />
        );
    };

    return (
        <div className="profile-demo card-container">
            <div className="k-card custom-card">
                <div className="card-row">
                    <div className="card-column no-flex">
                        <div className="sidebar-container k-skeleton">
                            <div className="avatar-name-container">
                                <div className="k-skeleton skeleton-avatar" />
                                <div className="name-container">
                                    <div className="k-skeleton skeleton-text" />
                                    <div className="k-skeleton skeleton-small-text-short" />
                                </div>
                            </div>
                            <div className="description-container">
                                <div className="k-skeleton skeleton-small-text" />
                                <div className="k-skeleton skeleton-small-text" />
                                <div className="k-skeleton skeleton-small-text" />
                            </div>
                        </div>
                    </div>
                    <div className="card-column">
                        <div className="avatar-title-container">
                            <div className="k-skeleton skeleton-avatar" />
                            <h4 className="k-h4">My Profile</h4>
                        </div>

                        <div className="skeleton-container top">
                            <div className="k-skeleton skeleton-box-small" />
                            <div className="k-skeleton skeleton-box-large" />
                        </div>
                        <div className="component-container">
                            <Form
                                initialValues={{ weight: 77 }}
                                onSubmit={handleSubmit}
                                render={(formRenderProps: FormRenderProps) => (
                                    <FormElement>
                                        <FormFieldSet>
                                            <Field name="weight" component={NumericTextBoxField} />
                                        </FormFieldSet>
                                    </FormElement>
                                )}
                            />
                        </div>
                        <div className="skeleton-container bottom">
                            <div className="k-skeleton skeleton-box-small" />
                            <div className="k-skeleton skeleton-box-large-double" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
