import * as React from 'react';

import { EditorToolsSettings, EditorTools } from '@progress/kendo-react-editor';

const { ForeColor, FontName, FontSize } = EditorTools;

const CustomFontSize = (props: EditorTools.FontSizeProps) => {
    const defaultValue = EditorToolsSettings.fontSize.items.find((i) => i.value === 'medium');
    return <FontSize {...props} defaultValue={defaultValue} />;
};

const CustomFontFamily = (props: EditorTools.FontNameProps) => {
    const defaultValue = EditorToolsSettings.fontName.items.find((i) => i.text === 'Arial');
    return <FontName {...props} defaultValue={defaultValue} />;
};

const CustomForeColor = (props: EditorTools.ForeColorProps) => (
    <ForeColor {...props} colorPickerProps={{ defaultValue: '#c45a11' }} />
);

export { CustomFontSize, CustomFontFamily, CustomForeColor };
