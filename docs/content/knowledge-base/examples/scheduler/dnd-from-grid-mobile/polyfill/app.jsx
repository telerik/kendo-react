import * as React from 'react';
import { Scheduler, WeekView, MonthView } from '@progress/kendo-react-scheduler';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { guid } from '@progress/kendo-react-common';

import gridData from './shared-kb-data';

const App = () => {
    const MyScheduler = React.createRef();
    const [data, setData] = React.useState([]);
    const [dragItem, setDragItem] = React.useState('');
    const [width, setWidth] = React.useState(window.innerWidth);
    const [scriptLoadingState, setScriptLoadingState] = React.useState('IDLE');

    const createScript = () => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://bernardo-castilho.github.io/DragDropTouch/DragDropTouch.js';
        script.onload = function () {
            setScriptLoadingState('LOADED');
        };

        script.onerror = function () {
            setScriptLoadingState('FAILED');
        };
        document.body.appendChild(script);
    };

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        createScript();
    };

    const handleDropItem = (e) => {
        let start = e.target.getAttribute('data-slot-start');
        let end = e.target.getAttribute('data-slot-end');
        let startDate = new Date(parseInt(start));
        let endDate = new Date(parseInt(end));
        let newEvent = {
            id: guid(),
            title: dragItem.title,
            StartTimezone: null,
            start: startDate,
            end: endDate
        };
        setData([newEvent, ...data]);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        let schedulerElement = MyScheduler.current.element;
        schedulerElement.addEventListener('drop', handleDropItem);
        schedulerElement.addEventListener('dragover', (e) => e.preventDefault());
    });

    const CustomRow = (props) => {
        return (
            <tr
                {...props.trProps}
                draggable={true}
                onDragStart={() => {
                    setDragItem(props.dataItem);
                }}
            >
                {props.children}
            </tr>
        );
    };

    return (
        <div className="container">
            <Scheduler data={data} defaultDate={new Date('2013/6/13')} ref={MyScheduler}>
                <WeekView />
                <MonthView />
            </Scheduler>
            <hr />
            <Grid data={gridData} rows={{ data: CustomRow }}>
                <GridColumn field="taskID" />
                <GridColumn field="title" />
            </Grid>
        </div>
    );
};

export default App;
