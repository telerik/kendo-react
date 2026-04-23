import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Expand } from '@progress/kendo-react-animation';

import './styles.css';

const App = () => {
    const [show, setShow] = React.useState(true);

    const onClick = () => {
        setShow(!show);
    };

    const children = show ? (
        <div className="animated-box">
            <h3>Welcome!</h3>
            <p>This box uses default CSS classes for styling.</p>
        </div>
    ) : null;

    return (
        <div className="animation-demo">
            <Button className="demo-button" onClick={onClick}>
                Toggle Animation
            </Button>
            <Expand>{children}</Expand>
        </div>
    );
};

export default App;
