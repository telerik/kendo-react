import * as React from "react";
const Attachments = (props: any) => {
  const text = (
    <div id="Attachments" className="page attachments-page">
      <ul>
        <li>Build enterprise apps</li>
        <li>Fw: Regarding Multiline textbox</li>
        <li>Away next week</li>
        <li>Fw: Your Costume is ready</li>
        <li>Update completed</li>
      </ul>
    </div>
  );
  return <div>{props.children ? props.children : text}</div>;
};

export default Attachments;