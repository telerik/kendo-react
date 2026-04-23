import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldWrapper } from '@progress/kendo-react-form';
import { MaskedTextBox } from '@progress/kendo-react-inputs';

import './overview-styles.css';

const App = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                                onSubmit={handleSubmit}
                                initialValues={{
                                    phoneNumber: '(359) 884-12-33-21'
                                }}
                                render={(formRenderProps) => (
                                    <FormElement>
                                        <FormFieldSet>
                                            <div>Phone Number</div>
                                            <FieldWrapper>
                                                <Field
                                                    name="phoneNumber"
                                                    component={MaskedTextBox}
                                                    mask="(999) 000-00-00-00"
                                                />
                                            </FieldWrapper>
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
