import * as React from 'react';
import { Badge, BadgeContainer, Loader, Skeleton } from '@progress/kendo-react-indicators';
import { SvgIcon } from '@progress/kendo-react-common';
import { envelopeIcon, bellIcon, starIcon, arrowRotateCwIcon } from '@progress/kendo-svg-icons';
import { Avatar } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

interface InboxItem {
    sender: string;
    initials: string;
    subject: string;
    preview: string;
    time: string;
    unread: boolean;
}

const initialMessages: InboxItem[] = [
    {
        sender: 'Anna Chen',
        initials: 'AC',
        subject: 'Q2 Sales Report — Final Review',
        preview: 'Hi team, please review the attached Q2 report before our meeting tomorrow…',
        time: '9:42 AM',
        unread: true
    },
    {
        sender: 'Marcus Rivera',
        initials: 'MR',
        subject: 'Deployment scheduled for tonight',
        preview: 'The v3.8.1 hotfix will be deployed to production at 11 PM EST…',
        time: '8:15 AM',
        unread: true
    },
    {
        sender: 'Priya Patel',
        initials: 'PP',
        subject: 'Design system tokens updated',
        preview: 'I have pushed the new spacing and color tokens to the shared library…',
        time: 'Yesterday',
        unread: false
    },
    {
        sender: "James O'Brien",
        initials: 'JO',
        subject: 'Client feedback on prototype',
        preview: 'The client loved the dashboard layout but wants changes to the filter panel…',
        time: 'Yesterday',
        unread: true
    },
    {
        sender: 'Sofia Müller',
        initials: 'SM',
        subject: 'Team offsite agenda',
        preview: "Here is the finalized agenda for next week's offsite in Berlin…",
        time: 'May 9',
        unread: false
    }
];

const App = () => {
    const [loading, setLoading] = React.useState(false);
    const [messages, setMessages] = React.useState<InboxItem[]>(initialMessages);

    const unreadCount = messages.filter((m) => m.unread).length;

    const markRead = (item: InboxItem) => {
        setMessages((prev) => prev.map((m) => (m.sender === item.sender ? { ...m, unread: false } : m)));
    };

    const refresh = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="demo-container">
            <div className="inbox-panel">
                <div className="inbox-header">
                    <div className="header-left">
                        <span className="inbox-title">Inbox</span>
                        <BadgeContainer>
                            <SvgIcon icon={envelopeIcon} size="xlarge" />
                            <Badge themeColor="error" size="small">
                                {unreadCount}
                            </Badge>
                        </BadgeContainer>
                    </div>
                    <div className="header-right">
                        <BadgeContainer>
                            <SvgIcon icon={bellIcon} size="xlarge" />
                            <Badge themeColor="warning" size="small" cutoutBorder={true}>
                                3
                            </Badge>
                        </BadgeContainer>
                        <BadgeContainer>
                            <SvgIcon icon={starIcon} size="xlarge" />
                            <Badge
                                themeColor="success"
                                size="small"
                                cutoutBorder={true}
                                align={{ vertical: 'bottom', horizontal: 'end' }}
                            />
                        </BadgeContainer>
                        <Button fillMode="flat" svgIcon={arrowRotateCwIcon} disabled={loading} onClick={refresh} />
                    </div>
                </div>

                <div className="inbox-list">
                    {loading
                        ? [1, 2, 3, 4].map((i) => (
                              <div key={i} className="inbox-item skeleton-row">
                                  <Skeleton
                                      shape="circle"
                                      animation={{ type: 'wave' }}
                                      style={{ width: 40, height: 40 }}
                                  />
                                  <div className="skeleton-lines">
                                      <Skeleton shape="text" animation={{ type: 'wave' }} style={{ width: '60%' }} />
                                      <Skeleton shape="text" animation={{ type: 'wave' }} style={{ width: '90%' }} />
                                  </div>
                              </div>
                          ))
                        : messages.map((item) => (
                              <div
                                  key={item.sender}
                                  className={`inbox-item${item.unread ? ' unread' : ''}`}
                                  onClick={() => markRead(item)}
                              >
                                  <BadgeContainer>
                                      <Avatar type="text" rounded="full" size="large">
                                          <span>{item.initials}</span>
                                      </Avatar>
                                      {item.unread && (
                                          <Badge
                                              themeColor="primary"
                                              size="small"
                                              cutoutBorder={true}
                                              align={{ vertical: 'top', horizontal: 'end' }}
                                          />
                                      )}
                                  </BadgeContainer>
                                  <div className="message-content">
                                      <div className="message-top">
                                          <span className="sender">{item.sender}</span>
                                          <span className="time">{item.time}</span>
                                      </div>
                                      <span className="subject">{item.subject}</span>
                                      <span className="preview">{item.preview}</span>
                                  </div>
                              </div>
                          ))}
                </div>

                {loading && (
                    <div className="loading-footer">
                        <Loader type="converging-spinner" themeColor="primary" size="medium" />
                        <span className="loading-text">Syncing messages…</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
