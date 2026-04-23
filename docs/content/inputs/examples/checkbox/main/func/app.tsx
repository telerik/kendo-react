import * as React from 'react';

import { Checkbox } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="d-flex flex-wrap justify-content-center gap-container">
                        <Checkbox defaultChecked={true} />
                        <Checkbox disabled={true} defaultChecked={true} />
                        <Checkbox value={null} defaultChecked={true} disabled={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
