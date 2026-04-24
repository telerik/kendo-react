import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Zoom } from '@progress/kendo-react-animation';

import './styles.css';

const App = () => {
    const [show, setShow] = React.useState<boolean>(false);

    const onClick = () => {
        setShow(!show);
    };

    const children = show ? <div className="content">CONTENT</div> : null;

    return (
        <div>
            <dl>
                <dt>Animate:</dt>
                <dd>
                    <Button type="button" onClick={onClick}>
                        Animate
                    </Button>
                </dd>
            </dl>

            <Zoom>{children}</Zoom>
        </div>
    );
};

export default App;
