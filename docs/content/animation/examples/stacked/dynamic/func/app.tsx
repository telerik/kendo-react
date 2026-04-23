import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

import { Push } from '@progress/kendo-react-animation';

import './styles.css';

const App = () => {
    const [index, setIndex] = React.useState<number>(1);

    const onClick = () => {
        setIndex(index + 1);
    };

    const style = { fontSize: 10 + index * 2 };

    return (
        <div>
            <dl>
                <dt>Push:</dt>
                <dd>
                    <Button type="button" onClick={onClick}>
                        Animate
                    </Button>
                </dd>
            </dl>

            <Push stackChildren={true}>
                <div style={style} className="content" key={index}>
                    {index}
                </div>
            </Push>
        </div>
    );
};

export default App;
