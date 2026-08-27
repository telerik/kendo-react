import * as React from 'react';
import { Grid, GridColumn, GridSelectionChangeEvent, GridRowClickEvent } from '@progress/kendo-react-grid';
import { dataService } from '../../services';
import { useNavigate, useParams } from "react-router-dom";
import { ChangeCell } from './ChangeCell';
import { NumberCell } from './NumberCell';
import { ChartCell } from './ChartCell';
import { CheckboxCell } from './CheckboxCell';
import { PriceHeaderCell } from './PriceHeaderCell';
import { AvgVolumeHeaderCell } from './AvgVolumeHeaderCell';
import { PERatioHeaderCell } from './PERatioHeaderCell';
import { PriceCell } from './PriceCell';
import styles from './stock-list.module.scss';
import { SectorContext } from '../../context/SectorContext';
import { SymbolsContext } from '../../context/SymbolsContext';
import { Symbol } from '../Stock/Symbol';
import { classNames } from '@progress/kendo-react-common';
import { DataState } from '../DataState/DataState';
import { StockDataItem } from './StockCellProps';


export const StockList: React.FunctionComponent = () => {
    const history = useNavigate();
    const { symbol } = useParams();
    const { sector } = React.useContext(SectorContext);
    const { symbols, selectedSymbols, onSelectedSymbolsChange } = React.useContext(SymbolsContext);
    const [data, setData] = React.useState<StockDataItem[]>([]);
    const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [retryKey, setRetryKey] = React.useState(0);
    const processed = React.useMemo(() => data.map((i) => ({ ...i, selected: selectedSymbols.current.some((s: string) => s === i.symbol) })), [selectedSymbols, data])

    const fetchData = React.useCallback(async () => {
        setStatus('loading');
        setErrorMessage('');
        try {
            const newData = await dataService.getSectorSymbol(sector);
            setData(newData.filter((d: any) => symbols[sector].some((s: string) => s === d.symbol)));
            setStatus('ready');
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'The market data could not be loaded.');
        }
    }, [sector, symbols])

    const toggleSelection = React.useCallback((item: StockDataItem) => {
        const newSelected = !item.selected;
        const newSelectData = processed.map((current) => current.symbol === item.symbol
            ? { ...current, selected: newSelected }
            : current);
        onSelectedSymbolsChange?.call(undefined, newSelectData.filter((i) => i.selected).map((i) => i.symbol));
        setData(newSelectData);
    }, [processed, onSelectedSymbolsChange])

    const handleSelectionChange = React.useCallback(
        (event: GridSelectionChangeEvent) => toggleSelection(event.dataItem),
        [toggleSelection])

    const handleSymbolSelection = React.useCallback((item: StockDataItem) => {
            const newSelectData = processed.map(current => ({ ...current, selected: current.symbol === item.symbol }))
            setData(newSelectData);
            history(`/stocks/${item.symbol}`);

            if (onSelectedSymbolsChange) {
                onSelectedSymbolsChange.call(undefined, newSelectData.filter((i) => i.selected === true).map((i) => i.symbol))
            }
    }, [processed, history, onSelectedSymbolsChange])

    const handleRowClick = React.useCallback(
        (event: GridRowClickEvent) => handleSymbolSelection(event.dataItem),
        [handleSymbolSelection])

    const magicPrice = (price: string) => {
        const rnd = (Math.random() + 0.01);
        const volatility = 0.03;
        let cngP = 2 * volatility * rnd;
        if (cngP > volatility) {
            cngP -= (2 * volatility);
        }
        const num = Number(price);
        const change = num * cngP;
        return String(num + change)
    }

    React.useEffect(() => { fetchData() }, [fetchData, retryKey]);
    React.useEffect(() => {
        const intv = window.setInterval(() => {
            let didFound = false;
            const newData = processed.map((old) => {
                const rnd = Math.random();
                if (rnd > 0.10 || didFound) { return old; }

                let item = {
                    ...old,
                    price_open: old.price,
                    price: magicPrice(String(old.price ?? 0))
                }

                item.day_change = String(Number(item.price) - Number(item.price_open));
                item.change_pct = String(((Number(item.price) - Number(item.price_open)) / Number(item.price)) * 80);
                didFound = true;
                return item;
            })

            setData(newData);
        }, 500)

        return () => window.clearInterval(intv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sector, symbols, data]);

    const chartCell = React.useMemo(
        () => ChartCell,
        []
    )

    const selectedStock = data.find((i: any) => i.symbol === symbol) || data.find((i: any) => i.symbol === 'SNAP');

    return (
        <>
            <Symbol symbol={symbol || 'SNAP'} data={selectedStock} />
            {status === 'loading' && (
                <DataState kind="loading" title="Loading market data" message="Fetching the latest securities for this sector." />
            )}
            {status === 'error' && (
                <DataState
                    kind="error"
                    title="Market data unavailable"
                    message={errorMessage}
                    actionLabel="Try again"
                    onAction={() => setRetryKey((key) => key + 1)}
                />
            )}
            {status === 'ready' && processed.length === 0 && (
                <DataState
                    kind="empty"
                    title="Your watchlist is empty"
                    message="Add a symbol above to start monitoring this sector."
                />
            )}
            {status === 'ready' && processed.length > 0 && (
                <>
                    <Grid
                        className={classNames(styles.grid, styles.desktopGrid)}
                        data={processed}
                        autoProcessData={true}
                        selectable={{ enabled: true, mode: 'single' }}
                        defaultSelect={{ 2: true }}
                        onSelectionChange={handleSelectionChange}
                        onRowClick={handleRowClick}
                    >
                        <GridColumn field="selected" cells={{ headerCell: _ => null, data: CheckboxCell }} width={40} />
                        <GridColumn field="symbol" title="Symbol" className={styles['symbol-cell']} width={75} />
                        <GridColumn field="name" title="Name" className={styles['name-cell']} width={195} />
                        <GridColumn field="price" title="Price" className={styles['price-cell']} cells={{ data: PriceCell, headerCell: PriceHeaderCell }} width={80} />
                        <GridColumn field="day_change" title="Change" cells={{ data: ChangeCell }} width={80} />
                        <GridColumn field="change_pct" title="% Change" cells={{ data: ChangeCell }} width={90} />
                        <GridColumn field="volume" title="Volume" cells={{ data: NumberCell }} width={80} />
                        <GridColumn field="volume_avg" title="Avg Vol" cells={{ data: NumberCell, headerCell: AvgVolumeHeaderCell }} width={90} />
                        <GridColumn field="market_cap" title="Market Cap" cells={{ data: NumberCell }} width={102} />
                        <GridColumn field="pe" title="PE Ratio (TTM)" cells={{ headerCell: PERatioHeaderCell }} width={80} />
                        <GridColumn cells={{ data: chartCell }} title="1 Day Chart" width={200} />
                    </Grid>
                    <div className={styles.mobileCards} aria-label="Market securities">
                        {processed.map((item) => (
                            <article className={styles.mobileCard} key={item.symbol}>
                                <div className={styles.mobileCardHeader}>
                                    <label className={styles.selectionLabel}>
                                        <input
                                            type="checkbox"
                                            checked={Boolean(item.selected)}
                                            onChange={() => toggleSelection(item)}
                                        />
                                        <span className={styles['symbol-cell']}>{item.symbol}</span>
                                        <span className={styles['name-cell']}>{item.name}</span>
                                    </label>
                                    <button type="button" className={styles.mobileCardLink} onClick={() => handleSymbolSelection(item)}>
                                        View details
                                    </button>
                                </div>
                                <dl className={styles.mobileMetrics}>
                                    <div><dt>Price</dt><dd className={styles['price-cell']}><PriceCell dataItem={item} field="price" asCard /></dd></div>
                                    <div><dt>Change</dt><dd><ChangeCell dataItem={item} field="day_change" asCard /></dd></div>
                                    <div><dt>% Change</dt><dd><ChangeCell dataItem={item} field="change_pct" asCard /></dd></div>
                                    <div><dt>Volume</dt><dd><NumberCell dataItem={item} field="volume" asCard /></dd></div>
                                    <div><dt>Market cap</dt><dd><NumberCell dataItem={item} field="market_cap" asCard /></dd></div>
                                    <div><dt>PE ratio</dt><dd>{item.pe ?? '—'}</dd></div>
                                </dl>
                                <div className={styles.mobileChart}><ChartCell dataItem={item} field="chart" asCard /></div>
                            </article>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}