import { memo } from "react";
import { SvgIcon } from "@progress/kendo-react-common";
import type { SVGIcon } from "@progress/kendo-svg-icons";
import { plusWhiteIcon } from "../icons/customIcons";

interface ExpandingActionButtonProps {
  label: string;
  onClick: () => void;
  icon?: SVGIcon;
}

export default memo(function ExpandingActionButton({
  label,
  onClick,
  icon = plusWhiteIcon,
}: Readonly<ExpandingActionButtonProps>) {
  return (
    <button
      className="quick-action-add-wrap"
      onClick={onClick}
      aria-label={label}
      type="button"
    >
      <SvgIcon icon={icon} />
      <span className="quick-action-add-label">{label}</span>
    </button>
  );
});
