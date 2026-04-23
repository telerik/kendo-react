import * as React from 'react';
import {
    Scheduler,
    DayView,
    SchedulerItem,
    SchedulerItemHandle,
    SchedulerItemProps,
    SchedulerItemFocusEvent
} from '@progress/kendo-react-scheduler';
import { Popup } from '@progress/kendo-react-popup';
import { useInternationalization } from '@progress/kendo-react-intl';

const sampleData = [{
    id: 0,
    title: 'KendoReact Release Webinar',
    start: new Date("2020-01-23T09:30:00.000Z"),
    end: new Date("2020-01-23T10:30:00.000Z"),
    image: 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/release_webinar_kui_1920x440_lp.png?sfvrsn=23989f80_0'
}]
const displayDate = new Date("2020-01-23T09:30:00.000Z");

const CustomItem = (props: SchedulerItemProps) => {
    const ref = React.useRef<SchedulerItemHandle>(null);
    const intl = useInternationalization();
    const [show, setShow] = React.useState(false);

    const {
        onFocus,
        onBlur
    } = props;

    const handleFocus = React.useCallback(
        (event: SchedulerItemFocusEvent) => {
            setShow(true)

            // Call the default `onFocus` handler
            if (onFocus) {
                onFocus(event)
            }
        },
        [onFocus]
    )
    const handleBlur = React.useCallback(
        (event: SchedulerItemFocusEvent) => {
            setShow(false)

            // Call the default `onBlur` handler
            if (onBlur) {
                onBlur(event)
            }
        },
        [onBlur]
    )

    return (
    <React.Fragment>
      <SchedulerItem
        {...props}
        style={{
          ...props.style,
          background: `url(${props.dataItem.image})`
        }}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Popup
        show={show}
        anchorAlign={{
          horizontal: 'center',
          vertical: 'top'
        }}
        popupAlign={{
          horizontal: 'center',
          vertical: 'bottom'
        }}
        anchor={ref.current && ref.current.element}
      >
        <div className="rounded" style={{ overflow: 'hidden' }}>
          <img className="image-fluid" src={props.dataItem.image} alt="KendoReact Scheduler Item Image" style={{ width: 400, height: 'auto' }} />
          <div className="p-1">
            <h5>{props.title}</h5>
            <div>
              Start: {intl.formatDate(props.zonedStart, 't')}
            </div>
            <div>
              End: {intl.formatDate(props.zonedEnd, 't')}
            </div>
          </div>
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
      item={CustomItem}
      editable={{ select: true, remove: false, drag: false, resize: false, add: false, edit: false }}
    >
      <DayView />
    </Scheduler>
    );
};

export default App;
