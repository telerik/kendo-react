import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "@progress/kendo-react-layout";
import { Switch, Input, TextArea } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { DateInput, DateRangePicker } from "@progress/kendo-react-dateinputs";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import darkThemeUrl from "@progress/kendo-theme-meridian/dist/meridian-main-dark.css?url";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartTooltip,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";

const teams = ["Core AI", "Finance", "Growth", "Research"];
const models = ["GPT-4o", "GPT-4 Turbo", "Gemini Pro", "Llama 3"];
const projects = ["Search Insights", "AutoQA", "Billing API", "Workflow AI"];
const navigationItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "notifications", label: "Notifications" },
  { id: "settings", label: "Settings" },
  { id: "profile", label: "Profile" },
  { id: "help", label: "Help & support" },
];

const rows = [
  {
    id: 1,
    team: "Core AI",
    project: "Search Insights",
    model: "GPT-4o",
    calls: 1240,
    spend: 410.45,
    latency: 245,
    date: "2026-04-13",
  },
  {
    id: 2,
    team: "Growth",
    project: "AutoQA",
    model: "GPT-4 Turbo",
    calls: 880,
    spend: 273.2,
    latency: 310,
    date: "2026-04-12",
  },
  {
    id: 3,
    team: "Finance",
    project: "Billing API",
    model: "Llama 3",
    calls: 560,
    spend: 132.9,
    latency: 195,
    date: "2026-04-11",
  },
  {
    id: 4,
    team: "Research",
    project: "Workflow AI",
    model: "Gemini Pro",
    calls: 720,
    spend: 224.3,
    latency: 280,
    date: "2026-04-11",
  },
  {
    id: 5,
    team: "Core AI",
    project: "Billing API",
    model: "GPT-4o",
    calls: 430,
    spend: 150.6,
    latency: 220,
    date: "2026-04-10",
  },
  {
    id: 6,
    team: "Growth",
    project: "Search Insights",
    model: "GPT-4 Turbo",
    calls: 1010,
    spend: 314.9,
    latency: 275,
    date: "2026-04-09",
  },
  {
    id: 7,
    team: "Research",
    project: "AutoQA",
    model: "Gemini Pro",
    calls: 328,
    spend: 104.2,
    latency: 205,
    date: "2026-04-08",
  },
  {
    id: 8,
    team: "Finance",
    project: "Workflow AI",
    model: "Llama 3",
    calls: 610,
    spend: 189.7,
    latency: 240,
    date: "2026-04-07",
  },
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const formatCurrency = (value) => currencyFormatter.format(value);
const getRoute = () => {
  const route = window.location.hash.slice(1) || "dashboard";
  return navigationItems.some((item) => item.id === route)
    ? route
    : "not-found";
};

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function EmptyState({ onClear }) {
  return (
    <section className="empty-state" aria-live="polite">
      <div aria-hidden="true" className="empty-state-icon">
        0
      </div>
      <h2>No usage records match these filters</h2>
      <p>
        Try broadening the date range or clearing a model, team, project, or
        search filter.
      </p>
      <Button primary onClick={onClear}>
        Clear all filters
      </Button>
    </section>
  );
}

function Dashboard() {
  const [theme, setTheme] = useState("light");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [startDate, setStartDate] = useState(new Date("2026-04-07"));
  const [endDate, setEndDate] = useState(new Date("2026-04-13"));
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    const darkThemeId = "kendo-meridian-dark-theme";
    const darkThemeLink = document.getElementById(darkThemeId);

    if (theme === "dark" && !darkThemeLink) {
      const link = document.createElement("link");
      link.id = darkThemeId;
      link.rel = "stylesheet";
      link.href = darkThemeUrl;
      document.head.appendChild(link);
    } else if (theme === "light") {
      darkThemeLink?.remove();
    }
  }, [theme]);

  const hasValidDateRange = startDate && endDate && startDate <= endDate;
  const clearFilters = useCallback(() => {
    setSelectedModel("");
    setSelectedTeam("");
    setSelectedProject("");
    setStartDate(new Date("2026-04-07"));
    setEndDate(new Date("2026-04-13"));
    setSearchTerm("");
  }, []);

  const filteredRows = useMemo(() => {
    if (!hasValidDateRange) return [];
    const lowerSearch = searchTerm.toLowerCase();
    return rows.filter((item) => {
      const dateValue = new Date(item.date);
      const withinRange = dateValue >= startDate && dateValue <= endDate;
      const matchesModel = !selectedModel || item.model === selectedModel;
      const matchesTeam = !selectedTeam || item.team === selectedTeam;
      const matchesProject =
        !selectedProject || item.project === selectedProject;
      const matchesSearch =
        !lowerSearch ||
        [item.model, item.team, item.project].some((value) =>
          value.toLowerCase().includes(lowerSearch),
        );
      return (
        withinRange &&
        matchesModel &&
        matchesTeam &&
        matchesProject &&
        matchesSearch
      );
    });
  }, [
    hasValidDateRange,
    selectedModel,
    selectedTeam,
    selectedProject,
    startDate,
    endDate,
    searchTerm,
  ]);

  const sortedRows = useMemo(() => {
    if (!sort.length) return filteredRows;
    const { field, dir } = sort[0];
    return [...filteredRows].sort((a, b) => {
      const aVal = a[field];
      const bVal = b[field];
      if (aVal === bVal) return 0;
      if (aVal == null) return dir === "asc" ? 1 : -1;
      if (bVal == null) return dir === "asc" ? -1 : 1;
      if (typeof aVal === "string")
        return dir === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      return dir === "asc" ? aVal - bVal : bVal - aVal;
    });
  }, [filteredRows, sort]);

  const { totalCalls, totalSpend, avgLatency, activeTeams } = useMemo(() => {
    const totalCalls = sortedRows.reduce((sum, item) => sum + item.calls, 0);
    const totalSpend = sortedRows.reduce((sum, item) => sum + item.spend, 0);
    const totalLatency = sortedRows.reduce(
      (sum, item) => sum + item.latency,
      0,
    );
    return {
      totalCalls,
      totalSpend,
      avgLatency: sortedRows.length
        ? Math.round(totalLatency / sortedRows.length)
        : 0,
      activeTeams: new Set(sortedRows.map((item) => item.team)).size,
    };
  }, [sortedRows]);

  const trend = useMemo(() => {
    const totals = new Map();
    filteredRows.forEach((row) =>
      totals.set(row.date, (totals.get(row.date) || 0) + row.calls),
    );
    return [...totals.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filteredRows]);

  const spendByModel = useMemo(
    () =>
      models
        .map((model) => ({
          model,
          value: filteredRows
            .filter((row) => row.model === model)
            .reduce((sum, row) => sum + row.spend, 0),
        }))
        .filter((item) => item.value > 0),
    [filteredRows],
  );

  const exportCsv = useCallback(() => {
    const headers = [
      "Date",
      "Team",
      "Project",
      "Model",
      "Calls",
      "Spend",
      "Latency",
    ];
    const content = [
      headers,
      ...sortedRows.map((row) => [
        row.date,
        row.team,
        row.project,
        row.model,
        row.calls,
        row.spend.toFixed(2),
        row.latency,
      ]),
    ]
      .map((row) =>
        row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","),
      )
      .join("\r\n");
    downloadBlob(
      new Blob([content], { type: "text/csv;charset=utf-8;" }),
      "ai-usage-report.csv",
    );
  }, [sortedRows]);

  const exportFullReport = useCallback(() => {
    const report = [
      "AI USAGE MONITORING REPORT",
      `Generated: ${new Date().toLocaleString()}`,
      "",
      "=== SUMMARY METRICS ===",
      `Total API Calls: ${totalCalls.toLocaleString()}`,
      `Total Estimated Spend: ${formatCurrency(totalSpend)}`,
      `Average Latency: ${avgLatency} ms`,
      `Active Teams: ${activeTeams}`,
      "",
      "=== DETAILED RECORDS ===",
      ["Date", "Team", "Project", "Model", "Calls", "Spend", "Latency"].join(
        "\t",
      ),
      ...sortedRows.map((row) =>
        [
          row.date,
          row.team,
          row.project,
          row.model,
          row.calls,
          formatCurrency(row.spend),
          `${row.latency}ms`,
        ].join("\t"),
      ),
    ].join("\r\n");
    downloadBlob(
      new Blob([report], { type: "text/plain;charset=utf-8;" }),
      `ai-usage-report-${new Date().toISOString().split("T")[0]}.txt`,
    );
  }, [totalCalls, totalSpend, avgLatency, activeTeams, sortedRows]);

  const isDark = theme === "dark";
  const chartStyle = {
    background: "var(--kendo-color-transparent)",
    color: "var(--kendo-color-on-app-surface)",
  };
  const chartLabelColor = "var(--kendo-color-subtle)";
  const chartTitleColor = "var(--kendo-color-on-app-surface)";

  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">AI Usage Monitoring</p>
          <h1>AI API consumption dashboard</h1>
          <p className="subtitle">
            Track models, teams, projects, and spend across your organization.
          </p>
        </div>
        <div className="topbar-actions">
          <label className="toggle-label">
            <span>Dark mode</span>
            <Switch
              checked={isDark}
              onChange={(event) => setTheme(event.value ? "dark" : "light")}
              aria-label="Toggle dark mode"
            />
          </label>
          <Button
            primary
            onClick={exportFullReport}
            disabled={!sortedRows.length}
          >
            Export report
          </Button>
        </div>
      </header>

      <section className="filters" aria-label="Dashboard filters">
        <div className="filter-row">
          <DropDownList
            data={models}
            value={selectedModel}
            onChange={(event) => setSelectedModel(event.target.value)}
            defaultItem=""
            label="Model"
            aria-label="Filter by model"
          />
          <DropDownList
            data={teams}
            value={selectedTeam}
            onChange={(event) => setSelectedTeam(event.target.value)}
            defaultItem=""
            label="Team"
            aria-label="Filter by team"
          />
          <DropDownList
            data={projects}
            value={selectedProject}
            onChange={(event) => setSelectedProject(event.target.value)}
            defaultItem=""
            label="Project"
            aria-label="Filter by project"
          />
          <DateRangePicker
            className="date-range-filter"
            value={{ start: startDate, end: endDate }}
            onChange={(event) => {
              setStartDate(event.value.start);
              setEndDate(event.value.end);
            }}
          />
          <Input
            label="Search"
            placeholder="Search teams, projects, models"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search AI usage"
          />
        </div>
        {!hasValidDateRange && (
          <p className="validation-message" role="alert">
            Choose an end date that is on or after the start date.
          </p>
        )}
      </section>

      {hasValidDateRange && !sortedRows.length ? (
        <EmptyState onClear={clearFilters} />
      ) : (
        <>
          <section className="metrics-grid" aria-label="Key metrics overview">
            {[
              [
                "Total API calls",
                totalCalls.toLocaleString(),
                "Across selected time and filters.",
              ],
              [
                "Estimated spend",
                formatCurrency(totalSpend),
                "Forecasted from API usage.",
              ],
              ["Avg latency", `${avgLatency} ms`, "Average response time."],
              ["Active teams", activeTeams, "Teams with API activity."],
            ].map(([label, value, note]) => (
              <Card
                className="metric-card"
                role="region"
                aria-label={label}
                key={label}
              >
                <CardHeader>
                  <CardTitle>{label}</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="metric-value">{value}</p>
                  <p className="metric-note">{note}</p>
                </CardBody>
              </Card>
            ))}
          </section>

          <section className="dashboard-grid">
            <Card
              className="chart-card"
              role="region"
              aria-label="API usage over time"
            >
              <CardHeader>
                <h2>Usage trend</h2>
              </CardHeader>
              <CardBody>
                <Chart
                  style={chartStyle}
                  chartArea={{ background: "var(--kendo-color-transparent)" }}
                >
                  <ChartTitle text="API calls by day" color={chartTitleColor} />
                  <ChartLegend
                    position="bottom"
                    labels={{ color: chartTitleColor }}
                  />
                  <ChartCategoryAxis>
                    <ChartCategoryAxisItem
                      categories={trend.map(([date]) => date.slice(5))}
                      labels={{ color: chartLabelColor }}
                    />
                  </ChartCategoryAxis>
                  <ChartValueAxis>
                    <ChartValueAxisItem labels={{ color: chartLabelColor }} />
                  </ChartValueAxis>
                  <ChartSeries>
                    <ChartSeriesItem
                      type="line"
                      data={trend.map(([, calls]) => calls)}
                      name="API calls"
                    />
                  </ChartSeries>
                  <ChartTooltip format="{0}" />
                </Chart>
              </CardBody>
            </Card>
            <Card
              className="chart-card"
              role="region"
              aria-label="Spend share by model"
            >
              <CardHeader>
                <h2>Spend share</h2>
              </CardHeader>
              <CardBody>
                <Chart
                  style={chartStyle}
                  chartArea={{ background: "var(--kendo-color-transparent)" }}
                >
                  <ChartTitle text="Spend by model" color={chartTitleColor} />
                  <ChartLegend
                    position="bottom"
                    labels={{ color: chartTitleColor }}
                  />
                  <ChartSeries>
                    <ChartSeriesItem
                      type="donut"
                      data={spendByModel}
                      field="value"
                      categoryField="model"
                    />
                  </ChartSeries>
                  <ChartTooltip format="{0:c}" />
                </Chart>
              </CardBody>
            </Card>
          </section>

          <section
            className="table-section"
            aria-label="Detailed usage records"
          >
            <div className="table-header">
              <div>
                <h2>Recent usage records</h2>
                <p>{sortedRows.length} records shown</p>
              </div>
              <Button onClick={exportCsv}>Export CSV</Button>
            </div>
            <Grid
              className="usage-grid"
              data={sortedRows}
              sort={sort}
              onSort={(event) => setSort(event.sort || [])}
              pageable={false}
              sortable
              resizable
            >
              <GridColumn field="date" title="Date" width="130px" />
              <GridColumn field="team" title="Team" width="140px" />
              <GridColumn field="project" title="Project" width="180px" />
              <GridColumn field="model" title="Model" width="140px" />
              <GridColumn field="calls" title="Calls" width="120px" />
              <GridColumn
                field="spend"
                title="Spend"
                width="120px"
                format="{0:c}"
              />
              <GridColumn field="latency" title="Latency (ms)" />
            </Grid>
          </section>
        </>
      )}
    </>
  );
}

