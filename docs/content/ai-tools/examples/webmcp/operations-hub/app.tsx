import * as React from 'react';
import { Grid, GridColumn as Column, GridColumnMenuFilter, GridColumnMenuProps } from '@progress/kendo-react-grid';
import { process, DataResult, State } from '@progress/kendo-data-query';
import { Map, MapLayers, MapTileLayer, MapMarkerLayer, TileUrlTemplateArgs } from '@progress/kendo-react-map';
import { Spreadsheet } from '@progress/kendo-react-spreadsheet';
import { WebMcpProvider } from '@progress/kendo-react-webmcp';
import { filterIcon } from '@progress/kendo-svg-icons';
import { generateShipments, generateWarehouseMarkers, warehouseDescriptions, warehouses } from './data';
import type { Shipment, WarehouseMarker } from './data';
import './styles.css';

const ColumnMenu = (props: GridColumnMenuProps) => (
    <div>
        <GridColumnMenuFilter {...props} expanded={true} />
    </div>
);

// ---------------------------------------------------------------------------
// Status cell renderer
// ---------------------------------------------------------------------------
const StatusCell = (props: any) => {
    const status: string = props.dataItem.status;
    const dotClassMap: Record<string, string> = {
        'In Transit': 'in-transit',
        Delivered: 'delivered',
        Delayed: 'delayed',
        Pending: 'pending'
    };
    const dotClass = dotClassMap[status] || 'pending';
    return (
        <td>
            <span className={`status-dot ${dotClass}`} />
            <span className="status-text">{status}</span>
        </td>
    );
};

// ---------------------------------------------------------------------------
// Prompt suggestions
// ---------------------------------------------------------------------------
const shipmentPrompts = [
    {
        label: 'Hero (3-tool)',
        text: 'Filter the shipment tracker to delayed shipments going to London, add a pin on the map for each one, and write all those filtered rows into the Warehouse Capacity spreadsheet.'
    },
    {
        label: 'Multi-tool',
        text: 'Show all shipments worth over $100,000, plot every delivery address on the map, and populate the spreadsheet with their tracking number, destination, address, carrier and value.'
    },
    { label: 'Filter only', text: 'Filter the shipment tracker to only delayed shipments.' },
    { label: 'Filter only', text: 'Show shipments going to Singapore.' },
    { label: 'Export', text: 'Export the shipment tracker to Excel.' }
];
const mapSpreadsheetPrompts = [
    {
        label: 'Grid → Map',
        text: 'Show me all delayed shipments going to London and plot their delivery addresses on the map.'
    },
    {
        label: 'Grid → Sheet',
        text: 'Filter the grid to delayed shipments, then populate the spreadsheet with one row per shipment (Tracking #, Destination, Delivery Address, Carrier, Value, Status).'
    },
    { label: 'Map', text: 'Add a marker at the new Dallas warehouse location (32.78, -96.80).' },
    { label: 'Spreadsheet', text: "Add a new sheet called 'Q3 Forecast' to the warehouse capacity spreadsheet." },
    { label: 'Spreadsheet', text: 'Export the warehouse capacity spreadsheet to Excel.' }
];

