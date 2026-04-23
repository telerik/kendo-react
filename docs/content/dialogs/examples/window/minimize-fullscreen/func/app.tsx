import * as React from 'react';
import { Window, WindowActionsEvent } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [windowStage, setWindowStage] = React.useState<'MINIMIZED' | 'FULLSCREEN' | 'DEFAULT' | undefined>(
        'MINIMIZED'
    );

    const setMinimize = () => {
        setWindowStage('MINIMIZED');
    };
    const setFullscreen = () => {
        setWindowStage('FULLSCREEN');
    };
    const setDefault = () => {
        setWindowStage('DEFAULT');
    };
    const handleStageChange = (e: WindowActionsEvent) => {
        setWindowStage(e.state);
    };

    return (
        <div>
            <Button type="button" onClick={setMinimize}>
                Minimize
            </Button>
            &nbsp;
            <Button type="button" onClick={setFullscreen}>
                Full screen
            </Button>
            &nbsp;
            <Button type="button" onClick={setDefault}>
                Default
            </Button>
            <Window title={'Status'} stage={windowStage} onStageChange={handleStageChange}>
                <Button type="button" onClick={setMinimize}>
                    Minimize
                </Button>
                &nbsp;
                <Button type="button" onClick={setFullscreen}>
                    Full screen
                </Button>
                &nbsp;
                <Button type="button" onClick={setDefault}>
                    Default
                </Button>
            </Window>
        </div>
    );
};
export default App;
