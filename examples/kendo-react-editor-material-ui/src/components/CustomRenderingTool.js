import * as React from 'react';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import FormatBold from '@material-ui/icons/FormatBold';
import FormatItalic from '@material-ui/icons/FormatItalic';
import FormatUnderlined from '@material-ui/icons/FormatUnderlined';
import Code from '@material-ui/icons/Code';

export const customToolRendering = function(Tool) {
    return function(props) {
        return (
            <Tool
                {...props}
                render={defaultRendering => {
                    return (
                        renderCustomTool(defaultRendering.props)
                    );
                }}
            />
        );
    };
};

export const renderCustomTool = function(toolProps) {
    const { icon, look, primary, togglable, selected, ...rest } = toolProps;
    const toolState = toolProps.disabled ? ' k-state-disabled' : '';

    return (
        <Button
            className={toolState}
            color={toolProps.selected ? "secondary" : "primary"}
            {...rest}
        >
            {renderIcon(toolProps.icon)}
        </Button>
    );
};

const renderIcon = function (icon) {
    switch (icon) {
        case 'bold':
            return <FormatBold />;
        case 'italic':
            return <FormatItalic />;
        case 'underline':
            return <FormatUnderlined />;
        case 'undo':
            return <UndoIcon />;
        case 'redo':
            return <RedoIcon />;
        case 'html':
            return <Code />;
        default:
            break;
    }
    return icon;
}
