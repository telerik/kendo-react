# Healthcare Sample App

A healthcare dashboard application built with React and KendoReact, generated from a Figma design.

## Tech Stack

- **React 19** + **TypeScript 5.9** + **Vite 8**
- **KendoReact** — Grid, Scheduler, Charts, Gauges, Form, Dialogs, and more
- **Kendo Default Theme** (`@progress/kendo-theme-default`)
- **react-router-dom v7** — client-side routing
- **Poppins** + **Roboto** fonts via Google Fonts

## Pages

| Route           | Page               | Description                                                  |
| --------------- | ------------------ | ------------------------------------------------------------ |
| `/`             | Dashboard          | Overview with appointments grid, quick actions, daily alerts |
| `/schedule`     | Schedule           | Scheduler calendar with daily task management                |
| `/patients`     | Patients           | Searchable patient list with AI chat assistant               |
| `/patients/:id` | Patient Profile    | Detailed patient view with vitals, notes, and lab results    |
| `/analytics`    | Clinical Analytics | Charts and gauges for clinical data visualization            |

## Project Structure

```
src/
├── components/     Shared UI components (AppBar, Layout, dialogs, badges)
├── context/        React context providers (DoctorProfile)
├── data/           Sample data, TypeScript interfaces
├── hooks/          Custom hooks (useAIChat, useMediaQuery)
├── icons/          Custom SVG icon definitions
├── pages/          Route-level page components
└── styles.css      Global styles and CSS custom properties
```

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start development server            |
| `npm run build`   | Type-check and build for production |
| `npm run lint`    | Run ESLint                          |
| `npm run preview` | Preview production build locally    |
