import * as React from 'react';
import { Ripple } from '@progress/kendo-react-ripple';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    return (
    <div className="example-wrapper-center">
      <Ripple>
        <Button type="button" className="mt-3 mb-1">Click Me</Button>
      </Ripple>
    </div>
    );
};

export default App;
