import * as React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { arrowRotateCwIcon, exclamationCircleIcon, inboxIcon, searchIcon } from "@progress/kendo-svg-icons";
import styles from "./data-state.module.scss";

export type DataStateKind = "loading" | "empty" | "no-results" | "error";

interface DataStateProps {
  kind: DataStateKind;
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const DataState = ({ kind, title, message, actionLabel, onAction }: DataStateProps) => {
  const icon = kind === "error"
    ? exclamationCircleIcon
    : kind === "no-results"
      ? searchIcon
      : kind === "empty"
        ? inboxIcon
        : arrowRotateCwIcon;

  return (
    <div
      className={`${styles.state} ${styles[`state-${kind}`]}`}
      role={kind === "error" ? "alert" : "status"}
      aria-live="polite"
    >
      <SvgIcon icon={icon} size="xlarge" aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      {actionLabel && onAction && (
        <Button fillMode="outline" onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
};
