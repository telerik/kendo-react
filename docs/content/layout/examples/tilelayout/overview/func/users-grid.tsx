import * as React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

const UsersChart = ({ data }) => {
    return (
    <Grid style={{ height: "100%" }} data={data} scrollable={'scrollable'}>
      <Column field="channel" title="Channel" />
      <Column field="users" title="Number Of Users" />
    </Grid>
    );
};

export default UsersChart;
