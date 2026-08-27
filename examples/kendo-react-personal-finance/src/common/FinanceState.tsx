import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { arrowRotateCwIcon, exclamationCircleIcon, inboxIcon, searchIcon } from "@progress/kendo-svg-icons";

type FinanceStateKind = "loading" | "empty" | "no-results" | "error";

interface FinanceStateProps {
  kind: FinanceStateKind;
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function FinanceState({ kind, title, message, actionLabel, onAction }: FinanceStateProps) {
  const icon = kind === "error"
    ? exclamationCircleIcon
    : kind === "no-results"
      ? searchIcon
      : kind === "empty"
        ? inboxIcon
        : arrowRotateCwIcon;

  return (
    <div className={`finance-state finance-state--${kind}`} role={kind === "error" ? "alert" : "status"} aria-live="polite">
      <SvgIcon icon={icon} size="xlarge" />
      <div>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      {actionLabel && onAction && (
        <Button fillMode="outline" onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}
