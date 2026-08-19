import * as React from 'react';
import { useConfiguratorContext } from './ConfiguratorContext';
import { ConfiguratorPanel } from './ConfiguratorPanel';

/**
 * Floating "Component Properties" trigger button + panel. Renders nothing until a demo
 * registers controls via `useConfigurator(schema)`. Must be rendered inside a
 * `ConfiguratorProvider` — used both by the docs app shell (apps/docs/main.tsx) and by
 * demos exported standalone to StackBlitz/CodeSandbox (see meta-scripts/demos-metadata.js),
 * so it needs to be fully self-contained here rather than duplicated in both places.
 *
 * Positioned at the top-left corner (see configurator.scss `.cfg-trigger`/`.cfg-panel`).
 * docs-builder's own overlay chrome (theme picker, action buttons, the "i" info button)
 * is always right-aligned or bottom-right (see docs-builder's demo.module.scss:
 * `.demoHeader { justify-content: flex-end }`, `.infoWrap { bottom: 12px; right: 12px }`),
 * so the top-left corner is guaranteed free of overlaps in every embedding context —
 * inside docs-builder, opened in a new window, or exported to StackBlitz/CodeSandbox —
 * without needing to detect which context we're in.
 */
export const ConfiguratorTrigger: React.FC = () => {
    const { hasConfigurator, open, toggleOpen, setOpen } = useConfiguratorContext();
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handler = (event: MessageEvent) => {
            if (event.data?.type === 'toggle-configurator') {
                toggleOpen();
            }
        };
        window.addEventListener('message', handler);
        return () => window.removeEventListener('message', handler);
    }, [toggleOpen]);

    React.useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (containerRef.current && containerRef.current.contains(target)) {
                return;
            }
            // Dropdown menus are portaled to `document.body` so they can escape the panel's
            // `overflow: clip` — clicking one is still "inside" the configurator.
            if (target instanceof Element && target.closest('.cfg-dropdown-menu')) {
                return;
            }
            setOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open, setOpen]);

    // This demo may run inside an iframe, so clicks in the parent document (outside
    // the iframe entirely) never reach the listener above. When the user clicks
    // outside the iframe, the iframe's window loses focus, so we close the panel
    // on blur as well.
    React.useEffect(() => {
        if (!open) return;

        const handleWindowBlur = () => {
            setOpen(false);
        };
        window.addEventListener('blur', handleWindowBlur);
        return () => window.removeEventListener('blur', handleWindowBlur);
    }, [open, setOpen]);

    if (!hasConfigurator) return null;

    return (
        <div className="cfg-trigger-container" ref={containerRef}>
            {open && <ConfiguratorPanel onClose={() => setOpen(false)} />}
            <button
                className="cfg-trigger"
                onClick={toggleOpen}
                aria-label={open ? 'Hide Component Properties' : 'Show Component Properties'}
                aria-pressed={open}
                title="Component Properties"
            >
                <svg
                    className="cfg-trigger-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="cfg-trigger-shape cfg-trigger-shape-top"
                        d="M8.00006 1.49994L5.5 4L8.00006 6.50006L10.5001 4L8.00006 1.49994Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className="cfg-trigger-shape cfg-trigger-shape-bottom"
                        d="M8.00006 9.49994L5.5 12L8.00006 14.5001L10.5001 12L8.00006 9.49994Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className="cfg-trigger-shape cfg-trigger-shape-right"
                        d="M12.0001 5.49994L9.5 8L12.0001 10.5001L14.5001 8L12.0001 5.49994Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className="cfg-trigger-shape cfg-trigger-shape-left"
                        d="M4.00006 5.49994L1.5 8L4.00006 10.5001L6.50013 8L4.00006 5.49994Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};
