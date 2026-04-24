import * as React from 'react';
import { GridCustomRowProps } from '@progress/kendo-react-grid';

interface RowRenderProps extends GridCustomRowProps {
    exitEdit: () => void;
}

export const RowRender = (props: RowRenderProps) => {
    const handleBlur = () => {
        setTimeout(() => {
            const activeElement = document.activeElement;

            if (activeElement && activeElement.className.indexOf('k-calendar') < 0) {
                props.exitEdit();
            }
        });
    };

    return (
        <tr {...props.trProps} onBlur={handleBlur}>
            {props.children}
        </tr>
    );
};
