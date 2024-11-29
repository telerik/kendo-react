import React from 'react';
import ReactMarkDown from 'react-markdown';
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartTooltip,
    ChartTitle
} from '@progress/kendo-react-charts';

import 'hammerjs';

export class DetailComponent extends React.Component {
    render() {
        const dataItem = this.props.dataItem;
        const data = this.props.makeChartData(dataItem.node.labels.edges);

        const defaultTooltipRender = (item) => {
            if (item.point) {
                return (`${item.point.category} : ${item.point.value}`)
            }
            return ""
        };

        return (
            <div style={{ padding: 0 }}>
                <div className="row" style={{ height: 300 }}>
                    <div className="col-2" >
                        <strong>Author: {dataItem.node.author.login}</strong>
                        <Chart style={{ width: '100%', height: 250 }} transitions={false}>
                            <ChartTitle text="Issue labels" color="black" position='bottom' font="19pt sans-serif" />
                            <ChartTooltip render={defaultTooltipRender} />
                            <ChartSeries>
                                <ChartSeriesItem type="pie" data={data} categoryField="labelName" field="occurrence" colorField="color">
                                    <ChartSeriesLabels color="black" background="none" visible={false} />
                                </ChartSeriesItem>
                            </ChartSeries>
                            <ChartLegend visible={false} />
                        </Chart>
                    </div>
                    <div className="col-10 issue-description" style={{ overflowY: 'scroll', height: '100%' }}>
                        <strong>Description</strong>
                        <ReactMarkDown children={dataItem.node.body} />
                    </div>
                </div>
            </div>
        );
    }
}