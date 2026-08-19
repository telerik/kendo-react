import * as React from 'react';
import { Loader } from '@progress/kendo-react-indicators';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [loadingPanelVisible, setLoadingPanelVisible] = React.useState(false);

    const handleClick = () => setLoadingPanelVisible((prev) => !prev);

    return (
        <div className="example">
            <Button onClick={handleClick} style={{ marginBottom: 20 }}>
                {loadingPanelVisible ? 'Hide Loading Panel' : 'Show Loading Panel'}
            </Button>
            <div className="example-inner">
                {loadingPanelVisible && (
                    <div className="k-loading-panel">
                        <div className="k-loading-panel-mask" />
                        <div className="k-loading-panel-wrapper">
                            <Loader type="infinite-spinner" themeColor="primary" size="large" />
                            <div className="k-loading-panel-text">Loading...</div>
                        </div>
                    </div>
                )}
                <div className="example-text">Example Container</div>
            </div>
            <style>{`
                .example-inner {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    width: 300px;
                    height: 300px;
                    border: 1px solid #000000;
                }
                .example-text { font-size: 1.5rem; }
                .k-loading-panel {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 100;
                }
                .k-loading-panel-mask {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #000000;
                    opacity: 0.8;
                }
                .k-loading-panel-wrapper {
                    position: relative;
                    z-index: 2;
                }
                .k-loading-panel-text {
                    margin-top: 20px;
                    text-align: center;
                    color: #ffffff;
                }
            `}</style>
        </div>
    );
};

export default App;
