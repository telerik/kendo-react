import * as React from 'react';
import { ContextMenu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';
import { Offset } from '@progress/kendo-react-popup';
import {
    alignCenterIcon,
    alignLeftIcon,
    alignRightIcon,
    boldIcon,
    clipboardIcon,
    cloudIcon,
    copyIcon,
    cutIcon,
    editToolsIcon,
    italicIcon,
    underlineIcon,
} from '@progress/kendo-svg-icons';

const App = () => {
    const [show, setShow] = React.useState<boolean>(false);
    const [content, setContent] = React.useState<string>('flex-start');
    const offset = React.useRef<Offset>({ left: 0, top: 0 });
    const [fontStyle, setFontStyle] = React.useState<string>('');
    const [bold, setBold] = React.useState<string>('');
    const [textDecoration, setTextDecoration] = React.useState<string>('');

    const handleContextMenu = (e: React.MouseEvent) => {
        offset.current = { left: e.pageX, top: e.pageY };

        e.preventDefault();
        setShow(true);

    };

    const handleOnSelect = (e: MenuSelectEvent) => {
        if (e.item.data && e.item.data.action) {
            switch (e.item.data.action) {
                case "left":
                    setContent("flex-start");
                    break;
                case "right":
                    setContent("flex-end");
                    break;
                case "center":
                    setContent("center");
                    break;
                case "italic":
                    setFontStyle("italic");
                    break;
                case "underline":
                    setTextDecoration("underline");
                    break;
                case "bold":
                    setBold("bold");
                    break;
                default:
            }
        }
        setShow(false);
    };

    const handleOnClose = () => {
        setShow(false);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: `${content}`

        }} onContextMenu={handleContextMenu}>
            <div className="target"
                style={{
                    borderRadius: 5,
                    height: 100,
                    width: 400,
                    backgroundColor: '#f6f6f6',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 1px 5px 0 rgb(0 0 0 / 26%), 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 8%)'
                }}
            >
                <p className="placeholder"
                    style={{
                        fontSize: 20,
                        color: '#656565',
                        fontStyle: `${fontStyle}`,
                        fontWeight: `${bold}`,
                        textDecoration: `${textDecoration}`
                    }}

                >Right-click to open Context menu</p>
            </div>
            <ContextMenu
                vertical={true}
                onSelect={handleOnSelect}
                onClose={handleOnClose}
                show={show}
                offset={offset.current}
            >
                <MenuItem text="Cut" svgIcon={cutIcon} />
                <MenuItem text="Copy" svgIcon={copyIcon} />
                <MenuItem text="Paste" svgIcon={clipboardIcon} />
                <MenuItem text="Alignment" svgIcon={alignLeftIcon}>
                    <MenuItem text="Align Left" svgIcon={alignLeftIcon} data={{ action: 'left' }} />
                    <MenuItem text="Align Center" svgIcon={alignCenterIcon} data={{ action: 'center' }} />
                    <MenuItem text="Align Right" svgIcon={alignRightIcon} data={{ action: 'right' }} />
                </MenuItem>
                <MenuItem text="Style" svgIcon={editToolsIcon}>
                    <MenuItem text="Bold" svgIcon={boldIcon} data={{ action: 'bold' }} />
                    <MenuItem text="Italic" svgIcon={italicIcon} data={{ action: 'italic' }} />
                    <MenuItem text="Underline" svgIcon={underlineIcon} data={{ action: 'underline' }} />
                </MenuItem>
                <MenuItem text="Miscellaneous" svgIcon={cloudIcon} disabled={true} />
            </ContextMenu>
        </div>
    );
};
export default App;
