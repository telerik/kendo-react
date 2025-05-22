import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { classNames } from '@progress/kendo-react-common';
import { formatNumber } from '@progress/kendo-intl';
import { trends } from "../utils";

export const PriceCell = (props) => {
    const { dataItem, field, className } = props;
    const currentTrends = trends(dataItem);

    return (
        <td className={className} colSpan={props.colSpan}>
            <div className={`fintech-icons ${classNames(currentTrends)}`}>
                <span>{formatNumber(dataItem[field], 'c4', 'en')}</span>
                {
                    currentTrends.positive && (<span className="k-icon k-i-arrow-60-up" />)
                }
                {
                    currentTrends.negative && (<span className="k-icon k-i-arrow-60-down" />)
                }
            </div>
        </td>
    );
};

export const ChangeCell = (props) => {
    const { dataItem, field, className } = props;
    const currentTrends = trends(dataItem);

    return (
        <td className={className} colSpan={props.colSpan}>
            <div className={classNames(currentTrends)}>{formatNumber(dataItem[field], 'n', 'en')}</div>
        </td>
    );
};

export const ChangePercentCell = (props) => {
    const { dataItem, field, className } = props;
    const currentTrends = trends(dataItem);

    return (
        <td className={className} colSpan={props.colSpan}>
            <div className={classNames(currentTrends)}>{formatNumber(dataItem[field], '0.##', 'en')}%</div>
        </td>
    );
};

export const ChartCell = (props) => {
    const { className } = props;

    return (
        <td className={className} colSpan={props.colSpan}>
            <Button iconClass={'k-icon k-i-toggle-full-screen-mode'} />
        </td>
    );
};