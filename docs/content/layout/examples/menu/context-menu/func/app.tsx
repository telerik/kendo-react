
import * as React from 'react';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import { Offset, Popup } from '@progress/kendo-react-popup';

const App = () => {
    const offSet = React.useRef<Offset>({left: 0, top: 0});
    const [show, setShow] = React.useState(false);

    const handleContextMenu = (e) => {
        e.preventDefault();
        offSet.current = { left: e.clientX, top: e.clientY };
        setShow(true);
    }

    React.useEffect(()=>{
        document.addEventListener('click', () => {
            if(show){
                setShow(false);
            }
        })
    },[show])

    return (
    <div>
      <div style={{
              width: 300,
              height: 200,
              backgroundColor: "#5392e4",
              justifyContent: "center",
              display: "flex",
              position: "absolute",
              alignItems: "center"
          }}
        onContextMenu={handleContextMenu}>
        <p>Right click here to open Context menu</p>
      </div>
      <Popup show={show} offset={offSet.current}>
        <Menu vertical={true} style={{ display: 'inline-block' }}
>
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
    </div>
    );
}

export default App;
