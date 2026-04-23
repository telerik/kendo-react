import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

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

function DemoIndex({ routes }: { routes: DemoRoute[] }) {
  const [search, setSearch] = React.useState("");

  const query = search.toLowerCase().trim();
  const filtered = query
    ? routes.filter((r) => r.path.toLowerCase().includes(query))
    : routes;

  const grouped: Record<string, DemoRoute[]> = {};
  for (const r of filtered) {
    (grouped[r.component] ??= []).push(r);
  }
  const components = Object.keys(grouped).sort();

  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="5" fill="#ff6358" />
              <text
                x="6"
                y="18"
                fill="#fff"
                fontWeight="700"
                fontSize="16"
                fontFamily="system-ui"
              >
                K
              </text>
            </svg>
            <span>KendoReact Demos</span>
            <span className="count-badge">{filtered.length}</span>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by component, feature, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="clear-btn" onClick={() => setSearch("")}>
                &times;
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="list-container">
        {components.length === 0 && (
          <div className="empty">
            No demos match "<strong>{search}</strong>"
          </div>
        )}

        {components.map((comp) => (
          <section key={comp} className="group">
            <h2 className="group-title">
              {comp.replace(/-/g, " ")}
              <span className="group-count">{grouped[comp].length}</span>
            </h2>
            <div className="group-items">
              {grouped[comp].map((r) => (
                <a
                  key={r.path}
                  href={`/${r.path}`}
                  target="_blank"
                  rel="noopener"
                  className="demo-link"
                >
                  <span className="demo-label">{r.demo}</span>
                  <span className="demo-path">{r.path}</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
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
