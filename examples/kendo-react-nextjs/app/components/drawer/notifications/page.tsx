import * as React from "react";
const Notifications = (props: any) => {
  const text = (
    <div id="Notifications" className="page notifications-page">
      <ul>
        <li>Monday meeting</li>
        <li>Regarding org chart changes</li>
        <li>Meeting with Cliff</li>
        <li>Global Marketing Meeting</li>
        <li>Out tonight with collegues?</li>
      </ul>
    </div>
  );
  return <div>{props.children ? props.children : text}</div>;
};
export default Notifications;