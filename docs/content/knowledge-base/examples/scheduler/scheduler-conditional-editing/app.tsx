import * as React from 'react';
import { Scheduler, WeekView, SchedulerEditItem, SchedulerEditItemProps } from '@progress/kendo-react-scheduler';

const sampleData = [
    {
        id: 0,
        title: 'Team Meeting (Read-only)',
        start: new Date('2025-01-23T09:30:00.000Z'),
        end: new Date('2025-01-23T10:30:00.000Z'),
        isEditable: false
    },
    {
        id: 1,
        title: 'Project Review (Editable)',
        start: new Date('2025-01-23T11:30:00.000Z'),
        end: new Date('2025-01-23T12:30:00.000Z'),
        isEditable: true
    },
    {
        id: 2,
        title: 'Client Call (Editable)',
        start: new Date('2025-01-24T14:00:00.000Z'),
        end: new Date('2025-01-24T15:00:00.000Z'),
        isEditable: true
    },
    {
        id: 3,
        title: 'System Maintenance (Read-only)',
        start: new Date('2025-01-25T02:00:00.000Z'),
        end: new Date('2025-01-25T04:00:00.000Z'),
        isEditable: false
    }
];

const displayDate = new Date('2025-01-23T09:30:00.000Z');

// Custom EditItem - conditionally disable editing based on data
const CustomEditItem = (props: SchedulerEditItemProps) => {
    return (
        <SchedulerEditItem
            {...props}
            style={{ cursor: props.dataItem.isEditable ? 'pointer' : 'not-allowed' }}
            editable={props.dataItem.isEditable ? props.editable : false}
        />
    );
};

const App = () => {
    const [data, setData] = React.useState<any[]>(sampleData);

    const handleDataChange = ({ created, updated, deleted }: SchedulerDataChangeEvent) => {
        setData((old) =>
            old
                // Filter the deleted items
                .filter((item) => deleted.find((current) => current.id === item.id) === undefined)
                // Find and replace the updated items
                .map((item) => updated.find((current) => current.id === item.id) || item)
                // Add the newly created items and assign an `id`.
                .concat(created.map((item) => Object.assign({}, item, { id: guid() })))
        );
    };
    return (
        <div>
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5', marginBottom: '20px' }}>
                <h3>Conditional Editing Example</h3>
                <p>
                    Try to edit the events by double-clicking them. Events marked as "Read-only" cannot be edited, while
                    "Editable" events can be modified using the custom editItem approach.
                </p>
            </div>

            <Scheduler
                timezone="Etc/UTC"
                data={data}
                onDataChange={handleDataChange}
                defaultDate={displayDate}
                editItem={CustomEditItem}
                editable={true}
            >
                <WeekView showWorkHours={false} startTime="06:00" />
            </Scheduler>
        </div>
    );
};

export default App;
