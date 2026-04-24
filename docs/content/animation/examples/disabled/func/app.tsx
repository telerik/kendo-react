import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Slide } from '@progress/kendo-react-animation';
import { Label } from '@progress/kendo-react-labels';
import { Checkbox } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    const [show, setShow] = React.useState(false);
    const [enter, setEnter] = React.useState(true);
    const [exit, setExit] = React.useState(true);

    const onClick = () => {
        setShow(!show);
    };

    const onChange = (e) => {
        if (e.target.name === 'enter') {
            setEnter(e.target.value);
        } else {
            setExit(e.target.value);
        }
    };

    const children = show ? <div className="content">CONTENT</div> : null;

    return (
        <div>
            <dl>
                <dt>
                    <dl>
                        <Checkbox id="enter" name="enter" checked={enter} onChange={onChange} label="Enter" />
                        <Checkbox id="exit" name="exit" checked={exit} onChange={onChange} label="Exit" />
                    </dl>
                </dt>
                <dt>Animate:</dt>
                <dd>
                    <Button type="button" onClick={onClick}>
                        Animate
                    </Button>
                </dd>
            </dl>

            <Slide enter={enter} exit={exit}>
                {children}
            </Slide>
        </div>
    );
};

export default App;
