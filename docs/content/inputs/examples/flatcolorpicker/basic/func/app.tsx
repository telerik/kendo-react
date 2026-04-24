import * as React from 'react';

import { FlatColorPicker, FlatColorPickerChangeEvent } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    const [value, setValue] = React.useState<string | undefined>('#84cef2');
    const onChange = React.useCallback((event: FlatColorPickerChangeEvent) => {
        setValue(event.value);
    }, []);

    return (
        <div className="clothes-demo card-container">
            <div className="k-card custom-card">
                <div className="card-row">
                    <div className="card-column no-flex">
                        <div className="image-container" style={{ background: value }}>
                            <div className="k-skeleton"></div>
                            <div className="kendoka" />
                        </div>
                    </div>
                    <div className="card-column">
                        <h4 className="k-h4">T-shirt Design</h4>
                        <div className="component-container">
                            <p>Choose color:</p>
                            <FlatColorPicker value={value} onChange={onChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
