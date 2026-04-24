
import * as React from 'react';
import { ContextMenu, MenuItem } from '@progress/kendo-react-layout';

const App = () => {
    const [show, setShow] = React.useState(false);
    const offset = React.useRef({ left: 0, top: 0 });
    const [color, changeColor] = React.useState('#656565')

    const handleContextMenu = (e) => {
        offset.current = { left: e.pageX, top: e.pageY };

        e.preventDefault();
        setShow(true);

    }

    const handleOnSelect = (e: any) => {
        switch (e.item.data.action) {
            case "changeColor":
                changeColor("red")
                break;
            default:
        }
        setShow(false);
    };


    const handleCloseMenu = () => {
        setShow(false)
    }

    return (
    <div style={{
      display: 'flex'

    }}  onContextMenu={handleContextMenu}>
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
        color: `${color}`
        }}

        >Right-click to open Context menu</p>
      </div>
      <ContextMenu vertical={true}
        onSelect={handleOnSelect}
        onClose={handleCloseMenu}
        show={show}
        offset={offset.current}
        >
        <MenuItem text="Change color" icon="edit-tools" data={{action: "changeColor"}}/>
      </ContextMenu>
    </div>
    );
}

export default App;
