import * as React from 'react';

import { Animation } from '@progress/kendo-react-animation';
import { Button } from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
    const [show, setShow] = React.useState<boolean>(true);

    const onClick = () => {
        setShow(!show);
    };

    const children = show ? <div className="content">CONTENT</div> : null;

    return (
        <div>
            <dl>
                <dt>Slide:</dt>
                <dd>
                    <Button type="button" onClick={onClick}>
                        Animate
                    </Button>
                </dd>
            </dl>

            <Animation transitionName="custom-animation" transitionExitDuration={300} enter={false}>
                {children}
            </Animation>
        </div>
    );
};

export default App;
