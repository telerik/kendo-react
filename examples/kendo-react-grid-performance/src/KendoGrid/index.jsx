import React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Switch, Slider } from '@progress/kendo-react-inputs';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody
  } from "@progress/kendo-react-layout";
  import { useInternationalization } from "@progress/kendo-react-intl";
  import { process } from '@progress/kendo-data-query';

import { debounce } from '../utils';
import { ColumnMenu } from './column-menu';
import { ChangeCell, ChangePercentCell, PriceCell, ChartCell } from './templates';

const DEBOUNCE_TIME = 250;
const VOLUME_INITIAL = 10000;
const VOLUME_STEP = 1000;
const FREQUENCY_INITIAL = 100;
const FREQUENCY_STEP = 100;
const PAGE_SIZE = 25;


const BUTTON_META = {
    live: {
        title: 'Live Prices',
        icon: 'refresh'
    },
    liveAll: {
        title: 'Live All Prices',
        icon: 'refresh'
    },
    stop: {
        title: 'Stop',
        icon: 'stop'
    }
};

export const KendoGrid = (props) => {
    const intl = useInternationalization();
    // const [_, setForceUpdate] = React.useState(false);


    const [realUpdate, setRealUpdate] = React.useState(false);
    const [updateTime, setUpdateTime] = React.useState([]);
    const [averageUpdate, setAverageUpdate] = React.useState(0);

    const [showColumnMenu, setShowColumnMenu] = React.useState(true);
    const [enableColumnVirtualization, setEnableColumnVirtualization] = React.useState(true);
    const [grouping, setGrouping] = React.useState(false);

    const [dataState, setDataState] = React.useState({
        // NOTE: can be split on different states for better performance and change detection
        group: [],
        sort: [],
        skip: 0,
        take: PAGE_SIZE
    })
    const volumeRef = React.useRef(VOLUME_INITIAL);
    const frequencyRef = React.useRef(FREQUENCY_INITIAL);
    const [selectedButton, setSelectedButton] = React.useState("stop");
    const [liveUpdating, setLiveUpdating] = React.useState(false);
    // const lastSelectedIndexRef = React.useRef(0);
    const debouncedDataReset = React.useMemo(
        () => debounce((currentVolume) => {
            props.onDataReset(currentVolume)
        }, DEBOUNCE_TIME),
        [props]
    );

    React.useEffect(
        () => {
            props.onDataReset(volumeRef.current);
        },
        [props]
    );

    React.useEffect(() => {
        setRealUpdate(true);
    }, [props.data, dataState])

    const onDataStateChange = React.useCallback(
        (event) => {
            setDataState(event.dataState);
        },
        []
    );

    const onColumnMenuChange = () => {
        setShowColumnMenu(!showColumnMenu);
    }

    const onColumnVirtualizationChange = () => {
        setEnableColumnVirtualization(!enableColumnVirtualization);
    }

    const onGroupingChange = () => {
        setGrouping(!grouping);
    }

    const onVolumeChange = React.useCallback(
        (event) => {
            const currentVolume = Math.floor(event.value / VOLUME_STEP) * VOLUME_STEP;
            volumeRef.current = currentVolume;
            debouncedDataReset(currentVolume);
        },
        [debouncedDataReset]
    );

    const onFrequencyChange = React.useCallback(
        (event) => {
            frequencyRef.current = Math.floor(event.value / FREQUENCY_STEP) * FREQUENCY_STEP;
            debouncedDataReset(volumeRef.current);
        },
        [debouncedDataReset]
    );

    const onSelectClick = React.useCallback(
        (event) => {
            const currentButton = event.currentTarget.name;
            setSelectedButton(currentButton);
            switch (currentButton) {
                case "live":
                    props.onStartLiveUpdate(frequencyRef.current);
                    setLiveUpdating(true);
                    break;
                case "liveAll":
                    props.onStartLiveUpdateAll(frequencyRef.current);
                    setLiveUpdating(true);
                    break;
                case "stop":
                    props.onStopLiveUpdate();
                    setLiveUpdating(false);
                    break;
                default:
            }
        },
        [props]
    );

    const onProfilerCallback = (
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
    ) => {
        if (realUpdate) {
            let currentUpdateTime = [...updateTime];
            currentUpdateTime.push(actualDuration);
            // console.log(updateTime, 'update time')
            setRealUpdate(false);
            setUpdateTime(currentUpdateTime);
            const sum = updateTime.reduce((a, b) => a + b, 0);
            const avg = (sum / updateTime.length) || 0;
            setAverageUpdate(avg);
        }
    }

    //console.time('processdata');
    const processedData = process(props.data, dataState);
    //console.timeEnd('processdata');

    return (
        <>
            <div>
                <div className={'row m-3'}>
                    <div className={'col-3'}>
                        <div style={{ minWidth: 140 }}>
                            <Switch
                                onChange={onColumnMenuChange}
                                checked={showColumnMenu}
                            />
                            &nbsp;Column Menu
                        </div>
                    </div>
                    <div className={'col-3'}>
                        <div style={{ minWidth: 140 }}>
                            <Switch
                                onChange={onColumnVirtualizationChange}
                                checked={enableColumnVirtualization}
                            />
                            &nbsp;Column Virtualization
                        </div>
                    </div>
                    <div className={'col-3'}>
                        <div style={{ minWidth: 140 }}>
                            <Switch
                                onChange={onGroupingChange}
                            />
                            &nbsp;Grouping
                        </div>
                    </div>
                </div>
                <div className={'row m-3'}>
                    <div className='col-3'>
                        <label>
                            Records: {volumeRef.current} <br />
                            <Slider
                                min={0}
                                max={1000000}
                                step={VOLUME_STEP}
                                defaultValue={volumeRef.current}
                                onChange={onVolumeChange}
                                disabled={liveUpdating}
                            />
                        </label>
                    </div>
                    <div className='col-3'>
                        <label>
                            Frequency: {frequencyRef.current} ms <br />
                            <Slider
                                min={100}
                                max={3000}
                                step={10}
                                defaultValue={frequencyRef.current}
                                onChange={onFrequencyChange}
                                disabled={liveUpdating}
                            />
                        </label>
                    </div>
                </div>
                <div className={'row m-3'}>
                    <div className='col'>
                        <ButtonGroup className={'intechsample-btn-group'}>
                            {
                                Object
                                    .keys(BUTTON_META)
                                    .filter(key => BUTTON_META[key] !== 'number')
                                    .map(
                                        (key) => (
                                            <Button
                                                togglable={true}
                                                selected={selectedButton === Number(key)}
                                                onClick={onSelectClick}
                                                name={key}
                                                icon={BUTTON_META[key].icon}
                                                style={{ width: 200 }}
                                                key={key}
                                            >
                                                {BUTTON_META[key].title}
                                            </Button>
                                        )
                                    )
                            }
                        </ButtonGroup>
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col-9'>
                        <React.Profiler id="Navigation" onRender={onProfilerCallback}>
                            <Grid
                                style={{
                                    width: 1300,
                                    height: 650
                                }}
                                sortable={true}
                                rowHeight={50}
                                scrollable={'virtual'}
                                columnVirtualization={enableColumnVirtualization}

                                {...dataState}
                                total={props.data.length}
                                data={processedData}
                                columnMenu={showColumnMenu && ColumnMenu}
                                onDataStateChange={onDataStateChange}
                                groupable={grouping}

                                dataItemKey='ID'
                            >
                                <GridColumn field={'Stock'} width={110} />
                                <GridColumn field={'Open Price'} width={120} filter={'numeric'} format="{0:c4}" />
                                <GridColumn field={'Price'} width={130} filter={'numeric'} cell={PriceCell} />
                                <GridColumn field={'Change'} width={90} className={'numeric change'} filter={'numeric'} headerClassName={'headerAlignStyle'} cell={ChangeCell} />
                                <GridColumn field={'Change(%)'} width={90} className={'numeric change'} filter={'numeric'} cell={ChangePercentCell} />
                                <GridColumn field={'Buy'} width={110} filter={'numeric'} format={'{0:c4}'} />
                                <GridColumn field={'Sell'} width={110} filter={'numeric'} format={'{0:c4}'} />
                                <GridColumn field={'Spread'} width={110} filter={'numeric'} format={'{0:c4}'} />
                                <GridColumn field={'Volume'} width={110} filter={'numeric'} format={'{0:c4}'} />
                                <GridColumn field={'High(D)'} width={110} filter={'numeric'} format={'{0:c4}'} />
                                <GridColumn field={'Low(D)'} width={110} filter={'numeric'} format={'{0:c4}'} />
                                <GridColumn field={'High(Y)'} width={110} filter={'numeric'} format={'{0:c4}'} />
                                <GridColumn field={'Low(Y)'} width={110} filter={'numeric'} format={'{0:c4}'} />
                                <GridColumn field={'Start(Y)'} width={110} filter={'numeric'} format={'{0:c4}'} />
                                <GridColumn field={'Chart'} width={60} className={'center-text'} cell={ChartCell} />
                                <GridColumn field={'Country'} width={110} />
                                <GridColumn field={'City'} width={100} />
                                <GridColumn field={'Category'} width={120} />
                                <GridColumn field={'Type'} width={100} />
                                <GridColumn field={'Settlement'} width={100} />
                                <GridColumn field={'Industry'} width={100} filterable={false} />
                                <GridColumn field={'Sector'} width={120} filterable={false} resizable={true} />
                                <GridColumn field={'SubSector'} width={100} filterable={false} />
                                <GridColumn field={'SectorType'} width={90} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={170} filterable={false} resizable={true} />
                                <GridColumn field={'FullName'} width={60} filterable={false} />
                                <GridColumn field={'FitchRating'} width={60} filterable={false} />
                                <GridColumn field={'DBRSRating'} width={60} filterable={false} />
                                <GridColumn field={'Address'} width={90} filterable={false} />
                                <GridColumn field={'Currency'} width={60} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={120} filterable={false} />
                                <GridColumn field={'SectorCode'} width={80} filterable={false} />
                                <GridColumn field={'Phone'} width={100} filterable={false} />
                                <GridColumn field={'Ticker'} width={60} filterable={false} />
                                <GridColumn field={'Cpn'} width={80} filterable={false} />
                                <GridColumn field={'Maturity'} width={120} filterable={false} />
                                <GridColumn field={'KRD_10YR'} width={110} filterable={false} />
                                <GridColumn field={'CUSIP'} width={90} filterable={false} />
                                <GridColumn field={'KRD_5YR'} width={50} filterable={false} />
                                <GridColumn field={'KRD_1YR'} width={80} filterable={false} />
                                <GridColumn field={'Industry'} width={100} filterable={false} />
                                <GridColumn field={'Sector'} width={120} filterable={false} resizable={true} />
                                <GridColumn field={'SubSector'} width={100} filterable={false} />
                                <GridColumn field={'SectorType'} width={90} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={170} filterable={false} resizable={true} />
                                <GridColumn field={'FullName'} width={60} filterable={false} />
                                <GridColumn field={'FitchRating'} width={60} filterable={false} />
                                <GridColumn field={'DBRSRating'} width={60} filterable={false} />
                                <GridColumn field={'Address'} width={90} filterable={false} />
                                <GridColumn field={'Currency'} width={60} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={120} filterable={false} />
                                <GridColumn field={'SectorCode'} width={80} filterable={false} />
                                <GridColumn field={'Phone'} width={100} filterable={false} />
                                <GridColumn field={'Ticker'} width={60} filterable={false} />
                                <GridColumn field={'Cpn'} width={80} filterable={false} />
                                <GridColumn field={'Maturity'} width={120} filterable={false} />
                                <GridColumn field={'KRD_10YR'} width={110} filterable={false} />
                                <GridColumn field={'CUSIP'} width={90} filterable={false} />
                                <GridColumn field={'KRD_5YR'} width={50} filterable={false} />
                                <GridColumn field={'KRD_1YR'} width={80} filterable={false} />
                                <GridColumn field={'Industry'} width={100} filterable={false} />
                                <GridColumn field={'Sector'} width={120} filterable={false} resizable={true} />
                                <GridColumn field={'SubSector'} width={100} filterable={false} />
                                <GridColumn field={'SectorType'} width={90} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={170} filterable={false} resizable={true} />
                                <GridColumn field={'FullName'} width={60} filterable={false} />
                                <GridColumn field={'FitchRating'} width={60} filterable={false} />
                                <GridColumn field={'DBRSRating'} width={60} filterable={false} />
                                <GridColumn field={'Address'} width={90} filterable={false} />
                                <GridColumn field={'Currency'} width={60} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={120} filterable={false} />
                                <GridColumn field={'SectorCode'} width={80} filterable={false} />
                                <GridColumn field={'Phone'} width={100} filterable={false} />
                                <GridColumn field={'Ticker'} width={60} filterable={false} />
                                <GridColumn field={'Cpn'} width={80} filterable={false} />
                                <GridColumn field={'Maturity'} width={120} filterable={false} />
                                <GridColumn field={'KRD_10YR'} width={110} filterable={false} />
                                <GridColumn field={'CUSIP'} width={90} filterable={false} />
                                <GridColumn field={'KRD_5YR'} width={50} filterable={false} />
                                <GridColumn field={'KRD_1YR'} width={80} filterable={false} />
                                <GridColumn field={'Industry'} width={100} filterable={false} />
                                <GridColumn field={'Sector'} width={120} filterable={false} resizable={true} />
                                <GridColumn field={'SubSector'} width={100} filterable={false} />
                                <GridColumn field={'SectorType'} width={90} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={170} filterable={false} resizable={true} />
                                <GridColumn field={'FullName'} width={60} filterable={false} />
                                <GridColumn field={'FitchRating'} width={60} filterable={false} />
                                <GridColumn field={'DBRSRating'} width={60} filterable={false} />
                                <GridColumn field={'Address'} width={90} filterable={false} />
                                <GridColumn field={'Currency'} width={60} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={120} filterable={false} />
                                <GridColumn field={'SectorCode'} width={80} filterable={false} />
                                <GridColumn field={'Phone'} width={100} filterable={false} />
                                <GridColumn field={'Ticker'} width={60} filterable={false} />
                                <GridColumn field={'Cpn'} width={80} filterable={false} />
                                <GridColumn field={'Maturity'} width={120} filterable={false} />
                                <GridColumn field={'KRD_10YR'} width={110} filterable={false} />
                                <GridColumn field={'CUSIP'} width={90} filterable={false} />
                                <GridColumn field={'KRD_5YR'} width={50} filterable={false} />
                                <GridColumn field={'KRD_1YR'} width={80} filterable={false} />
                                <GridColumn field={'Industry'} width={100} filterable={false} />
                                <GridColumn field={'Sector'} width={120} filterable={false} resizable={true} />
                                <GridColumn field={'SubSector'} width={100} filterable={false} />
                                <GridColumn field={'SectorType'} width={90} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={170} filterable={false} resizable={true} />
                                <GridColumn field={'FullName'} width={60} filterable={false} />
                                <GridColumn field={'FitchRating'} width={60} filterable={false} />
                                <GridColumn field={'DBRSRating'} width={60} filterable={false} />
                                <GridColumn field={'Address'} width={90} filterable={false} />
                                <GridColumn field={'Currency'} width={60} filterable={false} />
                                <GridColumn field={'SecurityCode'} width={120} filterable={false} />
                                <GridColumn field={'SectorCode'} width={80} filterable={false} />
                                <GridColumn field={'Phone'} width={100} filterable={false} />
                                <GridColumn field={'Ticker'} width={60} filterable={false} />
                                <GridColumn field={'Cpn'} width={80} filterable={false} />
                                <GridColumn field={'Maturity'} width={120} filterable={false} />
                                <GridColumn field={'KRD_10YR'} width={110} filterable={false} />
                                <GridColumn field={'CUSIP'} width={90} filterable={false} />
                                <GridColumn field={'KRD_5YR'} width={50} filterable={false} />
                                <GridColumn field={'KRD_1YR'} width={80} filterable={false} />
                            </Grid>
                        </React.Profiler>
                    </div>
                    <div className='col-3'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Performance results</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <p>Last update took: {intl.formatNumber(updateTime[updateTime.length - 1], 'n5')} milliseconds</p>
                            <p>Average time for an update is: {intl.formatNumber(averageUpdate, 'n5')} milliseconds</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

KendoGrid.displayName = 'KendoGrid';
