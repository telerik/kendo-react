import * as React from 'react';
import { TextArea } from '@progress/kendo-react-inputs';
import {
    Form,
    Field,
    FormElement,
    FormFieldSet,
    FieldWrapper,
    FieldRenderProps,
    FormRenderProps
} from '@progress/kendo-react-form';

import './overview-styles.css';

const App = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const TextAreaField = (fieldRenderProps: FieldRenderProps) => {
        const { value, onChange, ...others } = fieldRenderProps;

        const handleChange = (event: any) => {
            onChange({ value: event.target.value });
        };

        return <TextArea value={value} onChange={handleChange} {...others} />;
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
                        <div className="component-container">
                            <Form
                                initialValues={{
                                    about: 'Tell us a little bit about yourself...'
                                }}
                                onSubmit={handleSubmit}
                                render={(formRenderProps: FormRenderProps) => (
                                    <FormElement>
                                        <FormFieldSet>
                                            <div>About me</div>
                                            <FieldWrapper>
                                                <Field name="about" component={TextAreaField} />
                                            </FieldWrapper>
                                        </FormFieldSet>
                                    </FormElement>
                                )}
                            />
                        </div>
                        <div className="skeleton-container top">
                            <div className="k-skeleton skeleton-box-small" />
                            <div className="k-skeleton skeleton-box-large" />
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
