import * as React from 'react';
import { Upload } from '@progress/kendo-react-upload';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [isDisabled, setIsDisabled] = React.useState(true);

    const onClick = () => {
        setIsDisabled(!isDisabled);
    };

    return (
        <div>
            <Button style={{ marginBottom: 10 }} onClick={onClick} type="button">
                Toggle Disabled
            </Button>
            <Upload
                batch={false}
                multiple={true}
                defaultFiles={[]}
                disabled={isDisabled}
                withCredentials={false}
                saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
                removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
            />
        </div>
    );
};

export default App;
