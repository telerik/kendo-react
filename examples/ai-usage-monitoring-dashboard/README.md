# AI Usage Monitoring Dashboard

A single-page dashboard for tracking AI API consumption across teams, projects, and models — built with [React](https://react.dev/) and [KendoReact](https://www.telerik.com/kendo-react-ui). Includes filtering, sortable data grid, charts, CSV/report export, and dark mode (demo only — no backend).

The UI was implemented using the [Agentic UI Generator](https://www.telerik.com/kendo-react-ui/components/ai-tools/agentic-ui-generator/getting-started) — part of the [KendoReact AI Tools](https://www.telerik.com/kendo-react-ui/components/ai-tools).

## Origin

Official references:

- [KendoReact AI Tools](https://www.telerik.com/kendo-react-ui/components/ai-tools) — overview of the AI-assisted development tools for KendoReact.
- [Agentic UI Generator — Getting Started](https://www.telerik.com/kendo-react-ui/components/ai-tools/agentic-ui-generator/getting-started) — how to set up and use the UI Generator.
- [KendoReact documentation](https://www.telerik.com/kendo-react-ui/components/) — component reference, guides, and getting started.

## Tech Stack

- **React 19** + **Vite 8**
- **KendoReact** — Grid, Charts, DropDownList, DatePicker, Card, Switch, Input, Button
- **Kendo Default Theme** (`@progress/kendo-theme-default`)

## Features

- Filter usage records by model, team, project, date range, and free-text search
- Summary metric cards: total API calls, estimated spend, average latency, active teams
- Sortable data grid with detailed usage records
- Line chart showing API call trends over time
- Donut chart visualizing spend distribution by model
- CSV and full report export
- Light / Dark mode toggle

## Prerequisites

- Node.js (LTS recommended)
- npm

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:4173](http://localhost:4173). The dashboard loads immediately.

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |

## Kendo UI license

KendoReact is a commercial product. For development, follow [KendoReact licensing](https://www.telerik.com/kendo-react-ui/components/my-license/): install a license key or use trial terms as documented by Progress.

## Deployment

This app is deployed to GitHub Pages via the repository's CD workflow.

Live URL: https://telerik.github.io/kendo-react/ai-usage-monitoring-dashboard/
