"use client";

import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

export default function HelpPage() {
  return (
    <main className="main-content utility-page">
      <section className="card-container" aria-labelledby="help-title">
        <h1 id="help-title">Help & support</h1>
        <p className="utility-page__description">
          Find quick answers about warehouse planning and team reporting.
        </p>
        <PanelBar>
          <PanelBarItem title="How do I update a delivery?">
            Open Planning, select the delivery, and edit its scheduled time or
            assigned team.
          </PanelBarItem>
          <PanelBarItem title="How do I export team data?">
            Use the Excel or PDF action in the Team members grid toolbar.
          </PanelBarItem>
          <PanelBarItem title="Who can change warehouse settings?">
            Authorized operations coordinators can update notification
            preferences and team planning details.
          </PanelBarItem>
        </PanelBar>
      </section>
    </main>
  );
}
