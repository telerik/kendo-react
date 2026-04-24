import React from 'react';
import { EditorTools } from '@progress/kendo-react-editor';

const fontSizeToolSettings = {
    style: 'font-size',
    defaultItem: { text: 'Unset', value: '' },
    items: [
        { text: '10', value: '10pt' },
        { text: '12', value: '12pt' },
        { text: '14', value: '14pt' },
        { text: '18', value: '18pt' },
        { text: '22', value: '22pt' },
        { text: '36', value: '36pt' }
    ]
};

const MyFontSizeTool = EditorTools.createStyleDropDownList(fontSizeToolSettings);

export const CustomFontSize = (props: any) => (
    <MyFontSizeTool
        {...props}
        style={{
            width: '100px',
            fontSize: '10px',
            height: '36px',
            ...props.style
        }}
    />
);
