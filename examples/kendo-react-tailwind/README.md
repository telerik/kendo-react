# KendoReact + TailwindCSS + Vite

This project is a React application built with TypeScript, Vite, and TailwindCSS. It also integrates KendoReact components for enterprise-grade UI functionality.

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 16 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview

To preview the production build:

```bash
npm run preview
```

## Project Structure

-   **`src/`**: Contains the source code.
    -   **`components/`**: Reusable React components.
    -   **`App.tsx`**: Main application component.
    -   **`main.tsx`**: Entry point for the React application.
    -   **`index.css`**: TailwindCSS and custom styles.
-   **`public/`**: Static assets.
-   **`vite.config.ts`**: Vite configuration file.
-   **`tsconfig.*.json`**: TypeScript configuration files.

## Styling

This project uses TailwindCSS for styling. Custom styles and variables are defined in `src/index.css`. KendoReact components are styled using the Kendo Default Theme, with some overrides for Tailwind compatibility.

## Linting and Formatting

-   Run ESLint:

    ```bash
    npm run lint
    ```

-   Prettier is configured to format code automatically. You can customize the rules in `.prettierrc`.

## Dependencies

### Main Dependencies

-   `react` and `react-dom`: Core React libraries.
-   `@progress/kendo-react-*`: KendoReact components and themes.
-   `tailwindcss`: Utility-first CSS framework.

### Dev Dependencies

-   `vite`: Build tool.
-   `typescript`: TypeScript support.
-   `eslint`: Linter for JavaScript and TypeScript.
-   `prettier`: Code formatter.

## Learn More

-   [Vite Documentation](https://vitejs.dev/)
-   [React Documentation](https://reactjs.org/)
-   [TailwindCSS Documentation](https://tailwindcss.com/)
-   [KendoReact Documentation](https://www.telerik.com/kendo-react-ui/)
