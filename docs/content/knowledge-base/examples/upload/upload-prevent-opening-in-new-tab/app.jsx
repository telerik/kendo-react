import * as React from 'react';
import { Upload } from '@progress/kendo-react-upload';

const App = () => {
    React.useEffect(() => {
        const handleDragOver = (event) => {
            event.preventDefault();
        };

        const handleDrop = (event) => {
            event.preventDefault();
        };

        window.addEventListener('dragover', handleDragOver);
        window.addEventListener('drop', handleDrop);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('dragover', handleDragOver);
            window.removeEventListener('drop', handleDrop);
        };
    }, []);

    return (
        <Upload
            batch={false}
            multiple={true}
            defaultFiles={[]}
            withCredentials={false}
            saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
            removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
        />
    );
};

export default App;
