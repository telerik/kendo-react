import { ProseMirror } from '@progress/kendo-react-editor';

export const insertImagePlugin = (onInsert) =>
    new ProseMirror.Plugin({
        props: {
            handleDOMEvents: {
                paste: (view, event) => insertImages(view, event, onInsert),
                drop: (view, event) => insertImages(view, event, onInsert)
            }
        },
        key: new ProseMirror.PluginKey('insert-image-plugin')
    });

const insertImages = (view, event, onInsert) => {
    const items =
        (event.clipboardData && event.clipboardData.items) || (event.dataTransfer && event.dataTransfer.files);
    if (items) {
        const files: Array<any> = [];
        let file: any;
        for (let i = 0; i < items.length; i++) {
            file =
                items[i].type.indexOf('image') !== -1
                    ? 'getAsFile' in items[i]
                        ? items[i].getAsFile()
                        : items[i]
                    : null;
            if (file) {
                files.push(file);
            }
        }

        if (files.length) {
            event.preventDefault();
        }

        return onInsert({ view, files, event });
    }
};
