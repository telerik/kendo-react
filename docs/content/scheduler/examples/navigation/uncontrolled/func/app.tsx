import * as React from 'react';

import {
    Scheduler, AgendaView, TimelineView, DayView,
} from '@progress/kendo-react-scheduler';
import { NumericTextBox } from '@progress/kendo-react-inputs';

import '@progress/kendo-date-math/tz/America/Los_Angeles';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import '@progress/kendo-date-math/tz/Asia/Tokyo';

const App = () => {
    const [currentView, setCurrentView] = React.useState('');
    const [step, setStep] = React.useState(1);
    const [numberOfDays, setNumberOfDays] = React.useState(1);

    return (
    <div>
      <div className="example-config">
        <div className="row">
          <div className="col">
            <h5>Step:</h5>
            <NumericTextBox
              value={step}
              onChange={(event) => event && event.value && setStep(event.value)}
              style={{ width: 300 }}
            />
          </div>
          <div className="col">
            <h5>Number of Days:</h5>
            <NumericTextBox
              value={numberOfDays}
              onChange={(event) =>
                event && event.value && setNumberOfDays(event.value)
              }
              style={{ width: 300 }}
            />
          </div>
        </div>
      </div>

      <Scheduler
        height={500}
        onViewChange={(event) => setCurrentView(event.value)}
        editable={true}
      >
        <AgendaView step={step} numberOfDays={numberOfDays} />
        <TimelineView step={step} numberOfDays={numberOfDays} />
        <DayView step={step} numberOfDays={numberOfDays} />
      </Scheduler>
    </div>
    );
};

export default App;
