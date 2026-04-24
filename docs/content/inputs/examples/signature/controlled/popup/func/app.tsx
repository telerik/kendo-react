import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Signature } from '@progress/kendo-react-inputs';


const App = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    const toggleOpen = () => setOpen(!open);

    return (
    <div className="row">
      <div className="col-xs-12 col-md-6 example-col">
        <p>Controlled Signature</p>
        <p>
          <Button onClick={toggleOpen} themeColor='primary'>Open</Button>
        </p>
        <Signature
          open={open}
          onOpen={toggleOpen}
          onClose={toggleOpen}
          popupScale={2}
        />
      </div>
    </div>
    );
};

export default App;
