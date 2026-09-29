"use client";

import * as React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Switch } from "@progress/kendo-react-inputs";

export default function SettingsPage() {
  const [saved, setSaved] = React.useState(false);

  return (
    <main className="main-content utility-page">
      <section className="card-container" aria-labelledby="settings-title">
        <h1 id="settings-title">Settings & preferences</h1>
        <p className="utility-page__description">
          Control operational updates and planning reminders.
        </p>
        <div className="utility-page__fields">
          <label>
            <Switch defaultChecked /> Send daily dispatch summary
          </label>
          <label>
            <Switch defaultChecked /> Notify me about schedule changes
          </label>
          <label>
            <Switch /> Include completed orders in reminders
          </label>
        </div>
        <div className="utility-page__actions">
          <Button themeColor="primary" onClick={() => setSaved(true)}>
            Save preferences
          </Button>
        </div>
        {saved && <p role="status">Preferences saved.</p>}
      </section>
    </main>
  );
}
