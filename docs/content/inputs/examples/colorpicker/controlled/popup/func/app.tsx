import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOnClick = () => setOpen(!open);

    return (
        <div className="row">
            <div className="col-xs-12 col-md-6 example-col">
                <p>Controlled ColorPicker</p>
                <ColorPicker views={['gradient', 'palette']} open={open} />
                &nbsp;
                <Button type="button" onClick={handleOnClick} themeColor={'primary'}>
                    Toggle
                </Button>
            </div>
            <div className="col-xs-12 col-md-6 example-col">
                <p>Always shown</p>
                <ColorPicker views={['gradient', 'palette']} open={true} />
            </div>
        </div>
    );
};

export default App;
