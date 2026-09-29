"use client";

import * as React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";

const initialNotifications = [
  {
    title: "Roast shipment received",
    detail: "Order CW-1048 was checked in at Dock 2.",
  },
  {
    title: "Planning update",
    detail: "The Thursday dispatch schedule was updated by Andrew Fuller.",
  },
  {
    title: "Inventory attention",
    detail: "Ethiopian Yirgacheffe is below the preferred stock level.",
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = React.useState(initialNotifications);

  return (
    <main className="main-content utility-page">
      <section className="card-container" aria-labelledby="notifications-title">
        <h1 id="notifications-title">Notifications</h1>
        <p className="utility-page__description">
          Stay informed about warehouse activity and planning changes.
        </p>
        <div className="notification-list">
          {notifications.length ? (
            notifications.map((notification) => (
              <Card className="notification-card" key={notification.title}>
                <CardBody>
                  <CardTitle>{notification.title}</CardTitle>
                  <p>{notification.detail}</p>
                </CardBody>
              </Card>
            ))
          ) : (
            <div>
              <h2>You are all caught up</h2>
              <p>No new warehouse notifications are waiting for you.</p>
              <Button onClick={() => setNotifications(initialNotifications)}>
                Restore sample notifications
              </Button>
            </div>
          )}
        </div>
        <div className="utility-page__actions">
          <Button
            disabled={!notifications.length}
            onClick={() => setNotifications([])}
          >
            Mark all as read
          </Button>
        </div>
      </section>
    </main>
  );
}
