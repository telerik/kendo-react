import { CommandInterface } from '@progress/kendo-react-conversational-ui';
import { brushIcon, editToolsIcon, minWidthIcon, arrowsLeftRightIcon } from '@progress/kendo-svg-icons';

export const promptCommands: CommandInterface[] = [
    {
        id: '1',
        text: 'Change Formality',
        svgIcon: brushIcon,
        children: [
            {
                id: '1_1',
                text: 'Casual'
            },
            {
                id: '1_2',
                text: 'Neutral'
            },
            {
                id: '1_3',
                text: 'Formal'
            }
        ]
    },
    {
        id: '2',
        text: 'Translate',
        svgIcon: editToolsIcon,
        children: [
            {
                id: '2_1',
                text: 'German'
            },
            {
                id: '2_2',
                text: 'Spanish'
            }
        ]
    },
    {
        id: '3',
        text: 'Simplify',
        svgIcon: minWidthIcon
    },
    {
        id: '4',
        text: 'Expand',
        svgIcon: arrowsLeftRightIcon
    }
];

const outOfOffice = 'Out of office';
const linkedInPost = 'Linked in post for work/life balance importance';

export const suggestionsList = [outOfOffice, linkedInPost];
