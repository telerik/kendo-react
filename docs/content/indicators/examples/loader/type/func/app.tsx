import * as React from 'react';

import { Loader } from '@progress/kendo-react-indicators';


const App = () => {
    return (
    <div className='row col-6'>
      <div className='col-4'>
        <Loader type="pulsing" />
      </div>
      <div className='col-4'>
        <Loader type="infinite-spinner" />
      </div>
      <div className='col-4'>
        <Loader type="converging-spinner" />
      </div>
    </div>
    );
}

export default App;
