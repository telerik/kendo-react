import * as React from 'react';
import { ColumnMenuForm, ColumnMenuItem } from '@progress/kendo-react-data-tools';
import { ColumnMenuContext, ColumnMenuContextType } from './ColumnMenuContext';
import { GanttColumnProps } from '@progress/kendo-react-gantt';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Checkbox } from '@progress/kendo-react-inputs';

export interface ColumnChooserProps {
    closeMenu: () => void;
}

export const ColumnChooser = (props: ColumnChooserProps) => {
    const { closeMenu } = props;
    const { columns, visibleColumns, onColumnToggle } = React.useContext<ColumnMenuContextType>(ColumnMenuContext);
    const [visible, setVisible] = React.useState<string[]>(visibleColumns);
    const [expand, setExpand] = React.useState<boolean>(false);

    const onToggleExpand = React.useCallback(() => {
        setExpand(!expand);
    }, [expand]);

    const onSubmit = React.useCallback(
        (event) => {
            event.preventDefault();
            closeMenu();
            onColumnToggle.call(undefined, visible);
        },
        [onColumnToggle, visible, closeMenu]
    );

    const onReset = React.useCallback(() => {
        closeMenu();
        onColumnToggle.call(
            undefined,
            columns.map((c) => c.field || '')
        );
    }, [onColumnToggle, columns, closeMenu]);

    const onChange = React.useCallback(
        (event, field) => {
            if (event.value) {
                setVisible([...visible, field]);
            } else {
                setVisible(visible.filter((f) => f !== field));
            }
        },
        [visible]
    );

    return (
        <div className="k-columnmenu-item-wrapper" key="filtering">
            <ColumnMenuItem iconClass="k-i-columns" title="Columns" onClick={onToggleExpand} />
            <ColumnMenuForm
                show={expand}
                onSubmit={onSubmit}
                onReset={onReset}
                actions={
                    <React.Fragment>
                        <Button type="reset">Reset</Button>
                        <Button type="submit">Save</Button>
                    </React.Fragment>
                }
            >
                <div className="k-column-list">
                    {columns.map((column: GanttColumnProps) => {
                        const field: string = column.field!;
                        const checked = visible.includes(field);
                        const id = 'column-menu-id-' + field;
                        return (
                            <Checkbox id={id} checked={checked} onChange={(e) => onChange(e, field)}>
                                <Label editorId={id} className="k-checkbox-label" style={{ userSelect: 'none' }}>
                                    {column.title || field}
                                </Label>
                            </Checkbox>
                        );
                    })}
                </div>
            </ColumnMenuForm>
        </div>
    );
};
