import * as React from 'react';

import { Loader } from '@progress/kendo-react-indicators';


const App = () => {
    return (
    <div className='row col-6'>
      <div className='col-4'>
        <Loader size='small' />
      </div>
      <div className='col-4'>
        <Loader size='medium' />
      </div>
      <div className='col-4'>
        <Loader size='large' />
      </div>
    </div>
    );
}

export default App;
