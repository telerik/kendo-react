import * as React from 'react';

import {
    MultiSelectTree,
    MultiSelectTreeChangeEvent,
    MultiSelectTreeExpandEvent,
    getMultiSelectTreeValue
} from '@progress/kendo-react-dropdowns';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { processMultiSelectTreeData, expandedState } from './shared-dd-multiselecttree-data-operations';
import { data } from './shared-dd-tree-data';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = {
    dataItemKey,
    checkField,
    checkIndeterminateField,
    expandField,
    subItemsField
};

const requiredValidator = (value: any) => (value && value.length > 0 ? '' : 'This field is required.');

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);

    const onExpandChange = React.useCallback(
        (event: MultiSelectTreeExpandEvent) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );

    const handleSubmit = React.useCallback((dataItem) => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    }, []);

    const MultiSelectTreeField = (fieldRenderProps: FieldRenderProps) => {
        const { value: fieldValue, onChange: fieldOnChange, validationMessage, visited } = fieldRenderProps;
        const value = fieldValue || [];

        const onChange = (event: MultiSelectTreeChangeEvent) => {
            const newValue = getMultiSelectTreeValue(data, {
                ...fields,
                ...event,
                value
            });
            fieldOnChange({ value: newValue });
        };

        const treeData = React.useMemo(
            () => processMultiSelectTreeData(data, { expanded, value, ...fields }),
            [expanded, value]
        );

        return (
            <MultiSelectTree
                validityStyles={false}
                label="Home Equipment"
                data={treeData}
                value={value}
                onChange={onChange}
                textField={textField}
                dataItemKey={dataItemKey}
                checkField={checkField}
                checkIndeterminateField={checkIndeterminateField}
                subItemsField={subItemsField}
                expandField={expandField}
                onExpandChange={onExpandChange}
                valid={visited && !validationMessage}
                validationMessage={visited ? validationMessage : ''}
            />
        );
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card">
                    <div className="card-block">
                        <Form
                            onSubmit={handleSubmit}
                            initialValues={{
                                equipment: []
                            }}
                            render={() => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Select an item from the list:</legend>
                                        <div className="mb-3">
                                            <Field
                                                name="equipment"
                                                component={MultiSelectTreeField}
                                                validator={requiredValidator}
                                            />
                                        </div>
                                    </FormFieldSet>
                                    <Button themeColor={'primary'}>Submit</Button>
                                </FormElement>
                            )}
                        />
                    </div>
                </div>
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
