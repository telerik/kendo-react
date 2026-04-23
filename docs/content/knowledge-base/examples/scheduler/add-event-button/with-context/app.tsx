import * as React from 'react';
import { displayDate, sampleData } from './sc-events-utc';
import {
    Scheduler,
    TimelineView,
    DayView,
    WeekView,
    MonthView,
    AgendaView,
    SchedulerDataChangeEvent,
    SchedulerForm,
    SchedulerFormProps
} from '@progress/kendo-react-scheduler';
import { guid } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';

const DataContext = React.createContext<any>([]);

const AddNewButton = () => {
    const [form, setForm] = React.useState(false);
    const [, dispatchData] = React.useContext(DataContext);

    const handleSubmit: SchedulerFormProps['onSubmit'] = (args) => {
        dispatchData({
            created: [args.value],
            updated: [],
            deleted: []
        });
        setForm(false);
    };

    const handleClose: SchedulerFormProps['onClose'] = (args) => {
        setForm(false);
    };

    const handleCancel: SchedulerFormProps['onClose'] = (args) => {
        setForm(false);
    };

    return (
        <>
            <Button
                onClick={() => {
                    setForm(true);
                }}
            >
                Add new
            </Button>

            {/* wraps in <SchedulerFieldsContext> if using custom fields */}
            {form ? (
                <SchedulerForm onSubmit={handleSubmit} onClose={handleClose} onCancel={handleCancel} dataItem={null} />
            ) : null}
            {/* </SchedulerFieldsContext> */}
        </>
    );
};

const App = () => {
    const [data, setData] = React.useState<any[]>(sampleData);
    const [defaultDate, setDefaultDate] = React.useState(displayDate);
    const schedulerRef = React.useRef(null);

    const handleDataChange = React.useCallback(({ created, updated, deleted }: SchedulerDataChangeEvent) => {
        // setIt({ created, updated, deleted }, false);
        setData((old) =>
            old
                .filter((item) => deleted.find((current) => current.id === item.id) === undefined)
                .map((item) => updated.find((current) => current.id === item.id) || item)
                .concat(created.map((item) => Object.assign({}, item, { id: guid() })))
        );
    }, []);

    return (
        <DataContext.Provider value={[data, handleDataChange]}>
            <AddNewButton />
            <Scheduler
                data={data}
                onDataChange={handleDataChange}
                editable={{
                    add: true,
                    remove: true,
                    drag: true,
                    resize: true,
                    select: true,
                    edit: true
                }}
                defaultDate={defaultDate}
                //editItem={editItem}
                ref={schedulerRef}
            >
                <TimelineView />
                <DayView numberOfDays={2} />
                <WeekView />
                <MonthView />
                <AgendaView />
            </Scheduler>
        </DataContext.Provider>
    );
};

export default App;
