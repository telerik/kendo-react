import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Card, CardBody, CardHeader } from '@progress/kendo-react-layout';
import { Switch, Input } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
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
} from '@progress/kendo-react-charts';

const teams = ['Core AI', 'Finance', 'Growth', 'Research'];
const models = ['GPT-4o', 'GPT-4 Turbo', 'Gemini Pro', 'Llama 3'];
const projects = ['Search Insights', 'AutoQA', 'Billing API', 'Workflow AI'];

const rows = [
  { id: 1, team: 'Core AI', project: 'Search Insights', model: 'GPT-4o', calls: 1240, spend: 410.45, latency: 245, date: '2026-04-13' },
  { id: 2, team: 'Growth', project: 'AutoQA', model: 'GPT-4 Turbo', calls: 880, spend: 273.2, latency: 310, date: '2026-04-12' },
  { id: 3, team: 'Finance', project: 'Billing API', model: 'Llama 3', calls: 560, spend: 132.9, latency: 195, date: '2026-04-11' },
  { id: 4, team: 'Research', project: 'Workflow AI', model: 'Gemini Pro', calls: 720, spend: 224.3, latency: 280, date: '2026-04-11' },
  { id: 5, team: 'Core AI', project: 'Billing API', model: 'GPT-4o', calls: 430, spend: 150.6, latency: 220, date: '2026-04-10' },
  { id: 6, team: 'Growth', project: 'Search Insights', model: 'GPT-4 Turbo', calls: 1010, spend: 314.9, latency: 275, date: '2026-04-09' },
  { id: 7, team: 'Research', project: 'AutoQA', model: 'Gemini Pro', calls: 328, spend: 104.2, latency: 205, date: '2026-04-08' },
  { id: 8, team: 'Finance', project: 'Workflow AI', model: 'Llama 3', calls: 610, spend: 189.7, latency: 240, date: '2026-04-07' },
];

const usageByTime = [820, 980, 1120, 1300, 1280, 1430, 1560];
const usageLabels = ['Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13'];
const modelShare = [
  { model: 'GPT-4o', value: 42 },
  { model: 'GPT-4 Turbo', value: 28 },
  { model: 'Gemini Pro', value: 18 },
  { model: 'Llama 3', value: 12 },
];

// Single reusable formatter instance — avoids recreating on every call
const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const formatCurrency = (value) => currencyFormatter.format(value);

