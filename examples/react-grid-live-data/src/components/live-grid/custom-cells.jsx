/* eslint-disable no-unused-vars */
import React from 'react';
import { trends, nFormatter } from './utils';
import { classNames, SvgIcon } from '@progress/kendo-react-common';
import { useInternationalization } from '@progress/kendo-react-intl';
import { caretAltDownIcon, caretAltUpIcon } from '@progress/kendo-svg-icons';

const TrendIcon = ({ value }) => {
  if (value === 0) {
    return null;
  }

  return (
    <SvgIcon
      icon={value > 0 ? caretAltUpIcon : caretAltDownIcon}
      size="small"
      aria-hidden="true"
    />
  );
};

export const PriceCell = props => {
  const intl = useInternationalization();
  const { dataItem, field } = props;
  const fieldName = field || '';
  return <td {...props.tdProps}>
      <div>
        <span>{intl.formatNumber(dataItem[fieldName], 'n2')}</span>
      </div>
    </td>;
};
export const ChangeCell = props => {
  const intl = useInternationalization();
  const { dataItem, field } = props;
  const currentTrends = trends(dataItem);
  const fieldName = field || '';
  return <td {...props.tdProps}>
      <div className={classNames(currentTrends)}>
        <TrendIcon value={dataItem[fieldName]} />
        {dataItem[fieldName] > 0 ? '+' : ''}{intl.formatNumber(dataItem[fieldName], 'n2')}
      </div>
    </td>;
};
export const ChangePercentCell = props => {
  const intl = useInternationalization();
  const { dataItem, field } = props;
  const currentTrends = trends(dataItem);
  const fieldName = field || '';
  return <td {...props.tdProps}>
      <div className={classNames(currentTrends)}>
        <TrendIcon value={dataItem[fieldName]} />
        {dataItem[fieldName] > 0 ? '+' : ''}{intl.formatNumber(dataItem[fieldName], 'n2')}%
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
  return <td {...props.tdProps}>
      <div className={classNames(currentTrends) + ' rating-cell'}>
        {value}
      </div>
    </td>;
};
export const TickerCell = props => {
  const fieldName = props.field || '';
  let value = props.dataItem[fieldName];
  return <td {...props.tdProps}>
      <div className="ticker-cell">
        <img alt={`${value} currency`} src={require(`../../assets/${value}.png`)} />
        <span className="ticker-cell__symbol">
          {value}
        </span>
      </div>
    </td>;
};
export const VolumeCell = props => {
  const fieldName = props.field || '';
  let value = props.dataItem[fieldName];
  return <td {...props.tdProps}>{nFormatter(value)}</td>;
};