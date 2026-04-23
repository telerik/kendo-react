import * as React from 'react';

import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';

interface People {
    text: string;
    value: string;
    avatar?: {};
}

const people: People[] = [
    {
        text: 'Pedro Afonso',
        value: 'pedro',
        avatar: {
            image: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/SPLIR.jpg',
            imageAlt: 'Afonso Contact Image',
            rounded: 'circle'
        }
    },
    {
        text: 'Thomas Hardy',
        value: 'thomas',
        avatar: {
            image: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/RICSU.jpg',
            imageAlt: 'Hardy Contact Image',
            rounded: 'circle'
        }
    },
    {
        text: 'Christina Berg',
        value: 'christina',
        avatar: {
            image: 'https://demos.telerik.com/kendo-react-ui/assets/dropdowns/contacts/BERGS.jpg',
            imageAlt: 'Berg Contact Image',
            rounded: 'circle'
        }
    }
];

const App = () => {
    return (
        <div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    .color {
                        color: grey;
                }`
                }}
            />
            <ChipList
                data={people}
                selection={'single'}
                chip={(props: ChipProps) => <Chip {...props} avatar={props.dataItem.avatar} />}
            />
        </div>
    );
};

export default App;
