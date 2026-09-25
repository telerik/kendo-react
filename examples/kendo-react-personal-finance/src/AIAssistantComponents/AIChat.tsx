import React from "react";
import { Card } from "@progress/kendo-react-layout";
import AIPrompt from "./AIPrompt";

export default function AIChat() {
  return (
    <Card className="app-card">
      <div className="app-card__content app-card__content--spacious">
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="app-card__title"
        >
          Chat with Roby
        </div>
        <div className="app-details">
          <AIPrompt />
        </div>
      </div>
    </Card>
  );
}
