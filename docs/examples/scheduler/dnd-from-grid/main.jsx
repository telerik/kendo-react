import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Scheduler,
    WeekView,
    MonthView
} from "@progress/kendo-react-scheduler";

import { Grid, GridColumn } from "@progress/kendo-react-grid";

import gridData from "./data.js";

const App = () => {
    const MyScheduler = React.createRef();
    const [data, setData] = React.useState([]);
    const [dragTitle, setDragTitle] = React.useState("");
    const [dragItem, setDragItem] = React.useState("");
    const handleDropItem = e => {
        let start = e.target.getAttribute("data-slot-start");
        let end = e.target.getAttribute("data-slot-end");
        let startDate = new Date(parseInt(start));
        let endDate = new Date(parseInt(end));
        let newEvent = {
            id: dragItem.taskID,
            title: dragItem.title,
            StartTimezone: null,
            start: startDate,
            end: endDate
        };
        setData([newEvent, ...data]);
    };
    React.useEffect(() => {
        let schedulerElement = MyScheduler.current.element;
        schedulerElement.addEventListener("drop", handleDropItem);
        schedulerElement.addEventListener("dragover", e => e.preventDefault());
    });

    const GridRowRender = (tr, props) => {
        const trProps = {
            draggable: true,
            onDragStart: e => {
                setDragItem(props.dataItem)
            }
        };
        return React.cloneElement(tr, { ...trProps }, tr.props.children);
    };
    return (
        <>
            <Scheduler data={data} defaultDate={new Date("2013/6/13")} ref={MyScheduler}>
                <WeekView showWorkHours={false} />
                <MonthView />
            </Scheduler>
            <hr />
            <Grid data={gridData} rowRender={GridRowRender}>
                <GridColumn field='taskID' />
                <GridColumn field='title' />
            </Grid>
        </>
    );
};

ReactDOM.render(<App />, document.querySelector("my-app"));
