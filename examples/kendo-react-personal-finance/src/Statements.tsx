import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { Card } from "@progress/kendo-react-layout";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { SvgIcon } from "@progress/kendo-react-common";
import { arrowLeftIcon, downloadIcon, eyeIcon, fileReportIcon } from "@progress/kendo-svg-icons";
import { CurrencyContext } from "./App";
import FinanceState from "./common/FinanceState";
import { statements } from "./data/finance-data";

export default function Statements() {
  const navigate = useNavigate();
  const currency = useContext(CurrencyContext)?.currency ?? "USD";
  const [period, setPeriod] = React.useState("All periods");
  const [query, setQuery] = React.useState("");
  const [previewId, setPreviewId] = React.useState<string | null>(null);
  const [errorMessage, setErrorMessage] = React.useState("");
  const periods = ["All periods", ...statements.map((statement) => statement.period)];
  const filteredStatements = statements.filter((statement) =>
    (period === "All periods" || statement.period === period) &&
    `${statement.period} ${statement.account}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  const demoAction = (message: string) => setErrorMessage(message);

  return (
    <>
      <div className="app-page-heading app-page-heading--wide">
        <div>
          <Button fillMode="flat" svgIcon={arrowLeftIcon} onClick={() => navigate(`${import.meta.env.BASE_URL}`)}>Back to overview</Button>
          <h1 className="app-page-title">Statements</h1>
          <p>Browse representative monthly statements for your sample accounts.</p>
        </div>
      </div>
      <main className="app-detail-page">
        <Card className="app-card app-card--section">
          <div className="statement-filters">
            <div>
              <label htmlFor="statement-period">Period</label>
              <DropDownList id="statement-period" data={periods} value={period} onChange={(event) => setPeriod(event.value)} />
            </div>
            <div>
              <label htmlFor="statement-search">Search statements</label>
              <input id="statement-search" className="finance-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search account or period" />
            </div>
          </div>
        </Card>
        {errorMessage && (
          <FinanceState
            kind="error"
            title="Download unavailable"
            message={errorMessage}
            actionLabel="Dismiss"
            onAction={() => setErrorMessage("")}
          />
        )}
        {filteredStatements.length === 0 ? (
          <Card className="app-card"><FinanceState kind="no-results" title="No statements match" message="Try another period or clear the search." actionLabel="Show all statements" onAction={() => { setPeriod("All periods"); setQuery(""); }} /></Card>
        ) : (
          <section className="statement-list" aria-label="Available statements">
            {filteredStatements.map((statement) => (
              <Card className="app-card statement-card" key={statement.id}>
                <div className="statement-card__icon"><SvgIcon icon={fileReportIcon} size="xlarge" /></div>
                <div className="statement-card__details">
                  <h2>{statement.period}</h2>
                  <p>{statement.account} · {statement.pages} pages · {statement.size}</p>
                  <time dateTime={statement.dateTime}>{statement.date}</time>
                </div>
                <div className="statement-card__actions">
                  <Button fillMode="outline" svgIcon={eyeIcon} onClick={() => setPreviewId(statement.id)}>Preview</Button>
                  <Button fillMode="flat" svgIcon={downloadIcon} onClick={() => demoAction(`Download is unavailable in this local demo. ${statement.period} remains available to preview.`)}>Download</Button>
                </div>
                {previewId === statement.id && (
                  <div className="statement-preview" role="region" aria-label={`${statement.period} preview`}>
                    <strong>Statement preview</strong>
                    <p>This representative preview contains {statement.pages} pages of {statement.account} activity. No file is generated or downloaded.</p>
                    <Button size="small" fillMode="flat" onClick={() => setPreviewId(null)}>Close preview</Button>
                  </div>
                )}
              </Card>
            ))}
          </section>
        )}
        <p className="demo-note">Sample data only. Preview and download controls do not connect to a banking service.</p>
        <span className="visually-hidden">Currency shown in {currency}.</span>
      </main>
    </>
  );
}
