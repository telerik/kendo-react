import { GridCustomCellProps } from '@progress/kendo-react-grid';

export type GridCellRenderProps = GridCustomCellProps & {
    enterEdit: (dataItem: any, field?: string) => void;
    exitEdit: (dataItem: any) => void;
};

export const CellRender = (props: GridCellRenderProps) => {
    const dataItem = props.dataItem;
    const cellField = props.field;
    const additionalProps =
        cellField && props.isInEdit
            ? {
                  ref: (td) => {
                      const input = td && td.querySelector('input');
                      const activeElement = document.activeElement;
                      if (!input || !activeElement || input === activeElement || !activeElement.contains(input)) {
                          return;
                      }
                      if (input.type === 'checkbox') {
                          input.focus();
                      } else {
                          input.select();
                      }
                  }
              }
            : {
                  onClick: () => {
                      props.enterEdit(dataItem, cellField);
                  }
              };
    const clonedProps = {
        ...props.tdProps,
        onKeyDown: (ev) => {
            if (ev.key === 'Escape' || ev.key === 'Tab') {
                props.exitEdit(true);
            }
        },
        ...additionalProps
    };

    return <td {...clonedProps}>{props.children}</td>;
};
export const RowRender = (props) => {
    return <tr {...props.trProps}>{props.children}</tr>;
};
