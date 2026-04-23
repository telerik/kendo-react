import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Reveal } from '@progress/kendo-react-animation';

import './styles.css';

const App = () => {
    const [show, setShow] = React.useState(true);
    const [index, setIndex] = React.useState<number>(0);

    const onClick = () => {
        setShow(!show);
        setIndex(show ? index + 1 : index);
    };

    const children = show ? (
        <div className="animated-box">
            <h3>Custom Child Style</h3>
            <p>Each toggle alternates between two gradient themes.</p>
        </div>
    ) : null;

    const childStyle =
        index % 2 === 0
            ? {
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white'
              }
            : {
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  color: 'white'
              };

    return (
        <div className="animation-demo">
            <Button className="demo-button" onClick={onClick}>
                Toggle Animation
            </Button>
            <Reveal componentChildClassName="custom-child" componentChildStyle={childStyle}>
                {children}
            </Reveal>
        </div>
    );
};

export default App;
