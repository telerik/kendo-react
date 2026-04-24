import * as svgIcons from '@progress/kendo-svg-icons';

export const leftNavigationItems = [
    {
        text: 'Calendar',
        svgIcon: svgIcons.calendarIcon,
        route: '/drawer-advanced-scenarios'
    },
    {
        separator: true
    },
    {
        text: 'Attachments',
        svgIcon: svgIcons.envelopLinkIcon,
        route: '/drawer-advanced-scenarios/attachments'
    },
    {
        separator: true
    },
    {
        text: 'Favourites',
        svgIcon: svgIcons.starOutlineIcon,
        route: '/drawer-advanced-scenarios/favourites'
    }
];

export const rightNavigationItems = [
    {
        text: 'Inbox',
        svgIcon: svgIcons.inboxIcon,
        selected: true,
        route: '/drawer-advanced-scenarios/inbox'
    },
    {
        separator: true
    },
    {
        text: 'Notifications',
        svgIcon: svgIcons.bellIcon,
        route: '/drawer-advanced-scenarios/notifications'
    }
];
