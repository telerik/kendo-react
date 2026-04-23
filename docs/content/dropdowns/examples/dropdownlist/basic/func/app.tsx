import * as React from 'react';
import { Form, Field, FormFieldSet, FieldWrapper, FormElement } from '@progress/kendo-react-form';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import './overview-styles.css';

const categories = ['Pizza', 'Burger', 'Pasta', 'Burrito'];

const App = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="food-demo card-container">
            <div className="k-card custom-card">
                <div className="card-row">
                    <div className="card-column">
                        <h4 className="k-h4">Time to order food</h4>
                        <div className="component-container">
                            <Form
                                onSubmit={handleSubmit}
                                initialValues={{ category: 'Pizza' }}
                                render={() => (
                                    <FormElement>
                                        <FormFieldSet>
                                            <FieldWrapper>
                                                <div>Choose food category</div>
                                                <Field
                                                    name="category"
                                                    component={DropDownList}
                                                    style={{ width: '300px' }}
                                                    data={categories}
                                                />
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
