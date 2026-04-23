import * as React from 'react';
import {
    Scheduler,
    MonthView,
    SchedulerViewSlotProps,
    SchedulerEditSlot,
    SchedulerEditSlotProps,
    SchedulerViewChangeEvent
} from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './events-utc';
import { Button } from '@progress/kendo-react-buttons';

type SchedulerContextType = {
    showMoreClick: () => void;
};

const SchedulerContext = React.createContext<SchedulerContextType | undefined>(undefined);

const MyCustomShowMoreButton = (props: SchedulerViewSlotProps) => {
    const element = React.useRef(null);
    const context = React.useContext(SchedulerContext);
    const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        context?.showMoreClick();
    };
    const itemsPerSlot = 3;
    let slot = props;
    return (
        <>
            {itemsPerSlot < slot.items.length && (
                <Button tabIndex={-1} className="k-more-events" onClick={handleClick}>
                    {slot.items.length - itemsPerSlot + ' more events'}
                </Button>
            )}
        </>
    );
};

const CustomEditSlot: React.FC<SchedulerEditSlotProps> = (props) => {
    const newChildren = [props.children?.[0], <MyCustomShowMoreButton {...props} key={props.slot.id} />];
    return <SchedulerEditSlot {...props} children={newChildren} />;
};

const App = () => {
    const [view, setView] = React.useState<string>('month'); // Handles Scheduler View Change

    const handleViewChange = React.useCallback((event: SchedulerViewChangeEvent) => {
        setView(event.value);
    }, []); // Handles external View Change

    const showMoreClick = React.useCallback(() => {
        //here you can change the View;
        alert('show more clicked');
    }, []);
    return (
        <SchedulerContext.Provider value={{ showMoreClick }}>
            <Scheduler data={sampleData} defaultDate={displayDate} view={view} onViewChange={handleViewChange}>
                <MonthView
                    title="Month"
                    selectedDateFormat="{0:M}"
                    selectedShortDateFormat="{0:M}"
                    editSlot={CustomEditSlot}
                />
            </Scheduler>
        </SchedulerContext.Provider>
    );
};
export default App;
