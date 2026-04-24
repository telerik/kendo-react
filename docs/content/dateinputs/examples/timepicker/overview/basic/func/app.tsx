import * as React from 'react';
import { Form, Field, FormFieldSet, FormElement } from '@progress/kendo-react-form';
import { TimePicker } from '@progress/kendo-react-dateinputs';

import './styles.css';

const App = () => {
    const handleSubmit = (dataItem: any) => {
        console.log('Submitted Data:', dataItem);
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
                                render={() => (
                                    <FormElement>
                                        <FormFieldSet>
                                            <div>Time</div>
                                            <Field name="time" component={TimePicker} />
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
