import * as React from 'react';

import { ChunkProgressBar } from '@progress/kendo-react-progressbars';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const { value, start, stop, reset } = useInterval(0, 50);

    return (
        <div>
            <div
                style={{
                    marginBottom: '20px',
                    padding: '15px',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '4px'
                }}
            >
                Use the start/stop/reset buttons below to control the progress bar animation
            </div>

            <div className="text-center">
                <Button type="button" onClick={start} themeColor={'primary'} style={{ marginRight: '15px' }}>
                    start
                </Button>
                <Button type="button" onClick={stop} style={{ marginRight: '15px' }}>
                    stop
                </Button>
                <Button type="button" onClick={reset}>
                    reset
                </Button>
            </div>

            <br />
            <div className="text-center">
                <ChunkProgressBar value={value} />
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
                setValue((v) => v + 1);
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
