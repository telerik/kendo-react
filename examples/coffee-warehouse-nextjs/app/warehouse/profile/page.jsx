"use client";

import * as React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";

export default function ProfilePage() {
  const [saved, setSaved] = React.useState(false);

  return (
    <main className="main-content utility-page">
      <section className="card-container" aria-labelledby="profile-title">
        <h1 id="profile-title">Your profile</h1>
        <p className="utility-page__description">
          Keep your contact details current for warehouse coordination.
        </p>
        <div className="utility-page__fields">
          <label>
            Full name
            <Input defaultValue="Nancy Davolio" autoComplete="name" />
          </label>
          <label>
            Work email
            <Input
              defaultValue="nancy.davolio@coffee-warehouse.example"
              type="email"
              autoComplete="email"
            />
          </label>
          <label>
            Phone
            <Input defaultValue="+1 206 555 0100" type="tel" autoComplete="tel" />
          </label>
        </div>
        <div className="utility-page__actions">
          <Button themeColor="primary" onClick={() => setSaved(true)}>
            Save profile
          </Button>
          <Button fillMode="outline">Cancel</Button>
        </div>
        {saved && <p role="status">Profile saved.</p>}
      </section>
    </main>
  );
}
