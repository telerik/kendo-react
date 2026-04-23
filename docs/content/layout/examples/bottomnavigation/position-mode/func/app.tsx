import * as React from 'react';
import { BottomNavigation, BottomNavigationPositionMode } from '@progress/kendo-react-layout';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { folderIcon, homeIcon, searchIcon } from '@progress/kendo-svg-icons';
const content = [
    {
        text: 'Home',
        svgIcon: homeIcon,
        selected: true
    },
    {
        text: 'Library',
        svgIcon: folderIcon
    },
    {
        text: 'Search',
        svgIcon: searchIcon
    }
];
const positionModes = [
    {
        title: 'Fixed',
        value: 'fixed'
    },
    {
        title: 'Sticky',
        value: 'sticky'
    }
];
const App = () => {
    const [positionMode, setPositionMode] = React.useState<{ title: String; value: BottomNavigationPositionMode }>({
        title: 'Fixed',
        value: 'fixed'
    });
    const [selectedIndex, setSelectedIndex] = React.useState(content.findIndex((x) => x.selected === true));
    const handleChange = (e) => {
        setPositionMode(e.value);
    };
    const handleSelect = (e) => {
        setSelectedIndex(e.itemIndex);
    };
    return (
        <div className="example">
            <div className={'example-wrapper'}>
                <div className={'page'}>
                    <div className={`content ${positionMode.value}`}>
                        <DropDownList
                            data={positionModes}
                            value={positionMode}
                            textField="title"
                            onChange={handleChange}
                        />
                        <br />
                        <br />
                        <p>
                            NASA has identified the agency’s science priorities for the Artemis III mission, which will
                            launch the first woman and next man to the Moon in 2024. The priorities and a candidate set
                            of activities are included in a new report.
                        </p>
                        <p>
                            The Artemis III Science Definition Team, which comprises federal employees and consultants
                            with expertise in lunar science, began meeting in September to define compelling and
                            achievable science objectives for all aspects of the Artemis III mission, including sampling
                            strategies, field surveys, and deployable experiments.
                        </p>
                        <p>
                            The Moon often is referred to as the cornerstone of the solar system, and these
                            high-priority investigations will help scientists better understand fundamental planetary
                            processes that operate across the solar system and beyond. In addition, the team prioritized
                            investigations that will help NASA understand the risks and potential resources of the
                            Moon’s South Pole, where the agency hopes to establish its Artemis Base Camp concept by the
                            end of the decade.
                        </p>
                        <p>
                            “The Moon holds vast scientific potential and astronauts are going to help us enable that
                            science,” said Thomas Zurbuchen, associate administrator for NASA’s Science Mission
                            Directorate. “Even before Artemis III lands, our agency’s science and human exploration
                            teams are working together as never before to ensure that we leverage each other’s
                            strengths. This report helps outline a path forward toward the compelling science we can now
                            contemplate doing on the lunar surface in conjunction with human explorers.”
                        </p>
                    </div>
                    <BottomNavigation
                        positionMode={positionMode.value}
                        items={content.map((item, index) => ({
                            ...item,
                            selected: index === selectedIndex
                        }))}
                        onSelect={handleSelect}
                    />
                </div>
            </div>
            <style>{`my-app { padding: 0 !important; }
            .content { margin: 20px; }
            .content.fixed { padding-bottom: 70px}`}</style>
        </div>
    );
};
export default App;
