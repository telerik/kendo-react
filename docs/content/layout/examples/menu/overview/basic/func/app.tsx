import * as React from 'react';
import { flushSync } from 'react-dom';
import { Menu, ContextMenu, MenuSelectEvent, MenuItemModel } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { Offset } from '@progress/kendo-react-popup';
import {
    SVGIcon,
    folderIcon,
    fileIcon,
    imageIcon,
    filePdfIcon,
    fileExcelIcon,
    fileTxtIcon,
    pencilIcon,
    trashIcon,
    copyIcon,
    clipboardIcon,
    downloadIcon,
    infoCircleIcon,
    undoIcon,
    redoIcon,
    zoomInIcon,
    zoomOutIcon,
    gearsIcon
} from '@progress/kendo-svg-icons';
import './styles.css';

interface FileItem {
    name: string;
    svgIcon: SVGIcon;
}

const menuItems: MenuItemModel[] = [
    {
        text: 'File',
        items: [
            { text: 'New Folder', svgIcon: folderIcon },
            { text: 'New File', svgIcon: fileIcon },
            { separator: true },
            { text: 'Import...', svgIcon: downloadIcon },
            { separator: true },
            { text: 'Properties', svgIcon: infoCircleIcon }
        ]
    },
    {
        text: 'Edit',
        items: [
            { text: 'Undo', svgIcon: undoIcon },
            { text: 'Redo', svgIcon: redoIcon },
            { separator: true },
            { text: 'Copy', svgIcon: copyIcon },
            { text: 'Paste', svgIcon: clipboardIcon },
            { text: 'Rename', svgIcon: pencilIcon },
            { separator: true },
            { text: 'Delete', svgIcon: trashIcon }
        ]
    },
    {
        text: 'View',
        items: [
            { text: 'Zoom In', svgIcon: zoomInIcon },
            { text: 'Zoom Out', svgIcon: zoomOutIcon },
            { separator: true },
            { text: 'Show Hidden Files' },
            { text: 'Sort by Name' },
            { text: 'Sort by Date' }
        ]
    },
    {
        text: 'Tools',
        items: [{ text: 'Preferences', svgIcon: gearsIcon }]
    }
];

const contextMenuItems: MenuItemModel[] = [
    { text: 'Open', svgIcon: folderIcon },
    { text: 'Rename', svgIcon: pencilIcon },
    { separator: true },
    { text: 'Copy', svgIcon: copyIcon },
    { text: 'Download', svgIcon: downloadIcon },
    { separator: true },
    { text: 'Delete', svgIcon: trashIcon }
];

const files: FileItem[] = [
    { name: 'Documents', svgIcon: folderIcon },
    { name: 'Photos', svgIcon: folderIcon },
    { name: 'Projects', svgIcon: folderIcon },
    { name: 'report.pdf', svgIcon: filePdfIcon },
    { name: 'budget.xlsx', svgIcon: fileExcelIcon },
    { name: 'notes.txt', svgIcon: fileTxtIcon },
    { name: 'banner.png', svgIcon: imageIcon },
    { name: 'readme.md', svgIcon: fileTxtIcon }
];

const App = () => {
    const [show, setShow] = React.useState<boolean>(false);
    const [selectedFile, setSelectedFile] = React.useState<string>('');
    const [offset, setOffset] = React.useState<Offset>({ left: 0, top: 0 });

    const handleFileContextMenu = (event: React.MouseEvent, fileName: string) => {
        event.preventDefault();
        flushSync(() => setShow(false));
        setOffset({ left: event.pageX, top: event.pageY });
        setSelectedFile(fileName);
        setShow(true);
    };

    const handleContextSelect = (event: MenuSelectEvent) => {
        setSelectedFile(`${event.item.text} → ${selectedFile}`);
        setShow(false);
    };

    const handleMenuSelect = (event: MenuSelectEvent) => {
        setSelectedFile(event.item.text || '');
    };

    return (
        <div className="demo-container">
            <div className="app-window">
                <div className="window-titlebar">
                    <span className="window-dot window-dot-close" />
                    <span className="window-dot window-dot-min" />
                    <span className="window-dot window-dot-max" />
                    <span className="window-title">Files</span>
                </div>

                <Menu items={menuItems} onSelect={handleMenuSelect} />

                <div className="file-grid">
                    {files.map((file) => (
                        <div
                            key={file.name}
                            className="file-tile"
                            onContextMenu={(event) => handleFileContextMenu(event, file.name)}
                        >
                            <span className="file-icon">
                                <SvgIcon icon={file.svgIcon} size="xlarge" />
                            </span>
                            <span className="file-name">{file.name}</span>
                        </div>
                    ))}
                    <p className="hint">Right-click any file or folder to open the context menu</p>
                </div>

                <div className="status-bar">
                    {selectedFile ? `Last action: ${selectedFile}` : `${files.length} items`}
                </div>
            </div>

            <ContextMenu
                show={show}
                offset={offset}
                items={contextMenuItems}
                onSelect={handleContextSelect}
                onClose={() => setShow(false)}
            />
        </div>
    );
};

export default App;
