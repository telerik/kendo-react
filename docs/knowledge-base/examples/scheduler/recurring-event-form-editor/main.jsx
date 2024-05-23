import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Scheduler,
    DayView,
    WeekView,
    WorkWeekView,
} from '@progress/kendo-react-scheduler';
import { guid } from '@progress/kendo-react-common';
import { FormWithCustomEditor } from './custom-form';
import { EditItemWithDynamicTitle } from './custom-item';
import {
    customModelFields,
    displayDate,
    rooms,
    sampleDataWithCustomSchema,
    therapists,
} from './data';
const App = () => {
    const [data, setData] = React.useState(sampleDataWithCustomSchema);
    const handleDataChange = ({ created, updated, deleted }) => {
        setData((old) =>
            old
                .filter(
                    (item) =>
                        deleted.find(
                            (current) => current.AppointmentID === item.AppointmentID
                        ) === undefined
                )
                .map(
                    (item) =>
                        updated.find(
                            (current) => current.AppointmentID === item.AppointmentID
                        ) || item
                )
                .concat(
                    created.map((item) =>
                        Object.assign({}, item, {
                            AppointmentID: guid(),
                        })
                    )
                )
        );
    };
    return (
        <Scheduler
            timezone={'Etc/UTC'}
            height={820}
            editable={true}
            defaultDate={displayDate}
            modelFields={customModelFields}
            group={{
                resources: ['Rooms', 'Therapist'],
                orientation: 'horizontal',
            }}
            resources={[
                {
                    name: 'Rooms',
                    data: rooms,
                    field: 'Room',
                    valueField: 'id',
                    textField: 'title',
                },
                {
                    name: 'Therapist',
                    data: therapists,
                    field: 'Therapist',
                    valueField: 'value',
                    textField: 'name',
                    colorField: 'color',
                },
            ]}
            data={data}
            onDataChange={handleDataChange}
            editItem={EditItemWithDynamicTitle}
            form={FormWithCustomEditor}
        >
            <DayView workDayEnd={'14:00'} />
        </Scheduler>
    );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
