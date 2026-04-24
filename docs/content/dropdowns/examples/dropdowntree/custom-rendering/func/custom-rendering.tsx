import * as React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import { folderIcon, filePdfIcon, html5Icon, imageIcon } from '@progress/kendo-svg-icons';
import { ItemProps, ValueHolderProps } from '@progress/kendo-react-dropdowns';

export const Item = (props: ItemProps) => {
    return (
        <React.Fragment>
            <SvgIcon icon={svgIconName(props.item)} />
            {props.item.text}
        </React.Fragment>
    );
};

export const ValueHolder = (props: ValueHolderProps) => {
    return props.item ? (
        <React.Fragment>
            <SvgIcon icon={svgIconName(props.item)} />
            &nbsp;
            {props.children}
        </React.Fragment>
    ) : (
        props.children
    );
};

const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);
function svgIconName({ text, items }) {
    if (items !== undefined) {
        return folderIcon;
    } else if (is(text, 'pdf')) {
        return filePdfIcon;
    } else if (is(text, 'html')) {
        return html5Icon;
    } else if (is(text, 'jpg|png')) {
        return imageIcon;
    } else {
        return undefined;
    }
}
