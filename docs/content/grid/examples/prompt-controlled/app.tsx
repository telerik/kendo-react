import * as React from 'react';

import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { sparklesIcon } from '@progress/kendo-svg-icons';
import { VectorsBackground } from './vectorsBackground';
import { CustomersGrid } from './customersGrid';
import { Hero } from './hero';
import './styles.css';
import '@progress/kendo-theme-bootstrap';

const imgProgressLogo = `${
    import.meta.env.VITE_REACT_DEMOS_BASE_URL || ''
}./assets/grid/prompt-controlled/progress-logo.svg`;
const imgProgressLogoCompact = `${
    import.meta.env.VITE_REACT_DEMOS_BASE_URL || ''
}./assets/grid/prompt-controlled/progress-logo-compact.svg`;
const imgBackground = `${
    import.meta.env.VITE_REACT_DEMOS_BASE_URL || ''
}./assets/grid/prompt-controlled/background.svg`;

const App = () => {
    const [isMobile, setIsMobile] = React.useState<boolean>(false);
    const [isSmart, setIsSmart] = React.useState<boolean>(false);

    React.useEffect(() => {
        document.title = 'KendoReact Smart Data Grid';
    }, []);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    top: '54px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: 0,
                    filter: isSmart ? 'none' : 'grayscale(100%)'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        width: '1266px',
                        height: '331px',
                        left: '35%',
                        top: '25%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.6
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '-90.63%',
                            right: '-23.7%',
                            bottom: '-90.63%',
                            left: '-23.7%'
                        }}
                    >
                        <img
                            src={imgBackground}
                            alt=""
                            style={{
                                display: 'block',
                                maxWidth: 'none',
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                </div>
            </div>
            <AppBar
                positionMode="sticky"
                style={{
                    background: '#ffffff',
                    borderBottom: 'none',
                    boxShadow: '0px 2px 7px 0px rgba(0, 0, 0, 0.08)',
                    overflow: 'hidden',
                    padding: isMobile ? '8x 12px' : '8x 32px'
                }}
            >
                <AppBarSpacer />
                <AppBarSection>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        <div style={{ height: '24px', width: isMobile ? '24px' : '102px', position: 'relative' }}>
                            <img
                                src={isMobile ? imgProgressLogoCompact : imgProgressLogo}
                                alt="Progress Logo"
                                style={{
                                    display: 'block',
                                    maxWidth: 'none',
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        </div>
                        <span
                            className="k-font-weight-medium"
                            style={{
                                fontSize: isMobile ? '14px' : '18px',
                                lineHeight: isMobile ? '1' : '24px',
                                color: 'var(--gray/light/black, #000000)',
                                letterSpacing: 'var(--kendo-letter-spacing, 0px)'
                            }}
                        >
                            KendoReact Smart Data Grid
                        </span>
                    </div>
                </AppBarSection>

                <AppBarSpacer />
                <AppBarSection>
                    <Button
                        svgIcon={sparklesIcon}
                        fillMode={isSmart ? 'solid' : 'outline'}
                        rounded={'full'}
                        className="gradient-border-button"
                        onClick={() => setIsSmart((prev) => !prev)}
                    >
                        Smart Grid
                    </Button>
                </AppBarSection>
            </AppBar>
            <Hero isSmart={isSmart} />
            <VectorsBackground isSmart={isSmart} />
            <CustomersGrid isSmart={isSmart} />
            <div
                style={{
                    position: 'fixed',
                    top: '54px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: 0,
                    filter: isSmart ? 'none' : 'grayscale(100%)'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        width: '1266px',
                        height: '331px',
                        left: '70%',
                        top: '70%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.6
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '-90.63%',
                            right: '-23.7%',
                            bottom: '-90.63%',
                            left: '-23.7%'
                        }}
                    >
                        <img
                            src={imgBackground}
                            alt=""
                            style={{
                                display: 'block',
                                maxWidth: 'none',
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                </div>
            </div>{' '}
            <style>{`
                my-app {
                    padding: 0 !important;
                }
            `}</style>
        </div>
    );
};

export default App;
