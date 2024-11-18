/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const d=/\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g,t=":not(.k-dropdownlist button):not(.k-colorpicker button):not(.k-numerictextbox button):not(.k-split-button .k-split-button-arrow)",o=":not(.k-dropdownlist select)",n=["input:not([disabled]):not([type=hidden])","select:not([disabled]):not(.k-dropdownlist select)","textarea:not([disabled])",`button:not([disabled])${t}`,"a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],i=[...n,`[tabindex]${t}${o}`],a=[...n,`[tabindex]${t}${o}`].map(e=>e+':not([tabindex="-1"])');export{d,a as i,i as s};
