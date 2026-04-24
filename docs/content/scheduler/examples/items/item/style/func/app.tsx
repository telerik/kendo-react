import * as React from 'react';
import {
    Scheduler,
    DayView,

    SchedulerItem,
    SchedulerItemProps
} from '@progress/kendo-react-scheduler';

const sampleData = [{
    id: 0,
    title: 'KendoReact Release Webinar',
    start: new Date("2020-01-23T09:30:00.000Z"),
    end: new Date("2020-01-23T10:30:00.000Z"),
    image: 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/release_webinar_kui_1920x440_lp.png?sfvrsn=23989f80_0'
}]

const displayDate = new Date("2020-01-23T09:30:00.000Z");

const CustomItem = (props: SchedulerItemProps) => (
  <SchedulerItem
    {...props}
    style={{
      ...props.style,
      background: `url(${props.dataItem.image})`
    }}
    />)


const App = () => {
    return (
      <Scheduler
        timezone="Etc/UTC"
        data={sampleData}
        defaultDate={displayDate}
        item={CustomItem}
        >
        <DayView />
      </Scheduler>
    );
};

export default App;
