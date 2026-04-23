import * as React from 'react';
import { Grid, GridColumn, GridCustomCellProps } from '@progress/kendo-react-grid';
import { Notification } from '@progress/kendo-react-notification';
import sampleProducts from './products';

interface CopyableCellProps extends GridCustomCellProps {
    onCopySuccess?: (value: string) => void;
}

const CopyableCell: React.FC<CopyableCellProps> = (props) => {
    const handleCellClick = async () => {
        const value = props.dataItem[props.field || ''];
        let textToCopy = '';

        // Handle different data types
        if (value instanceof Date) {
            textToCopy = value.toLocaleDateString();
        } else if (typeof value === 'boolean') {
            textToCopy = value ? 'Yes' : 'No';
        } else if (typeof value === 'number') {
            textToCopy = value.toString();
        } else {
            textToCopy = String(value || '');
        }

        try {
            await navigator.clipboard.writeText(textToCopy);
            props.onCopySuccess?.(textToCopy);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            // Fallback for older browsers
            fallbackCopyToClipboard(textToCopy);
        }
    };

    const fallbackCopyToClipboard = (text: string) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            props.onCopySuccess?.(text);
        } catch (error) {
            console.error('Fallback copy failed:', error);
        }

        document.body.removeChild(textArea);
    };

    return (
        <td {...props.tdProps} style={{ cursor: 'pointer' }} onClick={handleCellClick}>
            {props.children}
        </td>
    );
};

const App: React.FC = () => {
    const [copyMessage, setCopyMessage] = React.useState<string>('');

    const handleCopySuccess = (value: string) => {
        setCopyMessage(`Copied: "${value}"`);
        setTimeout(() => setCopyMessage(''), 3000);
    };

    const CustomCellWrapper = (props: GridCustomCellProps) => {
        return (
            <CopyableCell {...props} onCopySuccess={handleCopySuccess}>
                {props.children}
            </CopyableCell>
        );
    };
    return (
        <div>
            <h3>Grid with Copy-to-Clipboard Cells</h3>
            <p>Click any cell to copy its value to clipboard</p>

            {copyMessage && (
                <Notification style={{ position: 'absolute', top: 20, right: 20 }}>{copyMessage}</Notification>
            )}

            <Grid data={sampleProducts} style={{ height: '400px' }}>
                <GridColumn field="ProductID" title="ID" width="80px" cells={{ data: CustomCellWrapper }} />
                <GridColumn field="ProductName" title="Product Name" cells={{ data: CustomCellWrapper }} />
                <GridColumn field="UnitPrice" title="Price" cells={{ data: CustomCellWrapper }} />
                <GridColumn field="UnitsInStock" title="In Stock" cells={{ data: CustomCellWrapper }} />
                <GridColumn field="Discontinued" title="Discontinued" cells={{ data: CustomCellWrapper }} />
                <GridColumn field="FirstOrderedOn" title="First Ordered" cells={{ data: CustomCellWrapper }} />
            </Grid>
        </div>
    );
};

export default App;
