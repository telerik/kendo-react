import * as React from "react";
const Calendar = (props: any) => {
  const text = (
    <div id="Calendar" className="page calendar-page">
      <ul>
        <li>
          <h6>11/5 Monday</h6>
          <p>Martha Birthday</p>
        </li>
        <li>
          <h6>15/6 Sunday</h6>
          <p>Job interview for internal position</p>
        </li>
      </ul>
    </div>
  );
  return <div>{props.children ? props.children : text}</div>;
};

export default Calendar;