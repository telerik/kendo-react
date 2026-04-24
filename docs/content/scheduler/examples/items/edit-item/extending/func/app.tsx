import * as React from 'react';
import {
    Scheduler,
    WeekView,

    SchedulerEditItem,
    SchedulerEditItemHandle,
    SchedulerEditItemProps
} from '@progress/kendo-react-scheduler';
import { Popup } from '@progress/kendo-react-popup';

const sampleData = [{
    id: 0,
    title: 'Team Meeting',
    start: new Date("2020-01-23T09:30:00.000Z"),
    end: new Date("2020-01-23T10:30:00.000Z")
}]
const displayDate = new Date("2020-01-23T09:30:00.000Z");

const CustomEditItem = (props: SchedulerEditItemProps) => {
    const ref = React.useRef<SchedulerEditItemHandle>(null);

    const [show, setShow] = React.useState(false);
    const [formItem, setFormItem] = React.useState(null);

    const handleFocus = React.useCallback(
        (event) => { setShow(true); if (props.onFocus) { props.onFocus(event) } },
        [props]
    )

    const handleCloseClick = React.useCallback(
        () => { setShow(false); },
        []
    )

    const handleEditClick = React.useCallback(
        () => { setFormItem(props.dataItem); setShow(false); },
        [props.dataItem]
    )

    const handleFormItemChange = React.useCallback(
        (event) => { setFormItem(event.value); },
        []
    )

    return (
      <React.Fragment>
        <SchedulerEditItem
          ref={ref}
          {...props}
          onFocus={handleFocus}
          formItem={formItem}
          onFormItemChange={handleFormItemChange}
        />
        <Popup
          anchor={ref.current && ref.current.element}
          show={show}
        >
          <div className="p-1">
            <h5>{props.title}</h5>
            <a className="k-icon k-i-edit" onClick={handleEditClick} />
            <a className="k-icon k-i-close" onClick={handleCloseClick} />
          </div>
        </Popup>
      </React.Fragment>
    )
}

const App = () => {
    return (
      <Scheduler
        timezone="Etc/UTC"
        data={sampleData}
        defaultDate={displayDate}
        editItem={CustomEditItem}
        editable={{ edit: true, remove: false, drag: false, resize: false, add: false, select: false }}
        >
        <WeekView />
      </Scheduler>
    );
};

export default App;
