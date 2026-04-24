import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@progress/kendo-react-buttons';
import { Window } from '@progress/kendo-react-dialogs';
import { Upload, UploadFileInfo } from '@progress/kendo-react-upload';
import { TabStrip, TabStripTab, TabStripSelectEventArguments } from '@progress/kendo-react-layout';
import { EditorUtils } from '@progress/kendo-react-editor';
import { Label } from '@progress/kendo-react-labels';
import { insertImageFiles } from './utils';
import { TextBox } from '@progress/kendo-react-inputs';

export const InsertImageDialog = (props) => {
    const [selected, setSelected] = React.useState(0);
    const [files, setFiles] = React.useState([]);

    let src;
    let altText;
    let title;
    let width;
    let height;

    const onTabSelect = (event: TabStripSelectEventArguments) => {
        setFiles([]);
        setSelected(event.selected);
    };

    const onClose = () => {
        props.onClose.call(undefined);
    };

    const onAddFiles = (event) => {
        setFiles(
            event.newState.map((f: UploadFileInfo) => f.getRawFile && f.getRawFile()).filter((f: UploadFileInfo) => f)
        );
    };

    const onInsert = () => {
        const { view, imageNode } = props;
        const nodes = view.state.schema.nodes;
        const nodeType = nodes[imageNode];
        const position = null;
        const data = {
            src: src ? src.value : null,
            title: title ? title.value : null,
            alt: altText ? altText.value : null,
            width: width ? width.value : null,
            height: height ? height.value : null
        };

        const attrs = Object.keys(data)
            .filter((key) => data[key] !== null && data[key] !== '')
            .reduce((acc, curr) => Object.assign(acc, { [curr]: data[curr] }), {});

        if (files.length) {
            insertImageFiles({ view, files, nodeType, position, attrs });
        } else {
            const newImage = nodeType.createAndFill(attrs);
            EditorUtils.insertNode(view, newImage, true);
        }

        view.focus();
        onClose();
    };

    const { view, imageNode } = props;
    const state = view && view.state;

    let attrs: any = {};

    if (state && state.selection.node && state.selection.node.type === state.schema.nodes[imageNode]) {
        attrs = state.selection.node.attrs;
    }

    const fields = (
        <React.Fragment>
            <div className="k-edit-label">
                <Label editorId="k-editor-image-alt">Alternate text</Label>
            </div>
            <div className="k-edit-field">
                <TextBox
                    id="k-editor-image-alt"
                    defaultValue={attrs.alt}
                    ref={(e) => {
                        altText = e;
                    }}
                />
            </div>
            <div className="k-edit-label">
                <Label editorId="k-editor-image-title">Title</Label>
            </div>
            <div className="k-edit-field">
                <TextBox
                    id="k-editor-image-title"
                    defaultValue={attrs.title}
                    ref={(e) => {
                        title = e;
                    }}
                />
            </div>
            <div className="k-edit-label">
                <Label editorId="k-editor-image-width">Width (px)</Label>
            </div>
            <div className="k-edit-field">
                <TextBox
                    id="k-editor-image-width"
                    defaultValue={attrs.width}
                    ref={(e) => {
                        width = e;
                    }}
                />
            </div>
            <div className="k-edit-label">
                <Label editorId="k-editor-image-height">Height (px)</Label>
            </div>
            <div className="k-edit-field">
                <TextBox
                    id="k-editor-image-height"
                    defaultValue={attrs.height}
                    ref={(e) => {
                        height = e;
                    }}
                />
            </div>
        </React.Fragment>
    );

    const buttons = (
        <div className={'text-right'} style={{ clear: 'both' }}>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onInsert} themeColor={'primary'}>
                Insert
            </Button>
        </div>
    );

    return ReactDOM.createPortal(
        <Window title="Insert Image" onClose={onClose} initialWidth={500} initialHeight={480}>
            <TabStrip selected={selected} onSelect={onTabSelect} animation={false}>
                {Object.entries(attrs).length === 0 && (
                    <TabStripTab title="Upload">
                        <div className="k-edit-form-container pt-3 pb-3">
                            <div className="k-edit-label">
                                <Label editorId="k-editor-image-width">Image</Label>
                            </div>
                            <div className="k-edit-field">
                                <Upload
                                    batch={false}
                                    multiple={true}
                                    defaultFiles={[]}
                                    withCredentials={false}
                                    saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
                                    removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
                                    onAdd={onAddFiles}
                                />
                            </div>
                            {fields}
                            {buttons}
                        </div>
                    </TabStripTab>
                )}
                <TabStripTab title="By URL">
                    <div className="k-edit-form-container pt-3 pb-3">
                        <div className="k-edit-label">
                            <Label editorId="k-editor-image-url">Web address</Label>
                        </div>
                        <div className="k-edit-field">
                            <TextBox
                                id="k-editor-image-url"
                                defaultValue={attrs.src}
                                disabled={/^data:image/.test(attrs.src || '')}
                                ref={(e) => {
                                    src = e;
                                }}
                                autoFocus={true}
                            />
                        </div>
                        {fields}
                        {buttons}
                    </div>
                </TabStripTab>
            </TabStrip>
            <style>{`.k-dropzone { width: 100%; }`}</style>
        </Window>,
        document.body
    );
};