function ContentPage({ title, description, children }) {
  return (
    <section className="content-page">
      <p className="eyebrow">Workspace</p>
      <h1>{title}</h1>
      <p className="subtitle">{description}</p>
      {children}
    </section>
  );
}

function NotificationsPage() {
  return (
    <ContentPage
      title="Notifications"
      description="Operational updates from your AI usage workspace."
    >
      <div className="stacked-list">
        <article>
          <strong>Budget watch: Search Insights</strong>
          <p>Daily model spend reached 82% of its planned budget.</p>
          <time dateTime="2026-04-13T09:30">Today, 9:30 AM</time>
        </article>
        <article>
          <strong>Latency improved for Billing API</strong>
          <p>
            Median response time dropped to 195 ms after the latest model
            routing update.
          </p>
          <time dateTime="2026-04-12T14:20">Yesterday, 2:20 PM</time>
        </article>
        <article>
          <strong>Weekly usage report is ready</strong>
          <p>Your organization report for April 7-13 is ready to export.</p>
          <time dateTime="2026-04-11T08:00">April 11, 8:00 AM</time>
        </article>
      </div>
    </ContentPage>
  );
}

function SettingsPage() {
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(false);
  const [saved, setSaved] = useState(false);
  const save = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  };
  return (
    <ContentPage
      title="Settings"
      description="Control reporting and usage-alert preferences."
    >
      <Card className="settings-card">
        <CardBody>
          <h2>Notifications</h2>
          <label className="settings-row">
            <span>
              <strong>Budget threshold alerts</strong>
              <small>
                Receive an alert when project spend reaches its configured
                limit.
              </small>
            </span>
            <Switch
              checked={alertsEnabled}
              onChange={(event) => setAlertsEnabled(event.value)}
            />
          </label>
          <label className="settings-row">
            <span>
              <strong>Weekly usage report</strong>
              <small>Send a usage summary every Monday morning.</small>
            </span>
            <Switch
              checked={weeklyReport}
              onChange={(event) => setWeeklyReport(event.value)}
            />
          </label>
          <Button primary onClick={save}>
            Save preferences
          </Button>
          {saved && (
            <p className="save-confirmation" role="status">
              Preferences saved.
            </p>
          )}
        </CardBody>
      </Card>
    </ContentPage>
  );
}

