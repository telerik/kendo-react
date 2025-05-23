import { TextBox } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { DateInput } from "@progress/kendo-react-dateinputs";
import React from "react";
import StatusBadge from "../common/StatusBadge";

interface TransactionDetailProps {
  label: string;
  value: string;
  status?: boolean;
}

export default function TransactionDetail({
  label,
  value,
  status,
}: TransactionDetailProps) {
  const getPaymentMethodImage = (method: string) => {
    switch (method) {
      case "Visa":
        return "./images/visa-logo.png";
      case "MasterCard":
        return "./images/mastercard-logo.png";
    }
  };
  return (
    <>
      {status && (
        <div className="k-d-grid k-gap-3">
          <Label editorId={"editorId"}>{label}</Label>
          <StatusBadge dataItem={{ orderStatus: value }} height={28} />
        </div>
      )}

      {label === "Payment Method" && getPaymentMethodImage(value) && (
        <div className="k-d-grid k-gap-2.5">
          <Label editorId={"editorId"}>{label}</Label>
          <img src={getPaymentMethodImage(value)} alt="Payment Method" />
        </div>
      )}

      {!status && label !== "Payment Method" && (
        <div className="k-d-grid k-gap-1">
          <Label editorId={"editorId"}>{label}</Label>
          {label === "Time" ? (
            <DateInput
              value={new Date(value)}
              format={"hh:mm a MMMM d, yyyy"}
            />
          ) : (
            <TextBox
              id={"editorId"}
              fillMode={"flat"}
              rounded={"large"}
              readOnly={true}
              style={{
                backgroundColor: "var(--kendo-color-surface)",
              }}
              value={value}
            />
          )}
        </div>
      )}
    </>
  );
}
