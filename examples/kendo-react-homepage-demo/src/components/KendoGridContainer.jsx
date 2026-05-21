import React, { useRef } from "react";
import { Query } from '@apollo/client/react/components';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { ColumnMenu } from './ColumnMenu';
import { DetailComponent } from './DetailComponent';
import { StateCell } from './StateCell';
import { Author } from './Author';
import { LoadingPanel } from './LoadingPanel';

import { getQuery } from '../queries/github';
import kendoReactIssues from '../data/fallBackData.json';
import reactIssues from '../data/fallBackDataReact.json';

const getOccurrence = (array, value) => {
    var count = 0;
    array.forEach((v) => (v.name === value.name && count++));
    return count;
};

export const KendoGridContainer = ({ repo }) => {
    const allLabelsRef = useRef([]);
    const uniqueLabelsRef = useRef([]);

    const makeChartData = (currentLabels) => {
        let data = [];
        let currentLabelsParse = currentLabels.map(item => {
            item.name = item.node.name;
            item.color = item.node.color;
            return item;
        });

        uniqueLabelsRef.current.forEach((item) => {
            let occurrence = getOccurrence(allLabelsRef.current, item);
            let index = currentLabelsParse.map((e) => { return e.name }).indexOf(item.name);
            if (index >= 0) {
                data.push({
                    occurrence: occurrence,
                    color: item.color,
                    labelName: item.name,
                    explode: true
                });
            } else {
                data.push({
                    occurrence: occurrence,
                    color: item.color,
                    labelName: item.name
                });
            }
        });

        return data;
    };

    return (
        <div>
            <Query
                query={getQuery(repo)}
            >
                {({ data, loading, error }) => {
                    let gridData = [];
                    if (error) {
                        if (repo === 'react') {
                            gridData = reactIssues.data.repository.issues.edges;
                        } else {
                            gridData = kendoReactIssues.data.repository.issues.edges;
                        }

                    } else if (!loading) {
                        gridData = data.repository.issues.edges;
                    }
                    allLabelsRef.current = [];

                    gridData.map((item, index) => {
                        item.node.createdAt = new Date(item.node.createdAt);
                        item.node.labels.edges.forEach(item => {
                            allLabelsRef.current.push({
                                name: item.node.name,
                                color: "#" + item.node.color
                            });
                        });
                        return item;
                    });
                    uniqueLabelsRef.current = allLabelsRef.current.filter((item, i, ar) => {
                        let index = ar.map((e) => e.name).indexOf(item.name);

                        return index === i;
                    });

                    return (
                        <React.Fragment>
                            <Grid
                                data={gridData}
                                autoProcessData={true}
                                dataItemKey='id'
                                sortable
                                pageable
                                defaultSkip={0}
                                defaultTake={10}
                                style={{ height: '100%', overflow: 'auto', borderInline: 0 }}
                                scrollable={'scrollable'}
                                onDetailExpandChange={(e) => { console.log(e) }}
                                detail={(props) => <DetailComponent {...props} makeChartData={makeChartData} />}
                            >
                                <GridColumn field="node.number" title="ID" width={100} />
                                <GridColumn field="node.state" title="State" cells={{ data: StateCell }} width={100} />
                                <GridColumn field="node.title" title="Issue" columnMenu={ColumnMenu} />
                                <GridColumn field="node.author.label" title="Author" width={200} cells={{ data: Author }} sortable={false} />
                                <GridColumn field="node.createdAt" title="Created on" width={200} format='{0:yyyy/MM/dd hh:mm a}' filter="date" columnMenu={ColumnMenu} />
                            </Grid>
                            {loading && <LoadingPanel />}
                        </React.Fragment>)
                }}
            </Query>
        </div>
    );
}