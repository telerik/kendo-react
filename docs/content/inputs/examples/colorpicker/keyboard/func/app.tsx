import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    const colorPickerRef = React.useRef<any>(null);
    const value: string = 'rgba(237, 126, 50, 1)';

    React.useEffect(() => {
        if (colorPickerRef.current) {
            colorPickerRef.current.focus();
        }
    });

    return (
        <div>
            <ColorPicker ref={colorPickerRef} defaultValue={value} views={['gradient', 'palette']} />
            <p>
                (use Alt+<code>↓</code> to open the popup, <code>←↓↑→</code> to navigate, <code>enter</code> to select
                the value)
            </p>
        </div>
    );
};
export default App;
