import * as React from 'react';

import { Timeline, sortEventList } from '@progress/kendo-react-layout';
import { events } from './events'

const sortedEvents = sortEventList(events);

const App = () => {
    const onActionClick = (e: any) => {
        const event = e.syntheticEvent;
        event.preventDefault();
        window.open(event.target.getAttribute('href'));
    };

    return (
      <div className='app-wrapper'>
        <Timeline
          events={sortedEvents}
          alterMode={true}
          collapsibleEvents={true}
          onActionClick={onActionClick}
        />
      </div>
    );
};

export default App;
