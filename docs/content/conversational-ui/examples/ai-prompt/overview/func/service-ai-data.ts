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
                text: 'Casual',
                prompt: (selection) =>
                    'You are working with this text: `' +
                    selection +
                    '`Change its formality to casual and return only the result.'
            },
            {
                id: '1_2',
                text: 'Neutral',
                prompt: (selection) =>
                    'You are working with this text: `' +
                    selection +
                    '`Change its formality to neutral and return only the result.'
            },
            {
                id: '1_3',
                text: 'Formal',
                prompt: (selection) =>
                    'You are working with this text: `' +
                    selection +
                    '`Change its formality to formal and return only the result.'
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
                text: 'German',
                prompt: (selection) =>
                    'Translate this text to German: `' + selection + '` and return just the translated text'
            },
            {
                id: '2_2',
                text: 'Spanish',
                prompt: (selection) =>
                    'Translate this text to Spanish: `' + selection + '` and return just the translated text'
            },
            {
                id: '2_3',
                text: 'English',
                prompt: (selection) =>
                    'Translate this text to English: `' + selection + '` and return just the translated text'
            }
        ]
    },
    {
        id: '3',
        text: 'Simplify',
        svgIcon: minWidthIcon,
        prompt: (selection) =>
            'You are working with this text: `' + selection + '`\nSimplify it and return just the simplified text'
    },
    {
        id: '4',
        text: 'Expand',
        svgIcon: arrowsLeftRightIcon,
        prompt: (selection) =>
            'You are working with this text: `' + selection + '`\nExpand it and return just the expanded text'
    }
];

const outOfOffice = 'Out of office';

const linkedInPost = 'Linked in post for work/life balance importance';

export const suggestionsList = [outOfOffice, linkedInPost];
