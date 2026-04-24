import * as React from 'react';

import {
    Card,
    CardImage,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardActions
} from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

import { SvgIcon } from '@progress/kendo-react-common';
import { starIcon, starOutlineIcon } from '@progress/kendo-svg-icons';

const reactImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/react-logo.jpg';
const jsImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/js-logo.png';
const sushiImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/sushi.jpg';
const ramenImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/ramen.jpg';
const pastaImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/pasta.jpg';
const pizzaImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/pizza.jpg';
const amsterdamImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/amsterdam.jpg';
const budapestImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/budapest.jpg';
const newYorkImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/new-york.jpg';
const lasVegasImagePath = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/layout/drawer/las-vegas.jpg';

export const Education = (props) => {
    const text = (
        <div id="Education" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 10 }}>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage src={reactImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>React</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <div>5/5 (981)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                If you're serious about learning React, there's no better place to do it. This course
                                includes all of the best practices and newest APIs for building professional React apps
                                in 2020.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="flat" type="button">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage style={{ height: 280 }} src={jsImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>Advanced JS</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starOutlineIcon} style={{ color: '#ffce2a' }} />
                                    <div>4/5 (681)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                If you use JavaScript in any capacity, there's probably not another resource that will
                                benefit you more than this course. Closures, The 'this' keyword, module patterns and so
                                much more.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="outline" type="button">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
        </div>
    );

    return <div>{props.children ? props.children : text}</div>;
};

export const Food = (props) => {
    const text = (
        <React.Fragment>
            <JapaneseFood />
            <ItalianFood />
        </React.Fragment>
    );

    return <div>{props.children ? props.children : text}</div>;
};

export const JapaneseFood = (props) => {
    const text = (
        <div id="JapaneseFood" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 10 }}>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage src={sushiImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>Sushi</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <div>5/5 (203)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Sushi is a Japanese dish of prepared vinegared rice, accompanying with seafood,
                                vegetables, and occasionally tropical fruits.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="flat" type="button">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage src={ramenImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>Ramen</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <div>5/5 (653)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Ramen is a Japanese dish with a translation of "pulled noodles". It consists of wheat
                                noodles served in a meat or fish-based broth.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="flat" type="button">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
        </div>
    );

    return <div>{props.children ? props.children : text}</div>;
};

export const ItalianFood = (props) => {
    const text = (
        <div id="ItalianFood" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 10 }}>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage src={pastaImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>Pasta</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starOutlineIcon} style={{ color: '#ffce2a' }} />
                                    <div>4/5 (681)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Pasta is a type of Italian food typically made from an unleavened dough of durum wheat
                                flour mixed with water or eggs, and formed into sheets or various shapes, then cooked by
                                boiling or baking.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="flat">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage src={pizzaImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>Pizza</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starOutlineIcon} style={{ color: '#ffce2a' }} />
                                    <div>4/5 (681)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Though a slab of flat bread served with oil and spices was around long before the
                                unification Italy, there’s perhaps no dish that is as common or as representative of the
                                country as the humble pizza.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="flat">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
        </div>
    );

    return <div>{props.children ? props.children : text}</div>;
};

export const Travel = (props) => {
    const text = (
        <React.Fragment>
            <Europe />
            <NorthAmerica />
        </React.Fragment>
    );

    return <div>{props.children ? props.children : text}</div>;
};

export const Europe = (props) => {
    const text = (
        <div id="Europe" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 10 }}>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage src={amsterdamImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>Amsterdam holiday</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starOutlineIcon} style={{ color: '#ffce2a' }} />
                                    <div>4/5 (391)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Amsterdam is the perfect place for a great holiday, with its great museums and
                                galleries, lovely eateries, picturesque winding streets and canals, and lively nightlife
                                scene.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="flat">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage src={budapestImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>Budapest holiday</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <div>5/5 (1023)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Discover why Budapest has long been a much-loved destination. Take an evening summer
                                stroll along the banks of the Danube River, and enjoy the view from Castle Hill.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="flat">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
        </div>
    );

    return <div>{props.children ? props.children : text}</div>;
};

export const NorthAmerica = (props) => {
    const text = (
        <div id="NorthAmerica" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 10 }}>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage src={newYorkImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>New York holiday</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starOutlineIcon} style={{ color: '#ffce2a' }} />
                                    <div>4/5 (2523)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                New York holidays are the ideal way to explore one of the most iconic destinations.
                                Offering both return flights and accommodation, they offer great value and fantastic
                                savings.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="flat">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
            <div style={{ width: '47%' }}>
                <Card>
                    <CardImage src={lasVegasImagePath} />
                    <div>
                        <CardHeader>
                            <CardTitle>Las Vegas holiday</CardTitle>
                            <CardSubtitle>
                                <span className="reviews">
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <SvgIcon icon={starIcon} style={{ color: '#ffce2a' }} />
                                    <div>5/5 (357)</div>
                                </span>
                            </CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                With its famous casinos, gourmet restaurants and glitzy shows, Las Vegas is truly a
                                must-see destination. Explore the famous hotels and casinos that are home to the best
                                restaurants and clubs.
                            </p>
                        </CardBody>
                        <CardActions>
                            <Button themeColor={'primary'} fillMode="flat">
                                Review
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </div>
        </div>
    );

    return <div>{props.children ? props.children : text}</div>;
};

const App = () => {
    return <p>Hierarchical drawer demo</p>;
};

export default App;
