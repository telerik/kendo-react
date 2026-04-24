import * as React from 'react';
import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { Form, Field, FormElement, FormFieldSet, FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { TextArea } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { employees } from './shared-dd-data';

interface columnValues {
    field: string;
    header: string;
    width: string;
}

const columns: columnValues[] = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const secondEmployeeValidator = (value: any, values: any) => {
    if (values.firstEmployee === null) {
        return 'Please select the first employee!';
    }
    if (value === null) {
        return 'Please select a second employee';
    }
    return '';
};

const App = () => {
    const [success, setSuccess] = React.useState<boolean>(false);

    const handleSubmit = (dataItem: any) => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    const SecondEmployeeField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <MultiColumnComboBox
                style={{ width: '100%' }}
                data={employees}
                columns={columns}
                label="Second Employee"
                textField="name"
                valid={visited ? !validationMessage : undefined}
                validationMessage={visited ? (validationMessage as string) : ''}
                {...others}
            />
        );
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <Form
                    onSubmit={handleSubmit}
                    initialValues={{
                        firstEmployee: null,
                        secondEmployee: null,
                        additionalComments: ''
                    }}
                    render={() => (
                        <FormElement>
                            <FormFieldSet legend="Select your team:">
                                <FieldWrapper>
                                    <div className="mb-3">
                                        <Field
                                            name="firstEmployee"
                                            component={MultiColumnComboBox}
                                            style={{ width: '100%' }}
                                            data={employees}
                                            columns={columns}
                                            label="First Employee"
                                            textField="name"
                                        />
                                    </div>
                                </FieldWrapper>

                                <FieldWrapper>
                                    <div className="mb-3">
                                        <Field
                                            name="secondEmployee"
                                            component={SecondEmployeeField}
                                            validator={secondEmployeeValidator}
                                        />
                                    </div>
                                </FieldWrapper>

                                <Label className="k-form-field">
                                    <span>Additional Comments</span>
                                    <Field name="additionalComments" component={TextArea} style={{ width: '100%' }} />
                                </Label>
                            </FormFieldSet>

                            <Button type="submit" themeColor="primary">
                                Select
                            </Button>
                        </FormElement>
                    )}
                />
            </div>

            {success && (
                <div className="alert alert-success" style={{ position: 'absolute' }}>
                    Form submitted!
                </div>
            )}
        </div>
    );
};

export default App;
