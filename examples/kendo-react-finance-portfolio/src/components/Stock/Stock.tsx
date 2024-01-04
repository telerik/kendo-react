import * as React from 'react';
import { useParams } from 'react-router-dom';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { MS_PER_DAY } from '@progress/kendo-date-math';
import { classNames } from '@progress/kendo-react-common';
import { DropDownList, ListItemProps } from '@progress/kendo-react-dropdowns';

import { ReactComponent as areaIcon } from '../../icons/area.svg';
import { ReactComponent as lineIcon } from '../../icons/line.svg';
import { ReactComponent as candleIcon } from '../../icons/candle.svg';
import {
    StockChart,
    ChartSeries,
    ChartSeriesItem,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem,
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartNavigatorCategoryAxis,
} from '@progress/kendo-react-charts';

import 'hammerjs';
import styles from './stock.module.scss';
import { dataService } from '../../services';
import { useInternationalization } from '@progress/kendo-react-intl';

const DEFAULT_RANGE = {
    start: new Date(2019, 9, 28),
    end: new Date(2019, 10, 1)
}

const DEFAULT_INTERVAL = {
    unit: "hours",
    step: 1,
    duration: MS_PER_DAY / 24
}

enum CHART_TYPES {
    candle,
    line,
    area
}

const customItemRender = (el: React.ReactElement<HTMLLIElement>, props: ListItemProps) => (
    <el.type
        {...el.props}
        className={classNames(
            "pl-2",
            el.props.className,
            styles['ddl-list-item'],
            {
                [styles['k-state-selected']]: props.selected
            })}
    >
        <props.dataItem.icon />
        &nbsp;
        <span className="ml-3">{props.dataItem.name}</span>
    </el.type>)

const customValueRender = (el: any, value: any) => (
    <el.type
        {...el.props}
        className={classNames(
            "pl-2",
            el.props.className,
            styles['ddl-list-item'])}
    >
        {value
            ? (<><value.icon />
                &nbsp;
                <span className="ml-3">{value.name}</span></>)
            : null}

    </el.type>)

const customIntervalValueRender = (el: any, value: any) => (
    <el.type
        {...el.props}
        className={classNames(
            "pl-2",
            el.props.className,
            styles['ddl-list-item'])}
    >
        {value
            ? (<span className="ml-3">Interval {value.name}</span>)
            : null}

    </el.type >)

const ChartTypePicker = (props: any) => {
    const data = React.useMemo(() => [
        { name: 'Candle', icon: candleIcon, type: CHART_TYPES.candle },
        { name: 'Line', icon: lineIcon, type: CHART_TYPES.line },
        { name: 'Area', icon: areaIcon, type: CHART_TYPES.area }
    ], []);

    const handleChange = React.useCallback(
        (event: any) => {
            if (props.onChange) {
                props.onChange.call(undefined, { value: event.target.value.type })
            }
        },
        [props.onChange]
    )

    return (
        <DropDownList
            data={data}
            style={{
                width: 130,
                border: 'none'
            }}
            fillMode={null}
            value={data.find(i => i.type === props.value)}
            onChange={handleChange}
            textField={'name'}
            itemRender={customItemRender}
            valueRender={customValueRender}
        />
    )
}

const ChartIntervalPicker = (props: any) => {
    const data = React.useMemo(() => [
        { name: '5M', interval: { unit: 'minutes', step: 5, duration: MS_PER_DAY / 24 / 12 } },
        { name: '15M', interval: { unit: 'minutes', step: 15, duration: MS_PER_DAY / 96 } },
        { name: '30M', interval: { unit: 'minutes', step: 30, duration: MS_PER_DAY / 48 } },
        { name: '1H', interval: { unit: 'hours', step: 1, duration: MS_PER_DAY / 24 } },
        { name: '4H', interval: { unit: 'hours', step: 4, duration: MS_PER_DAY / 6 } },
        { name: '1D', interval: { unit: 'days', step: 1, duration: MS_PER_DAY } },
        { name: '1W', interval: { unit: 'weeks', step: 1, duration: MS_PER_DAY * 7 } },
    ], []);

    const handleChange = React.useCallback(
        (event: any) => {
            if (props.onChange) {
                props.onChange.call(undefined, { value: event.target.value.interval })
            }
        },
        [props.onChange]
    )

    return (
        <DropDownList
            data={data}
            style={{
                width: 150,
                border: 'none'
            }}
            fillMode={null}
            value={data.find(i => i.interval.unit === props.value.unit && i.interval.step === props.value.step)}
            onChange={handleChange}
            textField={'name'}
            valueRender={customIntervalValueRender}
        />
    )
}

