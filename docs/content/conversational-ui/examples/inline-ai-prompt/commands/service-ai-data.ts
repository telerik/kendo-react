import { CommandInterface, OutputActionInterface } from '@progress/kendo-react-conversational-ui';
import {
    arrowRotateCwIcon,
    cancelOutlineIcon,
    checkIcon,
    colResizeIcon,
    copyIcon,
    insertBottomIcon,
    spellCheckerIcon,
    tellAFriendIcon
} from '@progress/kendo-svg-icons';

export const commands: CommandInterface[] = [
    {
        id: 'rewrite',
        text: 'Rewrite',
        svgIcon: arrowRotateCwIcon,
        prompt: (selection: string) => `Rewrite the selected text while preserving its original meaning and intent.

Selected Text:
${selection}`
    },
    {
        id: 'fix-spelling',
        text: 'Fix spelling',
        svgIcon: spellCheckerIcon,
        prompt: (
            selection: string
        ) => `Correct any spelling, grammar, or punctuation mistakes in the selected text while preserving its original meaning and intent.

Selected Text:
${selection}`
    },
    {
        id: 'change-tone',
        text: 'Change tone',
        svgIcon: tellAFriendIcon,
        children: [
            {
                id: 'change-tone-neutral',
                text: 'Neutral',
                prompt: (
                    selection: string
                ) => `Adjust the tone of the following text to be more neutral while preserving its original meaning and intent.

Selected Text:
${selection}`
            },
            {
                id: 'change-tone-friendly',
                text: 'Friendly',
                prompt: (
                    selection: string
                ) => `Adjust the tone of the following text to be more friendly while preserving its original meaning and intent.

Selected Text:
${selection}`
            },
            {
                id: 'change-tone-casual',
                text: 'Casual',
                prompt: (
                    selection: string
                ) => `Adjust the tone of the following text to be more casual while preserving its original meaning and intent.

Selected Text:
${selection}`
            },
            {
                id: 'change-tone-formal',
                text: 'Formal',
                prompt: (
                    selection: string
                ) => `Adjust the tone of the following text to be more formal while preserving its original meaning and intent.

Selected Text:
${selection}`
            }
        ]
    },
    {
        id: 'adjust-length',
        text: 'Adjust length',
        svgIcon: colResizeIcon,
        children: [
            {
                id: 'adjust-length-shorten',
                text: 'Shorten',
                prompt: (
                    selection: string
                ) => `Shorten the following text while preserving its original meaning and intent.

Selected Text:
${selection}`
            },
            {
                id: 'adjust-length-lengthen',
                text: 'Lengthen',
                prompt: (
                    selection: string
                ) => `Lengthen the following text while preserving its original meaning and intent.

Selected Text:
${selection}`
            }
        ]
    }
];

export const outputActions: OutputActionInterface[] = [
    {
        id: 'copy',
        text: 'Copy',
        svgIcon: copyIcon,
        themeColor: 'primary',
        title: 'Copy'
    },
    {
        id: 'insert',
        text: 'Insert',
        svgIcon: insertBottomIcon,
        themeColor: 'primary',
        title: 'Insert content'
    },
    {
        id: 'replace',
        text: 'Replace',
        svgIcon: checkIcon,
        themeColor: 'primary',
        title: 'Replace content'
    },
    {
        id: 'discard',
        text: 'Discard',
        svgIcon: cancelOutlineIcon,
        themeColor: 'base',
        title: 'Discard'
    }
];