function ProfilePage() {
  return (
    <ContentPage
      title="Profile"
      description="Update the workspace identity used in exports and notifications."
    >
      <Card className="form-card">
        <CardBody>
          <h2>Profile details</h2>
          <Input label="Full name" defaultValue="Jordan Lee" />
          <Input
            label="Work email"
            defaultValue="jordan.lee@example.com"
            type="email"
          />
          <Button primary>Save profile</Button>
        </CardBody>
      </Card>
    </ContentPage>
  );
}

function HelpPage() {
  const [sent, setSent] = useState(false);
  return (
    <ContentPage
      title="Help & support"
      description="Find answers or send a request to the AI platform team."
    >
      {sent ? (
        <section className="empty-state">
          <div aria-hidden="true" className="empty-state-icon">
            ✓
          </div>
          <h2>Request received</h2>
          <p>
            Support will respond within one business day. Reference: AI-4821.
          </p>
        </section>
      ) : (
        <Card className="form-card">
          <CardBody>
            <h2>Contact support</h2>
            <Input label="Subject" placeholder="What do you need help with?" />
            <TextArea
              label="Message"
              placeholder="Include the project, model, and date range if relevant."
              rows={5}
            />
            <Button primary onClick={() => setSent(true)}>
              Send request
            </Button>
          </CardBody>
        </Card>
      )}
    </ContentPage>
  );
}