// Shared download helper — avoids duplicated blob/link logic in both export functions
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function App() {
  const [theme, setTheme] = useState('light');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [startDate, setStartDate] = useState(new Date('2026-04-07'));
  const [endDate, setEndDate] = useState(new Date('2026-04-13'));
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState([]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const filteredRows = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return rows.filter((item) => {
      const dateValue = new Date(item.date);
      const withinRange = dateValue >= startDate && dateValue <= endDate;
      const matchesModel = !selectedModel || item.model === selectedModel;
      const matchesTeam = !selectedTeam || item.team === selectedTeam;
      const matchesProject = !selectedProject || item.project === selectedProject;
      const matchesSearch = !lowerSearch || [item.model, item.team, item.project].some((v) => v.toLowerCase().includes(lowerSearch));
      return withinRange && matchesModel && matchesTeam && matchesProject && matchesSearch;
    });
  }, [selectedModel, selectedTeam, selectedProject, startDate, endDate, searchTerm]);

  const sortedRows = useMemo(() => {
    if (!sort.length) return filteredRows;
    const { field, dir } = sort[0];
    return [...filteredRows].sort((a, b) => {
      const aVal = a[field];
      const bVal = b[field];
      if (aVal === bVal) return 0;
      if (aVal == null) return dir === 'asc' ? 1 : -1;
      if (bVal == null) return dir === 'asc' ? -1 : 1;
      if (typeof aVal === 'string') {
        const cmp = aVal.localeCompare(bVal);
        return dir === 'asc' ? cmp : -cmp;
      }
      return dir === 'asc' ? aVal - bVal : bVal - aVal;
    });
  }, [filteredRows, sort]);

  // Memoized so they only recompute when sortedRows changes, not on every render
  const { totalCalls, totalSpend, avgLatency, activeTeams } = useMemo(() => {
    const totalCalls = sortedRows.reduce((sum, item) => sum + item.calls, 0);
    const totalSpend = sortedRows.reduce((sum, item) => sum + item.spend, 0);
    const totalLatency = sortedRows.reduce((sum, item) => sum + item.latency, 0);
    return {
      totalCalls,
      totalSpend,
      avgLatency: sortedRows.length ? Math.round(totalLatency / sortedRows.length) : 0,
      activeTeams: new Set(sortedRows.map((item) => item.team)).size,
    };
  }, [sortedRows]);

  const isDark = theme === 'dark';
  const chartStyle = isDark ? { background: 'transparent', color: '#e2d6f8' } : {};
  const chartLabelColor = isDark ? '#c4b5fd' : '#3d3d3d';
  const chartTitleColor = isDark ? '#e2d6f8' : '#3d3d3d';

  const exportCsv = useCallback(() => {
    const headers = ['Date', 'Team', 'Project', 'Model', 'Calls', 'Spend', 'Latency'];
    const rowsCsv = sortedRows.map((row) => [
      row.date, row.team, row.project, row.model, row.calls, row.spend.toFixed(2), row.latency,
    ]);
    const csvContent = [headers, ...rowsCsv]
      .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(','))
      .join('\r\n');
    downloadBlob(new Blob([csvContent], { type: 'text/csv;charset=utf-8;' }), 'ai-usage-report.csv');
  }, [sortedRows]);

  const exportFullReport = useCallback(() => {
    const filtersSummary = [];
    if (selectedModel) filtersSummary.push(`Model: ${selectedModel}`);
    if (selectedTeam) filtersSummary.push(`Team: ${selectedTeam}`);
    if (selectedProject) filtersSummary.push(`Project: ${selectedProject}`);
    if (searchTerm) filtersSummary.push(`Search: "${searchTerm}"`);
    filtersSummary.push(`Date range: ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`);

    const report = [
      'AI USAGE MONITORING REPORT',
      `Generated: ${new Date().toLocaleString()}`,
      `URL: ${window.location.href}`,
      '',
      '=== FILTERS APPLIED ===',
      ...(filtersSummary.length ? filtersSummary : ['None']),
      '',
      '=== SUMMARY METRICS ===',
      `Total API Calls: ${totalCalls.toLocaleString()}`,
      `Total Estimated Spend: $${totalSpend.toFixed(2)}`,
      `Average Latency: ${avgLatency} ms`,
      `Active Teams: ${activeTeams}`,
      `Records Included: ${sortedRows.length}`,
      '',
      '=== DETAILED RECORDS ===',
      ['Date', 'Team', 'Project', 'Model', 'Calls', 'Spend', 'Latency'].join('\t'),
      ...sortedRows.map((row) =>
        [row.date, row.team, row.project, row.model, row.calls, `$${row.spend.toFixed(2)}`, `${row.latency}ms`].join('\t')
      ),
    ].join('\r\n');

    downloadBlob(
      new Blob([report], { type: 'text/plain;charset=utf-8;' }),
      `ai-usage-report-${new Date().toISOString().split('T')[0]}.txt`
    );
  }, [selectedModel, selectedTeam, selectedProject, searchTerm, startDate, endDate, totalCalls, totalSpend, avgLatency, activeTeams, sortedRows]);

  return (
    <div className={`app-shell ${theme}`}>
      <section className="topbar" aria-label="Dashboard controls">
        <div>
          <p className="eyebrow">AI Usage Monitoring</p>
          <h1>AI API consumption dashboard</h1>
          <p className="subtitle">Track models, teams, projects, and spend across your organization.</p>
        </div>

        <div className="topbar-actions">
          <label className="toggle-label">
            <span>Dark mode</span>
            <Switch
              checked={isDark}
              onChange={(event) => setTheme(event.value ? 'dark' : 'light')}
              aria-label="Toggle dark mode"
            />
          </label>
          <Button primary onClick={exportFullReport}>
            Export report
          </Button>
        </div>
      </section>

      <section className="filters" aria-label="Dashboard filters">
        <div className="filter-row">
          <DropDownList
            data={models}
            textField=""
            dataItemKey=""
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            defaultItem=""
            label="Model"
            aria-label="Filter by model"
          />
          <DropDownList
            data={teams}
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            defaultItem=""
            label="Team"
            aria-label="Filter by team"
          />
          <DropDownList
            data={projects}
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            defaultItem=""
            label="Project"
            aria-label="Filter by project"
          />
          <div className="date-pickers">
            <DatePicker
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              label="Start date"
              aria-label="Start date"
            />
            <DatePicker
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              label="End date"
              aria-label="End date"
            />
          </div>
          <Input
            placeholder="Search teams, projects, model"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search AI usage"
          />
        </div>
      </section>

      <section className="metrics-grid" aria-label="Key metrics overview">
        <Card className="metric-card" role="region" aria-label="Total API calls">
          <CardHeader>
            <p className="metric-label">Total API calls</p>
          </CardHeader>
          <CardBody>
            <p className="metric-value">{totalCalls.toLocaleString()}</p>
            <p className="metric-note">Across selected time and filters.</p>
          </CardBody>
        </Card>

        <Card className="metric-card" role="region" aria-label="Estimated spend">
          <CardHeader>
            <p className="metric-label">Estimated spend</p>
          </CardHeader>
          <CardBody>
            <p className="metric-value">{formatCurrency(totalSpend)}</p>
            <p className="metric-note">Forecasted from API usage.</p>
          </CardBody>
        </Card>

        <Card className="metric-card" role="region" aria-label="Average latency">
          <CardHeader>
            <p className="metric-label">Avg latency</p>
          </CardHeader>
          <CardBody>
            <p className="metric-value">{avgLatency} ms</p>
            <p className="metric-note">Average response time.</p>
          </CardBody>
        </Card>

        <Card className="metric-card" role="region" aria-label="Active teams">
          <CardHeader>
            <p className="metric-label">Active teams</p>
          </CardHeader>
          <CardBody>
            <p className="metric-value">{activeTeams}</p>
            <p className="metric-note">Teams with API activity.</p>
          </CardBody>
        </Card>
      </section>

      <section className="table-section" aria-label="Detailed usage records">
        <div className="table-header">
          <div>
            <h2>Recent usage records</h2>
            <p>{sortedRows.length} records shown</p>
          </div>
          <Button primary onClick={exportCsv}>
            Export CSV
          </Button>
        </div>
        <Grid data={sortedRows} sort={sort} onSort={(e) => setSort(e.sort || [])} style={{ minHeight: '360px' }} pageable={false} sortable resizable>
          <GridColumn field="date" title="Date" width="130px" />
          <GridColumn field="team" title="Team" width="140px" />
          <GridColumn field="project" title="Project" width="180px" />
          <GridColumn field="model" title="Model" width="140px" />
          <GridColumn field="calls" title="Calls" width="120px" />
          <GridColumn field="spend" title="Spend" width="120px" format="{0:c}" />
          <GridColumn field="latency" title="Latency (ms)" />
        </Grid>
      </section>

      <section className="dashboard-grid">
        <Card className="chart-card" role="region" aria-label="API usage over time">
          <CardHeader>
            <h2>Usage trend</h2>
          </CardHeader>
          <CardBody>
            <Chart style={chartStyle} chartArea={{ background: isDark ? 'transparent' : '' }}>
              <ChartTitle text="API calls by day" color={chartTitleColor} />
              <ChartLegend position="bottom" labels={{ color: chartTitleColor }} />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={usageLabels} labels={{ color: chartLabelColor }} />
              </ChartCategoryAxis>
              <ChartValueAxis>
                <ChartValueAxisItem labels={{ color: chartLabelColor }} />
              </ChartValueAxis>
              <ChartSeries>
                <ChartSeriesItem type="line" data={usageByTime} name="API calls" />
              </ChartSeries>
              <ChartTooltip format="{0}" />
            </Chart>
          </CardBody>
        </Card>

        <Card className="chart-card" role="region" aria-label="Spend share by model">
          <CardHeader>
            <h2>Spend share</h2>
          </CardHeader>
          <CardBody>
            <Chart style={chartStyle} chartArea={{ background: isDark ? 'transparent' : '' }}>
              <ChartTitle text="Spend by model" color={chartTitleColor} />
              <ChartLegend position="bottom" labels={{ color: chartTitleColor }} />
              <ChartSeries>
                <ChartSeriesItem type="donut" data={modelShare} field="value" categoryField="model" />
              </ChartSeries>
              <ChartTooltip format="{0}%" />
            </Chart>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}

export default App;
