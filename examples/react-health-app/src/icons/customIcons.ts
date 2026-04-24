import type { SVGIcon } from "@progress/kendo-svg-icons";

/**
 * White plus / add icon — used inside quick action card buttons.
 */
export const plusWhiteIcon: SVGIcon = {
  name: "plus-white",
  content: `
    <path d="M3.33331 8H12.6666" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M8 3.33301V12.6663" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * GitHub icon — used in the AppBar for the source code popup.
 */
export const gitHubIcon: SVGIcon = {
  name: "github",
  content: `
    <path d="M8 1C4.13 1 1 4.13 1 8a7 7 0 0 0 4.79 6.65c.35.06.48-.15.48-.34
    0-.17-.01-.71-.01-1.3C4 13.47 3.55 12.37 3.55 12.37c-.32-.81-.78-1.02-.78-1.02
    -.63-.43.05-.42.05-.42.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76
    .44-.93-1.55-.18-3.18-.78-3.18-3.46 0-.76.27-1.39.72-1.88-.07-.18-.31-.89.07-1.85
    0 0 .59-.19 1.93.72a6.7 6.7 0 0 1 3.5 0c1.34-.91 1.93-.72 1.93-.72.38.96.14 1.67
    .07 1.85.45.49.72 1.11.72 1.88 0 2.69-1.64 3.28-3.19 3.45.25.22.47.64.47 1.29
    0 .93-.01 1.68-.01 1.91 0 .19.13.41.48.34A7 7 0 0 0 15 8c0-3.87-3.13-7-7-7Z"
      fill="currentColor"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Two overlapping circles (venn diagram) — used for the transparency toggle in the AppBar.
 */
export const transparencyIcon: SVGIcon = {
  name: "transparency",
  content: `
    <path d="M6 10.667a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334Z"
      stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M10 14.667a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334Z"
      stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Home icon — used in AppBar segmented navigation.
 */
export const appBarHomeIcon: SVGIcon = {
  name: "appbar-home",
  content: `
    <path d="M10 14V8.66667C10 8.48986 9.92976 8.32029 9.80474 8.19526C9.67971 8.07024 9.51014 8 9.33333 8H6.66667C6.48986 8 6.32029 8.07024 6.19526 8.19526C6.07024 8.32029 6 8.48986 6 8.66667V14" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M2 6.66666C1.99995 6.47271 2.04222 6.28108 2.12386 6.10514C2.20549 5.9292 2.32453 5.77319 2.47267 5.64799L7.13933 1.64799C7.37999 1.4446 7.6849 1.33301 8 1.33301C8.3151 1.33301 8.62001 1.4446 8.86067 1.64799L13.5273 5.64799C13.6755 5.77319 13.7945 5.9292 13.8761 6.10514C13.9578 6.28108 14 6.47271 14 6.66666V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V6.66666Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Calendar icon — used in AppBar segmented navigation.
 */
export const appBarCalendarIcon: SVGIcon = {
  name: "appbar-calendar",
  content: `
    <path d="M5.33331 1.33301V3.99967" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M10.6667 1.33301V3.99967" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M12.6667 2.66699H3.33333C2.59695 2.66699 2 3.26395 2 4.00033V13.3337C2 14.07 2.59695 14.667 3.33333 14.667H12.6667C13.403 14.667 14 14.07 14 13.3337V4.00033C14 3.26395 13.403 2.66699 12.6667 2.66699Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M2 6.66699H14" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Patients icon — used in AppBar segmented navigation.
 */
export const appBarPatientsIcon: SVGIcon = {
  name: "appbar-patients",
  content: `
    <path d="M1.33331 13.9999C1.33322 13.1374 1.54232 12.2877 1.9427 11.5237C2.34307 10.7597 2.92277 10.1042 3.63208 9.61348C4.34139 9.12271 5.15915 8.8113 6.01523 8.70595C6.87132 8.6006 7.74018 8.70445 8.54731 9.0086" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M14.252 11.0844C14.5176 10.8189 14.6668 10.4587 14.6668 10.0831C14.6668 9.70752 14.5176 9.34733 14.252 9.08176C13.9865 8.81619 13.6263 8.66699 13.2507 8.66699C12.8751 8.66699 12.5149 8.81619 12.2494 9.08176L9.57603 11.7564C9.41752 11.9148 9.30151 12.1106 9.23869 12.3258L8.68069 14.2391C8.66396 14.2965 8.66296 14.3573 8.67779 14.4152C8.69262 14.473 8.72274 14.5259 8.76499 14.5681C8.80724 14.6104 8.86008 14.6405 8.91796 14.6553C8.97585 14.6702 9.03666 14.6692 9.09402 14.6524L11.0074 14.0944C11.2225 14.0316 11.4183 13.9156 11.5767 13.7571L14.252 11.0844Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M6.66665 8.66667C8.5076 8.66667 9.99998 7.17428 9.99998 5.33333C9.99998 3.49238 8.5076 2 6.66665 2C4.8257 2 3.33331 3.49238 3.33331 5.33333C3.33331 7.17428 4.8257 8.66667 6.66665 8.66667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Analytics icon — used in AppBar segmented navigation.
 */
export const appBarAnalyticsIcon: SVGIcon = {
  name: "appbar-analytics",
  content: `
    <path d="M2 2V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H14" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M10 8.66699H5.33335C4.96516 8.66699 4.66669 8.96547 4.66669 9.33366V10.667C4.66669 11.0352 4.96516 11.3337 5.33335 11.3337H10C10.3682 11.3337 10.6667 11.0352 10.6667 10.667V9.33366C10.6667 8.96547 10.3682 8.66699 10 8.66699Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M12 3.33301H5.33335C4.96516 3.33301 4.66669 3.63148 4.66669 3.99967V5.33301C4.66669 5.7012 4.96516 5.99967 5.33335 5.99967H12C12.3682 5.99967 12.6667 5.7012 12.6667 5.33301V3.99967C12.6667 3.63148 12.3682 3.33301 12 3.33301Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Search icon — used in AppBar compact search action and search input prefixes.
 */
export const appBarSearchIcon: SVGIcon = {
  name: "appbar-search",
  content: `
    <path d="M14 13.9998L11.1067 11.1064" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Global override for `caret-alt-to-right` (skip-to-end style).
 */
export const globalCaretAltToRightIcon: SVGIcon = {
  name: "global-caret-alt-to-right",
  content: `
    <path d="M4.66663 12L8.66663 8L4.66663 4" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M11.3334 4V12" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Global override for `caret-alt-to-left` (skip-to-start style).
 */
export const globalCaretAltToLeftIcon: SVGIcon = {
  name: "global-caret-alt-to-left",
  content: `
    <path d="M11.3333 12L7.33331 8L11.3333 4" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M4.66669 4V12" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Global override for `caret-alt-right`.
 */
export const globalCaretAltRightIcon: SVGIcon = {
  name: "global-caret-alt-right",
  content: `
    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Global override for `caret-alt-left`.
 */
export const globalCaretAltLeftIcon: SVGIcon = {
  name: "global-caret-alt-left",
  content: `
    <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Global override for `caret-alt-up`.
 */
export const globalCaretAltUpIcon: SVGIcon = {
  name: "global-caret-alt-up",
  content: `
    <path d="M4 10L8 6L12 10" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Global override for `caret-alt-down`.
 */
export const globalCaretAltDownIcon: SVGIcon = {
  name: "global-caret-alt-down",
  content: `
    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Global override for `filter`.
 */
export const globalFilterIcon: SVGIcon = {
  name: "global-filter",
  content: `
    <path d="M6.66665 13.3333C6.66659 13.4572 6.70106 13.5787 6.76618 13.6841C6.8313 13.7895 6.9245 13.8746 7.03532 13.93L8.36865 14.5967C8.47031 14.6475 8.58328 14.6714 8.69681 14.6663C8.81035 14.6612 8.92068 14.6271 9.01734 14.5673C9.11399 14.5075 9.19376 14.424 9.24906 14.3247C9.30437 14.2254 9.33337 14.1137 9.33332 14V9.33333C9.33347 9.00292 9.45629 8.68433 9.67798 8.43933L14.4933 3.11333C14.5796 3.01771 14.6364 2.89912 14.6567 2.77192C14.6771 2.64472 14.6601 2.51435 14.6079 2.39658C14.5557 2.27881 14.4705 2.17868 14.3627 2.1083C14.2548 2.03792 14.1288 2.0003 14 2H1.99998C1.87105 2.00005 1.74491 2.03748 1.63682 2.10776C1.52873 2.17804 1.44334 2.27815 1.39099 2.39598C1.33864 2.5138 1.32157 2.64427 1.34187 2.77159C1.36216 2.89892 1.41893 3.01762 1.50532 3.11333L6.32198 8.43933C6.54367 8.68433 6.6665 9.00292 6.66665 9.33333V13.3333Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Global override for `filter-clear`.
 */
export const globalFilterClearIcon: SVGIcon = {
  name: "global-filter-clear",
  content: `
    <path d="M8.35398 2H1.99998C1.87105 2.00005 1.74491 2.03748 1.63682 2.10776C1.52873 2.17804 1.44334 2.27815 1.39099 2.39598C1.33864 2.5138 1.32157 2.64427 1.34187 2.77159C1.36216 2.89892 1.41893 3.01762 1.50532 3.11333L6.32198 8.43933C6.54367 8.68433 6.6665 9.00292 6.66665 9.33333V13.3333C6.66659 13.4572 6.70106 13.5787 6.76618 13.6841C6.8313 13.7895 6.9245 13.8746 7.03532 13.93L8.36865 14.5967C8.47031 14.6475 8.58328 14.6714 8.69681 14.6663C8.81035 14.6612 8.92068 14.6271 9.01734 14.5673C9.11399 14.5075 9.19376 14.424 9.24906 14.3247C9.30437 14.2254 9.33337 14.1137 9.33332 14V9.33333C9.33347 9.00292 9.45629 8.68433 9.67798 8.43933L9.96265 8.124" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M11 2.33301L14.3333 5.66634" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M14.3333 2.33301L11 5.66634" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * AI Assistance sparkles icon — used in page heading AI Assistance buttons.
 */
export const aiAssistanceSparklesIcon: SVGIcon = {
  name: "ai-assistance-sparkles",
  content: `
    <path d="M7.34466 1.87629C7.37322 1.72336 7.45437 1.58524 7.57405 1.48584C7.69374 1.38644 7.84441 1.33203 7.99999 1.33203C8.15557 1.33203 8.30624 1.38644 8.42592 1.48584C8.54561 1.58524 8.62676 1.72336 8.65532 1.87629L9.35599 5.58163C9.40575 5.84506 9.53377 6.08737 9.72334 6.27694C9.91291 6.46651 10.1552 6.59453 10.4187 6.64429L14.124 7.34496C14.2769 7.37353 14.415 7.45468 14.5144 7.57436C14.6138 7.69404 14.6683 7.84472 14.6683 8.00029C14.6683 8.15587 14.6138 8.30655 14.5144 8.42623C14.415 8.54591 14.2769 8.62706 14.124 8.65563L10.4187 9.35629C10.1552 9.40606 9.91291 9.53408 9.72334 9.72365C9.53377 9.91322 9.40575 10.1555 9.35599 10.419L8.65532 14.1243C8.62676 14.2772 8.54561 14.4154 8.42592 14.5147C8.30624 14.6141 8.15557 14.6686 7.99999 14.6686C7.84441 14.6686 7.69374 14.6141 7.57405 14.5147C7.45437 14.4154 7.37322 14.2772 7.34466 14.1243L6.64399 10.419C6.59423 10.1555 6.46621 9.91322 6.27664 9.72365C6.08707 9.53408 5.84475 9.40606 5.58132 9.35629L1.87599 8.65563C1.72306 8.62706 1.58493 8.54591 1.48553 8.42623C1.38614 8.30655 1.33173 8.15587 1.33173 8.00029C1.33173 7.84472 1.38614 7.69404 1.48553 7.57436C1.58493 7.45468 1.72306 7.37353 1.87599 7.34496L5.58132 6.64429C5.84475 6.59453 6.08707 6.46651 6.27664 6.27694C6.46621 6.08737 6.59423 5.84506 6.64399 5.58163L7.34466 1.87629Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M13.3333 1.33301V3.99967" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M14.6667 2.66699H12" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M2.66665 14.6667C3.40303 14.6667 3.99998 14.0697 3.99998 13.3333C3.99998 12.597 3.40303 12 2.66665 12C1.93027 12 1.33331 12.597 1.33331 13.3333C1.33331 14.0697 1.93027 14.6667 2.66665 14.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Expand icon — used in Scheduler event dialog header.
 */
export const dialogExpandIcon: SVGIcon = {
  name: "dialog-expand",
  content: `
    <path d="M7.33331 12.667H3.33331V8.66699" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M8.66669 3.33301H12.6667V7.33301" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M12.6666 3.33301L3.33331 12.6663" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Collapse icon — used in Scheduler event dialog header.
 */
export const dialogCollapseIcon: SVGIcon = {
  name: "dialog-collapse",
  content: `
    <path d="M9.33331 6.66667L14 2" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M13.3333 6.66699H9.33331V2.66699" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M2 13.9997L6.66667 9.33301" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M2.66669 9.33301H6.66669V13.333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Location icon — used in Scheduler event dialog details.
 */
export const dialogLocationIcon: SVGIcon = {
  name: "dialog-location",
  content: `
    <path d="M13.3334 6.66634C13.3334 9.99501 9.64069 13.4617 8.40069 14.5323C8.28517 14.6192 8.14455 14.6662 8.00002 14.6662C7.85549 14.6662 7.71487 14.6192 7.59935 14.5323C6.35935 13.4617 2.66669 9.99501 2.66669 6.66634C2.66669 5.25185 3.22859 3.8953 4.22878 2.89511C5.22898 1.89491 6.58553 1.33301 8.00002 1.33301C9.41451 1.33301 10.7711 1.89491 11.7713 2.89511C12.7715 3.8953 13.3334 5.25185 13.3334 6.66634Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M8 8.66699C9.10457 8.66699 10 7.77156 10 6.66699C10 5.56242 9.10457 4.66699 8 4.66699C6.89543 4.66699 6 5.56242 6 6.66699C6 7.77156 6.89543 8.66699 8 8.66699Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Clock icon — used in Scheduler event dialog details.
 */
export const dialogClockIcon: SVGIcon = {
  name: "dialog-clock",
  content: `
    <path d="M7.99998 14.6663C11.6819 14.6663 14.6666 11.6816 14.6666 7.99967C14.6666 4.31778 11.6819 1.33301 7.99998 1.33301C4.31808 1.33301 1.33331 4.31778 1.33331 7.99967C1.33331 11.6816 4.31808 14.6663 7.99998 14.6663Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M8 4V8L10.6667 9.33333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Next patient "View profile" icon — used in Dashboard next patient card action.
 */
export const nextPatientViewProfileIcon: SVGIcon = {
  name: "next-patient-view-profile",
  content: `
    <path d="M10 2H14V6" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M6.66669 9.33333L14 2" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Grid cell "View profile" icon — used in Patients grid actions cell.
 */
export const gridViewProfileIcon: SVGIcon = {
  name: "grid-view-profile",
  content: `
    <path d="M1.37468 8.23224C1.31912 8.08256 1.31912 7.91792 1.37468 7.76824C1.91581 6.45614 2.83435 5.33427 4.01386 4.54484C5.19336 3.75541 6.58071 3.33398 8.00001 3.33398C9.41932 3.33398 10.8067 3.75541 11.9862 4.54484C13.1657 5.33427 14.0842 6.45614 14.6253 7.76824C14.6809 7.91792 14.6809 8.08256 14.6253 8.23224C14.0842 9.54434 13.1657 10.6662 11.9862 11.4556C10.8067 12.2451 9.41932 12.6665 8.00001 12.6665C6.58071 12.6665 5.19336 12.2451 4.01386 11.4556C2.83435 10.6662 1.91581 9.54434 1.37468 8.23224Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Patient profile breadcrumb icon.
 */
export const patientProfileBreadcrumbIcon: SVGIcon = {
  name: "patient-profile-breadcrumb",
  content: `
    <path d="M8.93335 1.33301H4.00002C3.6464 1.33301 3.30726 1.47348 3.05721 1.72353C2.80716 1.97358 2.66669 2.31272 2.66669 2.66634V13.333C2.66669 13.6866 2.80716 14.0258 3.05721 14.2758C3.30726 14.5259 3.6464 14.6663 4.00002 14.6663H12C12.3536 14.6663 12.6928 14.5259 12.9428 14.2758C13.1929 14.0258 13.3334 13.6866 13.3334 13.333V8.39967" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M1.33331 4H3.99998" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M1.33331 6.66699H3.99998" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M1.33331 9.33301H3.99998" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M1.33331 12H3.99998" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M14.252 3.75044C14.5176 3.48487 14.6668 3.12468 14.6668 2.74911C14.6668 2.37353 14.5176 2.01334 14.252 1.74777C13.9864 1.4822 13.6262 1.33301 13.2507 1.33301C12.8751 1.33301 12.5149 1.4822 12.2493 1.74777L8.90934 5.08911C8.75084 5.24752 8.63482 5.44333 8.572 5.65844L8.014 7.57177C7.99727 7.62914 7.99627 7.68995 8.0111 7.74783C8.02593 7.80572 8.05605 7.85856 8.0983 7.90081C8.14056 7.94306 8.19339 7.97318 8.25128 7.98801C8.30916 8.00284 8.36997 8.00184 8.42734 7.98511L10.3407 7.42711C10.5558 7.36429 10.7516 7.24828 10.91 7.08977L14.252 3.75044Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Save icon — used in Patient Note card action.
 */
export const patientNoteSaveIcon: SVGIcon = {
  name: "patient-note-save",
  content: `
    <path d="M10.1333 2C10.485 2.00501 10.8205 2.14878 11.0667 2.4L13.6 4.93333C13.8512 5.17951 13.995 5.51497 14 5.86667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.1333Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M11.3334 14.0003V9.33366C11.3334 9.15685 11.2631 8.98728 11.1381 8.86225C11.0131 8.73723 10.8435 8.66699 10.6667 8.66699H5.33335C5.15654 8.66699 4.98697 8.73723 4.86195 8.86225C4.73693 8.98728 4.66669 9.15685 4.66669 9.33366V14.0003" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M4.66669 2V4.66667C4.66669 4.84348 4.73693 5.01305 4.86195 5.13807C4.98697 5.2631 5.15654 5.33333 5.33335 5.33333H10" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Export icon — used by all Export buttons.
 */
export const exportButtonIcon: SVGIcon = {
  name: "export-button",
  content: `
    <path d="M8 10V2" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M4.66669 6.66699L8.00002 10.0003L11.3334 6.66699" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Reason for visit card icon — used in the Dashboard next-patient detail card.
 */
export const reasonForVisitCardIcon: SVGIcon = {
  name: "reason-for-visit-card",
  content: `
    <path d="M12 11V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M14 13H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M16 6V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M18 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M6 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M20 6H4C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 24 24",
};

/**
 * Allergy alert card icon — used in the Dashboard next-patient detail card.
 */
export const allergyAlertCardIcon: SVGIcon = {
  name: "allergy-alert-card",
  content: `
    <path d="M10.5 20.5L20.5 10.5C20.9673 10.0421 21.3391 9.49606 21.5941 8.89352C21.849 8.29099 21.982 7.64389 21.9853 6.98965C21.9886 6.33541 21.8622 5.687 21.6133 5.08192C21.3645 4.47684 20.9982 3.92709 20.5355 3.46447C20.0729 3.00184 19.5232 2.63552 18.9181 2.38668C18.313 2.13783 17.6646 2.01141 17.0104 2.01471C16.3561 2.01802 15.709 2.15098 15.1065 2.40593C14.5039 2.66087 13.9579 3.03273 13.5 3.5L3.5 13.5C3.03273 13.9579 2.66087 14.5039 2.40593 15.1065C2.15098 15.709 2.01802 16.3561 2.01471 17.0104C2.01141 17.6646 2.13783 18.313 2.38668 18.9181C2.63552 19.5232 3.00184 20.0729 3.46447 20.5355C3.92709 20.9982 4.47684 21.3645 5.08192 21.6133C5.687 21.8622 6.33541 21.9886 6.98965 21.9853C7.64389 21.982 8.29099 21.849 8.89352 21.5941C9.49606 21.3391 10.0421 20.9673 10.5 20.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M8.5 8.5L15.5 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 24 24",
};

/**
 * Clinical note / document with edit — Quick Action card icon.
 */
export const clinicalNoteCardIcon: SVGIcon = {
  name: "clinical-note-card",
  content: `
    <g opacity="0.4">
      <path d="M23.45 3.5H10.5C9.57174 3.5 8.6815 3.86875 8.02513 4.52513C7.36875 5.1815 7 6.07174 7 7V35C7 35.9283 7.36875 36.8185 8.02513 37.4749C8.6815 38.1313 9.57174 38.5 10.5 38.5H31.5C32.4283 38.5 33.3185 38.1313 33.9749 37.4749C34.6313 36.8185 35 35.9283 35 35V22.05" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M3.5 10.5H10.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M3.5 17.5H10.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M3.5 24.5H10.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M3.5 31.5H10.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M37.4115 9.84552C38.1086 9.14839 38.5002 8.2029 38.5002 7.21702C38.5002 6.23114 38.1086 5.28564 37.4115 4.58852C36.7143 3.89139 35.7688 3.49976 34.783 3.49976C33.7971 3.49976 32.8516 3.89139 32.1545 4.58852L23.387 13.3595C22.9709 13.7754 22.6663 14.2894 22.5015 14.854L21.0367 19.8765C20.9928 20.0271 20.9902 20.1867 21.0291 20.3387C21.068 20.4906 21.1471 20.6293 21.258 20.7402C21.3689 20.8512 21.5076 20.9302 21.6595 20.9691C21.8115 21.0081 21.9711 21.0054 22.1217 20.9615L27.1442 19.4968C27.7089 19.3319 28.2229 19.0273 28.6387 18.6113L37.4115 9.84552Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
  `,
  viewBox: "0 0 42 42",
};

/**
 * Lab flask / test tube — Quick Action card icon.
 */
export const labFlaskCardIcon: SVGIcon = {
  name: "lab-flask-card",
  content: `
    <g opacity="0.4">
      <path d="M24.5 3.5V14C24.4997 14.5871 24.6471 15.1648 24.9287 15.68L34.5712 33.32C34.8629 33.8531 35.0107 34.4529 35.0002 35.0604C34.9898 35.668 34.8213 36.2623 34.5114 36.785C34.2015 37.3077 33.7608 37.7407 33.2328 38.0414C32.7048 38.3421 32.1076 38.5001 31.5 38.5H10.5C9.89232 38.5001 9.29511 38.3421 8.76709 38.0414C8.23907 37.7407 7.79844 37.3077 7.48854 36.785C7.17864 36.2623 7.01016 35.668 6.99967 35.0604C6.98918 34.4529 7.13704 33.8531 7.42871 33.32L17.0712 15.68C17.3528 15.1648 17.5002 14.5871 17.5 14V3.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M11.2927 26.25H30.7072" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M14.875 3.5H27.125" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
  `,
  viewBox: "0 0 42 42",
};

/**
 * Message / chat bubble — Quick Action card icon.
 */
export const messageCardIcon: SVGIcon = {
  name: "message-card",
  content: `
    <g opacity="0.4">
      <path d="M38.5 29.75C38.5 30.6783 38.1313 31.5685 37.4749 32.2249C36.8185 32.8813 35.9283 33.25 35 33.25H11.949C11.0208 33.2502 10.1307 33.6191 9.4745 34.2755L5.621 38.129C5.44723 38.3027 5.22586 38.421 4.98486 38.469C4.74386 38.5169 4.49405 38.4923 4.26704 38.3983C4.04002 38.3042 3.84598 38.145 3.70945 37.9407C3.57292 37.7364 3.50003 37.4962 3.5 37.2505V8.75C3.5 7.82174 3.86875 6.9315 4.52513 6.27513C5.1815 5.61875 6.07174 5.25 7 5.25H35C35.9283 5.25 36.8185 5.61875 37.4749 6.27513C38.1313 6.9315 38.5 7.82174 38.5 8.75V29.75Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
  `,
  viewBox: "0 0 42 42",
};

/**
 * Sun / brightness icon — used for the theme toggle in the AppBar.
 */
export const sunIcon: SVGIcon = {
  name: "sun",
  content: `
    <g clip-path="url(#sun-clip)">
      <path d="M7.99992 10.6667C9.47268 10.6667 10.6666 9.47277 10.6666 8.00001C10.6666 6.52725 9.47268 5.33334 7.99992 5.33334C6.52716 5.33334 5.33325 6.52725 5.33325 8.00001C5.33325 9.47277 6.52716 10.6667 7.99992 10.6667Z"
        stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M8 1.33334V2.66668" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 13.3333V14.6667" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.28662 3.28665L4.22662 4.22665" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.7734 11.7733L12.7134 12.7133" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.33325 8H2.66659" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.3333 8H14.6666" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.22662 11.7733L3.28662 12.7133" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.7134 3.28665L11.7734 4.22665" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="sun-clip"><rect width="16" height="16" fill="white"/></clipPath>
    </defs>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Hamburger menu icon — used in AppBar mobile navigation DropDownButton.
 */
export const hamburgerMenuIcon: SVGIcon = {
  name: "hamburger-menu",
  content: `
    <path d="M14.7136 8.00013C14.7136 8.11375 14.6685 8.2227 14.5881 8.30304C14.5078 8.38337 14.3988 8.4285 14.2852 8.4285H1.71353C1.6031 8.42359 1.49882 8.37628 1.42242 8.2964C1.34601 8.21652 1.30337 8.11025 1.30337 7.99971C1.30337 7.88918 1.34601 7.7829 1.42242 7.70302C1.49882 7.62315 1.6031 7.57583 1.71353 7.57092H14.2852C14.3988 7.57092 14.5078 7.61605 14.5881 7.69638C14.6685 7.77672 14.7136 7.88652 14.7136 8.00013ZM1.71353 3.85697H14.2852C14.3957 3.85207 14.4999 3.80475 14.5763 3.72487C14.6527 3.64499 14.6954 3.53872 14.6954 3.42818C14.6954 3.31765 14.6527 3.21137 14.5763 3.1315C14.4999 3.05162 14.3957 3.0043 14.2852 2.99939H1.71353C1.6031 3.0043 1.49882 3.05162 1.42242 3.1315C1.34601 3.21137 1.30337 3.31765 1.30337 3.42818C1.30337 3.53872 1.34601 3.64499 1.42242 3.72487C1.49882 3.80475 1.6031 3.85207 1.71353 3.85697ZM14.2852 12.1433H1.71353C1.59991 12.1433 1.49096 12.1884 1.41062 12.2688C1.33029 12.3491 1.28516 12.4581 1.28516 12.5717C1.28516 12.6853 1.33029 12.7942 1.41062 12.8746C1.49096 12.9549 1.59991 13 1.71353 13H14.2852C14.3988 13 14.5078 12.9549 14.5881 12.8746C14.6685 12.7942 14.7136 12.6853 14.7136 12.5717C14.7136 12.4581 14.6685 12.3491 14.5881 12.2688C14.5078 12.1884 14.3988 12.1433 14.2852 12.1433Z" fill="currentColor"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * Bell / notifications icon — used for the notifications button in the AppBar.
 */

export const bellIcon: SVGIcon = {
  name: "bell",
  content: `
    <path d="M6.84521 14C6.96224 14.2027 7.13056 14.371 7.33324 14.488C7.53593 14.605 7.76584 14.6666 7.99988 14.6666C8.23392 14.6666 8.46383 14.605 8.66652 14.488C8.8692 14.371 9.03752 14.2027 9.15455 14"
      stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M2.17467 10.2173C2.08758 10.3128 2.0301 10.4315 2.00924 10.559C1.98837 10.6865 2.00501 10.8174 2.05714 10.9356C2.10926 11.0538 2.19462 11.1544 2.30284 11.225C2.41105 11.2956 2.53745 11.3332 2.66667 11.3333H13.3333C13.4625 11.3334 13.589 11.2959 13.6972 11.2254C13.8055 11.1549 13.891 11.0545 13.9433 10.9364C13.9955 10.8182 14.0123 10.6874 13.9916 10.5599C13.9709 10.4323 13.9136 10.3136 13.8267 10.218C12.94 9.30401 12 8.33268 12 5.33334C12 4.27248 11.5786 3.25506 10.8284 2.50492C10.0783 1.75477 9.06087 1.33334 8 1.33334C6.93914 1.33334 5.92172 1.75477 5.17157 2.50492C4.42143 3.25506 4 4.27248 4 5.33334C4 8.33268 3.05933 9.30401 2.17467 10.2173Z"
      stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `,
  viewBox: "0 0 16 16",
};

/**
 * AI sparkles gradient icon — used in the AI Chat popup header and FAB.
 */
export const aiSparklesIcon: SVGIcon = {
  name: "ai-sparkles",
  content: `
    <foreignObject x="0" y="0" width="40" height="40">
      <div xmlns="http://www.w3.org/1999/xhtml"
        style="backdrop-filter:blur(2px);clip-path:url(#bgblur_0_1794_1696_clip_path);height:100%;width:100%">
      </div>
    </foreignObject>
    <g filter="url(#filter0_d_1794_1696)" data-figma-bg-blur-radius="4">
      <path d="M22 9L23.6972 13.3028L28 15L23.6972 16.6972L22 21L20.3028 16.6972L16 15L20.3028 13.3028L22 9ZM14.9394 18.9394L12 20L14.9394 21.0606L16 24L17.0606 21.0606L20 20L17.0606 18.9394L16 16L14.9394 18.9394ZM14.2044 10.2044L12 11L14.2044 11.7956L15 14L15.7956 11.7956L18 11L15.7956 10.2044L15 8L14.2044 10.2044Z"
        fill="url(#paint0_linear_1794_1696)"/>
    </g>
    <defs>
      <filter id="filter0_d_1794_1696" x="0" y="0" width="40" height="40"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix"
          values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1794_1696"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1794_1696" result="shape"/>
      </filter>
      <clipPath id="bgblur_0_1794_1696_clip_path" transform="translate(0 0)">
        <path d="M22 9L23.6972 13.3028L28 15L23.6972 16.6972L22 21L20.3028 16.6972L16 15L20.3028 13.3028L22 9ZM14.9394 18.9394L12 20L14.9394 21.0606L16 24L17.0606 21.0606L20 20L17.0606 18.9394L16 16L14.9394 18.9394ZM14.2044 10.2044L12 11L14.2044 11.7956L15 14L15.7956 11.7956L18 11L15.7956 10.2044L15 8L14.2044 10.2044Z"/>
      </clipPath>
      <linearGradient id="paint0_linear_1794_1696" x1="14.1354" y1="10.337"
        x2="22.1053" y2="20.9343" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C158E4"/>
        <stop offset="1" stop-color="#4B5FFA"/>
      </linearGradient>
    </defs>
  `,
  viewBox: "0 0 32 32",
};
