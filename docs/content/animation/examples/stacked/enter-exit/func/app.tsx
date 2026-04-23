import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Zoom } from '@progress/kendo-react-animation';

import './styles.css';

const App = () => {
    const [index, setIndex] = React.useState<number>(1);

    const onClick = () => {
        setIndex(index + 1);
    };

    return (
        <div>
            <dl>
                <dt>Zoom:</dt>
                <dd>
                    <Button type="button" onClick={onClick}>
                        Animate
                    </Button>
                </dd>
            </dl>

            <Zoom stackChildren={true}>
                <div className="content" key={index}>
                    {index}
                </div>
            </Zoom>
        </div>
    );
};

export default App;
