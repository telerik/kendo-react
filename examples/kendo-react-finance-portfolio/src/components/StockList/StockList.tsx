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


export const StockList: React.FunctionComponent = () => {
    const history = useNavigate();
    const { symbol } = useParams();
    const { sector } = React.useContext(SectorContext);
    const { symbols, selectedSymbols, onSelectedSymbolsChange } = React.useContext(SymbolsContext);
    const [data, setData] = React.useState<any[]>([]);
    const processed = React.useMemo(() => data.map((i: any) => ({ ...i, selected: selectedSymbols.current.some((s: any) => s === i.symbol) })), [selectedSymbols, data])

    const fetchData = React.useCallback(async () => {
        const newData = await dataService.getSectorSymbol(sector);
        setData(newData.filter((d: any) => symbols[sector].some((s: string) => s === d.symbol)))
    }, [setData, sector, symbols])

    const handleSelectionChange = React.useCallback(
        (event: GridSelectionChangeEvent) => {
            let newSelectData = processed.map(item => {
                if (item.symbol === event.dataItem.symbol) {
                    item.selected = !event.dataItem.selected
                }
                return item
            })

            if (onSelectedSymbolsChange) {
                onSelectedSymbolsChange.call(undefined, newSelectData.filter((i) => i.selected === true).map((i) => i.symbol))
            }

            setData(newSelectData);
        }, [processed, setData, onSelectedSymbolsChange])

    const handleRowClick = React.useCallback(
        (event: GridRowClickEvent) => {
            let newSelectData = processed.map(item => ({ ...item, selected: item.symbol === event.dataItem.symbol }))
            setData(newSelectData);
            history(`/stocks/${event.dataItem.symbol}`);

            if (onSelectedSymbolsChange) {
                onSelectedSymbolsChange.call(undefined, newSelectData.filter((i) => i.selected === true).map((i) => i.symbol))
            }

        },
        [processed, setData, history, onSelectedSymbolsChange])

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

    React.useEffect(() => { fetchData() }, [sector, symbols, fetchData]);
    React.useEffect(() => {
        const intv = window.setInterval(() => {
            let didFound = false;
            const newData = processed.map((old) => {
                const rnd = Math.random();
                if (rnd > 0.10 || didFound) { return old; }

                let item = {
                    ...old,
                    price_open: old.price,
                    price: magicPrice(old.price)
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

    return (
        <>
            <Symbol symbol={symbol || 'SNAP'} data={data.find((i: any) => i.symbol === symbol) || data.find((i: any) => i.symbol === 'SNAP')} />
            <Grid
                data={processed}
                selectedField="selected"
                onSelectionChange={handleSelectionChange}
                onRowClick={handleRowClick}
            >
                <GridColumn field="selected" headerCell={_ => null} cell={CheckboxCell} width={40} />
                <GridColumn field="symbol" title="Symbol" className={styles['symbol-cell']} width={70} locked={true} />
                <GridColumn field="name" title="Name" className={styles['name-cell']} width={200} />
                <GridColumn field="price" title="Price" className={styles['price-cell']} cell={PriceCell} headerCell={PriceHeaderCell} width={80} />
                <GridColumn field="day_change" title="Change" cell={ChangeCell} width={80} />
                <GridColumn field="change_pct" title="% Change" cell={ChangeCell} width={90} />
                <GridColumn field="volume" title="Volume" cell={NumberCell} width={80} />
                <GridColumn field="volume_avg" title="Avg Vol" cell={NumberCell} headerCell={AvgVolumeHeaderCell} width={90} />
                <GridColumn field="market_cap" title="Market Cap" cell={NumberCell} width={102} />
                <GridColumn field="pe" title="PE Ratio (TTM)" headerCell={PERatioHeaderCell} width={80} />
                <GridColumn cell={chartCell} title='1 Day Chart' width={200} />
            </Grid>
        </>
    )
}