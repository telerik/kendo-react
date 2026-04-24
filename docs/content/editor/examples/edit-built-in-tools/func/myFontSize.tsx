import * as React from 'react';
import { EditorTools, EditorToolsSettings } from '@progress/kendo-react-editor';

const fontSizeToolSettings: EditorToolsSettings.StyleDropDownListSettings = {
    ...EditorToolsSettings.fontSize,
    items: [
        { text: '10', value: '10pt' },
        { text: '12', value: '12pt' },
        { text: '14', value: '14pt' },
        { text: '18', value: '18pt' },
        { text: '22', value: '22pt' },
        { text: '36', value: '36pt' }
    ]
};

// Creates custom FontSize tool.
const CustomFontSize = EditorTools.createStyleDropDownList(fontSizeToolSettings);

// Styles the FontSize tool (DropDownList).
const MyFontSizeTool = (props) => (
    <CustomFontSize
        {...props}
        style={{
            width: '110px',
            ...props.style
        }}
    />
);

export default MyFontSizeTool;
