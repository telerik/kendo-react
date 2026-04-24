import * as React from 'react';

export const createRenderers = (enterEdit, exitEdit, editFieldName) => {
    let preventExit;
    let preventExitTimeout;
    let blurTimeout;

    const cellRender = (tdElement, cellProps) => {
        const dataItem = cellProps.dataItem;
        const field = cellProps.field;
        const editedField = cellProps.dataItem[editFieldName];
        const additionalProps = (editedField && cellProps.field === editedField) ?
            {
                ref: (td) => {
                    const input = td && td.querySelector('input');
                    if (!input || (input === document.activeElement)) { return; }
                    if (input.type === 'checkbox') {
                        input.focus();
                    } else {
                        input.select();
                    }
                }
            } : {
                onClick: (event) => {
                    const targetClasses = event.target.classList;
                    if (targetClasses &&
                        (targetClasses.contains('k-i-expand') || targetClasses.contains('k-i-collapse'))) {
                        return;
                    }
                    enterEdit.call(undefined, dataItem, field);
                }
            };

        return React.cloneElement(tdElement, { ...tdElement.props, ...additionalProps }, tdElement.props.children);
    };

    const rowRender = (trElement, _dataItem) => {
        const trProps = {
            ...trElement.props,
            onMouseDown: () => {
                preventExit = true;
                clearTimeout(preventExitTimeout);
                preventExitTimeout = setTimeout(() => { preventExit = undefined; });
            },
            onBlur: () => {
                clearTimeout(blurTimeout);
                if (!preventExit) {
                    blurTimeout = setTimeout(() => { exitEdit.call(undefined); });
                }
            },
            onFocus: () => { clearTimeout(blurTimeout); }
        };
        return React.cloneElement(trElement, { ...trProps }, trElement.props.children);
    };

    return {
        cellRender,
        rowRender
    };
};
