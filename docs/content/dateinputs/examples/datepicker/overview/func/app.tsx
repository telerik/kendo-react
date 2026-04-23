import * as React from 'react';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import {
    Form,
    Field,
    FormElement,
    FormFieldSet,
    FieldWrapper,
    FieldRenderProps,
    FormRenderProps
} from '@progress/kendo-react-form';

import './styles.css';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => {
        console.log('Form submitted:', dataItem);
    };

    const DatePickerField = (fieldRenderProps: FieldRenderProps) => {
        const { value, onChange, ...others } = fieldRenderProps;

        const handleChange = (event: any) => {
            onChange({ value: event.value });
        };

        return <DatePicker placeholder="Choose a date..." value={value} onChange={handleChange} {...others} />;
    };

    return (
        <div className="food-demo card-container">
            <div className="k-card custom-card">
                <div className="card-row">
                    <div className="card-column">
                        <h4 className="k-h4">Schedule Your Visit</h4>
                        <div className="component-container">
                            <Form
                                onSubmit={handleSubmit}
                                render={(formRenderProps: FormRenderProps) => (
                                    <FormElement>
                                        <FormFieldSet>
                                            <FieldWrapper>
                                                <Field name="date" component={DatePickerField} />
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
                            <div className="k-skeleton skeleton-box-medium" />
                            <div className="k-skeleton skeleton-box-medium" />
                        </div>
                    </div>
                    <div className="card-column image-container">
                        <div className="k-skeleton skeleton-image">
                            <span className="k-icon k-i-image" />
                        </div>
                    </div>
                </div>
                <div className="card-row">
                    <div className="k-skeleton skeleton-box-half" />
                </div>
            </div>
        </div>
    );
};

export default App;
