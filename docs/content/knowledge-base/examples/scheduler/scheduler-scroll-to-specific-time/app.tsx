import * as React from 'react';
import { Scheduler, WeekView, WorkWeekView } from '@progress/kendo-react-scheduler';
// @ts-expect-error
import { sampleData, displayDate } from './sc-events-utc.js';
import { Day } from '@progress/kendo-date-math';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const schedulerRef = React.useRef(null);

    const scrollTo = () => {
        const group = Array.from(document.querySelectorAll('.k-scheduler-group')).find(
            (el) => (el.querySelector('.k-major-cell') as HTMLElement | null)?.innerText.trim() === '1:00 PM'
        ) as HTMLElement | undefined;

        const layout = document.querySelector('.k-scheduler-layout') as HTMLElement | null;

        if (group && layout) {
            layout.scrollTo({ top: group.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Button onClick={scrollTo}>Scroll to 1:00 PM</Button>
            <Scheduler ref={schedulerRef} data={sampleData} defaultDate={displayDate} style={{ height: '700px' }}>
                <WorkWeekView title="Work Week" workWeekStart={Day.Monday} workWeekEnd={Day.Thursday} />
                <WeekView title="Full Week" workWeekStart={Day.Monday} workWeekEnd={Day.Thursday} />
            </Scheduler>
        </div>
    );
};

export default App;