// ---------------------------------------------------------------------------
// Main App
// ---------------------------------------------------------------------------
const App = () => {
    // Data
    const [shipments] = React.useState<Shipment[]>(() => generateShipments());
    const [mapMarkers] = React.useState<WarehouseMarker[]>(() => generateWarehouseMarkers());

    // Grid state
    const [dataState, setDataState] = React.useState<State>({
        sort: [],
        skip: 0,
        take: 20
    });
    const gridData = React.useMemo<DataResult>(() => process(shipments, dataState), [shipments, dataState]);
    const [highlightDescriptor, setHighlightDescriptor] = React.useState<any>({});

    // KPIs
    const totalShipments = shipments.length;
    const inTransit = shipments.filter((s) => s.status === 'In Transit').length;
    const delayed = shipments.filter((s) => s.status === 'Delayed').length;
    const deliveredValue = shipments.filter((s) => s.status === 'Delivered').reduce((sum, s) => sum + s.value, 0);

    // Map tool description (includes warehouse list)
    const mapAddMarkerDesc =
        'Add a pin/marker on the Global Warehouse Network map. ' +
        'Use this to plot warehouse locations OR shipment delivery addresses returned by the shipment-tracker grid. ' +
        'For shipment delivery addresses: ALWAYS first call shipment-tracker Filter (when criteria given) and then shipment-tracker GetData to fetch the current rows. ' +
        'Each grid row exposes destinationStreet, destination (city), destinationLat and destinationLng — pass destinationLat as latitude and destinationLng as longitude, one call per shipment. ' +
        "Use destinationStreet or '{trackingNumber} — {destination}' as the marker title. " +
        'Available warehouses (for warehouse pins): ' +
        warehouseDescriptions();

    // Grid webMcp with custom tool descriptions
    const gridWebMcp = React.useMemo(
        () => ({
            dataName: 'shipment-tracker',
            tools: (tools: any[]) =>
                tools.map((t) => {
                    switch (t.name) {
                        case 'filter':
                            return {
                                ...t,
                                description:
                                    'Narrow the Shipment Tracker grid to a subset of rows. Use this whenever the user asks to see, show, focus on, or look at shipments matching some criteria. ' +
                                    "Available column fields: status (values: 'In Transit', 'Delivered', 'Delayed', 'Pending'), " +
                                    'destination (city name: New York, London, Berlin, Dubai, Singapore, Mexico City, Toronto, Johannesburg, Seoul, Sydney), ' +
                                    'origin (Chicago, Rotterdam, Shanghai, São Paulo, Mumbai, Tokyo, Sydney, Lagos), carrier, region (North America, Europe, Asia Pacific, Latin America, Africa, Oceania), ' +
                                    'value (number), weight (number). Always call this FIRST before warehouse-map AddMarker or inventory-sheet SetCell when the user asks to plot or export shipments.'
                            };
                        case 'clear_filters':
                            return { ...t, description: 'Remove all active filters from the Shipment Tracker grid.' };
                        case 'sort':
                            return {
                                ...t,
                                description:
                                    'Sort the Shipment Tracker grid by a column, e.g. value descending or eta ascending.'
                            };
                        case 'get_data':
                            return {
                                ...t,
                                description:
                                    'Read the rows currently visible in the Shipment Tracker (after any active filter/sort) as JSON. ' +
                                    'ALWAYS call this AFTER a Filter step when the user wants to plot shipments on the map or write them to the warehouse spreadsheet. ' +
                                    'Each returned row exposes: trackingNumber, origin, destination (city), destinationStreet (full delivery address), ' +
                                    'destinationLat, destinationLng, status, carrier, value, weight, shipDate, eta. ' +
                                    'Use destinationLat/destinationLng with warehouse-map AddMarker, and feed the rows into inventory-sheet SetCell.'
                            };
                        default:
                            return t;
                    }
                })
        }),
        []
    );

    // Map webMcp with custom add_marker description
    const mapWebMcp = React.useMemo(
        () => ({
            dataName: 'warehouse-map',
            tools: (tools: any[]) =>
                tools.map((t) => {
                    if (t.name === 'add_marker') {
                        return { ...t, description: mapAddMarkerDesc };
                    }
                    return t;
                })
        }),
        [mapAddMarkerDesc]
    );

    // Spreadsheet webMcp with custom set_cell description
    const spreadsheetWebMcp = React.useMemo(
        () => ({
            dataName: 'inventory-sheet',
            tools: (tools: any[]) =>
                tools.map((t) => {
                    switch (t.name) {
                        case 'set_cell':
                            return {
                                ...t,
                                description:
                                    'Write a single cell value into the Warehouse Capacity spreadsheet. ' +
                                    'To populate the spreadsheet from the Shipment Tracker grid, ALWAYS first call shipment-tracker Filter (if criteria given) ' +
                                    'and then shipment-tracker GetData to retrieve the visible rows. Then call this tool MULTIPLE TIMES to write: ' +
                                    "(1) a header row at row 1 with columns A='Tracking #', B='Origin', C='Destination', D='Delivery Address', E='Status', " +
                                    "F='Carrier', G='Value', H='Weight (kg)', I='Ship Date', J='ETA', K='Dest. Lat', L='Dest. Lng'; " +
                                    'and (2) one row per shipment starting at row 2, mapping trackingNumber→A, origin→B, destination→C, destinationStreet→D, ' +
                                    'status→E, carrier→F, value→G, weight→H, shipDate→I, eta→J, destinationLat→K, destinationLng→L. ' +
                                    "Cell addresses use A1 notation (e.g. 'A1', 'B2')."
                            };
                        case 'add_sheet':
                            return {
                                ...t,
                                description:
                                    "Add a new sheet to the Warehouse Capacity spreadsheet, e.g. when the user asks for a 'Q3 Forecast' or a separate sheet for filtered data."
                            };
                        case 'rename_sheet':
                            return { ...t, description: 'Rename a sheet in the Warehouse Capacity spreadsheet.' };
                        case 'export':
                            return {
                                ...t,
                                description: 'Export the Warehouse Capacity spreadsheet to an Excel (.xlsx) file.'
                            };
                        default:
                            return t;
                    }
                })
        }),
        []
    );

    return (
        <div className="ops-hub">
            {/* ---- Header with KPIs ---- */}
            <div className="ops-hub-header">
                <div>
                    <h1>NovaTech Global Operations Hub</h1>
                    <p>Real-time logistics monitoring across 8 warehouses — AI-powered with WebMCP tools</p>
                </div>
                <div className="kpi-strip">
                    <div className="kpi">
                        <span className="kpi-value">{totalShipments}</span>
                        <span className="kpi-label">Shipments</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-value">{inTransit}</span>
                        <span className="kpi-label">In Transit</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-value" style={{ color: '#f87171' }}>
                            {delayed}
                        </span>
                        <span className="kpi-label">Delayed</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-value">${deliveredValue.toLocaleString()}</span>
                        <span className="kpi-label">Delivered Value</span>
                    </div>
                </div>
            </div>

            <WebMcpProvider>
                {/* ---- Row 1: Shipment Tracker Grid (full width) ---- */}
                <div className="ops-row full">
                    <div className="ops-panel">
                        <h3 className="ops-panel-title">
                            Shipment Tracker <span className="badge">{totalShipments} records</span>
                        </h3>
                        <Grid
                            data={gridData}
                            dataItemKey="id"
                            sortable={true}
                            groupable={true}
                            columnMenu={ColumnMenu}
                            columnMenuIcon={filterIcon}
                            pageable={{ pageSizes: [10, 20, 50] }}
                            reorderable={true}
                            resizable={true}
                            selectable={{ enabled: true, mode: 'multiple' }}
                            onSelectionChange={() => {}}
                            onHeaderSelectionChange={() => {}}
                            onHighlightChange={(e) => setHighlightDescriptor(e.highlight)}
                            highlight={highlightDescriptor}
                            sort={dataState.sort}
                            filter={dataState.filter}
                            group={dataState.group}
                            skip={dataState.skip}
                            take={dataState.take}
                            total={shipments.length}
                            onDataStateChange={(e) => setDataState(e.dataState)}
                            onGroupExpandChange={() => {}}
                            csv={true}
                            style={{ height: 420 }}
                            webMcp={gridWebMcp}
                        >
                            <Column field="trackingNumber" title="Tracking #" minWidth={140} />
                            <Column field="origin" title="Origin" minWidth={130} />
                            <Column field="destination" title="Destination" minWidth={130} />
                            <Column field="destinationStreet" title="Delivery Address" minWidth={220} />
                            <Column field="destinationLat" title="Dest. Lat" minWidth={100} hidden={true} />
                            <Column field="destinationLng" title="Dest. Lng" minWidth={100} hidden={true} />
                            <Column field="status" title="Status" minWidth={120} cells={{ data: StatusCell }} />
                            <Column field="carrier" title="Carrier" minWidth={130} />
                            <Column field="value" title="Value" minWidth={110} format="{0:c0}" />
                            <Column field="weight" title="Weight (kg)" minWidth={110} format="{0:n0}" />
                            <Column field="shipDate" title="Ship Date" minWidth={120} format="{0:MMM dd}" />
                            <Column field="eta" title="ETA" minWidth={120} format="{0:MMM dd}" />
                        </Grid>
                    </div>
                </div>

                {/* ---- Row 2: Map + Spreadsheet ---- */}
                <div className="ops-row">
                    <div className="ops-panel">
                        <h3 className="ops-panel-title">
                            Global Warehouse Network <span className="badge">{warehouses.length} locations</span>
                        </h3>
                        <Map center={[20, 0]} zoom={2} style={{ width: '100%', flex: '1 1 auto' }} webMcp={mapWebMcp}>
                            <MapLayers>
                                <MapTileLayer
                                    urlTemplate={(args: TileUrlTemplateArgs) =>
                                        `https://tile.openstreetmap.org/${args.zoom}/${args.x}/${args.y}.png`
                                    }
                                    attribution="&copy; OpenStreetMap contributors"
                                />
                                <MapMarkerLayer data={mapMarkers} locationField="latlng" titleField="name" />
                            </MapLayers>
                        </Map>
                    </div>

                    <div className="ops-panel">
                        <h3 className="ops-panel-title">Warehouse Capacity</h3>
                        <Spreadsheet style={{ width: '100%', height: 460 }} webMcp={spreadsheetWebMcp} />
                    </div>
                </div>
            </WebMcpProvider>

            {/* ---- Prompt suggestions ---- */}
            {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 8 }}>
                <div>
                    <div
                        style={{
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: 'uppercase' as const,
                            letterSpacing: '0.6px',
                            color: '#94a3b8',
                            marginBottom: 8
                        }}
                    >
                        Shipment Tracker Prompts
                    </div>
                    <div className="ops-prompts">
                        {shipmentPrompts.map((p) => (
                            <div key={`${p.label}-${p.text.slice(0, 20)}`} className="ops-prompt-row">
                                <span className="ops-prompt-label">{p.label}:</span>
                                <span>{p.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: 'uppercase' as const,
                            letterSpacing: '0.6px',
                            color: '#94a3b8',
                            marginBottom: 8
                        }}
                    >
                        Map &amp; Spreadsheet Prompts
                    </div>
                    <div className="ops-prompts">
                        {mapSpreadsheetPrompts.map((p) => (
                            <div key={`${p.label}-${p.text.slice(0, 20)}`} className="ops-prompt-row">
                                <span className="ops-prompt-label">{p.label}:</span>
                                <span>{p.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default App;
