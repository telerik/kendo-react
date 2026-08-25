
import * as React from 'react';

import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';

import { useLocalization } from '@progress/kendo-react-intl';
import { filterBy } from '@progress/kendo-data-query';

import { Grid, Column, ColumnMenu } from './../components/Grid';
import { Chart } from './../components/Chart';
import { FullNameCell, FlagCell, OnlineCell, RatingCell, EngagementCell, CurrencyCell } from './../components/GridCells';

import { AppContext } from './../AppContext'
import { PageHeader } from './../components/PageHeader';
import { KpiCard } from './../components/KpiCard';

import { employees } from './../resources/employees';
import { teams } from './../resources/teams';
import { orders } from './../resources/orders';

const Dashboard = () => {
    const [data, setData] = React.useState(employees);
    const [isTrend, setIsTrend] = React.useState(true);
    const [isMyTeam, setIsMyTeam] = React.useState(true);
    const localizationService = useLocalization();

    const isChartChangeRef = React.useRef(false);
    const onChartRefresh = React.useCallback(
        () => null,
        []
    );

    React.useEffect(() => {
        isChartChangeRef.current = false;
    });

    const { teamId } = React.useContext(AppContext);
    const gridFilterExpression = isMyTeam ? {
            logic: "and",
            filters: [{ field: "teamId", operator: "eq", value: teamId }]
        } : null;

    const [range, setRange] = React.useState({
        start: new Date('2020-01-01T21:00:00.000Z'),
        end: new Date('2020-04-29T21:00:00.000Z')
    });
    const onRangeChange = React.useCallback(
        (event) => {
            setRange({
                start: event.value.start,
                end: event.value.end
            })
        },
        [setRange]
    );
    const trendOnClick = React.useCallback(
        () => {
            isChartChangeRef.current = true;
            setIsTrend(true);
        },
        [setIsTrend]
    );
    const volumeOnClick = React.useCallback(
        () => {
            isChartChangeRef.current = true;
            setIsTrend(false);
        },
        [setIsTrend]
    );
    const myTeamOnClick = React.useCallback(
        () => setIsMyTeam(true),
        [setIsMyTeam]
    );
    const allTeamOnClick = React.useCallback(
        () => setIsMyTeam(false),
        [setIsMyTeam]
    );

    return (
        <main id="Dashboard" className="dashboard-page main-content">
            <PageHeader
                title="Warehouse dashboard"
                description="Monitor fulfillment performance, team capacity, and operational commitments."
                meta="Last updated: 5 minutes ago"
            />
            <section className="kpi-grid" aria-label="Warehouse performance summary">
                <KpiCard label="ORDERS SHIPPED TODAY" value="284" detail="▲ 8.4% vs yesterday" />
                <KpiCard label="ON-TIME FULFILLMENT" value="96.8%" detail="▲ 1.2 points vs target" />
                <KpiCard label="PICK QUEUE" value="37" detail="▲ 9 orders need attention" status="warning" />
                <KpiCard label="LOW-STOCK ALERTS" value="12" detail="▲ 3 new since 08:00" status="error" />
            </section>
            <div className="card-container grid">
                <div className="card-title"><h2>{localizationService.toLanguageString('custom.teamEfficiency')}</h2><p>Order revenue (USD) by team for the selected period.</p></div>
                <div className="card-buttons">
                    <ButtonGroup>
                        <Button togglable={true} selected={isTrend} onClick={trendOnClick}>
                            {localizationService.toLanguageString('custom.trend')}
                        </Button>
                        <Button togglable={true} selected={!isTrend} onClick={volumeOnClick}>
                            {localizationService.toLanguageString('custom.volume')}
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
                        groupByField={'teamID'}
                        groupResourceData={teams}
                        groupTextField={'teamName'}
                        groupColorField={'teamColor'}
                        seriesCategoryField={'orderDate'}
                        seriesField={'orderTotal'}
                        seriesType={isTrend ? 'line' : 'column'}
                        onRefresh={isChartChangeRef.current ? null : onChartRefresh}
                    />
                </div>
            </div>
            <div className="card-container grid">
                <div className="card-title"><h2>{localizationService.toLanguageString('custom.teamMembers')}</h2><p>Team capacity, engagement, and operating budget.</p></div>
                <div className="card-buttons">
                    <ButtonGroup>
                        <Button togglable={true} selected={isMyTeam} onClick={myTeamOnClick}>
                            {localizationService.toLanguageString('custom.myTeam')}
                        </Button>
                        <Button togglable={true} selected={!isMyTeam} onClick={allTeamOnClick}>
                            {localizationService.toLanguageString('custom.allTeams')}
                        </Button>
                    </ButtonGroup>
                </div>
                <span></span>
                <div className="card-component">
                    <Grid data={filterBy(data, gridFilterExpression)} style={{ height: 450 }} onDataChange={data => setData(data)}>
                        <Column title={localizationService.toLanguageString('custom.employee')} groupable={false}>
                            <Column field={'fullName'} title={localizationService.toLanguageString('custom.contactName')} columnMenu={ColumnMenu} width={230} cells={{ data: FullNameCell }} />
                            <Column field={'jobTitle'} title={localizationService.toLanguageString('custom.jobTitle')} columnMenu={ColumnMenu} width={230} />
                            <Column field={'country'} title={localizationService.toLanguageString('custom.country')} columnMenu={ColumnMenu} width={100} cells={{ data: FlagCell }} />
                            <Column field={'isOnline'} title={localizationService.toLanguageString('custom.status')} columnMenu={ColumnMenu} width={100} cells={{ data: OnlineCell }} filter={'boolean'} />
                        </Column>
                        <Column title={localizationService.toLanguageString('custom.performance')} groupable={false}>
                            <Column field={'rating'} title={localizationService.toLanguageString('custom.rating')} columnMenu={ColumnMenu} width={110} cells={{ data: RatingCell }} filter={'numeric'} />
                            <Column field={'target'} title={localizationService.toLanguageString('custom.engagement')} columnMenu={ColumnMenu} width={200} cells={{ data: EngagementCell }} filter={'numeric'} />
                            <Column field={'budget'} title={localizationService.toLanguageString('custom.budget')} columnMenu={ColumnMenu} width={100} cells={{ data: CurrencyCell }} filter={'numeric'} />
                        </Column>
                        <Column title={localizationService.toLanguageString('custom.contacts')} groupable={false}>
                            <Column field={'phone'} title={localizationService.toLanguageString('custom.phone')} columnMenu={ColumnMenu} width={130} />
                            <Column field={'address'} title={localizationService.toLanguageString('custom.address')} columnMenu={ColumnMenu} width={200} />
                        </Column>
                    </Grid>
                </div>
            </div>
            </main>
    );
}

export default Dashboard;
