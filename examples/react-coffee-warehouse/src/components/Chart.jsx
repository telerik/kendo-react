
import React from 'react';
import * as PropTypes from 'prop-types';

import {
    Chart as KendoChart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    ChartTooltip
} from '@progress/kendo-react-charts';
import { groupBy, filterBy } from '@progress/kendo-data-query';
import { useInternationalization } from '@progress/kendo-react-intl';
import { locales } from './../resources/locales';

const MONTH_FORMAT = 'MMMM yyyy';
const COMPACT_FORMAT = 'MM yyyy';

export const Chart = (props) => {
    const {
        data, groupByField, seriesCategoryField, seriesField,
        filterStart, filterEnd, seriesType, groupResourceData, groupTextField,
        groupColorField, onRefresh
    } = props;

    const intlService = useInternationalization();
    const filteredData = filterBy(data, {
        logic: "and",
        filters: [
            { field: "orderDate", operator: "gt", value: filterStart },
            { field: "orderDate", operator: "lt", value: filterEnd }
        ]
    });
    const groupedData = groupBy(filteredData, [{ field: groupByField }]);

    const ChartTooltipRender = ({ point }) => {
        return (
            <div>
                <div style={{textTransform: 'uppercase'}}>{intlService.formatDate(point.category, MONTH_FORMAT)}</div>
                <div style={{textAlign: 'center'}}>{intlService.formatNumber(point.value, {locale: locales.locale})}</div>
            </div>
        );
    };

    return (
        <KendoChart style={{ height: 300 }} onRefresh={onRefresh}>
            <ChartLegend position="bottom" orientation="horizontal" background={'#f4f5f8'} padding={{ left: 80 }} labels={{padding: { right: 80 }}}/>
            <ChartTooltip render={ChartTooltipRender} />
            <ChartSeries>
                {
                    groupedData.map(group => {
                        const groupResource = groupResourceData.find(item => item[groupByField] === group.value);

                        return (
                            <ChartSeriesItem
                                key={group.value}
                                name={groupResource[groupTextField]}
                                type={seriesType}
                                field={seriesField}
                                categoryField={seriesCategoryField}
                                data={group.items}
                                color={groupResource[groupColorField]}
                            >

                            </ChartSeriesItem>
                        );
                    })
                }
            </ChartSeries>
            <ChartCategoryAxis>
                <ChartCategoryAxisItem
                    baseUnit={'months'}
                    labels={{
                        dateFormats: {
                            months: window.innerWidth >= 480 ? MONTH_FORMAT : COMPACT_FORMAT
                        }
                    }}
                >
                </ChartCategoryAxisItem>
            </ChartCategoryAxis>
            <ChartValueAxis>
                <ChartValueAxisItem labels={{format: {locale: locales.locale}}}>
                </ChartValueAxisItem>
            </ChartValueAxis>
        </KendoChart>
    );
};

Chart.displayName = 'Chart';
Chart.propTypes = {
    data: PropTypes.array,
    groupByField: PropTypes.string,
    seriesCategoryField: PropTypes.string,
    seriesField: PropTypes.string,
    filterStart: PropTypes.object,
    filterEnd: PropTypes.object,
    seriesType: PropTypes.string,
    groupResourceData: PropTypes.array,
    groupTextField: PropTypes.string,
    onRefresh: PropTypes.func
};
