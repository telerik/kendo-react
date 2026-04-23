import * as React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardActions,
    CardImage,
    CardSubtitle
} from '@progress/kendo-react-layout';
import { starIcon, starOutlineIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const coffeeFirst = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/coffee_first.jpg';
    const coffeeSecond = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/card/coffee_second.jpg';
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ width: '45%' }}>
                <div>Horizontal Card</div>
                <hr />
                <Card orientation="horizontal">
                    <CardImage src={coffeeFirst} />
                    <div className="k-vbox">
                        <CardHeader>
                            <CardTitle>Coffee with friends</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starOutlineIcon} />
                                    <div>4/5 (681)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                The right place to be if you're in love with high quality espresso or tea. We offer wide
                                range to top coffee brands as Davidoff Cafe, Lavazza, Tchibo, Illy.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button fillMode="flat" themeColor={'primary'} type="button">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
            <div style={{ width: '45%' }}>
                <div>Vertical Card</div>
                <hr />
                <Card>
                    <CardImage src={coffeeSecond} />
                    <div>
                        <CardHeader>
                            <CardTitle>Coffee with friends</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starOutlineIcon} />
                                    <div>4/5 (681)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                The right place to be if you're in love with high quality espresso or tea. We offer wide
                                range to top coffee brands as Davidoff Cafe, Lavazza, Tchibo, Illy.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button fillMode="flat" themeColor={'primary'} type="button">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default App;
