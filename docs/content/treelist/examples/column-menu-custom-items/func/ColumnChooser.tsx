import * as React from 'react';
import { ColumnMenuForm, ColumnMenuItem } from '@progress/kendo-react-data-tools';
import { ColumnMenuContext } from './ColumnMenuContext';
import { TreeListColumnProps } from '@progress/kendo-react-treelist';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Checkbox } from '@progress/kendo-react-inputs';

export const ColumnChooser = (props: { closeMenu: () => void }) => {
    const { columns, visibleColumns, onColumnToggle } = React.useContext(ColumnMenuContext);
    const [visible, setVisible] = React.useState<Array<string | boolean>>(visibleColumns);
    const [expand, setExpand] = React.useState<boolean>(false);

    const onToggleExpand = React.useCallback(() => {
        setExpand(!expand);
    }, [expand]);

    const onSubmit = React.useCallback(
        (event) => {
            event.preventDefault();
            props.closeMenu();
            onColumnToggle.call(undefined, { visible });
        },
        [props, onColumnToggle, visible]
    );

    const onReset = React.useCallback(() => {
        props.closeMenu();
        onColumnToggle.call(undefined, { visible: columns.map((c) => c.field) });
    }, [props, onColumnToggle, columns]);

    const onChange = React.useCallback(
        (event, field: string) => {
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
                        <Button themeColor={'primary'} type="submit">
                            Save
                        </Button>
                    </React.Fragment>
                }
            >
                <div className="k-column-list">
                    {columns.map((column: TreeListColumnProps) => {
                        const field: any = column.field;
                        const checked: any = visible.includes(field);
                        const id: string = 'column-menu-id-' + field;
                        return (
                            <div className="k-column-list-item" key={id}>
                                <span>
                                    <Checkbox
                                        id={id}
                                        checked={checked}
                                        value={checked}
                                        onChange={(e) => onChange(e, field)}
                                        label={column.title || field}
                                    />
                                </span>
                            </div>
                        );
                    })}
                </div>
            </ColumnMenuForm>
        </div>
    );
};
