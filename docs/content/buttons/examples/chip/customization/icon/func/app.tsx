import * as React from 'react';

import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';
import { SVGIcon, userIcon } from '@progress/kendo-svg-icons';

interface People {
    text: string;
    value: string;
    icon?: string;
    svgIcon?: SVGIcon;
    avatar?: {};
}

const people: People[] = [
    {
        text: 'Pedro Afonso',
        value: 'pedro',
        avatar: {
            image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/SPLIR.jpg',
            imageAlt: 'Afonso Contact Image',
            rounded: 'circle'
        }
    },
    {
        text: 'Thomas Hardy',
        value: 'thomas',
        avatar: {
            image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
            imageAlt: 'Hardy Contact Image',
            rounded: 'circle'
        }
    },
    {
        text: 'Christina Berg',
        value: 'christina',
        avatar: {
            image: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/BERGS.jpg',
            imageAlt: 'Berg Contact Image',
            rounded: 'circle'
        }
    },
    {
        text: 'Customer',
        value: 'customer4',
        svgIcon: userIcon
    },
    {
        text: 'Customer',
        value: 'customer5',
        icon: 'user color'
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
                chip={(props: ChipProps) => (
                    <Chip
                        {...props}
                        icon={props.dataItem.icon}
                        svgIcon={props.dataItem.svgIcon}
                        avatar={props.dataItem.avatar}
                    />
                )}
            />
        </div>
    );
};

export default App;
