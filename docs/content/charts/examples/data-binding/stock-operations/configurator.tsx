import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

interface StockDemoConfiguratorProps {
    isPlaying: boolean;
    onPlay: () => void;
    onPause: () => void;
}

const buttonStyle = { marginLeft: 5, marginRight: 5 };

export const StockDemoConfigurator = (props: StockDemoConfiguratorProps) => {
    const { isPlaying, onPlay, onPause } = props;

    return (
        <div className="example-config">
            <Button style={buttonStyle} onClick={onPlay} disabled={isPlaying}>
                Play
            </Button>
            <Button style={buttonStyle} onClick={onPause} disabled={!isPlaying}>
                Pause
            </Button>
        </div>
    );
};