function ChatAssistant({ page }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const prompts =
    page === "dashboard"
      ? ["Summarize this week", "Which project costs most?"]
      : ["Explain this page", "Talk to a human"];
  const sendMessage = (text = message) => {
    if (!text.trim()) return;
    setMessages((current) => [
      ...current,
      { author: "You", text },
      {
        author: "AI assistant",
        text: "I can help analyze usage data or connect you with the platform team.",
      },
    ]);
    setMessage("");
  };
  return (
    <aside
      className={`chat-assistant ${isOpen ? "is-open" : ""}`}
      aria-label="AI assistant"
    >
      {isOpen && (
        <div className="chat-panel">
          <header>
            <div>
              <strong>AI assistant</strong>
              <span>Available now</span>
            </div>
            <Button
              fillMode="flat"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI assistant"
            >
              Close
            </Button>
          </header>
          <div className="chat-messages" aria-live="polite">
            {!messages.length && (
              <>
                <p>Ask about usage, costs, or workspace settings.</p>
                <div className="prompt-chips">
                  {prompts.map((prompt) => (
                    <Button
                      key={prompt}
                      fillMode="outline"
                      onClick={() => sendMessage(prompt)}
                    >
                      {prompt}
                    </Button>
                  ))}
                </div>
              </>
            )}
            {messages.map((item, index) => (
              <p
                className={
                  item.author === "You"
                    ? "message user-message"
                    : "message assistant-message"
                }
                key={`${item.author}-${index}`}
              >
                <strong>{item.author}</strong>
                {item.text}
              </p>
            ))}
          </div>
          <form
            className="chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <Input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              aria-label="Message AI assistant"
              placeholder="Ask a question"
            />
            <Button primary type="submit">
              Send
            </Button>
          </form>
        </div>
      )}
      <Button
        className="chat-trigger"
        primary
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        {isOpen ? "Minimize assistant" : "Ask AI assistant"}
      </Button>
    </aside>
  );
}

