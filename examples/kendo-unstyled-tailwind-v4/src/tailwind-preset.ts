import { type AllClassStructure } from "@progress/kendo-react-common";
const tailwindForm: AllClassStructure = {
  uSvgIcon: {
    wrapper: {
      main: ``,
      svgPrefix: `outline-[0] leading-none inline-flex [flex-flow:row_nowrap] items-center justify-center align-middle relative`,
      flipH: `transform-none`,
      flipV: `transform-none`,
      themeColor: {
        inherit: `text-inherit`,
        primary: `text-theme-primary`,
        secondary: `text-theme-secondary`,
        tertiary: `text-tertiary`,
        info: `text-info`,
        success: `text-success`,
        warning: `text-warning`,
        error: `text-theme-error`,
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
      main: "fill-current flex-auto",
      flipH: "-scale-x-100",
      flipV: "-scale-y-100",
    },
  },
  uPopup: {
    animationContainer: `overflow-hidden`,
    animationContainerShown: `overflow-visible`,
    animationChild: ``,
    popup: `border box-border text-sm leading-5 flex flex-col items-stretch m-0 p-0 border-solid 
                shadow-lg border-border text-text bg-background rounded-md`,
    slide: {
      up: {
        enter: `translate-y-2 opacity-0`,
        exit: ``,
      },
      down: {
        enter: `-translate-y-2 opacity-0`,
        exit: ``,
      },
      left: {
        enter: `translate-x-2 opacity-0`,
        exit: ``,
      },
      right: {
        enter: `-translate-x-2 opacity-0`,
        exit: ``,
      },
    },
    slideActive: {
      up: {
        enter: `!translate-y-0 !opacity-100 [transition:all_200ms_ease-out]`,
        exit: `translate-y-2 opacity-0 [transition:all_150ms_ease-in]`,
      },
      down: {
        enter: `!translate-y-0 !opacity-100 [transition:all_200ms_ease-out]`,
        exit: `-translate-y-2 opacity-0 [transition:all_150ms_ease-in]`,
      },
      left: {
        enter: `!translate-x-0 !opacity-100 [transition:all_200ms_ease-out]`,
        exit: `translate-x-2 opacity-0 [transition:all_150ms_ease-in]`,
      },
      right: {
        enter: `!translate-x-0 !opacity-100 [transition:all_200ms_ease-out]`,
        exit: `-translate-x-2 opacity-0 [transition:all_150ms_ease-in]`,
      },
    },
  },
  uForm: {
    form: {
      main: "space-y-6",
      size: {
        prefix: ``,
        small: `space-y-4`,
        medium: `space-y-6`,
        large: `space-y-8`,
      },
      orientation: {
        horizontal: "space-y-0 space-x-4",
        vertical: "space-y-6",
      },
    },
    field: {
      main: "space-y-1",
      isRtl: "",
    },
  },
  uLabel: {
    label: {
      main: "block text-sm font-medium leading-6 text-text mb-2",
      empty: `before:content-[""] before:inline-block`,
      invalid: `text-error`,
      disabled: `text-text-disabled`,
    },
  },
  uFloatingLabel: {
    wrapper: {
      main: `relative`,
      focused: ``,
      empty: ``,
      notEmpty: ``,
      disabled: ``,
      isRtl: ``,
    },
    label: {
      main: `absolute left-3 -top-2 text-xs font-medium text-text bg-background px-2 transition-all duration-200`,
      focused: `text-primary`,
      empty: `top-1/2 -translate-y-1/2 text-sm text-text-subtle`,
      notEmpty: `-top-2 text-xs text-text`,
      invalid: `text-error`,
      disabled: `text-text-disabled`,
    },
  },
  uTextBox: {
    wrapper: {
      main: "",
      input: `relative block w-full rounded-md border border-border hover:border-border-hover bg-background py-1.5 px-3 text-text shadow-sm ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring placeholder:text-text-placeholder sm:text-sm sm:leading-6`,
      size: {
        small: `py-1 px-2 text-sm`,
        medium: `py-1.5 px-3 text-sm`,
        large: `py-2 px-4 text-base`,
      },
      fillMode: {
        solid: `border border-border hover:border-border-hover bg-background shadow-sm ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring`,
        outline: `border border-border bg-background focus-within:border-primary focus-within:ring-1 focus-within:ring-focus-ring`,
        flat: `border-b border-border bg-transparent focus-within:border-primary`,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded-md`,
        large: `rounded-lg`,
      },
      disabled: `bg-background-disabled text-text-disabled cursor-not-allowed ring-border border-border`,
      focused: `ring-2 ring-inset ring-focus-ring`,
      required: ``,
      invalid: `ring-error focus-within:ring-error border-error`,
      isRtl: ``,
    },
    inputInner: `block w-full border-0 py-0 px-0 text-text placeholder:text-text-placeholder focus:ring-0 focus:outline-none sm:text-sm sm:leading-6 bg-transparent`,
    prefix: {
      main: "flex items-center flex-none border-inherit",
      orientation: {
        horizontal: `[flex-flow:row_wrap]`,
        vertical: `[flex-flow:column_wrap]`,
      },
    },
    suffix: {
      main: "flex items-center flex-none border-inherit text-text-subtle",
      orientation: {
        horizontal: `[flex-flow:row_wrap]`,
        vertical: `[flex-flow:column_wrap]`,
      },
    },
  },
  uInput: {
    input: {
      main: `block w-full rounded-md border-0 py-1.5 px-3 text-text shadow-sm ring-1 ring-inset ring-border placeholder:text-text-placeholder focus:ring-2 focus:ring-inset focus:ring-focus-ring sm:text-sm sm:leading-6`,
      disabled: `bg-background-disabled text-text-disabled cursor-not-allowed ring-border`,
      required: ``,
      invalid: `ring-error focus:ring-error`,
      isRtl: ``,
    },
    clearButton: `absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer text-text-subtle hover:text-text`,
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
      main: `cursor-pointer`,
      size: {
        medium: `px-2 py-2 text-sm`,
        large: `px-3 py-2 text-base`,
      },
      fillMode: {
        solid: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
      },
      themeColor: {
        base: {
          fillMode: {
            solid: `hover:bg-background-hover`,
          },
        },
        primary: {
          fillMode: {
            solid: `bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary focus-visible:outline-primary focus-visible:ring-2 focus-visible:ring-offset-2 transition duration-200 font-semibold rounded-md`,
          },
        },
        secondary: {
          fillMode: {
            solid: `bg-background text-text border border-border hover:bg-background-hover focus-visible:ring-border focus-visible:ring-2 focus-visible:ring-offset-2 transition duration-200 font-semibold rounded-md`,
          },
        },
      },
      rounded: {
        medium: `rounded-md`,
      },
      selected: `bg-primary text-primary-text hover:bg-primary-hover`,
    },
    text: `font-semibold`,
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
    clearButton: `absolute inset-y-0 right-8 flex items-center pr-2 cursor-pointer text-text-subtle hover:text-text`,
    groupStickyHeader: `px-3 py-2 bg-background-alt border-b border-border text-sm font-medium text-text`,
    listHeaderText: `block truncate`,
    ul: `py-1 max-h-60 overflow-auto`,
    li: {
      main: `cursor-pointer select-none relative py-2 pl-3 pr-9 text-text hover:bg-focus-background hover:text-focus-text outline-none focus:outline-none`,
      selected: `bg-background-selected text-focus-text outline-none focus:outline-none`,
      focused: `bg-focus-background text-focus-text outline-none focus:outline-none`,
      first: ``,
      disabled: `opacity-50 cursor-not-allowed pointer-events-none`,
    },
    groupLi: {
      list: `px-3 py-2 bg-background-alt border-b border-border text-sm font-medium text-text cursor-default`,
      table: ``,
    },
    itemText: `block truncate`,
    groupItemText: {
      list: `block truncate`,
      table: ``,
    },
    itemGroupLabel: `px-3 py-2 bg-background-alt text-xs font-medium text-text-subtle uppercase tracking-wide`,
    noData: `px-3 py-8 text-center text-text-subtle text-sm`,
    heightContainer: `relative`,
    optionLabel: {
      main: `cursor-pointer select-none relative py-2 pl-3 pr-9 text-text hover:bg-focus-background hover:text-focus-text outline-none focus:outline-none`,
      selected: `bg-background-selected text-focus-text outline-none focus:outline-none`,
    },
    inputInner: `block w-full border-0 py-0 px-0 text-text placeholder:text-text-placeholder focus:ring-0 focus:outline-none sm:text-sm sm:leading-6 bg-transparent`,
    inputIcon: `absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-text-subtle`,
    searchbox: `p-2 border-b border-border`,
    listFilter: `p-2 border-b border-border`,
  },
  uComboBox: {
    wrapper: {
      main: ``,
      input: `relative block w-full rounded-md border border-border hover:border-border-hover bg-background py-1.5 pl-3 pr-10 text-text ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring sm:text-sm sm:leading-6`,
      size: {
        small: `py-1 pl-2 pr-8 text-sm`,
        medium: `py-1.5 pl-3 pr-10 text-sm`,
        large: `py-2 pl-4 pr-12 text-base`,
      },
      fillMode: {
        solid: `border border-border hover:border-border-hover bg-background ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring`,
        outline: `border border-border bg-background focus-within:border-primary focus-within:ring-1 focus-within:ring-focus-ring`,
        flat: `border-b border-border bg-transparent focus-within:border-primary`,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded-md`,
        large: `rounded-lg`,
      },
      disabled: `bg-background-disabled text-text-disabled cursor-not-allowed ring-border border-border`,
      required: ``,
      invalid: `ring-error focus-within:ring-error border-error`,
      loading: "",
    },
    loadingIcon: `absolute inset-y-0 right-0 flex items-center pr-8 pointer-events-none`,
    inputButton: `absolute inset-y-1 right-0 hover:bg-transparent flex border-l-1 border-border items-center justify-center w-8 cursor-pointer rounded-r bg-transparent outline-none focus:outline-none focus:ring-0 focus:shadow-none`,
    listContainer: {
      main: `flex flex-col`,
      popup: "",
    },
    listHeader: `px-4 py-2 border-b border-border bg-background-alt text-sm font-medium text-text`,
    list: {
      list: `m-0 p-0 box-border font-normal flex flex-col outline-none relative overflow-hidden`,
      table: `border-border text-text bg-background`,
      size: {
        prefix: ``,
        small: `text-sm`,
        medium: `[&_li]:px-3 [&_li]:py-2 text-sm`,
        large: `[&_li]:px-4 [&_li]:py-3 text-base`,
      },
      tableSize: {
        prefix: ``,
        small: `text-sm`,
        medium: `text-sm`,
        large: `text-base`,
      },
      virtual: ``,
    },
    listContent: {
      main: `border-border flex-auto overflow-hidden overflow-y-auto relative max-h-60`,
      scroller: ``,
    },
    listFooter: `px-4 py-2 border-t border-border bg-background-alt`,
  },
  uTime: {
    footer: {
      main: `footer`,
      actions: `box-border border-[0px_0_0_0] border-solid [border-color:inherit] flex-shrink-0 flex [flex-flow:row_nowrap]
            items-center gap-2 overflow-hidden clear-both [&>*]:flex-1 [&>*]:hover:bg-background-hover [&>*]:transition-colors [&>*]:duration-200`,
      stretched: `[&>*]:flex-[1_0_0%]`,
      horizontal: `w-full [flex-flow:row_nowrap]`,
    },
    cancel: "",
    accept: "",
    part: {
      main: ``,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
    },
    header: `box-border flex items-center justify-between flex-[0_0_auto] px-2 py-2`,
    now: `border-[0] [line-height:inherit] cursor-pointer hover:bg-background-hover transition-colors duration-200`,
    listContainer: `flex relative flex-auto overflow-hidden`,
    highlight: `highlight w-full h-[28px]
        box-border absolute top-[134px]
         -translate-y-2/4 z-[1] border-border border inset-x-0`,
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
    containerSelector: "time-container",
    separator: `w-[0] self-center inline-flex justify-center items-center relative top-[14px]`,
    ul: `m-0 p-0 border-[0] outline-[0] no-underline [font:inherit] [list-style:none] h-auto w-[4em] m-auto`,
    li: `outline-[none] px-1 py-1 hover:bg-background-hover transition-colors duration-200 cursor-pointer`,
    title: `font-bold cursor-default inline-block px-2 py-1`,
    scrollablePlaceholder: `absolute w-px top-[0] right-[0]`,
  },
  uCalendar: {
    wrapper: {
      main: `calendar border-[0] outline-[0]`,
      infinite: `box-content  [flex-flow:row_nowrap]`,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
      weekNumber: ``,
      size: {
        medium: `text-md leading-md`,
        large: `text-lg leading-lg`,
      },
    },
    view: {
      main: `m-auto h-[288px] box-content relative overflow-hidden border-[0] `,
      vertical: `flex [flex-flow:column_nowrap]`,
      month: ``,
      year: `year [&_td]:!w-[64px] [&_td]:!h-[64px]`,
      decade: `decade [&_td]:!w-[64px] [&_td]:!h-[64px]`,
      century: `century [&_td]:!w-[64px] [&_td]:!h-[64px]`,
    },
    navigation: `w-[5em] text-center border-[0]  flex-[0_0_auto] block overflow-hidden relative z-[1] text-text bg-background-alt shadow-[inset_-1px_0_rgba(0,0,0,0.08)] [&>.content]:bg-transparent [&>.content]:h-auto [&>.content]:!absolute [&>.content]:!top-[0] [&>.content]:!left-[0] [&>.content]:!bottom-[0] [&>.content]:!right-[0]`,
    navigationHighlight: `w-full h-[2em] border-[0] box-border absolute -translate-y-2/4 border-[1px_0] right-0 top-2/4 border-border text-text bg-background hover:bg-background-hover transition-colors duration-200`,
    table: {
      main: `mr-auto ml-auto relative border-spacing-0 table-fixed text-center table relative z-[1] border-0 border-inherit border-separate`,
      weekdays: `flex-[0_0_auto]`,
    },
    thead: ``,
    tr: ``,
    th: `border-[0] p-0 text-center border-solid [border-color:inherit] font-normal cursor-default text-sm leading-loose uppercase text-text-subtle size-8`,
    caption: `h-[32px] box-border normal-case text-start md:font-bold cursor-default px-2 py-1 transition-colors duration-200`,
    tbody: ``,
    ul: `m-0 p-0 border-[0] outline-[0] no-underline [font:inherit] [list-style:none]`,
    li: "h-[2em] leading-[2em] cursor-pointer overflow-hidden whitespace-nowrap overflow-clip hover:bg-background-hover transition-colors duration-200",
    td: {
      main: `border-[0] p-1 text-center border-solid font-normal cursor-pointer text-sm leading-loose uppercase  size-8 hover:bg-background-hover transition-colors duration-200`,
      rangeStart: `rounded-md bg-background-selected`,
      rangeEnd: `rounded-md bg-background-selected`,
      rangeMid: `[border-color:inherit] rounded-none bg-background-selected `,
      rangeSplitEnd: `relative after:content-[""] after:block after:absolute after:top-[0] after:bottom-[0] after:w-[5px]`,
      rangeSplitStart: `relative after:content-[""] after:block after:absolute after:top-[0] after:bottom-[0] after:w-[5px]`,
      active: `hover:bg-primary-hover`,
      focused: `!border-border !border-[1] !text-focus-text bg-focus-background rounded`,
      selected: `border-border bg-primary !text-white rounded hover:bg-primary-hover`,
      today: `text-primary `,
      weekend: ``,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
      isOtherMonth: `text-text-subtle hover:bg-background-alt`,
      isEmpty: `pointer-events-none`,
      isWeek: `text-xs`,
    },
    title: ``,
    header: {
      main: `box-border flex items-center justify-between px-8`,
      vertical: `flex [flex-flow:column_nowrap]`,
    },
    spacer: `flex-1`,
    nav: `flex [flex-flow:row_nowrap] items-center [&>*]:transition-colors [&>*]:duration-200 [&>*]:cursor-pointer`,
    today: {
      main: `bg-background hover:bg-background-hover transition-colors duration-200 cursor-pointer px-2 py-1`,
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
    },
    scrollable: {
      main: `box-content overflow-x-hidden overflow-y-auto block ml-[-100px] mr-[calc(-100px_-_17px)] px-[100px] relative`,
      content: `content bg-transparent absolute top-[0] left-[0] bottom-[0] right-[0]`,
      horizontal: ``,
    },
    scrollableSelector: "scrollable",
    scrollablePlaceholder: {
      main: `absolute w-px top-[0] right-[0]`,
      horizontal: ``,
    },
    link: `rounded-tl-md rounded-br-md rounded-tr-[.25rem] rounded-bl-[.25rem] w-full h-full box-border flex flex-row items-center justify-center whitespace-normal
        relative overflow-hidden  transition-colors duration-200 cursor-pointer`,
    navigationMarker: `font-bold`,
  },
  uDateInput: {
    wrapper: {
      main: `relative w-full`,
      input: `relative w-full rounded-md border-0 bg-transparent py-1.5 pr-10 text-text sm:text-sm sm:leading-6 min-h-[38px]`,
      size: {
        small: `py-1 pl-2 pr-8 text-sm min-h-[32px]`,
        medium: `py-1.5 pl-3 pr-10 text-sm min-h-[38px]`,
        large: `py-2 pl-4 pr-12 text-base min-h-[44px]`,
      },
      fillMode: {
        solid: `border-0 bg-transparent`,
        outline: `border-0 bg-transparent`,
        flat: `border-0 bg-transparent`,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded-md`,
        large: `rounded-lg`,
      },
      disabled: `bg-transparent text-text-disabled cursor-not-allowed`,
      invalid: ``,
    },
    inputInner: ` w-full border-0 py-0 px-0 text-text placeholder:text-text-placeholder focus:ring-0 focus:outline-none sm:text-sm sm:leading-6 bg-transparent`,
    inputSpinner: {
      main: `w-8 flex-none flex flex-col border-l border-border`,
      button: `flex items-center justify-center h-4 text-text-subtle hover:text-text cursor-pointer`,
    },
    spinnerIncrease: `px-1 py-0.5 hover:bg-focus-background`,
    spinnerDecrease: `px-1 py-0.5 hover:bg-focus-background`,
    clearButton: `absolute inset-y-0 right-0 flex items-center pr-8 cursor-pointer text-text-subtle hover:text-text`,
  },
  uDateTimePicker: {
    wrapper: {
      main: `relative`,
      input: `relative  w-full rounded-md border border-border hover:border-border-hover bg-background py-1.5 pl-3 pr-10 text-text shadow-sm ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring sm:text-sm sm:leading-6 min-h-[38px]`,
      size: {
        small: `py-1 pl-2 pr-8 text-sm min-h-[32px]`,
        medium: `py-1.5 pl-3 pr-10 text-sm min-h-[38px]`,
        large: `py-2 pl-4 pr-12 text-base min-h-[44px]`,
      },
      fillMode: {
        solid: `border border-border hover:border-border-hover bg-background  ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring`,
        outline: `border border-border bg-background focus-within:border-primary focus-within:ring-1 focus-within:ring-focus-ring`,
        flat: `border-b border-border bg-transparent focus-within:border-primary`,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded-md`,
        large: `rounded-lg`,
      },
      disabled: `bg-background-disabled text-text-disabled cursor-not-allowed ring-border border-border`,
      required: ``,
      invalid: `ring-error focus-within:ring-error border-error`,
    },
    inputButton: `absolute inset-y-1 right-0 border-l-1 hover:bg-transparent border-border flex items-center justify-center w-8 cursor-pointer rounded-r bg-transparent outline-none focus:outline-none focus:ring-0 focus:shadow-none transition-colors duration-200`,
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
      actions: `px-2 py-2 box-border 
            flex-shrink-0 flex [flex-flow:row_nowrap] items-center gap-2 overflow-hidden clear-both [&>*]:flex-1  [&>*]:transition-colors [&>*]:duration-200`,
      stretched: "[&>*]:flex-[1_0_0%]",
    },
    buttonGroup: `px-2 py-2  [&>*]:transition-colors [&>*]:duration-200`,
    selector: `selector flex [transition:transform_0.2s]`,
    calendarWrap: `text-center flex-[0_0_calc((32px*_8)_+(1rem*_2))]`,
    timeWrap: `text-center flex-[0_0_calc((32px*_8)_+(1rem*_2))]`,
    timeSelector: {
      main: `w-full border-[0] [&_li]:hover:bg-background-hover [&_li]:transition-colors [&_li]:duration-200 [&_li]:cursor-pointer`,
      size: {
        medium: "",
        large: "",
      },
      disabled: `outline-[none] cursor-default opacity-60 grayscale-[10%] pointer-events-none [box-shadow:none]`,
      reset: `m-0 p-0 border-[0] [border-color:inherit] h-auto [list-style:none]`,
    },
  },
  uDropDownList: {
    wrapper: {
      main: `relative block w-full rounded-md border border-border hover:border-border-hover bg-background py-1.5 pl-3 pr-10 text-text  ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring sm:text-sm sm:leading-6 min-h-[38px]`,
      picker: ``,
      size: {
        small: `py-1 pl-2 pr-8 text-sm min-h-[32px]`,
        medium: `py-1.5 pl-3 pr-10 text-sm min-h-[38px]`,
        large: `py-2 pl-4 pr-12 text-base min-h-[44px]`,
      },
      fillMode: {
        solid: `border border-border hover:border-border-hover bg-background ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring`,
        outline: `border border-border bg-background focus-within:border-primary focus-within:ring-1 focus-within:ring-focus-ring`,
        flat: `border-b border-border bg-transparent focus-within:border-primary`,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded-md`,
        large: `rounded-lg`,
      },
      disabled: `bg-background-disabled text-text-disabled cursor-not-allowed ring-border border-border`,
      invalid: `ring-error focus-within:ring-error border-error`,
      loading: "",
    },
    inputButton: `absolute inset-y-1 right-0 flex border-l-1 hover:bg-transparent border-border items-center justify-center w-8 cursor-pointer rounded-r bg-transparent outline-none focus:outline-none focus:ring-0 focus:shadow-none`,
    inputInner: `block w-full border-0 py-0 px-0 text-text placeholder:text-text-placeholder sm:text-sm sm:leading-6 bg-transparent`,
    listContainer: {
      main: `flex flex-col`,
      popup: "",
    },
    list: {
      main: `m-0 p-0 box-border font-normal flex flex-col outline-none relative overflow-hidden`,
      size: {
        small: `text-sm`,
        medium: `text-sm`,
        large: `text-base`,
      },
      virtual: ``,
    },
    listContent: `border-border flex-auto overflow-hidden overflow-y-auto relative max-h-60`,
  },
  uMaskedTextBox: {
    wrapper: {
      main: "",
      input: `relative block w-full rounded-md border border-border hover:border-border-hover bg-background py-1.5 px-3 text-text shadow-sm ring-1 ring-inset ring-border placeholder:text-text-placeholder focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring sm:text-sm sm:leading-6`,
      size: {
        small: `py-1 px-2 text-sm`,
        medium: `py-1.5 px-3 text-sm`,
        large: `py-2 px-4 text-base`,
      },
      fillMode: {
        solid: `border border-border hover:border-border-hover bg-background shadow-sm ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-focus-ring`,
        outline: `border border-border bg-background focus-within:border-primary focus-within:ring-1 focus-within:ring-focus-ring`,
        flat: `border-b border-border bg-transparent focus-within:border-primary`,
      },
      rounded: {
        small: `rounded-sm`,
        medium: `rounded-md`,
        large: `rounded-lg`,
      },
      disabled: `bg-background-disabled text-text-disabled cursor-not-allowed ring-border border-border`,
      invalid: `ring-error focus-within:ring-error border-error`,
      isRtl: ``,
    },
    inputInner: `block w-full border-0 py-0 px-0 text-text placeholder:text-text-placeholder focus:ring-0 focus:outline-none sm:text-sm sm:leading-6 bg-transparent`,
  },
  uError: {
    wrapper: {
      main: `text-error text-sm mt-1`,
    },
  },
};
export { tailwindForm };
