import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
import { Hint } from '@progress/kendo-react-labels';
import { Form, Field, FormElement, FormFieldSet, FieldWrapper } from '@progress/kendo-react-form';
import './styles.css';
const App = () => {
    const sports = [
        'Baseball',
        'Basketball',
        'Cricket',
        'Field Hockey',
        'Football',
        'Table Tennis',
        'Tennis',
        'Volleyball'
    ];

    return (
        <div className="hobbies-demo card-container">
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
                            <h4 className="k-h4">Hobbies</h4>
                        </div>
                        <div className="component-container">
                            <Form
                                onSubmit={() => {}}
                                initialValues={{ sport: 'Football' }}
                                render={() => (
                                    <FormElement>
                                        <FormFieldSet>
                                            <FieldWrapper>
                                                <div>Favorite sport:</div>
                                                <Field
                                                    name="sport"
                                                    component={ComboBox}
                                                    data={sports}
                                                    id="sport"
                                                    allowCustom={true}
                                                />
                                            </FieldWrapper>
                                            <Hint id="sport">Add you favourite sport, if it is not in the list </Hint>
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
