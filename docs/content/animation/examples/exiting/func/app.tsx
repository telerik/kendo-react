import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Slide } from '@progress/kendo-react-animation';

import './styles.css';

const App = () => {
    const [show, setShow] = React.useState<boolean>(false);

    const onClick = () => {
        setShow(!show);
    };

    const children = show ? <div className="content">CONTENT</div> : null;

    const childFactory = (child) => {
        if (!child.props.in) {
            return React.cloneElement(child, {
                ...child.props,
                children: <div className="content">JUST CHANGED!</div>
            });
        }

        return child;
    };

    return (
        <div className="example">
            <div>
                <dl>
                    <dt>Slide:</dt>
                    <dd>
                        <Button type="button" onClick={onClick}>
                            Animate
                        </Button>
                    </dd>
                </dl>

                <Slide childFactory={childFactory} transitionExitDuration={1500}>
                    {children}
                </Slide>
            </div>
        </div>
    );
};

export default App;
