import * as React from 'react';
import { EditorUtils } from '@progress/kendo-react-editor';
import { Button } from '@progress/kendo-react-buttons';
import { applyFormatIcon } from '@progress/kendo-svg-icons';

const BackgroundColorTool = (props) => {
    const { view } = props;
    const toolColor = '#00ff00';
    const bgColors = view ? EditorUtils.getInlineStyles(view.state, { name: 'background-color', value: /^.+$/ }) : [];
    const currentBgColor = new Set(bgColors).size === 1 ? bgColors[0] : '';

    const onClick = () => {
        const colorToApply = currentBgColor === toolColor ? '' : toolColor;
        EditorUtils.applyInlineStyle(view, { style: 'background-color', value: colorToApply });
    };

    return (
        <Button
            onClick={onClick}
            togglable={true}
            selected={currentBgColor === toolColor}
            svgIcon={applyFormatIcon}
            style={{ color: toolColor }}
            onMouseDown={(e) => e.preventDefault()}
            onPointerDown={(e) => e.preventDefault()}
        />
    );
};

export default BackgroundColorTool;
