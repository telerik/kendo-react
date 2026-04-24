import * as React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import { GridCustomCellProps } from '@progress/kendo-react-grid';
import { buildingsSolidIcon, moneyExchangeIcon, walletSolidIcon } from '@progress/kendo-svg-icons';

const CustomAmountCell = (props: GridCustomCellProps) => {
    return <td {...props.tdProps}>{props.dataItem.Amount < 0 ? <b>{props.children}</b> : props.children}</td>;
};

const CustomStatusCell = (props: GridCustomCellProps) => {
    const themeColor =
        props.dataItem.Status === 'Completed'
            ? 'success'
            : props.dataItem.Status === 'Pending'
            ? 'info'
            : props.dataItem.Status === 'Failed'
            ? 'error'
            : 'base';

    return (
        <td {...props.tdProps}>
            <Chip text={props.dataItem.Status} themeColor={themeColor} />
        </td>
    );
};

const CustomAccountTypeCell = (props: GridCustomCellProps) => {
    const svgIcon =
        props.dataItem.AccountType === 'Checking'
            ? moneyExchangeIcon
            : props.dataItem.AccountType === 'Savings'
            ? walletSolidIcon
            : props.dataItem.AccountType === 'Business'
            ? buildingsSolidIcon
            : undefined;

    return (
        <td {...props.tdProps}>
            <Chip text={props.dataItem.AccountType} fillMode={'outline'} svgIcon={svgIcon} />
        </td>
    );
};
export { CustomAmountCell, CustomStatusCell, CustomAccountTypeCell };
