import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

interface DemoConfiguratorProps {
    onAddData: () => void;
    onAddDataset: () => void;
    onRemoveData: () => void;
    onRandomize: () => void;
}

const buttonStyle = { marginLeft: 5, marginRight: 5 };

export const DemoConfigurator = (props: DemoConfiguratorProps) => {
    const { onAddData, onAddDataset, onRemoveData, onRandomize } = props;

    return (
        <div className="example-config">
            <Button style={buttonStyle} onClick={onAddData}>
                Add Data
            </Button>
            <Button style={buttonStyle} onClick={onAddDataset}>
                Add Dataset
            </Button>
            <Button style={buttonStyle} onClick={onRemoveData}>
                Remove Data
            </Button>
            <Button style={buttonStyle} onClick={onRandomize}>
                Randomize
            </Button>
        </div>
    );
};
