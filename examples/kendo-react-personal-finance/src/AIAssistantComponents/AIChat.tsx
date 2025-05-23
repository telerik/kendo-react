import React from "react";
import { Card } from "@progress/kendo-react-layout";
import AIPrompt from "./AIPrompt";

export default function AIChat() {
  return (
    <Card className="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
      <div className={"k-d-grid k-gap-6"}>
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="k-gap-2"
        >
          Chat with Roby
        </div>
        <div className="k-d-grid k-gap-6">
          <AIPrompt />
        </div>
      </div>
    </Card>
  );
}
