import React from 'react';
import { trends, nFormatter } from './utils';
import { classNames } from '@progress/kendo-react-common';
import { useInternationalization } from '@progress/kendo-react-intl';
import { GridCustomCellProps } from '@progress/kendo-react-grid';

export const PriceCell = (props: GridCustomCellProps) => {
    const intl = useInternationalization();
    const { dataItem, field } = props;
    const fieldName = field || '';
    return (
        <td {...props.tdProps}>
            <div>
                <span>{intl.formatNumber(dataItem[fieldName], 'n5')}</span>
            </div>
        </td>
    );
};

export const ChangeCell = (props: GridCustomCellProps) => {
    const intl = useInternationalization();
    const { dataItem, field } = props;
    const currentTrends = trends(dataItem);
    const fieldName = field || '';
    return (
        <td {...props.tdProps}>
            <div className={classNames(currentTrends)}>{intl.formatNumber(dataItem[fieldName], 'n5')}</div>
        </td>
    );
};

export const ChangePercentCell = (props: GridCustomCellProps) => {
    const intl = useInternationalization();
    const { dataItem, field } = props;
    const currentTrends = trends(dataItem);
    const fieldName = field || '';

    return (
        <td {...props.tdProps}>
            <div className={classNames(currentTrends)}>{intl.formatNumber(dataItem[fieldName], '0.##')}%</div>
        </td>
    );
};

export const RatingCell = (props: GridCustomCellProps) => {
    const currentTrends = trends(props.dataItem);
    let value = 'Neutral';

    if (currentTrends.strongNegative) {
        value = 'Strong Sell';
    } else if (currentTrends.negative) {
        value = 'Sell';
    } else if (currentTrends.strongPositive) {
        value = 'Strong Buy';
    } else {
        value = 'Buy';
    }

    let color: string;
    if (value === 'Sell' || value === 'Strong Sell') {
        color = 'red';
    } else if (value === 'buy') {
        color = 'green';
    } else {
        color = 'black';
    }

    return (
        <td {...props.tdProps}>
            <div className={classNames(currentTrends) + ' rating-cell'}>{value}</div>
        </td>
    );
};

export const TickerCell = (props: GridCustomCellProps) => {
    const fieldName = props.field || '';
    let value = props.dataItem[fieldName];
    return (
        <td {...props.tdProps}>
            <img
                alt={`KendoReact Grid ${value} icon`}
                src={`https://demos.telerik.com/kendo-react-ui/assets/grid/data-binding/${value}.png`}
            />
            <span style={{ color: '#4B5FFA', marginLeft: '5px', fontWeight: 'bold' }}>{value}</span>
        </td>
    );
};

export const VolumeCell = (props: GridCustomCellProps) => {
    const fieldName = props.field || '';
    let value = props.dataItem[fieldName];
    return <td {...props.tdProps}>{nFormatter(value)}</td>;
};
