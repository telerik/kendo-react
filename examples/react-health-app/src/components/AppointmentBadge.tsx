import { memo } from "react";

interface AppointmentBadgeProps {
  status: string;
  className?: string;
}

const statusClassMap: Record<string, string> = {
  Complete: "appointment-badge-complete",
  "In Progress": "appointment-badge-in-progress",
  Upcoming: "appointment-badge-upcoming",
  Cancelled: "appointment-badge-cancelled",
};

export default memo(function AppointmentBadge({
  status,
  className,
}: Readonly<AppointmentBadgeProps>) {
  const variantClass = statusClassMap[status] || "appointment-badge-upcoming";
  return (
    <span
      className={["appointment-badge", variantClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      {status}
    </span>
  );
});
