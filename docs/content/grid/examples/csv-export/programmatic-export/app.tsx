import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridHandle } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';

const App = () => {
    const gridRef = React.useRef<GridHandle>(null);
    const [uploadStatus, setUploadStatus] = React.useState<string>('');
    const [isExporting, setIsExporting] = React.useState<boolean>(false);

    const handleSaveAsCsv = async () => {
        // Trigger CSV download using the Grid's saveAsCsv method
        // saveAsCsv() returns a Promise that resolves when export is triggered
        setIsExporting(true);
        try {
            await gridRef.current?.saveAsCsv();
            console.log('CSV export triggered successfully!');
        } finally {
            setIsExporting(false);
        }
    };

    const handleGetBlob = async () => {
        // Get the CSV as a Blob for custom handling (e.g., upload to server)
        const blob = gridRef.current?.getCsvBlob();

        if (blob) {
            // Example: simulate uploading to a server
            setUploadStatus('Uploading...');

            // Simulate server upload delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Log blob info (in real app, you would upload this)
            console.log('CSV Blob ready for upload:', {
                size: `${(blob.size / 1024).toFixed(2)} KB`,
                type: blob.type
            });

            setUploadStatus(`Upload complete! File size: ${(blob.size / 1024).toFixed(2)} KB`);

            // Clear status after 3 seconds
            setTimeout(() => setUploadStatus(''), 3000);
        }
    };

    const handlePreviewCsv = async () => {
        // Get the blob and display its content
        const blob = gridRef.current?.getCsvBlob();

        if (blob) {
            const content = await blob.text();
            // Show first 500 characters in an alert
            const preview = content.substring(0, 500);
            alert(`CSV Preview (first 500 chars):\n\n${preview}${content.length > 500 ? '\n...' : ''}`);
        }
    };

    return (
        <div>
            <Grid
                ref={gridRef}
                style={{ height: '400px' }}
                data={products}
                csv={{ fileName: 'products-export.csv' }}
            >
                <GridToolbar>
                    <Button themeColor="primary" onClick={handleSaveAsCsv} disabled={isExporting}>
                        {isExporting ? 'Exporting...' : 'Download CSV'}
                    </Button>
                    <Button themeColor="secondary" onClick={handleGetBlob}>
                        Upload to Server
                    </Button>
                    <Button onClick={handlePreviewCsv}>Preview CSV</Button>
                    {uploadStatus && <span style={{ marginLeft: '10px', color: '#28a745' }}>{uploadStatus}</span>}
                </GridToolbar>
                <Column field="ProductID" title="ID" width="80px" />
                <Column field="ProductName" title="Product Name" width="300px" />
                <Column field="Category.CategoryName" title="Category" />
                <Column field="UnitPrice" title="Unit Price" />
                <Column field="UnitsInStock" title="In Stock" />
            </Grid>
        </div>
    );
};

export default App;
