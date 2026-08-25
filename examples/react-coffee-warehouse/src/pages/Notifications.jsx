import React from 'react';
import { Card, CardBody } from '@progress/kendo-react-layout';
import { Badge } from '@progress/kendo-react-indicators';
import { PageHeader } from '../components/PageHeader';

const notifications = [
    { id: 1, title: 'Brazil Cerrado delivery received', detail: '42 bags were added to bin A-02-08.', time: '8 minutes ago', state: 'success', label: 'Received' },
    { id: 2, title: 'Kraft bag stock is below threshold', detail: 'P-02-11 has no available units remaining.', time: '26 minutes ago', state: 'warning', label: 'Attention' },
    { id: 3, title: 'Weekly fulfillment review is due', detail: 'Confirm the outbound plan before 16:00.', time: 'Today, 09:15', state: 'info', label: 'Scheduled' }
];

const Notifications = () => (
    <main className="main-content notifications-page">
        <PageHeader title="Notifications" description="Review warehouse updates, stock exceptions, and scheduled work." meta="3 unread" />
        <section className="notification-list" aria-label="Warehouse notifications">
            {notifications.map((notification) => (
                <Card key={notification.id} className="notification-card">
                    <CardBody>
                        <div>
                            <h2>{notification.title}</h2>
                            <p>{notification.detail}</p>
                            <time>{notification.time}</time>
                        </div>
                        <Badge themeColor={notification.state} shape="rounded">{notification.label}</Badge>
                    </CardBody>
                </Card>
            ))}
        </section>
    </main>
);

export default Notifications;
