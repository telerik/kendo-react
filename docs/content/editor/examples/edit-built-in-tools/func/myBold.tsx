import { EditorToolsSettings, EditorTools } from '@progress/kendo-react-editor';

const customBoldSettings: EditorToolsSettings.InlineFormatSettings = {
    // Toggle the 'B' tag.
    mark: 'b',

    // Recognize the 'STRONG' tag also as Bold.
    altMarks: ['strong'],

    props: {
        title: 'My Custom Bold',
        svgIcon: EditorToolsSettings.bold.props.svgIcon
    },
    messages: {}
};

const MyBold = EditorTools.createInlineFormatTool(customBoldSettings);

export default MyBold;
