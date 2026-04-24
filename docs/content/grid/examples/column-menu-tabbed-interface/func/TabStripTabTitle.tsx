import * as React from 'react';
import { IconWrap, SVGIcon } from '@progress/kendo-react-common';

interface TabStripTabTitleProps {
    title: string;
    iconName: string;
    svgIcon: SVGIcon;
}

export const TabStripTabTitle: React.FunctionComponent<TabStripTabTitleProps> = (props) => {
    return (
        <span className="k-icon-wrapper-host" title={props.title}>
            <IconWrap name={props.iconName} icon={props.svgIcon} />
        </span>
    );
};
