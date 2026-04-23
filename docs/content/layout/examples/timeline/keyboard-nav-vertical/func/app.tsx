import * as React from 'react';

import { Timeline, sortEventList } from '@progress/kendo-react-layout';
import { events } from './events'

const sortedEvents = sortEventList(events);

const App = () => (
  <div style={{marginTop: '20px'}}>
    <Timeline
      events={sortedEvents}
      collapsibleEvents={true}
      alterMode={true}
      navigatable={true}
        />
  </div>)

export default App;
