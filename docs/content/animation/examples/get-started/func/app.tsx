import * as React from 'react';
import { Reveal } from '@progress/kendo-react-animation';
import './styles.css';

const App = () => {
    const [index, setIndex] = React.useState<number>(new Date().getSeconds());

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(new Date().getSeconds());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="example-wrapper-center">
            <Reveal>
                <div className="content" key={index}>
                    {index}
                </div>
            </Reveal>
        </div>
    );
};

export default App;
