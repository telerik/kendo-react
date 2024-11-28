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
    const [allSymbols, setAllSymbols] = React.useState([]);

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
            const newData = await dataService.getSectorSymbol(sector);
            setAllSymbols(newData);
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

    React.useEffect(() => { fetchData() }, [sector, fetchData]);

    return (
        <div className={classNames(props.className)}>
            <DropDownList
                svgIcon={plusIcon}
                style={{ backgroundColor: 'white', width: "110px", flexDirection: 'row-reverse' }}
                value={null}
                onChange={handleSymbolsAdd}
                data={filterBy(allSymbols, {
                    logic: 'or',
                    filters: [
                        { field: 'symbol', operator: "contains", value: filter },
                        { field: "name", operator: 'contains', value: filter }
                    ]
                })}
                filterable={true}
                onFilterChange={handleFilterChange}
                popupSettings={{
                    className: "popup-animation",
                    width: '300px'
                }}
                valueRender={customValueRender}
                itemRender={customItemRender}
            />

            &nbsp;
            <Button svgIcon={trashIcon} fillMode={"flat"} style={{ color: '#D9534F' }} onClick={handleRemoveClick}>Remove</Button>

        </div>
    )
}