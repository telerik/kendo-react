import * as React from 'react';
export const CellRender = (props) => {
    const dataItem = props.dataItem;
    const cellField = props.field;
    const inEditField = dataItem[props.editField || ''];
    const additionalProps =
        cellField && cellField === inEditField
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
                  onKeyDown: () => {
                      addEventListener('keypress', (e) => {
                          if (e.key === 'Enter') {
                              props.enterEdit(dataItem, cellField);
                          }
                      });
                  }
              };
    const clonedProps = { ...props.tdProps, ...additionalProps };

    return <td {...clonedProps}>{props.children}</td>;
};

export const RowRender = (props) => {
    return (
        <tr
            {...props.trProps}
            onBlur={() => {
                props.exitEdit();
            }}
        >
            {props.children}
        </tr>
    );
};
