import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

class App extends React.Component {
    state = {
        data: []
    };

    handlePaste = e => {
        if (e.target.tagName && e.target.tagName.match(/(input|textarea)/i)) {
            // Do not handle past when an input element is currently focused
            return;
        }

        // Get clipboard data as text
        const data = e.clipboardData.getData("text");

        // Simplified parsing of the TSV data with hard-coded columns
        const rows = data.split("\n");
        const result = rows.map(row => {
            const cells = row.split("\t");
            return {
                ProductID: cells[0],
                ProductName: cells[1],
                Category: { CategoryName: cells[2] },
                UnitPrice: cells[3],
                UnitsInStock: cells[4]
            };
        });
        this.setState({
            data: result
        });
    };

    render() {
        return (
            <>
                <ol>
                    <li>
                        Select the sample TSV snippet below:
            <pre>
                            {`1	Chai	Beverages	18	39
2	Chang	Beverages	19	17
3	Aniseed Syrup	Condiments	10	13
4	Chef Anton's Cajun Seasoning	Condiments	22	53
5	Chef Anton's Gumbo Mix	Condiments	21.35	0
6	Grandma's Boysenberry Spread	Condiments	25	120
7	Uncle Bob's Organic Dried Pears	Produce	30	15
`}
                        </pre>
                    </li>
                    <li>Click on the Grid and paste it with Ctrl+V or ⌘+V</li>
                </ol>
                <div onPaste={this.handlePaste}>
                    <Grid style={{ height: "400px" }} data={this.state.data}>
                        <Column field="ProductID" title="ID" width="40px" />
                        <Column field="ProductName" title="Name" width="250px" />
                        <Column field="Category.CategoryName" title="CategoryName" />
                        <Column field="UnitPrice" title="Price" />
                        <Column field="UnitsInStock" title="In stock" />
                    </Grid>
                </div>
            </>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("my-app"));