const ChartRangePicker = (props: any) => {
    const [value, setValue] = React.useState(props.value);

    const handleChange = React.useCallback(
        (event: any) => {
            setValue(event.value);
            if (event.value.start && event.value.end) {
                props.onChange.call(undefined, event);
            }
        },
        [setValue, props.onChange]
    )

    const sync = () => {
        setValue(props.value);
    }

    React.useEffect(sync, [props.value]);

    return (
        <DateRangePicker
            calendarSettings={{ views: 1 }}
            value={value}
            onChange={handleChange}
            startDateInputSettings={{ label: '', width: 130 }}
            endDateInputSettings={{ label: '', width: 130 }}
            min={new Date("2019-10-1 00:00:00")}
            max={new Date("2019-11-1 00:00:00")}
        />
    )
}

const options = [
    { name: '1H', duration: MS_PER_DAY / 24 },
    { name: '4H', duration: MS_PER_DAY / 6 },
    { name: '12H', duration: MS_PER_DAY / 2 },
    { name: '1D', duration: MS_PER_DAY },
    { name: '4D', duration: MS_PER_DAY * 4 },
    { name: '1W', duration: MS_PER_DAY * 7 },
]
const ChartPredefinedRange = (props: any) => {
    const [selected, setSelected] = React.useState<string | null>('4D');

    const handleClick = React.useCallback(
        (event: React.SyntheticEvent<HTMLSpanElement>) => {
            event.preventDefault();
            const name = (event.target as HTMLElement).getAttribute("data-name");
            setSelected(name);
            if (!props.last) { return; }
            const end = props.last;
            const start = new Date(end.getTime() - Number((event.target as HTMLElement).getAttribute("data-duration")));
            const value = {
                start,
                end
            }
            if (props.onChange) {
                props.onChange.call(undefined, { value })
            }
        }, [props.last, props.onChange])

    const clear = () => {
        if (!props.last) { return; }
        const current = options.find(o => o.name === selected);
        if (current && props.value.start && props.last.getTime() - current.duration !== props.value.start.getTime()) {
            setSelected(null);
        }
    }

    React.useEffect(clear, [props.value, props.last, selected]);
    return (
        <div className={classNames("d-inline-block", styles['end-date-input'])}>
            <ul className="k-reset d-flex">
                {options.map((item) =>
                    <li className="ml-3" key={item.name} >
                        <span
                            onClick={handleClick}
                            data-name={item.name}
                            data-duration={item.duration}
                            className={classNames(
                                'list-item',
                                styles['list-item'],
                                { [styles['list-item-selected']]: item.name === selected },
                            )}
                        >
                            {item.name}
                        </span>
                    </li>
                )}
            </ul>
        </div>)
}

export const Stock = () => {
    const { symbol = "SNAP" } = useParams();
    const [data, setData] = React.useState<any>([]);
    const [range, setRange] = React.useState(DEFAULT_RANGE);
    const [interval, setInterval] = React.useState(DEFAULT_INTERVAL);
    const [type, setType] = React.useState<CHART_TYPES>(CHART_TYPES.candle);

    const handleRangeChange = React.useMemo(
        () => (event: any) => {
            setRange(event.value);
        },
        [setRange])

    const handleTypeChange = (event: any) => {
        setType(event.value);
    }

    const handleIntervalChange = (event: any) => {
        setInterval(event.value);
    }

    const fetchData = React.useCallback(async () => {
        const newData = await dataService.getSymbol(symbol);
        setData(newData)
    }, [symbol])

    React.useEffect(() => { fetchData() }, [fetchData]);


    const chartComp: React.ReactNode = React.useMemo(() => {
        switch (type) {
            case CHART_TYPES.candle:
                return <CandleChart data={data} interval={interval} range={range} onRangeChange={handleRangeChange} />;
            case CHART_TYPES.line:
                return <LineChart data={data} interval={interval} range={range} />;
            case CHART_TYPES.area:
                return <AreaChart data={data} interval={interval} range={range} />;
            default:
                return <LineChart data={data} interval={interval} range={range} />;
        }
    }, [type, interval, data, range, handleRangeChange]);

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-4 mb-3 mt-lg-0 text-center text-lg-left">
                    <ChartRangePicker
                        value={range}
                        onChange={handleRangeChange}
                    />
                </div>
                <div className="col-12 col-lg-4 mb-3 text-center m-lg-auto">
                    <ChartPredefinedRange
                        value={range}
                        onChange={handleRangeChange}
                        last={(data && data.length) ? new Date(data[data.length - 1].timestamp) : null}
                    />
                </div>
                <div className="col-12 col-lg-4 text-center text-lg-right">
                    <ChartIntervalPicker
                        value={interval}
                        onChange={handleIntervalChange}
                    />
                    <ChartTypePicker
                        value={type}
                        onChange={handleTypeChange}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col" >
                    {chartComp}
                </div>
            </div>
        </>
    )
}

