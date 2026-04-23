export const scrollTo = (target: HTMLElement) => {
    const scrollable = target.closest<HTMLElement>('.k-grid');
    if (scrollable && target) {
        [tryScrollDown, tryScrollUp].forEach((scroll) => scroll(target, scrollable));
    }
};

const tryScrollUp = (target: HTMLElement, scrollable: HTMLElement) => {
    if (scrollable.scrollTop && target.offsetTop < scrollable.scrollTop) {
        scrollable.scrollTop = target.offsetTop;
    }
};

const tryScrollDown = (target: HTMLElement, scrollable: HTMLElement) => {
    if (
        target.offsetTop + target.offsetHeight > scrollable.scrollTop + scrollable.offsetHeight &&
        target.offsetHeight < scrollable.offsetHeight
    ) {
        scrollable.scrollTop = target.offsetTop + target.offsetHeight - scrollable.offsetHeight;
    }
};
