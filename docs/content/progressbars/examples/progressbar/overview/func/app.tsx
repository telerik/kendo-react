import * as React from 'react'

import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const { value, start, stop, reset } = useInterval(0, 50);

    return (
    <div>
      <div className="text-center">
        <Button type="button" themeColor={'primary'} onClick={start}>start</Button>
        <Button type="button" onClick={stop}>stop</Button>
        <Button type="button" onClick={reset}>reset</Button>
      </div>
      <br />
      <div className="text-center">
        <ProgressBar value={value} />
      </div>
    </div>
    );
};

function useInterval(initialValue, ms) {
    const [value, setValue] = React.useState(initialValue);
    const intervalRef = React.useRef<any>(null);
    let val = 0;

    const start = React.useCallback(() => {
        if (intervalRef.current !== null) {
            return;
        }

        intervalRef.current = setInterval(() => {
            if (val < 100) {
                setValue(v => v + 1);
                val = val + 1;
            }
        }, ms);
    }, []);
    const stop = React.useCallback(() => {
        if (intervalRef.current === null) {
            return;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);
    const reset = React.useCallback(() => {
        setValue(0);
        val = 0;
    }, []);
    return { value, start, stop, reset };
}

export default App;
