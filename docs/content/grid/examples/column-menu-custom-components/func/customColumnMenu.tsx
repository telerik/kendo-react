import * as React from 'react';
import {
    GridColumnMenuSort,
    GridColumnMenuFilter,
    GridColumnMenuItemGroup,
    GridColumnMenuItem,
    GridColumnMenuItemContent,
    GridColumnMenuProps
} from '@progress/kendo-react-grid';
import { columnInterface } from './gd-interfaces';

import { Form, Field, FormElement, FieldRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Checkbox } from '@progress/kendo-react-inputs';

interface CustomColumnMenuProps extends GridColumnMenuProps {
    columns: Array<columnInterface>;
    onColumnsSubmit: (event: Array<columnInterface>) => void;
}

const ColumnVisibilityCheckbox = (
    fieldProps: FieldRenderProps & {
        label: string;
        disabled?: boolean;
        id: string;
    }
) => {
    const { value, onChange, label, id, disabled, validationMessage, ...others } = fieldProps;

    return (
        <Checkbox
            id={id}
            {...others}
            checked={!!value}
            disabled={disabled}
            validationMessage={validationMessage || undefined}
            onChange={(e) => onChange({ value: e.value })}
        >
            <Label editorId={id} className="k-checkbox-label" style={{ userSelect: 'none' }}>
                {label}
            </Label>
        </Checkbox>
    );
};

export const CustomColumnMenu = (props: CustomColumnMenuProps) => {
    const [columnsExpanded, setColumnsExpanded] = React.useState<boolean>(false);
    const [filterExpanded, setFilterExpanded] = React.useState<boolean>(false);

    const initialValues = React.useMemo(() => {
        const vals: Record<string, boolean> = {};
        props.columns.forEach((c, idx) => {
            vals[`col_${idx}`] = !!c.show;
        });
        return vals;
    }, [props.columns]);

    const onMenuItemClick = () => {
        const value = !columnsExpanded;
        setColumnsExpanded(value);
        setFilterExpanded(value ? false : filterExpanded);
    };

    const onFilterExpandChange = (value: boolean) => {
        setFilterExpanded(value);
        setColumnsExpanded(value ? false : columnsExpanded);
    };

    const handleSubmit = (values: Record<string, boolean>) => {
        const updated = props.columns.map((col, idx) => ({
            ...col,
            show: !!values[`col_${idx}`]
        }));
        props.onColumnsSubmit(updated);
        props.onCloseMenu?.();
    };

    const handleReset = (e: React.SyntheticEvent, formValuesSetter: (v: any) => void) => {
        e.preventDefault();
        const allTrue: Record<string, boolean> = {};
        props.columns.forEach((_, idx) => (allTrue[`col_${idx}`] = true));
        formValuesSetter(allTrue);

        const updated: Array<columnInterface> = props.columns.map((c) => ({
            ...c,
            show: true
        }));
        props.onColumnsSubmit(updated);
        props.onCloseMenu?.();
    };

    return (
        <div>
            <GridColumnMenuSort {...props} />
            <GridColumnMenuFilter {...props} onExpandChange={onFilterExpandChange} expanded={filterExpanded} />

            <GridColumnMenuItemGroup>
                <GridColumnMenuItem title="Columns" iconClass="k-i-columns" onClick={onMenuItemClick} />
                <GridColumnMenuItemContent show={columnsExpanded}>
                    <div className="k-column-list-wrapper">
                        <Form
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            render={(formRenderProps) => {
                                const visibleCount = props.columns.reduce((acc, _, idx) => {
                                    const v = formRenderProps.valueGetter
                                        ? formRenderProps.valueGetter(`col_${idx}`)
                                        : formRenderProps.dataValue?.[`col_${idx}`];
                                    return acc + (v ? 1 : 0);
                                }, 0);

                                return (
                                    <FormElement>
                                        <div className="k-column-list">
                                            {props.columns.map((column, idx) => {
                                                const name = `col_${idx}`;
                                                const currentVal =
                                                    (formRenderProps.valueGetter
                                                        ? formRenderProps.valueGetter(name)
                                                        : formRenderProps.dataValue?.[name]) ?? initialValues[name];
                                                const isLastVisible = !!currentVal && visibleCount === 1;

                                                return (
                                                    <div key={idx} className="k-column-list-item">
                                                        <span>
                                                            <Field
                                                                name={name}
                                                                id={`column-visibility-${idx}`}
                                                                label={column.title}
                                                                component={ColumnVisibilityCheckbox}
                                                                disabled={isLastVisible}
                                                            />
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="k-actions k-hstack k-justify-content-stretch">
                                            <Button
                                                type="button"
                                                onClick={(e) => handleReset(e, formRenderProps.onChange as any)}
                                            >
                                                Reset
                                            </Button>
                                            <Button
                                                type="submit"
                                                themeColor="primary"
                                                disabled={!formRenderProps.allowSubmit}
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    </FormElement>
                                );
                            }}
                        />
                    </div>
                </GridColumnMenuItemContent>
            </GridColumnMenuItemGroup>
        </div>
    );
};
