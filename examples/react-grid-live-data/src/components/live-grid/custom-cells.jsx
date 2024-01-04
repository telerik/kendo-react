/* eslint-disable no-unused-vars */
import React from 'react';
import { trends, nFormatter } from './utils';
import { classNames } from '@progress/kendo-react-common';
import { useInternationalization } from '@progress/kendo-react-intl';
export const PriceCell = props => {
  const intl = useInternationalization();
  const {
    dataItem,
    field,
    className
  } = props;
  const fieldName = field || '';
  return <td className={className} colSpan={props.colSpan}>
      <div>
        <span>{intl.formatNumber(dataItem[fieldName], 'n5')}</span>
      </div>
    </td>;
};
export const ChangeCell = props => {
  const intl = useInternationalization();
  const {
    dataItem,
    field,
    className
  } = props;
  const currentTrends = trends(dataItem);
  const fieldName = field || '';
  return <td className={className} colSpan={props.colSpan}>
      <div className={classNames(currentTrends)}>
        {intl.formatNumber(dataItem[fieldName], 'n5')}
      </div>
    </td>;
};
export const ChangePercentCell = props => {
  const intl = useInternationalization();
  const {
    dataItem,
    field,
    className
  } = props;
  const currentTrends = trends(dataItem);
  const fieldName = field || '';
  return <td className={className} colSpan={props.colSpan}>
      <div className={classNames(currentTrends)}>
        {intl.formatNumber(dataItem[fieldName], '0.##')}%
      </div>
    </td>;
};
export const RatingCell = props => {
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
  let color;
  if (value === 'Sell' || value === 'Strong Sell') {
    color = 'red';
  } else if (value === 'buy') {
    color = 'green';
  } else {
    color = 'black';
  }
  return <td>
      <div className={classNames(currentTrends) + ' rating-cell'}>
        {value}
      </div>
    </td>;
};
export const TickerCell = props => {
  const fieldName = props.field || '';
  let value = props.dataItem[fieldName];
  return <td>
      <img alt={`KendoReact Grid ${value} icon`} src={require(`../../assets/${value}.png`)} />
      <span style={{
      color: '#4B5FFA',
      marginLeft: '5px',
      fontWeight: 'bold'
    }}>
        {value}
      </span>
    </td>;
};
export const VolumeCell = props => {
  const fieldName = props.field || '';
  let value = props.dataItem[fieldName];
  return <td>{nFormatter(value)}</td>;
};