import * as React from 'react';
import { Loader } from '@progress/kendo-react-indicators';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [loaderVisible, setLoaderVisible] = React.useState(false);

    const handleClick = () => setLoaderVisible((prev) => !prev);

    return (
        <div style={{ padding: '20px' }}>
            <Button onClick={handleClick}>
                {loaderVisible && <Loader size="small" />}
                {loaderVisible ? 'Hide Loader' : 'Show Loader'}
            </Button>
            <style>{`.k-button .k-loader { margin-right: 8px; }`}</style>
        </div>
    );
};

export default App;
