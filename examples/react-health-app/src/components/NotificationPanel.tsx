import { Button } from "@progress/kendo-react-buttons";

interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const notifTypeStyles: Record<string, { bgClass: string; icon: string }> = {
  info: { bgClass: "notif-bg-info", icon: "ℹ️" },
  warning: { bgClass: "notif-bg-warning", icon: "⚠️" },
  success: { bgClass: "notif-bg-success", icon: "✅" },
  error: { bgClass: "notif-bg-error", icon: "❌" },
};

interface NotificationPanelProps {
  notifications: Notification[];
  onMarkAllRead: () => void;
}

export default function NotificationPanel({
  notifications,
  onMarkAllRead,
}: Readonly<NotificationPanelProps>) {
  return (
    <div className="notification-popup">
      <div className="notification-popup-header">
        <h3>Notifications</h3>
        <Button fillMode="flat" size="small" onClick={onMarkAllRead}>
          Mark all read
        </Button>
      </div>
      {notifications.map((n) => {
        const nStyle = notifTypeStyles[n.type] || notifTypeStyles.info;
        return (
          <div
            key={n.id}
            className={`notification-item${n.read ? "" : " unread"}`}
          >
            <div className={`notification-dot ${nStyle.bgClass}`}>
              {nStyle.icon}
            </div>
            <div className="notification-body">
              <h5>{n.title}</h5>
              <p>{n.message}</p>
            </div>
            <span className="notification-time">{n.time}</span>
          </div>
        );
      })}
    </div>
  );
}
