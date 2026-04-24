import * as React from 'react';
import { DateInput, DateInputChangeEvent } from '@progress/kendo-react-dateinputs';
import { Hint } from '@progress/kendo-react-labels';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps } from '@progress/kendo-react-form';
import './styles.css';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => {
        console.log('Form submitted:', dataItem);
    };

    const DateInputField = (fieldRenderProps: FieldRenderProps) => {
        const { value, onChange, ...others } = fieldRenderProps;

        const handleChange = (event: DateInputChangeEvent) => {
            onChange({ value: event.value });
        };

        return (
            <>
                <DateInput
                    value={value}
                    onChange={handleChange}
                    ariaDescribedBy="dateHint"
                    width={300}
                    label={'Date of Birth'}
                    clearButton
                    spinners
                    {...others}
                />
                <Hint id="dateHint">Month, Day, Year</Hint>
            </>
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
                        <div className="component-container">
                            <Form
                                onSubmit={handleSubmit}
                                render={(formRenderProps: FormRenderProps) => (
                                    <FormElement>
                                        <fieldset>
                                            <Field name="dateOfBirth" component={DateInputField} />
                                        </fieldset>
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
