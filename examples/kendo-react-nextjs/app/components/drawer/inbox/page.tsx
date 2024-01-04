import * as React from "react";
const Inbox = (props: any) => {
  const text = (
    <div id="Inbox" className="page inbox-page">
      <ul>
        <li>
          <h6>Monday meeting</h6>
          <p>
            Hi Tom, Since Monday I&apos;ll be out of office, I&apos;m rescheduling the
            meeting for Tuesday.
          </p>
        </li>
        <li>
          <h6>I&apos;m sorry, Tom</h6>
          <p>
            Hi Tom, my aunt comes for a visit this Saturday, so I can&apos;t come
            back to St. Pete...
          </p>
        </li>
      </ul>
    </div>
  );
  return <div>{props.children ? props.children : text}</div>;
};
export default Inbox;