import * as React from 'react';

import { DropDownTree, DropDownTreeChangeEvent, DropDownTreeExpandEvent } from '@progress/kendo-react-dropdowns';
import { Form, Field, FormElement, FormFieldSet, FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { processTreeData, expandedState } from './shared-dd-tree-data-operations';
import { data } from './shared-dd-tree-data';
import './overview-styles.css';

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = { selectField, expandField, dataItemKey, subItemsField };

const App = () => {
    const [expanded, setExpanded] = React.useState<Array<string | number>>(data.length ? [data[0][dataItemKey]] : []);

    const onExpandChange = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpanded((prev) => expandedState(event.item, dataItemKey, prev)),
        []
    );

    const DropDownTreeField = (fieldRenderProps: FieldRenderProps) => {
        const { value, onChange, ...others } = fieldRenderProps;

        const currentValue = value ?? null;

        const treeData = React.useMemo(
            () => processTreeData(data, { expanded, value: currentValue }, fields),
            [expanded, currentValue]
        );

        return (
            <DropDownTree
                {...others}
                style={{ width: '300px' }}
                data={treeData}
                value={currentValue}
                onChange={(e: DropDownTreeChangeEvent) => onChange(e)}
                placeholder="Please select ..."
                textField={textField}
                dataItemKey={dataItemKey}
                selectField={selectField}
                expandField={expandField}
                onExpandChange={onExpandChange}
                label="Furniture"
            />
        );
    };

    return (
        <div className="food-demo card-container">
            <div className="k-card custom-card">
                <div className="card-row">
                    <div className="card-column">
                        <h4 className="k-h4">Stylish Furniture</h4>

                        <div className="component-container">
                            <Form
                                onSubmit={() => {}}
                                initialValues={{ furniture: { text: 'Tables & Chairs', id: 2 } }}
                                render={() => (
                                    <FormElement>
                                        <FormFieldSet>
                                            <div>Explore our collections</div>
                                            <FieldWrapper>
                                                <Field name="furniture" component={DropDownTreeField} />
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
