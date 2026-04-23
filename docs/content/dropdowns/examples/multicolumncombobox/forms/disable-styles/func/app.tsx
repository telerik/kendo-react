import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
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

const requiredValidator = (value: any) => (value ? '' : 'Please select an employee!');

const App = () => {
    const [success, setSuccess] = React.useState<boolean>(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const EmployeeField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;

        return (
            <MultiColumnComboBox
                validityStyles={false}
                data={employees}
                columns={columns}
                textField="name"
                style={{ width: '100%' }}
                label="Employee"
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
                    initialValues={{ employee: null }}
                    render={() => (
                        <FormElement>
                            <FormFieldSet legend="Select an employee">
                                <FieldWrapper>
                                    <div className="mb-3">
                                        <Field
                                            name="employee"
                                            component={EmployeeField}
                                            validator={requiredValidator}
                                        />
                                    </div>
                                </FieldWrapper>
                            </FormFieldSet>
                            <Button type="submit" themeColor="primary">
                                Search
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