function App() {
  const [activePage, setActivePage] = useState(getRoute);
  const [navigationOpen, setNavigationOpen] = useState(false);
  useEffect(() => {
    const handleHashChange = () => setActivePage(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  const navigate = (page) => {
    window.location.hash = page;
    setNavigationOpen(false);
  };
  const content = {
    dashboard: <Dashboard />,
    notifications: <NotificationsPage />,
    settings: <SettingsPage />,
    profile: <ProfilePage />,
    help: <HelpPage />,
  }[activePage] || (
    <ContentPage
      title="Page not found"
      description="The page you requested is unavailable."
    >
      <Button primary onClick={() => navigate("dashboard")}>
        Return to dashboard
      </Button>
    </ContentPage>
  );

  return (
    <div className="app-shell">
      <Button
        className="mobile-navigation-toggle"
        onClick={() => setNavigationOpen((open) => !open)}
        aria-expanded={navigationOpen}
      >
        Menu
      </Button>
      <div className="app-layout">
        <aside
          className={`side-navigation ${navigationOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <p className="navigation-title">AI Monitor</p>
          <nav>
            {navigationItems.map((item) => (
              <button
                className={activePage === item.id ? "is-active" : ""}
                key={item.id}
                onClick={() => navigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
        <main>{content}</main>
      </div>
      <ChatAssistant page={activePage} />
    </div>
  );
}

export default App;
