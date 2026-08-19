import * as React from 'react';
import { ContextMenu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';
import { Offset } from '@progress/kendo-react-popup';
import { copyIcon, cutIcon, clipboardIcon, trashIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const [show, setShow] = React.useState(false);
    const offset = React.useRef<Offset>({ left: 0, top: 0 });

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        offset.current = { left: e.pageX, top: e.pageY };
        setShow(true);
    };

    const handleSelect = (e: MenuSelectEvent) => {
        setShow(false);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                borderRadius: 8,
                background: '#f6f6f6',
                boxShadow: '0 1px 5px 0 rgb(0 0 0 / 12%)'
            }}
            onContextMenu={handleContextMenu}
        >
            <p style={{ color: '#656565', fontSize: 16 }}>Right-click to open the Context Menu</p>

            <ContextMenu show={show} offset={offset.current} onSelect={handleSelect} onClose={() => setShow(false)}>
                <MenuItem text="Cut" svgIcon={cutIcon} />
                <MenuItem text="Copy" svgIcon={copyIcon} />
                <MenuItem text="Paste" svgIcon={clipboardIcon} />
                <MenuItem text="Delete" svgIcon={trashIcon} />
            </ContextMenu>
        </div>
    );
};

export default App;
