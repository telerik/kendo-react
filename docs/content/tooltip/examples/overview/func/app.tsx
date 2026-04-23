import * as React from 'react';
import { Tooltip, Popover, PopoverActionsBar } from '@progress/kendo-react-tooltip';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    const anchor = React.useRef<ButtonHandle>(null);
    const [show, setShow] = React.useState(false);

    const onClick = React.useCallback(() => {
        setShow(!show);
    }, [setShow, show]);

    const thStyle = {
        color: '#528aae'
    };

    return (
        <>
            <Tooltip anchorElement="target" position="top">
                <div id="agglomerations">
                    <a title="Canton - 26,300,000" id="canton" />
                    <a title="Jakarta - 25,800,000" id="jakarta" />
                    <a title="Mexico City - 23,500,000" id="mexico" />
                    <a title="Delhi - 23,500,000" id="delhi" />
                    <a title="Karachi - 22,100,000" id="karachi" />
                    <a title="New York - 21,500,000" id="newyork" />
                    <a title="Sao Paulo - 21,300,000" id="saopaolo" />
                    <a title="Mumbay/Bombay - 21,100,000" id="bombay" />
                    <a title="Los Angeles - 17,100,000" id="losangeles" />
                    <a title="Osaka - 16,800,000" id="osaka" />
                    <a title="Moscow - 16,200,000" id="moscow" />

                    <Button id="summary-btn" ref={anchor} onClick={onClick}>
                        Summary
                    </Button>
                </div>
            </Tooltip>

            <Popover
                show={show}
                anchor={anchor.current && anchor.current.element}
                title={<em>Top 3 biggest conglomerations:</em>}
            >
                <table style={{ width: '100%' }}>
                    <tr>
                        <th style={thStyle}>Rank</th>
                        <th style={thStyle}>City</th>
                        <th style={thStyle}>Population</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Canton</td>
                        <td>26,300,000</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Jakarta</td>
                        <td>25,800,000</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Mexico City</td>
                        <td>23,500,000</td>
                    </tr>
                </table>
                <PopoverActionsBar>
                    <Button onClick={onClick} fillMode={'flat'}>
                        Close
                    </Button>
                </PopoverActionsBar>
            </Popover>
        </>
    );
};

export default App;