const AreaChart = (props: any) => {
    const intl = useInternationalization();
    const plotBands = React.useMemo(
        () => {
            let result = [];
            let index = 0;
            if (!props.range.start || !props.range.end) { return; }
            const diff = (props.range.end.getTime() - props.range.start.getTime())
            const categories = diff / props.interval.duration;
            const step = categories / 12 < 1 ? 1 : categories / 12;

            for (let i = 0; i < categories; i += step) {
                if (index++ % 2 === 0) {
                    result.push({
                        color: '#000',
                        opacity: 0.03,
                        from: i,
                        to: i + step
                    })
                }
            }

            return result;
        }, [props.range, props.interval.duration]);



    return (<Chart
        renderAs="canvas"
        zoomable={false}
    // transitions={false}
    >
        <ChartSeries>
            <ChartSeriesItem
                data={props.data}
                type="area"
                field="close"
                color="#007BFF"
                // eslint-disable-next-line
                style={"smooth"}
                categoryAxis="close"
                axis="valueCloseAxis"
                categoryField="date"
                markers={{ visible: false, border: { color: "#007BFF" } }}
                tooltip={{ background: "#007BFF", visible: true, format: "{0:c}" }}
            />
        </ChartSeries>
        <ChartValueAxis>
            <ChartValueAxisItem
                name="valueCloseAxis"
                labels={{ content: ({ value }) => intl.formatNumber(value, 'c') }}
            />
        </ChartValueAxis>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem
                type="date"
                name="close"
                plotBands={plotBands}
                baseUnit={props.interval.unit}
                baseUnitStep={props.interval.step}
                maxDivisions={20}
                min={props.range.start}
                max={props.range.end}
                crosshair={{
                    visible: true,
                    tooltip: { visible: true, }
                }}
            />
        </ChartCategoryAxis>
    </Chart>)
}

const LineChart = (props: any) => {
    const intl = useInternationalization();

    const plotBands = React.useMemo(
        () => {
            let result = [];
            let index = 0;
            if (!props.range.start || !props.range.end) { return; }
            const diff = (props.range.end.getTime() - props.range.start.getTime())
            const categories = diff / props.interval.duration;
            const step = categories / 12 < 1 ? 1 : categories / 12;

            for (let i = 0; i < categories; i += step) {
                if (index++ % 2 === 0) {
                    result.push({
                        color: '#000',
                        opacity: 0.03,
                        from: i,
                        to: i + step
                    })
                }
            }

            return result;
        }, [props.range, props.interval.duration]);

    return (<Chart
        renderAs="canvas"
        zoomable={false}
    // transitions={false}
    >
        <ChartSeries>
            <ChartSeriesItem
                data={props.data}
                type="line"
                field="close"
                color="#007BFF"
                // eslint-disable-next-line react/style-prop-object
                style={"smooth"}
                categoryAxis="close"
                axis="valueCloseAxis"
                categoryField="date"
                markers={{ visible: true, border: { color: '#007BFF' } }}
                tooltip={{ background: "#007BFF", visible: true, format: "{0:c}" }}
            />
            <ChartSeriesItem
                data={props.data}
                type="column"
                field={"change"}
                axis={"valueChangeAxis"}
                categoryAxis="change"
                colorField="color"
                border={{ color: 'transparent' }}
                categoryField="date"
                gap={0.75}
                tooltip={{ format: "{0:p2}" }}
            />
        </ChartSeries>
        <ChartValueAxis>
            <ChartValueAxisItem
                name="valueCloseAxis"
                labels={{ content: ({ value }) => intl.formatNumber(value, 'c') }}
            />
            <ChartValueAxisItem
                name="valueChangeAxis"
                min={0}
                max={0.4}
                visible={false}
            />
        </ChartValueAxis>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem
                type="date"
                baseUnit={props.interval.unit}
                baseUnitStep={props.interval.step * 4}
                name="close"
                labels={{
                    content: (e) => e.value.getDate() === 1
                        ? intl.formatDate(e.value, "MMM")
                        : e.value.getHours() === 0
                            ? e.value.getDate()
                            : ''
                }}
                min={props.range.start}
                max={props.range.end}
            />
            <ChartCategoryAxisItem
                type="date"
                name="change"
                line={{ visible: false }}
                crosshair={{ visible: true, tooltip: { visible: true, format: '{0:t}' } }}
                majorTicks={{ visible: false }}
                minorTicks={{ visible: false }}
                plotBands={plotBands}
                baseUnit={props.interval.unit}
                baseUnitStep={props.interval.step}
                min={props.range.start}
                max={props.range.end}
                labels={{ visible: false }}
            />
        </ChartCategoryAxis>
    </Chart>)
}

