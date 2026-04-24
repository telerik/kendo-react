import * as React from 'react';

const Calendar = () => {
    return (
      <div>
        <h1 className={'title k-color-primary'}>Calendar</h1>
        <div className={'list'}>
          <div className={'section'}>11/5 Monday</div>
          <div className={'list-item'}>
            <div>16:00</div>
            <div className={'v-line k-bg-error'} />
            <div>Job interview for internal position</div>
          </div>
          <div className={'list-item'}>
            <div>21:00</div>
            <div className={'v-line k-bg-info'} />
            <div>Martha Birthday</div>
          </div>
          <div className={'section'}>Tomorrow</div>
          <div className={'list-item'}>
            <div className={'centered'}>No upcoming events</div>
          </div>
        </div>
      </div>
    );
};


export default Calendar;
