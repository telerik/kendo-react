import * as React from 'react';
import { Scheduler, TimelineView, DayView, WeekView, SchedulerHeader } from '@progress/kendo-react-scheduler';
import { Switch } from '@progress/kendo-react-inputs';
import { sampleData, displayDate } from './sc-events-utc';
import { CustomFooter } from './custom-footer';

export const SchedulerConfigContext = React.createContext<{
    slotDuration: [number, Function];
    slotDivision: [number, Function];
}>({
    slotDuration: [60, (_: any) => {}],
    slotDivision: [2, (_: any) => {}]
});

const App = () => {
    const [slotDuration, setSlotDuration] = React.useState(60);
    const [slotDivision, setSlotDivision] = React.useState(2);

    const [showHeader, setShowHeader] = React.useState(true);
    const [showFooter, setShowFooter] = React.useState(true);

    const handleHeaderChange = React.useCallback(() => {
        setShowHeader(!showHeader);
    }, [setShowHeader, showHeader]);

    const handleFooterChange = React.useCallback(() => {
        setShowFooter(!showFooter);
    }, [setShowFooter, showFooter]);

    return (
        <div>
            <div className="example-config">
                <div className="row">
                    <div className="col-">
                        Header: <Switch defaultChecked={true} onChange={handleHeaderChange} />
                    </div>
                    <div className="col">
                        Footer: <Switch defaultChecked={true} onChange={handleFooterChange} />
                    </div>
                </div>
            </div>
            <SchedulerConfigContext.Provider
                value={{
                    slotDuration: [slotDuration, setSlotDuration],
                    slotDivision: [slotDivision, setSlotDivision]
                }}
            >
                <Scheduler
                    data={sampleData}
                    defaultDate={displayDate}
                    defaultView="week"
                    header={(props) => (showHeader ? <SchedulerHeader {...props} /> : <React.Fragment />)}
                    footer={(props) => (showFooter ? <CustomFooter {...props} /> : <React.Fragment />)}
                >
                    <TimelineView slotDivisions={slotDivision} slotDuration={slotDuration} />
                    <DayView slotDivisions={slotDivision} slotDuration={slotDuration} />
                    <WeekView slotDivisions={slotDivision} slotDuration={slotDuration} />
                </Scheduler>
            </SchedulerConfigContext.Provider>
        </div>
    );
};

export default App;
