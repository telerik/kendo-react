import * as React from 'react';
import { DropDownTree, DropDownTreeChangeEvent, DropDownTreeExpandEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Form, Field, FormElement, FormFieldSet, FieldWrapper } from '@progress/kendo-react-form';
import { processTreeData, expandedState } from './shared-dd-tree-data-operations';
import { data } from './shared-dd-tree-data';

const requiredValidator = (value) => (value ? '' : 'This field is required.');

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = { selectField, expandField, dataItemKey, subItemsField };

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);

    const onChange = (event: DropDownTreeChangeEvent) => setValue(event.value);
    const onExpandChange = (event: DropDownTreeExpandEvent) =>
        setExpanded(expandedState(event.item, dataItemKey, expanded));

    const treeData = React.useMemo(() => processTreeData(data, { expanded, value }, fields), [expanded, value]);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card">
                    <div className="card-block">
                        <Form
                            onSubmit={handleSubmit}
                            render={() => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Select an item from the list:</legend>
                                        <FieldWrapper>
                                            <div className="mb-3">
                                                <Field
                                                    name="equipment"
                                                    component={DropDownTree}
                                                    label="Home Equipment"
                                                    validator={requiredValidator}
                                                    data={treeData}
                                                    value={value}
                                                    onChange={onChange}
                                                    textField={textField}
                                                    dataItemKey={dataItemKey}
                                                    selectField={selectField}
                                                    expandField={expandField}
                                                    onExpandChange={onExpandChange}
                                                />
                                            </div>
                                        </FieldWrapper>
                                    </FormFieldSet>
                                    <Button themeColor="primary">Submit</Button>
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
