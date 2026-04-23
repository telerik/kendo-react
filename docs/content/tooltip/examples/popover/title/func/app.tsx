import * as React from 'react';
import { Popover } from '@progress/kendo-react-tooltip';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { Checkbox } from '@progress/kendo-react-inputs';
const CustomTitle = () => {
    return (<em>This is custom title component</em>);
};

const App = () => {
    const anchor = React.useRef<ButtonHandle>(null);
    const [show, setShow] = React.useState(false);
    const [showTitle, setShowTitle] = React.useState(true);

    const onTitleShowChange = React.useCallback(
        (e) => {
            setShowTitle(e.value);
        },
        []
    );

    React.useEffect(() => {
        setShow(true);
    }, []);

    return (
    <div>
      <div className="example-config">
        <Checkbox
          label={'Hide Title'}
          value={showTitle}
          onChange={onTitleShowChange}
        />
      </div>
      <Button style={{left: 100}} onClick={() => setShow(!show)} ref={anchor}>
        {show ? "Hide" : "Show"}
      </Button>
      <Popover
        show={show}
        anchor={anchor.current && anchor.current.element}
        position={'bottom'}
        title={showTitle && <CustomTitle />}
      >
        <div style={{width: 220}}>Popover content.</div>
      </Popover>
    </div>
    );
};


export default App;
