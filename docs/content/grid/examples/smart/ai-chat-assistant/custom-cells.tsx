import * as React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import { GridCustomCellProps } from '@progress/kendo-react-grid';
import { Rating, RatingItem, RatingItemProps } from '@progress/kendo-react-inputs';
import { starIcon } from '@progress/kendo-svg-icons';
import { orderTypeExistingIcon, orderTypeNewIcon, orderTypeRenewalIcon } from './svg-icons';

const orderTypeIcons = {
    Existing: orderTypeExistingIcon,
    New: orderTypeNewIcon,
    Renewal: orderTypeRenewalIcon
};

const CustomItem = (props: RatingItemProps) => {
    return (
        <RatingItem {...props} style={{ width: '32px', color: '#FFB649' }}>
            {props.children}
        </RatingItem>
    );
};
const CustomRatingCell = (props: GridCustomCellProps) => {
    return (
        <td {...props.tdProps}>
            <Rating
                value={props.dataItem.CustomerRating}
                max={5}
                readonly={true}
                svgIcon={starIcon}
                item={CustomItem}
            />
        </td>
    );
};

const CustomAmountCell = (props: GridCustomCellProps) => {
    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(props.dataItem.Bookings);

    return <td {...props.tdProps}>{formattedAmount}</td>;
};

const CustomDiscountCell = (props: GridCustomCellProps) => {
    return <td {...props.tdProps}>{props.dataItem.Discount}%</td>;
};

const CustomStatusCell = (props: GridCustomCellProps) => {
    const themeColor =
        props.dataItem.Status === 'Active'
            ? 'success'
            : props.dataItem.Status === 'Completed'
            ? 'base'
            : props.dataItem.Status === 'Pending'
            ? 'warning'
            : props.dataItem.Status === 'In Review'
            ? 'info'
            : 'base';

    return (
        <td {...props.tdProps}>
            <Chip text={props.dataItem.Status} themeColor={themeColor} size="small" />
        </td>
    );
};

const CustomLicenseTypeCell = (props: GridCustomCellProps) => {
    return (
        <td {...props.tdProps}>
            <Chip text={props.dataItem.LicenseType} size="small" fillMode="outline" />
        </td>
    );
};

const CustomOrderTypeCell = (props: GridCustomCellProps) => {
    return (
        <td {...props.tdProps}>
            <Chip
                svgIcon={orderTypeIcons[props.dataItem.OrderType]}
                text={props.dataItem.OrderType}
                fillMode="outline"
            />
        </td>
    );
};

export {
    CustomRatingCell,
    CustomAmountCell,
    CustomDiscountCell,
    CustomStatusCell,
    CustomLicenseTypeCell,
    CustomOrderTypeCell
};