const CandleChart = (props: any) => {
    const intl = useInternationalization();

    const handleSelectEnd = (args: any) => {
        props.onRangeChange.call(undefined, {
            value: {
                start: args.from,
                end: args.to
            }
        });
    }

    const customAggregate = React.useMemo(
        () => ({
            open: (val: any[]) => val[0],
            close: (val: any[]) => val[val.length - 1],
            high: (val: any[]) => Math.max(...val),
            low: (val: any[]) => Math.min(...val),
            volume: (val: any[]) => val[0]
        }),
        [])

    const plotBands = React.useMemo(
        () => {
            let result = [];
            let index = 0;
            if (!props.range.start || !props.range.end) { return; }
            const diff = (props.range.end.getTime() - props.range.start.getTime())
            const categories = diff / props.interval.duration;
            const step = categories / 12 < 1 ? 1 : categories / 12;

            for (let i = 0; i < categories; i += step) {
                if (index++ % 2 === 0) {
                    result.push({
                        color: '#000',
                        opacity: 0.03,
                        from: i,
                        to: i + step
                    })
                }
            }

            return result;
        }, [props.range, props.interval.duration]);

    return (
        <StockChart
            renderAs="canvas"
            zoomable={false}
            // transitions={false}
            onSelectEnd={handleSelectEnd}
            onZoomStart={(e) => e.preventDefault()}
        >
            <ChartSeries >
                <ChartSeriesItem
                    data={props.data}
                    colorField="color"
                    downColorField="color"
                    type="candlestick"
                    openField="open"
                    closeField="close"
                    lowField="low"
                    highField="high"
                    categoryField="date"
                    aggregate={customAggregate}
                    gap={0.75}
                    border={{ color: 'transparent' }}
                    tooltip={{
                        format: `
                        <table>
                        <tbody>
                        <tr><th>{4:t}</th><th>{4:d/M}</th></tr> 
                        <tr><td>Open:</td> <td>{0:c2}</td></tr>
                        <tr><td>High:</td><td>{1:c2}</td></tr>
                        <tr><td>Low:</td><td>{2:c2}</td></tr>
                        <tr><td>Close:</td><td>{3:c2}</td></tr>
                        </tbody>
                        </table>
                    `}}
                />
                <ChartSeriesItem
                    data={props.data}
                    type="column"
                    field={"change"}
                    axis={"valueChangeAxis"}
                    colorField="color"
                    border={{ color: 'transparent' }}
                    categoryField="date"
                    gap={0.75}
                    aggregate="avg"
                    tooltip={{ format: "{0:p2}" }}
                />
            </ChartSeries>
            <ChartValueAxis>
                <ChartValueAxisItem
                    crosshair={{ visible: true }}
                    labels={{ content: ({ value }) => intl.formatNumber(value, 'c') }}
                />
                <ChartValueAxisItem
                    name="valueChangeAxis"
                    min={0}
                    max={0.2}
                    visible={false}
                />
            </ChartValueAxis>
            <ChartCategoryAxis>
                <ChartCategoryAxisItem
                    crosshair={{ visible: true }}
                    baseUnit={props.interval.unit}
                    baseUnitStep={props.interval.step}
                    plotBands={plotBands}
                    labels={{ visible: false }}
                />
            </ChartCategoryAxis>
            <ChartNavigator >
                <ChartNavigatorSelect mousewheel={false} from={props.range.start} to={props.range.end} />
                <ChartNavigatorSeries>
                    <ChartNavigatorSeriesItem
                        data={props.data}
                        type="area"
                        field="close"
                        categoryField="date"
                        tooltip={{ visible: false }}
                        highlight={{ visible: false }}
                    />
                </ChartNavigatorSeries>
                <ChartNavigatorCategoryAxis
                    baseUnit={"days"}
                    labels={{ content: (e) => e.value.getDate() === 1 ? intl.formatDate(e.value, "MMM") : e.value.getDate() }}
                />
            </ChartNavigator>
        </StockChart>)
}