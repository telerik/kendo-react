import * as React from 'react';
import { LinkDialog } from './InsertLinkDialog';
import { Button } from '@progress/kendo-react-buttons';

export const customToolRendering = function (Tool: any) {
    return function (props: any) {
        return (
            <Tool
                {...props}
                render={(defaultRendering: { props: any }) => {
                    return renderCustomTool(defaultRendering.props);
                }}
            />
        );
    };
};

export const customToolRenderingWithDialog = function (Tool) {
    return function (props) {
        return (
            <Tool
                {...props}
                render={(defaultRendering) => {
                    const tool = defaultRendering[0];
                    const dialog = defaultRendering[1];

                    return (
                        <React.Fragment>
                            {renderCustomTool(tool.props)}
                            {dialog && <LinkDialog {...dialog.props} />}
                        </React.Fragment>
                    );
                }}
            />
        );
    };
};

export const renderCustomTool = function (toolProps) {
    const { svgIcon, look, primary, togglable, selected, ...rest } = toolProps;
    let toolState = selected ? ' k-active' : '';
    toolState = toolProps.disabled ? toolState + ' k-disabled' : toolState;

    return <Button type="button" aria-checked={String(selected || false)} {...rest} svgIcon={svgIcon} />;
};
