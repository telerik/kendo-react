import React from 'react';
import { Card, CardBody } from '@progress/kendo-react-layout';
import { Badge } from '@progress/kendo-react-indicators';
import { useLocalization } from '@progress/kendo-react-intl';
import { PageHeader } from '../components/PageHeader';

const notifications = [
    { id: 1, title: 'notificationDeliveryTitle', detail: 'notificationDeliveryDetail', time: 'notificationDeliveryTime', state: 'success', label: 'notificationReceived' },
    { id: 2, title: 'notificationStockTitle', detail: 'notificationStockDetail', time: 'notificationStockTime', state: 'warning', label: 'notificationAttention' },
    { id: 3, title: 'notificationReviewTitle', detail: 'notificationReviewDetail', time: 'notificationReviewTime', state: 'info', label: 'notificationScheduled' }
];

const Notifications = () => {
    const localizationService = useLocalization();
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
                                <time>{localizationService.toLanguageString(`custom.${notification.time}`)}</time>
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
