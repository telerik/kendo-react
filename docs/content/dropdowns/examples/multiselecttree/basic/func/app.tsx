import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps } from '@progress/kendo-react-form';
import {
    MultiSelectTree,
    MultiSelectTreeChangeEvent,
    MultiSelectTreeExpandEvent,
    getMultiSelectTreeValue
} from '@progress/kendo-react-dropdowns';
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

import './style.css';

const MultiSelectTreeField = (fieldRenderProps: FieldRenderProps) => {
    const { value, onChange, validationMessage, visited, ...others } = fieldRenderProps;

    const [expanded, setExpanded] = React.useState<Array<string | number>>(data.length ? [data[0][dataItemKey]] : []);

    const onExpandChange = React.useCallback(
        (event: MultiSelectTreeExpandEvent) => setExpanded((prev) => expandedState(event.item, dataItemKey, prev)),
        []
    );

    // FIX: normalize undefined -> []
    const currentValue = Array.isArray(value) ? value : [];

    const handleChange = React.useCallback(
        (event: MultiSelectTreeChangeEvent) => {
            const newValue = getMultiSelectTreeValue(data, {
                ...fields,
                ...event,
                value: currentValue
            });
            onChange({ value: newValue });
        },
        [onChange, currentValue]
    );

    const treeData = React.useMemo(
        () =>
            processMultiSelectTreeData(data, {
                expanded,
                value: currentValue,
                ...fields
            }),
        [expanded, currentValue]
    );

    return (
        <MultiSelectTree
            {...others}
            style={{ width: '300px' }}
            data={treeData}
            value={currentValue}
            onChange={handleChange}
            placeholder="Please select ..."
            textField={textField}
            dataItemKey={dataItemKey}
            checkField={checkField}
            checkIndeterminateField={checkIndeterminateField}
            subItemsField={subItemsField}
            expandField={expandField}
            onExpandChange={onExpandChange}
            label={'Category'}
        />
    );
};

const App = () => {
    const handleSubmit = (dataItem: any) => {
        console.log('Submitted Data:', dataItem);
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
                                            <Field name="category" component={MultiSelectTreeField} />
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
