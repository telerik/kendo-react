import * as React from 'react';
import { Editor, EditorPasteEvent, EditorTools, EditorUtils, PasteCleanupSettings } from '@progress/kendo-react-editor';

const { Bold, Italic, Underline, Undo, Redo } = EditorTools;
const { pasteCleanup, sanitize, sanitizeClassAttr, sanitizeStyleAttr, removeAttribute, replaceImageSourcesFromRtf } =
    EditorUtils;
const pasteSettings: PasteCleanupSettings = {
    convertMsLists: true,
    // stripTags: 'span|font'
    attributes: {
        class: sanitizeClassAttr,
        style: sanitizeStyleAttr,

        // keep `width`, `height` and `src` attributes
        width: () => {},
        height: () => {},
        src: () => {},

        // Removes `lang` attribute
        // lang: removeAttribute,

        // removes other (unspecified above) attributes
        '*': removeAttribute
    }
};

const App = () => {
    return (
        <Editor
            onPasteHtml={(event: EditorPasteEvent) => {
                let html = pasteCleanup(sanitize(event.pastedHtml), pasteSettings);

                // If the pasted HTML contains images with sources pointing to the local file system,
                // `replaceImageSourcesFromRtf` will extract the sources from the RTF and place them to images 'src' attribute in base64 format.
                if (event.nativeEvent.clipboardData) {
                    html = replaceImageSourcesFromRtf(html, event.nativeEvent.clipboardData);
                }

                return html;
            }}
            contentStyle={{ height: 320 }}
            tools={[
                [Bold, Italic, Underline],
                [Undo, Redo]
            ]}
        />
    );
};

export default App;
