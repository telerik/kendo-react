import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Expand } from '@progress/kendo-react-animation';

import './styles.css';

const App = () => {
    const [show, setShow] = React.useState<boolean>(true);

    const onClick = () => {
        setShow(!show);
    };

    const children = show ? (
        <div className="animated-box">
            <h3>Custom Parent Style</h3>
            <p>The parent container has a custom purple gradient background.</p>
        </div>
    ) : null;

    const parentStyle = show
        ? {
              borderColor: 'purple',
              borderWidth: '3px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }
        : undefined;

    return (
        <div className="animation-demo">
            <Button className="demo-button" onClick={onClick}>
                Toggle Animation
            </Button>
            <Expand className="custom-parent" style={parentStyle}>
                {children}
            </Expand>
        </div>
    );
};

export default App;
