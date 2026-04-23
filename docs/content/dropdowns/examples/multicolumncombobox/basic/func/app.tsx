import * as React from 'react';

import { Form, Field, FormElement, FormFieldSet, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { employees } from './shared-dd-data';

const columns = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
];

import './style.css';

const MultiColumnComboBoxField = (fieldRenderProps: FieldRenderProps) => {
    const { value, onChange, ...others } = fieldRenderProps;

    return (
        <MultiColumnComboBox
            {...others}
            data={employees}
            columns={columns}
            textField="name"
            value={value ?? null}
            onChange={(e) => onChange(e)}
            style={{ width: '300px' }}
            placeholder="Please select ..."
        />
    );
};

const App = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="orders-demo card-container">
            <div className="k-card custom-card !k-flex-row">
                <div className="custom-card-header k-skeleton">
                    <div className="card-actions-container k-pt-4 k-gap-2.5 k-flex-layout k-align-items-center k-flex-col">
                        <div className="custom-card-header-action k-skeleton k-rounded-full" />
                        <div className="custom-card-header-action k-skeleton k-rounded-full" />
                    </div>
                </div>
                <div className="card-content k-p-8 k-w-full">
                    <h4 className="k-h4">Order History</h4>
                    <div className="card-columns k-gap-8 k-flex-layout">
                        <div className="card-content-column k-flex-1">
                            <Form
                                onSubmit={handleSubmit}
                                render={() => (
                                    <FormElement>
                                        <FormFieldSet>
                                            <FieldWrapper>
                                                <div>Employee</div>
                                                <Field name="employee" component={MultiColumnComboBoxField} />
                                            </FieldWrapper>
                                        </FormFieldSet>
                                    </FormElement>
                                )}
                            />
                            <div className="skeleton-wrapper k-d-flex k-flex-col k-align-items-start k-gap-1 k-flex-layout k-mt-5">
                                <div className="k-skeleton k-rounded skeleton-text-small" />
                                <div className="k-skeleton k-rounded skeleton-text-medium k-w-full" />
                            </div>
                            <div className="skeleton-wrapper k-d-flex k-flex-col k-align-items-start k-gap-1 k-mt-5 padding-top-5">
                                <div className="k-skeleton k-rounded skeleton-text-small" />
                                <div className="k-skeleton k-rounded skeleton-text-large k-w-full" />
                            </div>
                        </div>
                        <div className="card-content-column card-image-column k-flex-1">
                            <div className="skeleton-wrapper k-h-full k-flex-col k-align-items-start k-gap-1">
                                <div className="k-skeleton k-h-full k-rounded skeleton-image-large !k-d-flex k-justify-content-center k-align-items-center">
                                    <span className="k-icon k-i-chart-pie" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
