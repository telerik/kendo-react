import * as React from 'react';
import { BottomNavigation } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { SvgIcon } from '@progress/kendo-react-common';
import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { Card, CardBody, CardTitle } from '@progress/kendo-react-layout';
import { heartIcon, homeIcon, plusIcon, searchIcon, userIcon } from '@progress/kendo-svg-icons';

const items = [
    {
        svgIcon: homeIcon,
        selected: true,
        notifications: 2,
        view: 'Home'
    },
    {
        svgIcon: searchIcon,
        view: 'Search'
    },
    {
        svgIcon: plusIcon,
        floating: true,
        view: 'Create'
    },
    {
        svgIcon: heartIcon,
        notifications: 5,
        view: 'Favorites'
    },
    {
        svgIcon: userIcon,
        view: 'Profile'
    }
];

const ViewContent = ({ view }) => {
    switch (view) {
        case 'Home':
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Welcome Home!</CardTitle>
                        <p>Discover new features and explore content.</p>
                    </CardBody>
                </Card>
            );
        case 'Search':
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Search Anything</CardTitle>
                        <p>Find what you need quickly.</p>
                    </CardBody>
                </Card>
            );
        case 'Create':
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Create Something New</CardTitle>
                        <p>Start a new project or add new content.</p>
                    </CardBody>
                </Card>
            );
        case 'Favorites':
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Your Favorites</CardTitle>
                        <p>All your liked items in one place.</p>
                    </CardBody>
                </Card>
            );
        case 'Profile':
            return (
                <Card>
                    <CardBody>
                        <CardTitle>Your Profile</CardTitle>
                        <p>Manage your settings and account.</p>
                    </CardBody>
                </Card>
            );
        default:
            return <p>Unknown View</p>;
    }
};

const App = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(items.findIndex((x) => x.selected === true));

    const handleSelect = (e) => {
        setSelectedIndex(e.itemIndex);
    };

    return (
        <div className="example-wrapper">
            <div className={'page'}>
                <div className={'content'}>
                    <ViewContent view={items[selectedIndex].view} />
                </div>
                <BottomNavigation
                    items={items.map((item, index) => ({
                        ...item,
                        selected: index === selectedIndex
                    }))}
                    item={BottomNavItem}
                    border={false}
                    positionMode={'sticky'}
                    onSelect={handleSelect}
                />
            </div>
            <style>{`
                .badge {
                  position: relative;
                  overflow: visible;
                }

                .example-wrapper {
                  width: 380px;
                  margin: 0 auto;
                  box-shadow: 0px 10px 20px #00000029;
                  border-radius: 30px;
                }

                .page {
                  padding: 10px 10px 0 10px;
                }

                .content {
                  background: #F9F9F9;
                  border-radius: 30px 30px 0 0;
                  height: 550px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 24px;
                  font-weight: bold;
                }

                .k-bottom-nav {
                  border-radius: 0 0 20px 20px;
                  overflow: visible;
                }

                .k-bottom-nav-item {
                  min-width: 40px;
                }
            `}</style>
        </div>
    );
};

const BottomNavItem = (props) => {
    return (
        <div>
            {props.item.floating ? (
                <FloatingActionButton
                    svgIcon={props.item.svgIcon}
                    positionMode={'absolute'}
                    align={{
                        horizontal: 'center',
                        vertical: 'bottom'
                    }}
                    alignOffset={{
                        y: 20
                    }}
                />
            ) : props.item.notifications ? (
                <BadgeContainer>
                    <SvgIcon icon={props.item.svgIcon} size="xlarge" />
                    <Badge size={'small'}>{props.item.notifications}</Badge>
                </BadgeContainer>
            ) : (
                <SvgIcon icon={props.item.svgIcon} size="xlarge" />
            )}
        </div>
    );
};

export default App;
