import * as React from 'react';

import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { Calendar } from '@progress/kendo-react-dateinputs';
import { ChipList, Chip } from '@progress/kendo-react-buttons';
import GridLayoutArticleHeader from './GridLayoutArticleHeader';
import GridLayoutCardArticle from './GridLayoutCardArticle';

import './styles.css';

const tags = [
    { name: 'Art' },
    { name: 'Books' },
    { name: 'Film' },
    { name: 'Gaming' },
    { name: 'Music' },
    { name: 'Photography' },
    { name: 'Podcasts' },
    { name: 'TV' },
    { name: 'Visual Design' }
];

const articles = [
    {
        author: 'Camille Fournier',
        title: 'An incomplete list of skills senior engineers need',
        minsLength: 4,
        date: new Date()
    },
    {
        author: 'Mathew MacDonald',
        title: 'A Closer Look at 5 New Features in C# 10',
        minsLength: 6,
        date: new Date()
    },
    {
        author: 'Camille Fournier',
        title: '20 Necessary Requirements of a Perfect Laptop',
        minsLength: 4,
        date: new Date()
    },
    {
        author: 'Anton Subbotin',
        title: 'Top 3 Coding Teachers',
        minsLength: 5,
        date: new Date()
    },
    {
        author: 'Umair Haque',
        title: 'Welcome to a New Dark Age',
        minsLength: 9,
        date: new Date()
    },
    {
        author: 'Jean Campbell',
        title: 'An Open Letter to Millennials',
        minsLength: 7,
        date: new Date()
    }
];

const recommendedArticles = [
    {
        author: 'Andreas Maier',
        title: 'Pattern Recognition and the Fundamental Methods of Machine Learning',
        subtitle: 'A Comprehensive Overview of Classical ML Methods',
        minsLength: 7,
        imagePath: 'https://demos.telerik.com/blazor-ui/images/grid-layout/machine-learning.jpg',
        imageText: 'Photo by Nathan Van Egmond on Unsplash',
        date: new Date()
    },
    {
        author: 'Whet Moser',
        title: 'Our Climate Change Future Looks Like the Everglades',
        subtitle: 'We are all Florida man.',
        minsLength: 6,
        imagePath: 'https://demos.telerik.com/blazor-ui/images/grid-layout/climate.jpg',
        date: new Date()
    },
    {
        author: 'Ali Tamaseb',
        title: 'What I Learned About Startups by Collecting 30,000 Data Points',
        subtitle: 'I spend 4 years conducting one of the largest studies.',
        minsLength: 8,
        imagePath: 'https://demos.telerik.com/blazor-ui/images/grid-layout/books.jpg',
        imageText: 'Photo by Firmbee.com on Unsplash',
        date: new Date()
    }
];

const App = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const updateData = React.useCallback(() => {
        articles.sort(() => Math.random() - 0.5);
        recommendedArticles.sort(() => Math.random() - 0.5);
    }, []);

    const handleChange = React.useCallback(
        (e) => {
            setSelectedDate(e.value);
            updateData();
        },
        [setSelectedDate, updateData]
    );

    return (
        <div className="grid-layout-container">
            <GridLayout
                gap={{ rows: 6, cols: 10 }}
                rows={[{ height: 20 }, { height: 100 }, { height: 100 }, { height: 20 }, { height: 590 }]}
                cols={[{ width: 270 }, { width: 270 }, { width: 310 }]}
            >
                <GridLayoutItem row={1} col={1} colSpan={3}>
                    <div className="k-text-inverse k-text-uppercase k-font-weight-bold">Trending articles</div>
                </GridLayoutItem>
                <GridLayoutItem row={2} col={1}>
                    <GridLayoutArticleHeader position="1" article={articles[0]} />
                </GridLayoutItem>
                <GridLayoutItem row={2} col={2}>
                    <GridLayoutArticleHeader position="2" article={articles[1]} />
                </GridLayoutItem>
                <GridLayoutItem row={2} col={3}>
                    <GridLayoutArticleHeader position="3" article={articles[2]} />
                </GridLayoutItem>
                <GridLayoutItem row={3} col={1}>
                    <GridLayoutArticleHeader position="4" article={articles[3]} />
                </GridLayoutItem>
                <GridLayoutItem row={3} col={2}>
                    <GridLayoutArticleHeader position="5" article={articles[4]} />
                </GridLayoutItem>
                <GridLayoutItem row={3} col={3}>
                    <GridLayoutArticleHeader position="6" article={articles[5]} />
                </GridLayoutItem>
                <GridLayoutItem row={4} col={1} colSpan={2}>
                    <div className="k-text-inverse k-text-uppercase k-font-weight-bold">Recommended for you</div>
                </GridLayoutItem>
                <GridLayoutItem row={5} col={1} colSpan={2}>
                    {recommendedArticles.map((article, index) => {
                        return <GridLayoutCardArticle key={index} article={article} />;
                    })}
                </GridLayoutItem>
                <GridLayoutItem row={4} col={3}>
                    <div className="k-text-inverse k-text-uppercase k-font-weight-bold">Events this month</div>
                </GridLayoutItem>
                <GridLayoutItem row={5} col={3}>
                    <Calendar
                        className="event-calendar"
                        value={selectedDate}
                        onChange={handleChange}
                        bottomView="year"
                        topView="decade"
                        navigation={false}
                    />
                    <div className="k-text-inverse k-text-uppercase k-font-weight-bold k-mt-4"> Discover more </div>
                    <ChipList
                        className={'k-flex-wrap'}
                        selection="multiple"
                        defaultData={tags}
                        textField="name"
                        valueField="name"
                        chip={(props) => <Chip {...props} fillMode={'outline'} />}
                    />
                </GridLayoutItem>
            </GridLayout>
        </div>
    );
};

export default App;
