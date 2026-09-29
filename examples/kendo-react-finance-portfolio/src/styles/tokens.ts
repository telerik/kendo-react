export const getKendoColor = (name: string): string =>
    window.getComputedStyle(document.documentElement).getPropertyValue(`--kendo-color-${name}`).trim();
