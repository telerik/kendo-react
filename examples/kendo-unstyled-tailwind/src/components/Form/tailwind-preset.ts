import { type AllClassStructure } from '@progress/kendo-react-common';
const tailwindForm: AllClassStructure = {
  uSvgIcon: {
    wrapper: {
      main: ``,
      svgPrefix: `outline-[0] leading-none inline-flex [flex-flow:row_nowrap] items-center
            justify-center align-middle relative`,
      flipH: `transform-none`,
      flipV: `transform-none`,
      themeColor: {
        inherit: `text-inherit`,
        primary: `text-primary`,
        secondary: `secondary`,
        tertiary: `text-tertiary`,
        info: `text-info`,
        success: `text-success`,
        warning: `text-warning`,
        error: `text-error`,
        dark: `text-dark`,
        light: `text-light`,
      },
      size: {
        default: `w-[16px] h-[16px]`,
        xsmall: `w-[calc(_16px_*_0.75_)] h-[calc(_16px_*_0.75_)]`,
        small: `w-[calc(_16px_*_0.875_)] h-[calc(_16px_*_0.875_)]`,
        medium: `w-[16px] h-[16px]`,
        large: `w-[calc(_16px_*_1.25_)] h-[calc(_16px_*_1.25_)]`,
        xlarge: `w-[calc(_16px_*_1.5_)] h-[calc(_16px_*_1.5_)]`,
        xxlarge: `w-[calc(_16px_*_2_)] h-[calc(_16px_*_2_)]`,
        xxxlarge: `w-[calc(_16px_*_2_)] h-[calc(_16px_*_2_)]`,
      },
    },
    svg: {
      main: 'fill-current flex-auto',
      flipH: '-scale-x-100',
      flipV: '-scale-y-100',
    },
  },
  uPopup: {
    animationContainer: `absolute overflow-hidden rounded-[0_0_4px_4px]`,
    animationContainerShown: `overflow-visible`,
    animationChild: ``,
    popup: `border box-border text-md leading-md flex flex-col items-stretch m-0 p-0 border-solid before:box-border
                after:box-border shadow-lg border-[color:rgba(0,0,0,0.08)] text-[color:#424242] bg-[color:#fff]`,
    slide: {
      up: {
        enter: `translate-y-full`,
        exit: ``,
      },
      down: {
        enter: `-translate-y-full`,
        exit: ``,
      },
      left: {
        enter: `translate-x-full`,
        exit: ``,
      },
      right: {
        enter: `-translate-x-full`,
        exit: ``,
      },
    },
    slideActive: {
      up: {
        enter: `!translate-y-[0] [transition:transform_300ms_ease-in-out]`,
        exit: `translate-y-full [transition:transform_300ms_ease-in-out]`,
      },
      down: {
        enter: `!translate-y-[0] [transition:transform_300ms_ease-in-out]`,
        exit: `-translate-y-full [transition:transform_300ms_ease-in-out]`,
      },
      left: {
        enter: `translate-x-[0] [transition:transform_300ms_ease-in-out]`,
        exit: `translate-x-full [transition:transform_300ms_ease-in-out]`,
      },
      right: {
        enter: `translate-x-[0] [transition:transform_300ms_ease-in-out]`,
        exit: `-translate-x-full [transition:transform_300ms_ease-in-out]`,
      },
    },
  },
  uForm: {
    form: {
      main: 'border-0 ',
      size: {
        prefix: ``,
        small: `[&_.form-button]:mt-2`,
        medium: `[&_.form-button]:mt-5`,
        large: `[&_.form-button]:mt-[1.125rem]`,
      },
      orientation: {
        horizontal: '',
        vertical: '',
      },
    },
    field: {
      main: 'flex',
      isRtl: '',
    },
  },
  uLabel: {
    label: {
      main: 'mr-[0.625rem] pt-6 w-1/4 flex-col items-end justify-start',
      empty: `before:content-[""] before:inline-block`,
      invalid: `text-error`,
      disabled: ``,
    },
  },
  uFloatingLabel: {
    wrapper: {
      main: `w-full pt-7 box-border inline-flex align-middle relative flex-col`,
      focused: `scale-100`,
      empty: `before:content-[""] before:inline-block`,
      notEmpty: `scale-100`,
      disabled: ``,
      isRtl: ``,
    },
    label: {
      main: `max-w-[90%] text-md leading-md pointer-events-none whitespace-nowrap
                overflow-ellipsis absolute overflow-hidden cursor-text origin-[left_center]
                [transition:transform_0.2s_ease-out,_color_0.2s_ease-out,_top_0.2s_ease-out,_left_0.2s_ease-out]`,
      focused: `!top-0 left-0`,
      empty: `top-[33px] left-[8px]`,
      notEmpty: `!top-0 left-0 `,
      invalid: `text-error`,
      disabled: ``,
    },
  },
  uTextBox: {
    wrapper: {
      main: '',
      input: `mt-1 w-full min-w-[0] px-2 py-1 box-border border
                 outline-[0]
                text-md leading-md font-normal [box-shadow:none] inline-flex [flex-flow:row_nowrap] items-stretch align-middle
                relative overflow-hidden overflow-ellipsis`,
      size: {
        small: `text-md leading-md`,
        medium: `text-md leading-md`,
        large: `text-lg leading-lg`,
      },
      fillMode: {
        solid: `border border-base hover:border-base-hover focus:text-app-surface bg-surface-alt`,
        outline: ``,
        flat: ``,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded`,
        large: `rounded-md`,
      },
      disabled: `opacity-100 grayscale-0`,
      focused: `shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600`,
      required: ``,
      invalid: `border-error`,
      isRtl: ``,
    },
    inputInner: `w-full border-[0] px-0 py-0 outline-[0] [color:inherit] bg-none [font:inherit] flex-[1] relative overflow-hidden overflow-ellipsis [&>input]:placeholder:text-subtle opacity-100 select-none focus:ring-0`,
    prefix: {
      main: 'flex items-center flex-none border-inherit',
      orientation: {
        horizontal: `[flex-flow:row_wrap]`,
        vertical: `[flex-flow:column_wrap]`,
      },
    },
    suffix: {
      main: 'flex items-center flex-none border-inherit text-subtle',
      orientation: {
        horizontal: `[flex-flow:row_wrap]`,
        vertical: `[flex-flow:column_wrap]`,
      },
    },
  },
  uInput: {
    input: {
      main: `w-full min-w-[0] box-border rounded-md
            border border-base hover:border-base-hover shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 text-gray-900 shadow-sm  placeholder:text-gray-400
             px-2 py-1 outline-[0] text-md leading-md font-normal [box-shadow:none]
             inline-flex [flex-flow:row_nowrap] items-stretch align-middle relative overflow-hidden overflow-ellipsis`,
      disabled: `opacity-100 grayscale-0`,
      required: ``,
      invalid: ``,
      isRtl: ``,
    },
    clearButton: `flex-none self-center inline-flex items-center justify-center cursor-pointer
         opacity-[80%] hover:!opacity-100 focus-visible:outline-[1px_dotted] focus-visible:outline-offset-[-1px]`,
  },
  uRadioGroup: {
    ul: {
      main: `m-0 p-0 flex [flex-flow:column_nowrap] gap-0 [list-style:none]`,
      horizontal: `flex [flex-flow:row_wrap] gap-[1rem]`,
      vertical: ``,
    },
    item: {
      main: `flex [flex-flow:row_nowrap] items-center content-center gap-1`,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
    },
  },
  uRadioButton: {
    input: {
      radio: `rounded-[50%] m-0 p-0 [line-height:initial] border border-solid
            outline-[0] box-border bg-center bg-no-repeat bg-contain inline-block flex-none align-middle relative cursor-pointer`,
      size: {
        small: `w-3 h-3 before:text-2.5`,
        medium: `w-4 h-4 before:text-3`,
        large: `w-5 h-5 before:text-4.5`,
      },
      invalid: `border-error`,
      checked: `!bg-primary`,
    },
    wrap: `flex-none inline-flex [flex-flow:row_nowrap] gap-0 items-center align-middle relative
            before:content-['\\200b'] before:w-0 before:overflow-hidden
            before:flex-none before:inline-block before:align-top`,
    label: `m-0 p-0 inline-flex items-start gap-1 align-middle relative cursor-pointer`,
  },
  uButton: {
    wrapper: {
      main: ``,
      size: {
        medium: `px-2 py-1`,
        large: `px-3 py-2`,
      },
      fillMode: {
        solid: `shadow-sm
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600`,
      },
      themeColor: {
        base: {
          fillMode: {
            solid: ``,
          },
        },
        primary: {
          fillMode: {
            solid: `text-primary-text bg-primary hover:bg-primary-hover`,
          },
        },
      },
      rounded: {
        medium: `rounded-md`,
      },
      selected: `bg-primary text-primary-text`,
    },
    text: `text-sm font-semibold`, // text-white
  },
  uButtonGroup: {
    wrapper: {
      main: `m-0 p-0 border-[0] box-border [list-style:none] outline-[0] inline-flex [flex-flow:row_nowrap] align-middle relative`,
      stretched: `w-full [&>*]:flex-[1_0_0%] [&>*]:overflow-hidden`,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
    },
    position: {
      start: ``,
      end: ``,
    },
  },
  uDropDownsBase: {
    clearButton: `flex-none self-center inline-flex items-center justify-center cursor-pointer opacity-[80%] hover:opacity-100 focus-visible:outline-[1px_dotted] focus-visible:outline-offset-[-1px]`,
    groupStickyHeader: `px-2 py-1`,
    listHeaderText: `whitespace-nowrap overflow-hidden overflow-ellipsis before:content-[''] before:w-0 before:overflow-hidden`,
    ul: `m-0 p-0 border-[0] [border-color:inherit] h-auto [list-style:none]`,
    li: {
      main: `border-[0] outline-[none] cursor-pointer flex [flex-flow:row_nowrap] items-center content-center gap-1 relative [transition-property:color,_background-color,_outline-color,_box-shadow] duration-200 ease-[ease]`,
      selected: ``,
      focused: ` bg-focused`,
      first: `before:content-[""] before:border-[1px_0_0] before:border-solid before:absolute before:top-[0] before:left-[0] before:right-[0]`,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
    },
    groupLi: {
      list: `border-[0] border-[1px_0_0] border-solid font-semibold cursor-default flex [flex-flow:row_nowrap] items-center content-center gap-1 relative`,
      table: `w-full box-border table-row`,
    },
    itemText: `whitespace-nowrap overflow-hidden overflow-ellipsis`,
    groupItemText: {
      list: `whitespace-nowrap overflow-hidden overflow-ellipsis`,
      table: `border-[0_0_0px_1px] border-solid [border-color:inherit] box-border font-normal [text-align:inherit] whitespace-nowrap overflow-ellipsis table-cell overflow-hidden relative border-b`,
    },
    itemGroupLabel: `text-[0.75em] absolute top-[0] px-2 py-0 text-surfaceAlt bg-appSurface`,
    noData: `min-h-[140px] flex items-center justify-center font-[lighter] text-center whitespace-normal text-subtle`,
    heightContainer: `relative float-left`,
    optionLabel: {
      main: `border-[0] outline-[none] cursor-pointer flex [flex-flow:row_nowrap] items-center content-center gap-1 relative [transition-property:color,_background-color,_outline-color,_box-shadow] duration-200 ease-[ease] gap-x-0`,
      selected: `text-base bg-primary`,
    },
    inputInner: `w-full bg-transparent border-[0] outline-[0] px-2 py-1 [color:inherit] [font:inherit] flex-[1] relative overflow-hidden overflow-ellipsis [&>input]:placeholder:text-subtle opacity-100 select-none focus:ring-0`,
    inputIcon: `flex-none self-center inline-flex [flex-flow:row_nowrap] items-center justify-center box-content`,
    searchbox: ``,
    listFilter: `block relative pt-2 pb-2 box-border flex-none px-[0.5rem)]`,
  },
  uComboBox: {
    wrapper: {
      main: '',
      input: `w-full min-w-[0] box-border outline-[0] text-md leading-md font-normal
             [box-shadow:none] inline-flex [flex-flow:row_nowrap] items-stretch align-middle relative overflow-hidden overflow-ellipsis`,
      size: {
        small: `text-md leading-md`,
        medium: `text-md leading-md`,
        large: `text-lg leading-lg`,
      },
      fillMode: {
        solid: `border border-base hover:border-base-hover text-app-surface bg-surface-alt shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600`,
        outline: `border-[color-mix(in_srgb,#424242_50%,transparent)] text-app-surface`,
        flat: `border-solid-border text-app-surface`,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded`,
        large: `rounded-md`,
      },
      disabled: `opacity-100 grayscale-0`,
      required: ``,
      invalid: `border-error`,
      loading: '',
    },
    loadingIcon: `flex-none self-center inline-flex [flex-flow:row_nowrap] items-center justify-center box-content`,
    inputButton: `!px-1 !py-1 w-[calc((text-md*1em)+(0.25rem*2))] border-[0] flex-none [aspect-ratio:auto] [box-shadow:none]`,
    listContainer: {
      main: `flex [flex-flow:column_nowrap]`,
      popup: '',
    },
    listHeader: `border-[0_0_1px] border-solid box-border`,
    list: {
      list: `m-0 p-0 box-border font-normal flex [flex-flow:column_nowrap] outline-[none] relative overflow-hidden`,
      table: `border-solidBorder text-appSurface bg-surfaceAlt`,
      size: {
        prefix: ``,
        small: `text-sm leading-5`,
        medium: `[&_li]:px-2 [&_li]:py-1 text-sm leading-5`,
        large: `[&_li]:px-2 [&_li]:py-3 text-xl leading-6`,
      },
      tableSize: {
        prefix: ``,
        small: `text-base leading-5`,
        medium: `text-base leading-5`,
        large: `text-base leading-5`,
      },
      virtual: ``,
    },
    listContent: {
      main: `[border-color:inherit] flex-auto overflow-hidden overflow-y-auto relative`,
      scroller: ``,
    },
    listFooter: ``,
  },
  uTime: {
    footer: {
      main: `footer`,
      actions: `box-border border-[0px_0_0_0] border-solid [border-color:inherit] flex-shrink-0 flex [flex-flow:row_nowrap]
            items-center gap-2 overflow-hidden clear-both`,
      stretched: `[&>*]:flex-[1_0_0%]`,
      horizontal: `w-full [flex-flow:row_nowrap]`,
    },
    cancel: '',
    accept: '',
    part: {
      main: ``,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
    },
    header: `box-border flex items-center justify-between flex-[0_0_auto] px-2 py-2`,
    now: `border-[0] [line-height:inherit] cursor-pointer`,
    listContainer: `flex relative flex-auto overflow-hidden`,
    highlight: `highlight w-full h-[28px]
        box-border absolute top-[134px]
         -translate-y-2/4 z-[1] border-solid-border border inset-x-0`,
    listWrapper: {
      main: `listWrapper min-w-[4em] h-[240px] box-content inline-flex [flex-flow:column_nowrap] items-stretch overflow-hidden relative text-center flex-auto`,
      focused: ``,
    },
    list: `flex [flex-flow:row_nowrap] items-stretch flex-[1] relative outline-[0] overflow-hidden
        before:shadow-[0_0_3em_1.5em_#ffffff] before:block before:absolute before:content-[''] before:h-0 before:leading-[0] before:z-[1] before:w-[200%] before:-left-2/4
        after:shadow-[0_0_3em_1.5em_#ffffff] after:block after:absolute after:content-[''] after:h-0 after:leading-[0] after:z-[1] after:w-[200%] after:-left-2/4
        `,
    container: {
      main: `relative flex-auto block overflow-x-hidden overflow-y-scroll ml-[-100px] mr-[calc(-100px_-_17px)] px-[100px]`,
      scrollable: `scrollable`,
      content: `outline-[0]`,
    },
    containerSelector: 'time-container',
    separator: `w-[0] self-center inline-flex justify-center items-center relative top-[14px]`,
    ul: `m-0 p-0 border-[0] outline-[0] no-underline [font:inherit] [list-style:none] h-auto w-[4em] m-auto`,
    li: `outline-[none] px-1 py-1`,
    title: `font-bold inline-block px-2 py-1`,
    scrollablePlaceholder: `absolute w-px top-[0] right-[0]`,
  },
  uCalendar: {
    wrapper: {
      main: `calendar border-[0] outline-[0]`,
      infinite: `box-content inline-flex [flex-flow:row_nowrap]`,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
      weekNumber: ``,
      size: {
        medium: `text-md leading-md`,
        large: `text-lg leading-lg`,
      },
    },
    view: {
      main: `px-4 m-auto h-[288px] box-content relative overflow-hidden border-[0] `,
      vertical: `flex [flex-flow:column_nowrap]`,
      month: ``,
      year: `year [&_td]:!w-[64px] [&_td]:!h-[64px]`,
      decade: `decade [&_td]:!w-[64px] [&_td]:!h-[64px]`,
      century: `century [&_td]:!w-[64px] [&_td]:!h-[64px]`,
    },
    navigation: `w-[5em] text-center border-[0]  flex-[0_0_auto] block overflow-hidden
        relative z-[1] text-app-surface
         bg-surface shadow-[inset_-1px_0_rgba(0,0,0,0.08)]
    [&>.content]:bg-transparent [&>.content]:h-auto [&>.content]:!absolute [&>.content]:!top-[0] [&>.content]:!left-[0] [&>.content]:!bottom-[0] [&>.content]:!right-[0]`,
    navigationHighlight: `w-full h-[2em] border-[0] box-border absolute -translate-y-2/4 border-[1px_0] right-0 top-2/4 border-solid-border text-app-surface bg-surface-alt`,
    table: {
      main: `mr-auto ml-auto relative border-spacing-0 table-fixed text-center table relative z-[1] border-0 border-inherit border-separate`,
      weekdays: `flex-[0_0_auto]`,
    },
    thead: ``,
    tr: ``,
    th: `border-[0] p-0 text-center border-solid [border-color:inherit] font-normal cursor-default text-sm leading-loose uppercase text-subtle size-8`,
    caption: `h-[32px] box-border normal-case text-start md:font-bold cursor-default px-2 py-1`,
    tbody: ``,
    ul: `m-0 p-0 border-[0] outline-[0] no-underline [font:inherit] [list-style:none]`,
    li: 'h-[2em] leading-[2em] cursor-pointer overflow-hidden whitespace-nowrap overflow-clip',
    td: {
      main: `border-[0] p-1 text-center border-solid font-normal cursor-default text-sm leading-loose uppercase text-subtle size-8`,
      rangeStart: `rounded-md bg-[color-mix(in_srgb,#1274AC_25%,transparent)]`,
      rangeEnd: `rounded-md bg-[color-mix(in_srgb,#1274AC_25%,transparent)]`,
      rangeMid: `[border-color:inherit] rounded-none bg-[color-mix(in_srgb,#1274AC_25%,transparent)] `,
      rangeSplitEnd: `relative after:content-[""] after:block after:absolute after:top-[0] after:bottom-[0] after:w-[5px]`,
      rangeSplitStart: `relative after:content-[""] after:block after:absolute after:top-[0] after:bottom-[0] after:w-[5px]`,
      active: ``,
      focused: `!border-solid-border !border-[1] text-focused-text bg-focused rounded`,
      selected: `border-solid-border bg-primary !text-primary-text rounded`,
      today: `[&>span]:text-primary`,
      weekend: ``,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
      isOtherMonth: `text-subtle`,
      isEmpty: ``,
      isWeek: `text-xs`,
    },
    title: `[&>span]:!text-primary-text`,
    header: {
      main: `box-border flex items-center justify-between flex-[0_0_auto] px-4 py-2`,
      vertical: `flex [flex-flow:column_nowrap]`,
    },
    spacer: `flex-auto`,
    nav: `flex [flex-flow:row_nowrap] items-center`,
    today: {
      main: ``,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
    },
    scrollable: {
      main: `box-content overflow-x-hidden overflow-y-auto block ml-[-100px] mr-[calc(-100px_-_17px)] px-[100px] relative`,
      content: `content bg-transparent absolute top-[0] left-[0] bottom-[0] right-[0]`,
      horizontal: ``,
    },
    scrollableSelector: 'scrollable',
    scrollablePlaceholder: {
      main: `absolute w-px top-[0] right-[0]`,
      horizontal: ``,
    },
    link: `rounded-tl-md rounded-br-md rounded-tr-[.25rem] rounded-bl-[.25rem] w-full h-full box-border flex flex-row items-center justify-center whitespace-normal
        relative overflow-hidden`,
    navigationMarker: `font-bold`,
  },
  uDateInput: {
    wrapper: {
      main: `w-[10em]`,
      input: `w-full min-w-[0] px-2 py-1 border-[0] outline-[0] text-md leading-md font-normal [box-shadow:none] inline-flex [flex-flow:row_nowrap] items-stretch align-middle relative overflow-hidden overflow-ellipsis`,
      size: {
        small: `text-md leading-md`,
        medium: `text-md leading-md`,
        large: `text-lg leading-lg`,
      },
      fillMode: {
        solid: `border border-base hover:border-base-hover shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 text-app-surface bg-surface-alt`,
        outline: ``,
        flat: ``,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded`,
        large: `rounded-md`,
      },
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
      required: ``,
      invalid: `border-error`,
    },
    inputInner: `w-full border-[0] px-0 py-0 outline-[0] [color:inherit] bg-none [font:inherit] flex-[1] relative overflow-hidden overflow-ellipsis focus:ring-0`,
    inputSpinner: {
      main: `w-[calc((leading-md*1em)+(0.25rem*2))] flex-none flex [flex-flow:column_nowrap]`,
      button: ``,
    },
    spinnerIncrease: `px-1 py-1`,
    spinnerDecrease: `px-1 py-1`,
    clearButton: `flex-none self-center inline-flex items-center justify-center cursor-pointer opacity-[80%]
        hover:opacity-100 focus-visible:outline-[1px_dotted] focus-visible:outline-offset-[-1px]`,
  },
  uDateTimePicker: {
    wrapper: {
      main: `datetimepicker`,
      input: `w-full min-w-[0] box-border text-md
            leading-md font-normal [box-shadow:none] inline-flex [flex-flow:row_nowrap] items-stretch align-middle
             relative overflow-hidden overflow-ellipsis`,
      size: {
        small: `text-md leading-md`,
        medium: `text-md leading-md`,
        large: `text-lg leading-lg`,
      },
      fillMode: {
        solid: `border border-base hover:border-base-hover shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600
                 text-app-surface bg-surface-alt`,
        outline: ``,
        flat: ``,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded`,
        large: `rounded-md`,
      },
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
      required: ``,
      invalid: `border-error`,
    },
    inputButton: `!px-1 !py-1 w-[calc((leading-md*1em)+(0.25rem*2))] border-[0] flex-none [aspect-ratio:auto] [box-shadow:none]`,
    popup: {
      main: `p-0 [&>.calendar]:border-[0]`,
      reset: `m-0 p-0 border-[0] [border-color:inherit] h-auto [list-style:none]`,
    },
    wrap: {
      main: `w-[calc((_32px_*_8_)_+_(1rem_*_2_))] overflow-hidden`,
      date: `[&>.selector]:translate-x-0`,
      time: `[&>.selector]:-translate-x-full`,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
    },
    timeFooter: {
      main: ``,
      actions: `px-2 py-2 box-border border-[0px_0_0_0] border-solid [border-color:inherit]
            flex-shrink-0 flex [flex-flow:row_nowrap] items-center gap-2 overflow-hidden clear-both`,
      stretched: '[&>*]:flex-[1_0_0%]',
    },
    buttonGroup: `px-2 py-2`,
    selector: `selector flex [transition:transform_0.2s]`,
    calendarWrap: `text-center flex-[0_0_calc((32px*_8)_+(1rem*_2))]`,
    timeWrap: `text-center flex-[0_0_calc((32px*_8)_+(1rem*_2))]`,
    timeSelector: {
      main: `w-full border-[0]`,
      size: {
        medium: '',
        large: '',
      },
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
      reset: `m-0 p-0 border-[0] [border-color:inherit] h-auto [list-style:none]`,
    },
  },
};
export { tailwindForm };
