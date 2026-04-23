import * as React from 'react';

import { Skeleton } from '@progress/kendo-react-indicators';


const App = () => {
    return (
      <div className="example">
        <div className="example-wrap">
          <div className='row'>
            <div className='col-2'>
              <div>Text</div>
            </div>
            <div className='col-10'>
              <Skeleton shape="text" style={{ width: 300 }} />
            </div>
          </div>
          <div className='row'>
            <div className='col-2'>
              <div>Circle</div>
            </div>
            <div className='col-10'>
              <Skeleton shape="circle" style={{ width: 50, height: 50 }} />
            </div>
          </div>
          <div className='row'>
            <div className='col-2'>
              <div>Rectangle</div>
            </div>
            <div className='col-10'>
              <Skeleton shape="rectangle" style={{ width: 300, height: 100 }} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
