import { memo } from "react";
import { Label } from "@progress/kendo-react-labels";
import type { ReactNode } from "react";

interface DetailRowProps {
  label: string;
  value: ReactNode;
  layout?: "horizontal" | "vertical";
}

export default memo(function DetailRow({
  label,
  value,
  layout = "horizontal",
}: Readonly<DetailRowProps>) {
  return (
    <div
      className={
        layout === "vertical" ? "profile-info-item" : "task-detail-row"
      }
    >
      <Label className="label">{label}</Label>
      <span className="value">{value}</span>
    </div>
  );
});
