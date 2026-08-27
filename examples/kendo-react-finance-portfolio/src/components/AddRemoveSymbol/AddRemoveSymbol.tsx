import * as React from 'react';
import { classNames } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';
import { DropDownList, DropDownListFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { dataService } from '../../services';
import { SymbolsContext } from '../../context/SymbolsContext';
import { SectorContext } from '../../context/SectorContext';
import { filterBy } from "@progress/kendo-data-query";
import styles from './add.module.scss';
import { plusIcon, trashIcon } from '@progress/kendo-svg-icons';
import { DataState } from '../DataState/DataState';

export interface AddRemoveSymbolProps {
    className?: string;
}

const customItemRender = (el: any, value: any) => (
    <el.type
        {...el.props}
        className={classNames(styles["stock-item"], "container-fluid")}
    >
        <div className="row justify-content-between">
            <div className="col-6">
                <span className={styles['stock-item-symbol']}>{value.dataItem.symbol}</span>
                <span className={styles['stock-item-name']}>{value.dataItem.name}</span>
            </div>
            <div className="col-6 text-right m-auto">
                <span className={styles['stock-item-name']}>Equity - {value.dataItem["stock_exchange_short"]}</span>
            </div>
        </div>
    </el.type>)

const customValueRender = (el: any) => (
    <el.type
        {...el.props}
        style={{paddingInline: 0}}
    >
        Add new
    </el.type>)

export const AddRemoveSymbol = (props: AddRemoveSymbolProps) => {
    const { sector } = React.useContext(SectorContext);
    const { symbols, onSymbolsChange, onSymbolsRemove } = React.useContext(SymbolsContext);
    const [filter, setFilter] = React.useState<string>("");
    const [allSymbols, setAllSymbols] = React.useState<any[]>([]);
    const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [retryKey, setRetryKey] = React.useState(0);

    const handleRemoveClick = React.useCallback(
        () => {
            if (onSymbolsRemove) {
                onSymbolsRemove.call(undefined);
            }
        },
        [onSymbolsRemove]
    )

    const fetchData = React.useCallback(
        async () => {
            setStatus('loading');
            setErrorMessage('');
            try {
                const newData = await dataService.getSectorSymbol(sector);
                setAllSymbols(newData);
                setStatus('ready');
            } catch (error) {
                setStatus('error');
                setErrorMessage(error instanceof Error ? error.message : 'The symbol list could not be loaded.');
            }
        },
        [sector]
    );

    const handleFilterChange = React.useCallback(
        (event: DropDownListFilterChangeEvent) => { setFilter(event.filter.value) },
        [setFilter]
    );

    const handleSymbolsAdd = React.useCallback(
        (event: any) => {
            if (onSymbolsChange && event.target && event.target.value && event.target.value.symbol) {
                const newSymbols = !symbols[sector].some((s: any) => s === event.target.value.symbol)
                    ? symbols[sector].concat([event.target.value.symbol])
                    : symbols[sector];

                onSymbolsChange.call(undefined, newSymbols)
            }
        },
        [onSymbolsChange, symbols, sector]
    )

    React.useEffect(() => { fetchData() }, [fetchData, retryKey]);

    const filteredSymbols = filterBy(allSymbols, {
        logic: 'or',
        filters: [
            { field: 'symbol', operator: "contains", value: filter },
            { field: "name", operator: 'contains', value: filter }
        ]
    });

    return (
        <div className={classNames(props.className)}>
            <DropDownList
                className={styles.symbolPicker}
                svgIcon={plusIcon}
                value={null}
                onChange={handleSymbolsAdd}
                data={filteredSymbols}
                filterable={true}
                onFilterChange={handleFilterChange}
                aria-label="Add a symbol to this sector"
                popupSettings={{
                    className: "popup-animation",
                    width: '300px'
                }}
                valueRender={customValueRender}
                itemRender={customItemRender}
            />

            &nbsp;
            <Button className={styles.removeButton} svgIcon={trashIcon} fillMode={"flat"} onClick={handleRemoveClick}>Remove</Button>
            {status === 'loading' && <DataState kind="loading" title="Loading symbols" message="Fetching available securities." />}
            {status === 'error' && (
                <DataState
                    kind="error"
                    title="Symbols unavailable"
                    message={errorMessage}
                    actionLabel="Try again"
                    onAction={() => setRetryKey((key) => key + 1)}
                />
            )}
            {status === 'ready' && filter.trim() && filteredSymbols.length === 0 && (
                <DataState kind="no-results" title="No symbols found" message={`No securities match “${filter}”.`} />
            )}

        </div>
    )
}