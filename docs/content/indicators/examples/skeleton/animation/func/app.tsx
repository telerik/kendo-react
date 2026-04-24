import * as React from 'react';

import { Skeleton } from '@progress/kendo-react-indicators';
import { Card, CardHeader, CardFooter} from '@progress/kendo-react-layout';

const App = () => {
    return (
      <div className="example">
        <div className="example-wrap">
          <div className='row'>
            <div className='col-4'>
              <p>Pulse animation</p>
              <Card>
                <CardHeader className="k-hbox">
                  <Skeleton shape={'circle'} style={{width: 45, height: 45, marginRight: 16}} />
                  <div style={{flex: '1 1 50%'}}>
                    <Skeleton shape={'text'} style={{width: '100%'}} />
                    <Skeleton shape={'text'} style={{width: '40%'}} />
                  </div>
                </CardHeader>
                <Skeleton shape={'rectangle'} style={{width: '100%', height: 150}} />
                <CardFooter>
                  <Skeleton shape={'text'} style={{width: '100%'}} />
                </CardFooter>
              </Card>
            </div>
            <div className='col-4'>
              <p>Wave animation</p>
              <Card>
                <CardHeader className="k-hbox">
                  <Skeleton shape={'circle'} style={{width: 45, height: 45, marginRight: 16}} animation={{type: 'wave'}}/>
                  <div style={{flex: '1 1 50%'}}>
                    <Skeleton shape={'text'} style={{width: '100%'}} animation={{type: 'wave'}} />
                    <Skeleton shape={'text'} style={{width: '40%'}} animation={{type: 'wave'}} />
                  </div>
                </CardHeader>
                <Skeleton shape={'rectangle'} style={{width: '100%', height: 150}} animation={{type: 'wave'}} />
                <CardFooter>
                  <Skeleton shape={'text'} style={{width: '100%'}} animation={{type: 'wave'}} />
                </CardFooter>
              </Card>
            </div>
            <div className='col-4'>
              <p>No animation</p>
              <Card>
                <CardHeader className="k-hbox">
                  <Skeleton shape={'circle'} style={{width: 45, height: 45, marginRight: 16}} animation={false}/>
                  <div style={{flex: '1 1 50%'}}>
                    <Skeleton shape={'text'} style={{width: '100%'}} animation={false} />
                    <Skeleton shape={'text'} style={{width: '40%'}} animation={false} />
                  </div>
                </CardHeader>
                <Skeleton shape={'rectangle'} style={{width: '100%', height: 150}} animation={false} />
                <CardFooter>
                  <Skeleton shape={'text'} style={{width: '100%'}} animation={false} />
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
