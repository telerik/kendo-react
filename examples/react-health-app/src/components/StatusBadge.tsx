import { memo } from "react";
import { Chip } from "@progress/kendo-react-buttons";

type ChipThemeColor = "base" | "info" | "success" | "warning" | "error";

interface StatusBadgeProps {
  status: string;
  themeColor?: ChipThemeColor;
  className?: string;
}

const statusThemeMap: Record<string, ChipThemeColor> = {
  Critical: "error",
  Monitoring: "warning",
  Stable: "success",
  Normal: "success",
  Abnormal: "warning",
  High: "error",
  Medium: "warning",
  Low: "success",
};

export default memo(function StatusBadge({
  status,
  themeColor,
  className,
}: Readonly<StatusBadgeProps>) {
  const resolvedColor = themeColor || statusThemeMap[status] || "base";
  return (
    <Chip
      text={status}
      themeColor={resolvedColor}
      rounded="full"
      className={className}
    />
  );
});
