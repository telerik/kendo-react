import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import {
  Grid,
  GridColumn,
  GridCellProps,
  GridNoRecords,
  GridToolbar,
  SmartBox,
  GridToolbarSpacer,
  GridSmartBoxSearchEvent,
} from "@progress/kendo-react-grid";
import { Avatar } from "@progress/kendo-react-layout";

const pages: Record<string, () => Promise<{ default: React.ComponentType }>> =
  import.meta.glob("./content/**/app.{tsx,jsx}", {
    import: "default",
    eager: false,
  }) as any;

function normalizePath(filePath: string): string {
  return filePath
    .replace(/^\.\/content\//, "")
    .replace(/\/app\.(t|j)sx$/, "")
    .split("/")
    .filter((s) => s && s !== "examples")
    .join("/");
}

interface DemoRoute {
  path: string;
  component: string;
  demo: string;
}

function buildRoutes(): DemoRoute[] {
  return Object.keys(pages)
    .map((filePath) => {
      const path = normalizePath(filePath);
      const parts = path.split("/");
      return {
        path,
        component: parts[0] || "",
        demo: parts.slice(1).join(" / ").replace(/-/g, " ") || path,
      };
    })
    .sort((a, b) => a.path.localeCompare(b.path));
}

const DemoCell = (props: GridCellProps) => {
  const item = props.dataItem as DemoRoute;
  return (
    <td>
      <a
        href={`/${item.path}`}
        target="_blank"
        rel="noopener"
        style={{
          color: "var(--link)",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        {item.demo}
      </a>
    </td>
  );
};

const ComponentCell = (props: GridCellProps) => {
  const item = props.dataItem as DemoRoute;
  return (
    <td style={{ textTransform: "capitalize" }}>
      {item.component.replace(/-/g, " ")}
    </td>
  );
};

const PathCell = (props: GridCellProps) => {
  const item = props.dataItem as DemoRoute;
  return (
    <td
      style={{
        fontFamily:
          "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
        fontSize: 13,
        color: "#8b949e",
      }}
    >
      {item.path}
    </td>
  );
};

function DemoIndex({ routes }: { routes: DemoRoute[] }) {
  const [data, setData] = React.useState(routes);

  const handleSearch = React.useCallback(
    (event: GridSmartBoxSearchEvent) => {
      const query = event.searchValue.toLowerCase().trim();
      setData(
        query
          ? routes.filter((r) => r.path.toLowerCase().includes(query))
          : routes,
      );
    },
    [routes],
  );

  return (
    <div className="page">
      <Grid data={data} rowHeight={50} style={{ height: "calc(100vh - 48px)" }}>
        <GridToolbar>
          <span className="brand">
            <Avatar
              type="text"
              size="medium"
              themeColor="primary"
              rounded="full"
            >
              K
            </Avatar>
            <span>KendoReact Demos</span>
          </span>
          <GridToolbarSpacer />

          <SmartBox
            searchConfig={{
              enabled: true,
              fields: ["path", "component", "demo"],
              placeholder: "Search demos...",
              delay: 200,
            }}
            semanticSearchConfig={false}
            aiAssistantConfig={false}
            onSearch={handleSearch}
          />
          <GridToolbarSpacer />
          <span className="toolbar-end">
            <span className="count-badge">{data.length}</span>
          </span>
        </GridToolbar>

        <GridNoRecords>No matching demos found</GridNoRecords>
        <GridColumn
          field="component"
          title="Component"
          width="220px"
          cells={{ data: ComponentCell }}
        />
        <GridColumn field="demo" title="Demo" cells={{ data: DemoCell }} />
        <GridColumn
          field="path"
          title="Path"
          width="340px"
          cells={{ data: PathCell }}
        />
      </Grid>
    </div>
  );
}

async function init() {
  const routes = buildRoutes();
  const routerRoutes: RouteObject[] = Object.entries(pages).map(
    ([filePath, loader]) => ({
      path: normalizePath(filePath),
      lazy: async () => ({ Component: await loader() }),
    }),
  );

  const router = createBrowserRouter([
    { path: "/", element: <DemoIndex routes={routes} /> },
    ...routerRoutes,
  ]);

  const root = createRoot(document.getElementById("app")!);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

init();
