import * as React from 'react';
import { GridCustomCellProps } from '@progress/kendo-react-grid';

const CustomGroupHeaderCell = (props: GridCustomCellProps) => {
    if (!props.tdProps) {
        return null;
    }

    // `key`/`key`  aren't part of the typed shape but are present at runtime; extract them separately.
    type TdPropsWithKey = React.TdHTMLAttributes<HTMLTableCellElement> & { key?: string };
    const { key: tdKey, ...tdProps } = props.tdProps as TdPropsWithKey;
    const { key: td2Key, ...td2Props } = (props.td2Props ?? {}) as TdPropsWithKey;

    // Ancestor-level spacer cell for an outer group level: keep it blank.
    if (props.isSpacerCell) {
        return <td key={tdKey} {...tdProps} />;
    }

    // The default toggle button is the first child of the default content; keep it as-is.
    const toggle = React.isValidElement(props.children)
        ? React.Children.toArray((props.children.props as { children?: React.ReactNode }).children)[0]
        : null;

    return (
        <>
            <td key={tdKey} {...tdProps} style={{ ...tdProps.style }}>
                <div className="k-grouping-row-content">
                    {toggle}
                    <span className="k-grouping-row-text">{props.dataItem?.value}</span>
                </div>
            </td>
            {props.td2Props && <td key={td2Key} {...td2Props} style={{ ...td2Props.style }} />}
        </>
    );
};

export default CustomGroupHeaderCell;
