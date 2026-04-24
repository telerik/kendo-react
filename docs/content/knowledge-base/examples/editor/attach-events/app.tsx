import React, { useState, useCallback } from 'react';
import { Editor, EditorTools, ProseMirror } from '@progress/kendo-react-editor';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import { Popup } from '@progress/kendo-react-popup';

const { Bold, Italic, Underline } = EditorTools;

const App = () => {
    const [show, setShow] = useState(false);
    const [offset, setOffset] = useState<{ left: number; top: number } | undefined>(undefined);

    const onContextMenu = useCallback((_view: any, domEvent: any) => {
        domEvent.preventDefault();
        setShow(true);
        setOffset({ left: domEvent.clientX + 2, top: domEvent.clientY });
    }, []);

    const onContextMenuClose = useCallback(() => {
        setShow(false);
    }, []);

    const onMount = useCallback(
        (event: any) =>
            new ProseMirror.EditorView(
                { mount: event.dom },
                {
                    ...event.viewProps,
                    handleDOMEvents: {
                        ...(event.viewProps.handleDOMEvents || {}),
                        contextmenu: onContextMenu,
                        click: onContextMenuClose,
                        blur: onContextMenuClose
                    }
                }
            ),
        [onContextMenu, onContextMenuClose]
    );

    return (
        <div>
            <Popup show={show} offset={offset}>
                <Menu vertical={true} style={{ display: 'inline-block' }}>
                    <MenuItem text="Item1">
                        <MenuItem text="Item1.1" />
                        <MenuItem text="Item1.2">
                            <MenuItem text="Item1.2.1" />
                            <MenuItem text="Item1.2.2" />
                        </MenuItem>
                    </MenuItem>
                    <MenuItem text="Item2">
                        <MenuItem text="Item2.1" />
                        <MenuItem text="Item2.2" />
                    </MenuItem>
                    <MenuItem text="Item3" />
                </Menu>
            </Popup>
            <Editor
                defaultEditMode="div"
                tools={[[Bold, Italic, Underline]]}
                contentStyle={{ height: 220 }}
                defaultContent="<p>Context menu event example</p>"
                onMount={onMount}
            />
        </div>
    );
};

export default App;
