import { EditorTools } from '@progress/kendo-react-editor';

const colorToolSettings = {
    style: 'color',
    defaultItem: { text: 'No Color', value: '' },
    items: [
        { text: 'Red', value: '#ff0000' },
        { text: 'Green', value: '#00ff00' },
        { text: 'Blue', value: '#0000ff' }
    ]
};

const MyColorTool = EditorTools.createStyleDropDownList(colorToolSettings);

export default MyColorTool;
