import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import {
    ActionSheetItemProps,
    ActionSheet,
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardBody
} from '@progress/kendo-react-layout';
import { cancelIcon, editToolsIcon, heartIcon, uploadIcon } from '@progress/kendo-svg-icons';

const items: ActionSheetItemProps[] = [
    {
        title: 'Edit Item',
        description: 'Click to edit',
        tabIndex: 0,
        icon: <SvgIcon className="k-actionsheet-item-icon" icon={editToolsIcon} />
    },
    {
        title: 'Add to Favorites',
        tabIndex: 0,
        icon: <SvgIcon className="k-actionsheet-item-icon" icon={heartIcon} />
    },
    {
        title: 'Upload New',
        icon: <SvgIcon className="k-actionsheet-item-icon" icon={uploadIcon} />,
        disabled: true
    },
    {
        title: 'Cancel',
        tabIndex: 0,
        icon: <SvgIcon className="k-actionsheet-item-icon" icon={cancelIcon} />,
        group: 'bottom'
    }
];

const App = () => {
    const title = 'Select item';
    const [open, setOpen] = React.useState(false);

    const openHandler = () => {
        setOpen(true);
    };
    const handleOverlayClick = () => {
        setOpen(false);
    };
    const handleItemClick = () => {
        setOpen(false);
    };

    return (
        <div className="demo-app" style={{ position: 'relative' }}>
            <div id="city" className="demo-view" style={{ position: 'absolute' }}>
                <div className="title">
                    <h3>Current City</h3>
                </div>
                <div className="cards-container">
                    <Card>
                        <CardHeader>
                            <CardTitle>Rome</CardTitle>
                            <CardSubtitle>Capital of Italy</CardSubtitle>
                        </CardHeader>
                        <img
                            className="k-card-image"
                            src="https://demos.telerik.com/kendo-ui/content/web/cards/rome.jpg"
                            alt="Rome image"
                        />
                        <CardBody>
                            <p>
                                Rome is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential
                                art, architecture and culture on display.
                            </p>
                            <p>
                                Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman
                                Empire.
                            </p>
                        </CardBody>
                    </Card>
                </div>
                <Button id="openActionSheetBttn" onClick={openHandler} themeColor={'tertiary'}>
                    OPEN ACTION SHEET
                </Button>
                <ActionSheet
                    expand={open}
                    title={title}
                    animation={true}
                    items={items}
                    onClose={handleOverlayClick}
                    onItemSelect={handleItemClick}
                />
            </div>
            <style>{`
            .demo-view {
                transform: scale(1);
                overflow: hidden;
            }

            .k-actionsheet-container {
                width: 100%;
                height: 100%;
                z-index: 1;
            }

            .k-actionsheet-container > .k-overlay {
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
            }

            .cards-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }

            .k-card {
                width: 285px;
                margin: 5%;
            }

            #openActionSheetBttn {
                margin: 0 auto;
                display: block;
            }

            .demo-app {
                margin: auto;
                width: 380px;
                height: 700px;
                background: #ffffff;
                box-shadow: 0px 10px 20px #00000016;
                border-radius: 30px;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
            }
            .demo-app .title {
                width: 100%;
            }

            #city {
                background: #f9f9f9;
                height: inherit;
                width: inherit;
                border-radius: 30px;
                border: 10px solid white;
                box-sizing: border-box;
            }

            .demo-app h3 {
                padding-top: 24px;
                text-align: center;
                font-size: 28px;
                letter-spacing: 0.28px;
                color: #3d57d8;
                font-weight: 400;
            }
        `}</style>
        </div>
    );
};

export default App;
