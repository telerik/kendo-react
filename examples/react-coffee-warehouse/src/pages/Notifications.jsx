import React from 'react';
import { Card, CardBody } from '@progress/kendo-react-layout';
import { Badge } from '@progress/kendo-react-indicators';
import { useInternationalization, useLocalization } from '@progress/kendo-react-intl';
import { PageHeader } from '../components/PageHeader';

const notifications = [
    { id: 1, title: 'notificationDeliveryTitle', detail: 'notificationDeliveryDetail', dateTime: '2026-08-28T08:25:00+03:00', state: 'success', label: 'notificationReceived' },
    { id: 2, title: 'notificationStockTitle', detail: 'notificationStockDetail', dateTime: '2026-08-28T08:07:00+03:00', state: 'warning', label: 'notificationAttention' },
    { id: 3, title: 'notificationReviewTitle', detail: 'notificationReviewDetail', dateTime: '2026-08-27T09:15:00+03:00', state: 'info', label: 'notificationScheduled' }
];

const Notifications = () => {
    const localizationService = useLocalization();
    const intlService = useInternationalization();
    return (
        <main className="main-content notifications-page">
            <PageHeader
                title={localizationService.toLanguageString('custom.notificationsTitle')}
                description={localizationService.toLanguageString('custom.notificationsDescription')}
                meta={localizationService.toLanguageString('custom.notificationsUnread')}
            />
            <section className="notification-list" aria-label={localizationService.toLanguageString('custom.notificationsSection')}>
                {notifications.map((notification) => (
                    <Card key={notification.id} className="notification-card">
                        <CardBody>
                            <div>
                                <h2>{localizationService.toLanguageString(`custom.${notification.title}`)}</h2>
                                <p>{localizationService.toLanguageString(`custom.${notification.detail}`)}</p>
                                <time dateTime={notification.dateTime}>
                                    {intlService.formatDate(new Date(notification.dateTime), 'MMM d, yyyy, HH:mm')}
                                </time>
                            </div>
                            <Badge themeColor={notification.state} shape="rounded">{localizationService.toLanguageString(`custom.${notification.label}`)}</Badge>
                        </CardBody>
                    </Card>
                ))}
            </section>
        </main>
    );
};

export default Notifications;
