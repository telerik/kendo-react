import * as React from 'react';

import { Timeline, sortEventList } from '@progress/kendo-react-layout';
import { events } from './events'

const sortedEvents = sortEventList(events);

const App = () => {

    const onChangeHandler = () => {
        alert('card is toggled')
    }

    const onActionClick = () => {
        alert('card action clicked')
    }

    return (
      <div className='app-wrapper'>
        <Timeline
          events={sortedEvents}
          alterMode={true}
          collapsibleEvents={true}
          onChange={onChangeHandler}
          onActionClick={onActionClick}
        />
      </div>
    );
};

export default App;
