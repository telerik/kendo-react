import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Fade } from '@progress/kendo-react-animation';

import './styles.css';

const App = () => {
    const [index, setIndex] = React.useState<number>(1);
    const onClick = () => {
        setIndex(index + 1);
    };
    const key = new Date().getTime();
    return (
        <div>
            <dl>
                <dt>Fade element:</dt>
                <dd>
                    <Button type="button" onClick={onClick}>
                        Animate
                    </Button>
                </dd>
            </dl>
            <Fade>
                <div className="content" key={key}>
                    {index}
                </div>
            </Fade>
        </div>
    );
};
export default App;
