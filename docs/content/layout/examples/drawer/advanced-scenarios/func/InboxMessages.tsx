import * as React from 'react';


const InboxMessages = () => {
    return (
      <div id="Inbox" className="page inbox-page">
        <ul>
          <li>
            <h6>Monday meeting</h6>
            <p>Hi Tom, Since Monday I'll be out of office, I'm rescheduling the meeting for Tuesday.</p>
          </li>
          <li>
            <h6>I'm sorry, Tom</h6>
            <p>Hi Tom, my aunt comes for a visit this Saturday, so I can't come back to St. Pete...</p>
          </li>
        </ul>
      </div>
    );
};

export default InboxMessages;
