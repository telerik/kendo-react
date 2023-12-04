"use client";
import * as React from "react";

import { ButtonGroup, Button } from "@progress/kendo-react-buttons";
import { DateRangePicker } from "@progress/kendo-react-dateinputs";

import { useLocalization } from "@progress/kendo-react-intl";
import { filterBy } from "@progress/kendo-data-query";

import { Grid, Column, ColumnMenu } from "../../components/Grid";
import { Chart } from "../../components/Chart";
import {
  FullNameCell,
  FlagCell,
  OnlineCell,
  RatingCell,
  EngagementCell,
  CurrencyCell,
} from "../../components/GridCells";

import { employees } from "../../resources/employees";
import { teams } from "../../resources/teams";
import { orders } from "../../resources/orders";
const noMessage = "message not defined";

export default function DashBoard() {
  const [data, setData] = React.useState(employees);
  const [isTrend, setIsTrend] = React.useState(true);
  const [isMyTeam, setIsMyTeam] = React.useState(true);
  const localizationService = useLocalization();

  const isChartChangeRef = React.useRef(false);
  const onChartRefresh = React.useCallback(() => null, []);

  React.useEffect(() => {
    isChartChangeRef.current = false;
  });

  const teamId = "1";
  const gridFilterExpression = isMyTeam
    ? {
        logic: "and",
        filters: [{ field: "teamId", operator: "eq", value: teamId }],
      }
    : null;

  const [range, setRange] = React.useState({
    start: new Date("2020-01-01T21:00:00.000Z"),
    end: new Date("2020-04-29T21:00:00.000Z"),
  });
  const onRangeChange = React.useCallback(
    (event) => {
      setRange({
        start: event.value.start,
        end: event.value.end,
      });
    },
    [setRange]
  );
  const trendOnClick = React.useCallback(() => {
    isChartChangeRef.current = true;
    setIsTrend(true);
  }, [setIsTrend]);
  const volumeOnClick = React.useCallback(() => {
    isChartChangeRef.current = true;
    setIsTrend(false);
  }, [setIsTrend]);
  const myTeamOnClick = React.useCallback(
    () => setIsMyTeam(true),
    [setIsMyTeam]
  );
  const allTeamOnClick = React.useCallback(
    () => setIsMyTeam(false),
    [setIsMyTeam]
  );

  return (
    <div id="Dashboard" className="dashboard-page main-content">
      <div className="card-container grid">
        <h3 className="card-title">
          {localizationService.toLanguageString(
            "custom.teamEfficiency",
            noMessage
          )}
        </h3>
        <div className="card-buttons">
          <ButtonGroup>
            <Button togglable={true} selected={isTrend} onClick={trendOnClick}>
              {localizationService.toLanguageString("custom.trend", noMessage)}
            </Button>
            <Button
              togglable={true}
              selected={!isTrend}
              onClick={volumeOnClick}
            >
              {localizationService.toLanguageString("custom.volume", noMessage)}
            </Button>
          </ButtonGroup>
        </div>
        <div className="card-ranges">
          <DateRangePicker value={range} onChange={onRangeChange} />
        </div>
        <div className="card-component">
          <Chart
            data={orders}
            filterStart={range.start}
            filterEnd={range.end}
            groupByField={"teamID"}
            groupResourceData={teams}
            groupTextField={"teamName"}
            groupColorField={"teamColor"}
            seriesCategoryField={"orderDate"}
            seriesField={"orderTotal"}
            seriesType={isTrend ? "line" : "column"}
            onRefresh={isChartChangeRef.current ? null : onChartRefresh}
          />
        </div>
      </div>
      <div className="card-container grid">
        <h3 className="card-title">
          {localizationService.toLanguageString(
            "custom.teamMembers",
            noMessage
          )}
        </h3>
        <div className="card-buttons">
          <ButtonGroup>
            <Button
              togglable={true}
              selected={isMyTeam}
              onClick={myTeamOnClick}
            >
              {localizationService.toLanguageString("custom.myTeam", noMessage)}
            </Button>
            <Button
              togglable={true}
              selected={!isMyTeam}
              onClick={allTeamOnClick}
            >
              {localizationService.toLanguageString(
                "custom.allTeams",
                noMessage
              )}
            </Button>
          </ButtonGroup>
        </div>
        <span></span>
        <div className="card-component">
          <Grid
            data={filterBy(data, gridFilterExpression)}
            style={{ height: 450 }}
            onDataChange={(data) => setData(data)}
          >
            <Column
              title={localizationService.toLanguageString(
                "custom.employee",
                noMessage
              )}
              groupable={false}
            >
              <Column
                field={"fullName"}
                title={localizationService.toLanguageString(
                  "custom.contactName",
                  noMessage
                )}
                columnMenu={ColumnMenu}
                width={230}
                cell={FullNameCell}
              />
              <Column
                field={"jobTitle"}
                title={localizationService.toLanguageString(
                  "custom.jobTitle",
                  noMessage
                )}
                columnMenu={ColumnMenu}
                width={230}
              />
              <Column
                field={"country"}
                title={localizationService.toLanguageString(
                  "custom.country",
                  noMessage
                )}
                columnMenu={ColumnMenu}
                width={100}
                cell={FlagCell}
              />
              <Column
                field={"isOnline"}
                title={localizationService.toLanguageString(
                  "custom.status",
                  noMessage
                )}
                columnMenu={ColumnMenu}
                width={100}
                cell={OnlineCell}
                filter={"boolean"}
              />
            </Column>
            <Column
              title={localizationService.toLanguageString(
                "custom.performance",
                noMessage
              )}
              groupable={false}
            >
              <Column
                field={"rating"}
                title={localizationService.toLanguageString(
                  "custom.rating",
                  noMessage
                )}
                columnMenu={ColumnMenu}
                width={110}
                cell={RatingCell}
                filter={"numeric"}
              />
              <Column
                field={"target"}
                title={localizationService.toLanguageString(
                  "custom.engagement",
                  noMessage
                )}
                columnMenu={ColumnMenu}
                width={200}
                cell={EngagementCell}
                filter={"numeric"}
              />
              <Column
                field={"budget"}
                title={localizationService.toLanguageString(
                  "custom.budget",
                  noMessage
                )}
                columnMenu={ColumnMenu}
                width={100}
                cell={CurrencyCell}
                filter={"numeric"}
              />
            </Column>
            <Column
              title={localizationService.toLanguageString(
                "custom.contacts",
                noMessage
              )}
              groupable={false}
            >
              <Column
                field={"phone"}
                title={localizationService.toLanguageString(
                  "custom.phone",
                  noMessage
                )}
                columnMenu={ColumnMenu}
                width={130}
              />
              <Column
                field={"address"}
                title={localizationService.toLanguageString(
                  "custom.address",
                  noMessage
                )}
                columnMenu={ColumnMenu}
              />
            </Column>
          </Grid>
        </div>
      </div>
    </div>
  );
}
