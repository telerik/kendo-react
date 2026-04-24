import * as React from 'react';

import { Timeline, sortEventList } from '@progress/kendo-react-layout';
import { events } from './events'

const sortedEvents = sortEventList(events);

const App = () => (
  <div className='app-wrapper'>
    <Timeline
      events={sortedEvents}
      horizontal={true}
        />
  </div>
);

export default App;
