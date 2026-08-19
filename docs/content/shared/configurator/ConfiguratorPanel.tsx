import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    useConfiguratorContext,
    ConfigSection,
    ConfigControl,
    DropdownControl,
    DropdownOption,
    SliderControl,
    TextBoxControl,
    DateControl,
    NumericTextBoxControl,
    ColorPickerControl
} from './ConfiguratorContext';
import './configurator.css';

interface ConfiguratorPanelProps {
    onClose: () => void;
}

const ButtonGroupField: React.FC<{ control: any; value: string; onChange: (v: string) => void }> = ({
    control,
    value,
    onChange
}) => (
    <div className="cfg-field">
        <div className="cfg-button-group">
            {control.options.map((opt: string) => (
                <button
                    key={opt}
                    className={`cfg-button ${value === opt ? 'cfg-button-active' : ''}`}
                    onClick={() => onChange(opt)}
                >
                    {opt}
                </button>
            ))}
        </div>
    </div>
);

const CfgChip: React.FC<{ label: string; selected: boolean; onClick: () => void }> = ({ label, selected, onClick }) => (
    <span
        role="option"
        aria-selected={selected}
        tabIndex={0}
        className={`cfg-chip${selected ? ' cfg-chip-selected' : ''}`}
        onClick={onClick}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
        <span className="cfg-chip-content">
            <span className="cfg-chip-label">{label}</span>
        </span>
    </span>
);

const ChipField: React.FC<{ control: any; value: string; onChange: (v: string) => void }> = ({
    control,
    value,
    onChange
}) => (
    <div className="cfg-field">
        <div className="cfg-chips" role="listbox">
            {control.options.map((opt: string) => (
                <CfgChip key={opt} label={opt} selected={value === opt} onClick={() => onChange(opt)} />
            ))}
        </div>
    </div>
);

const RadioField: React.FC<{ control: any; value: string; onChange: (v: string) => void }> = ({
    control,
    value,
    onChange
}) => (
    <div className="cfg-field">
        <div className="cfg-radios">
            {control.options.map((opt: string) => (
                <label key={opt} className="cfg-radio">
                    <input type="radio" name={control.name} checked={value === opt} onChange={() => onChange(opt)} />
                    <span className="cfg-radio-indicator" />
                    <span className="cfg-radio-label">{opt}</span>
                </label>
            ))}
        </div>
    </div>
);

const normalizeDropdownOption = (opt: string | DropdownOption): DropdownOption =>
    typeof opt === 'string' ? { value: opt } : opt;

const DROPDOWN_MENU_MAX_HEIGHT = 200;

const DropdownField: React.FC<{ control: DropdownControl; value: string; onChange: (v: string) => void }> = ({
    control,
    value,
    onChange
}) => {
    const [open, setOpen] = React.useState(false);
    const [menuStyle, setMenuStyle] = React.useState<React.CSSProperties>({});
    const ref = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLDivElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const options = control.options.map(normalizeDropdownOption);
    const selected = options.find((opt) => opt.value === value);

    const updatePosition = React.useCallback(() => {
        const trigger = triggerRef.current;
        if (!trigger) {
            return;
        }
        const rect = trigger.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom - 8;
        const openUp = spaceBelow < DROPDOWN_MENU_MAX_HEIGHT && rect.top > spaceBelow;
        setMenuStyle({
            position: 'fixed',
            left: rect.left,
            width: rect.width,
            maxHeight: Math.min(DROPDOWN_MENU_MAX_HEIGHT, openUp ? rect.top - 8 : spaceBelow),
            ...(openUp ? { bottom: window.innerHeight - rect.top + 4 } : { top: rect.bottom + 4 })
        });
    }, []);

    React.useLayoutEffect(() => {
        if (!open) {
            return;
        }
        updatePosition();
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition, true);
        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, true);
        };
    }, [open, updatePosition]);

    React.useEffect(() => {
        if (!open) {
            return;
        }
        const handleClick = (e: MouseEvent) => {
            const target = e.target as Node;
            if (ref.current?.contains(target) || menuRef.current?.contains(target)) {
                return;
            }
            setOpen(false);
        };
        const handleKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open]);

    const menu = (
        <div className="cfg-dropdown-menu" ref={menuRef} style={menuStyle}>
            <div className="cfg-dropdown-menu-scroll" role="listbox">
                {options.map((opt) => (
                    <div
                        key={opt.value}
                        role="option"
                        aria-selected={value === opt.value}
                        className={`cfg-dropdown-item ${value === opt.value ? 'cfg-dropdown-item-active' : ''}`}
                        onClick={() => {
                            onChange(opt.value);
                            setOpen(false);
                        }}
                    >
                        {opt.color && <span className="cfg-dropdown-swatch" style={{ background: opt.color }} />}
                        <span className="cfg-dropdown-value">{opt.label ?? opt.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="cfg-field" ref={ref}>
            <div
                className={`cfg-dropdown ${open ? 'cfg-dropdown-open' : ''}`}
                ref={triggerRef}
                role="combobox"
                aria-expanded={open}
                tabIndex={0}
                onClick={() => setOpen(!open)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOpen(!open))}
            >
                {selected?.color && <span className="cfg-dropdown-swatch" style={{ background: selected.color }} />}
                <span className="cfg-dropdown-value">{selected?.label ?? value}</span>
                <svg className="cfg-dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            {open && typeof document !== 'undefined' && ReactDOM.createPortal(menu, document.body)}
        </div>
    );
};

const SwitchField: React.FC<{ control: any; value: boolean; onChange: (v: boolean) => void }> = ({
    control,
    value,
    onChange
}) => (
    <div className="cfg-field">
        <label className="cfg-switch">
            <div
                className={`cfg-switch-track ${value ? 'cfg-switch-track-on' : ''}`}
                role="switch"
                aria-checked={value}
                tabIndex={0}
                onClick={() => onChange(!value)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onChange(!value))}
            >
                <div className="cfg-switch-thumb" />
            </div>
            <span className="cfg-switch-label">{control.label}</span>
        </label>
    </div>
);

const CheckboxField: React.FC<{ control: any; value: boolean; onChange: (v: boolean) => void }> = ({
    control,
    value,
    onChange
}) => (
    <div className="cfg-field">
        <label className="cfg-checkbox">
            <input type="checkbox" checked={value} onChange={() => onChange(!value)} />
            <span className="cfg-checkbox-indicator">
                {value && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                            d="M1 3.5L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </span>
            <span className="cfg-checkbox-label">{control.label}</span>
        </label>
    </div>
);

const SegmentedField: React.FC<{ control: any; value: string; onChange: (v: string) => void }> = ({
    control,
    value,
    onChange
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [thumbStyle, setThumbStyle] = React.useState<React.CSSProperties>({ opacity: 0 });
    const [tooltip, setTooltip] = React.useState<{ text: string; left: number; top: number } | null>(null);

    React.useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const activeBtn = container.querySelector('.cfg-segmented-item-active') as HTMLElement;
        if (!activeBtn) return;
        setThumbStyle({ left: activeBtn.offsetLeft, width: activeBtn.offsetWidth, opacity: 1 });
    }, [value]);

    // Tooltips are portaled to `document.body` because the panel clips its overflow.
    const showTooltip = (e: React.SyntheticEvent<HTMLButtonElement>, text: string) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({ text, left: rect.left + rect.width / 2, top: rect.top });
    };

    return (
        <div className="cfg-field">
            <div className="cfg-segmented" ref={containerRef} onMouseLeave={() => setTooltip(null)}>
                <div className="cfg-segmented-thumb" style={thumbStyle} />
                {control.options.map((opt: any) => (
                    <button
                        key={opt.value}
                        className={`cfg-segmented-item ${value === opt.value ? 'cfg-segmented-item-active' : ''}`}
                        onClick={() => onChange(opt.value)}
                        aria-label={opt.label || opt.value}
                        onMouseEnter={(e) => showTooltip(e, opt.label || opt.value)}
                        onFocus={(e) => showTooltip(e, opt.label || opt.value)}
                        onBlur={() => setTooltip(null)}
                    >
                        {opt.icon || opt.label || opt.value}
                    </button>
                ))}
            </div>
            {tooltip &&
                typeof document !== 'undefined' &&
                ReactDOM.createPortal(
                    <div className="cfg-tooltip" style={{ left: tooltip.left, top: tooltip.top }}>
                        {tooltip.text}
                        <span className="cfg-tooltip-callout" />
                    </div>,
                    document.body
                )}
        </div>
    );
};

/** Ticks stop being readable once they are only a few pixels apart, so hide them past this count. */
const SLIDER_MAX_TICKS = 12;

const SliderField: React.FC<{ control: SliderControl; value: number; onChange: (v: number) => void }> = ({
    control,
    value,
    onChange
}) => {
    const { min, max, step = 1 } = control;
    const pct = ((value - min) / (max - min)) * 100;
    const tickCount = Math.round((max - min) / step) + 1;
    const [showTooltip, setShowTooltip] = React.useState(false);

    return (
        <div className="cfg-field">
            <div className="cfg-slider">
                <div className="cfg-slider-track-wrap">
                    <div
                        className="cfg-slider-tooltip-anchor"
                        style={{ left: `calc(${pct / 100} * (100% - 16px) + 8px)` }}
                    >
                        {showTooltip && (
                            <div className="cfg-slider-tooltip">
                                <span className="cfg-slider-tooltip-value">{value}</span>
                                <span className="cfg-slider-tooltip-callout" />
                            </div>
                        )}
                    </div>
                    <input
                        type="range"
                        className="cfg-slider-input"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={(e) => onChange(Number(e.target.value))}
                        onMouseDown={() => setShowTooltip(true)}
                        onMouseUp={() => setShowTooltip(false)}
                        onFocus={() => setShowTooltip(true)}
                        onBlur={() => setShowTooltip(false)}
                        style={{ '--cfg-slider-pct': `${pct}%` } as React.CSSProperties}
                    />
                    {tickCount <= SLIDER_MAX_TICKS ? (
                        <div className="cfg-slider-ticks">
                            {Array.from({ length: tickCount }, (_, i) => (
                                <span key={i} className="cfg-slider-tick" />
                            ))}
                        </div>
                    ) : (
                        <div className="cfg-slider-range">
                            <span>{min}</span>
                            <span>{max}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const TextBoxField: React.FC<{ control: TextBoxControl; value: string; onChange: (v: string) => void }> = ({
    control,
    value,
    onChange
}) => (
    <div className="cfg-field">
        <input
            type="text"
            className="cfg-textbox"
            placeholder={control.placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

const DateField: React.FC<{ control: DateControl; value: string; onChange: (v: string) => void }> = ({
    control,
    value,
    onChange
}) => (
    <div className="cfg-field">
        <input
            type="date"
            className="cfg-textbox"
            min={control.min}
            max={control.max}
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

const NumericTextBoxField: React.FC<{
    control: NumericTextBoxControl;
    value: number;
    onChange: (v: number) => void;
}> = ({ control, value, onChange }) => {
    const { min, max, step = 1 } = control;
    const decrement = () => {
        const next = value - step;
        onChange(min !== undefined ? Math.max(min, next) : next);
    };
    const increment = () => {
        const next = value + step;
        onChange(max !== undefined ? Math.min(max, next) : next);
    };
    return (
        <div className="cfg-field">
            <div className="cfg-numeric">
                <button className="cfg-numeric-btn" onClick={decrement} aria-label="Decrease">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
                <input
                    type="number"
                    className="cfg-numeric-input"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => onChange(Number(e.target.value))}
                />
                <button className="cfg-numeric-btn" onClick={increment} aria-label="Increase">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2.5V9.5M2.5 6H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const HEX_COLOR_PATTERN = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;

const normalizeHexColor = (value: string): string | null => {
    const trimmed = value.trim();
    const withHash = trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
    return HEX_COLOR_PATTERN.test(withHash) ? withHash.toLowerCase() : null;
};

const ColorPickerField: React.FC<{
    control: ColorPickerControl;
    value: string;
    onChange: (v: string) => void;
}> = ({ control, value, onChange }) => {
    const nativeColorInputRef = React.useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = React.useState(value ?? '');

    React.useEffect(() => {
        setInputValue(value ?? '');
    }, [value]);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value;
        setInputValue(nextValue);
        const normalized = normalizeHexColor(nextValue);
        if (normalized) {
            onChange(normalized);
        }
    };

    const handleTextBlur = () => {
        setInputValue(normalizeHexColor(inputValue) || value);
    };

    return (
        <div className="cfg-field">
            <div className="cfg-color-row">
                <button
                    type="button"
                    className="cfg-color-swatch-button"
                    style={{ backgroundColor: value }}
                    onClick={() => nativeColorInputRef.current?.click()}
                    aria-label={`Choose custom ${control.name} color`}
                >
                    <input
                        ref={nativeColorInputRef}
                        type="color"
                        className="cfg-color-hidden-input"
                        value={value || '#000000'}
                        onChange={(e) => onChange(e.target.value.toLowerCase())}
                        onClick={(e) => e.stopPropagation()}
                        tabIndex={-1}
                        aria-hidden="true"
                    />
                </button>
                <input
                    type="text"
                    className="cfg-color-input"
                    value={inputValue}
                    onChange={handleTextChange}
                    onBlur={handleTextBlur}
                    spellCheck={false}
                    aria-label={`${control.name} color value`}
                />
            </div>
        </div>
    );
};

const ControlRenderer: React.FC<{ control: ConfigControl; value: any; onChange: (v: any) => void }> = ({
    control,
    value,
    onChange
}) => renderControl(control, value, onChange);

const renderControl = (control: ConfigControl, value: any, onChange: (v: any) => void) => {
    switch (control.type) {
        case 'buttonGroup':
            return <ButtonGroupField control={control} value={value} onChange={onChange} />;
        case 'chip':
            return <ChipField control={control} value={value} onChange={onChange} />;
        case 'radio':
            return <RadioField control={control} value={value} onChange={onChange} />;
        case 'dropdown':
            return <DropdownField control={control} value={value} onChange={onChange} />;
        case 'switch':
            return <SwitchField control={control} value={value} onChange={onChange} />;
        case 'checkbox':
            return <CheckboxField control={control} value={value} onChange={onChange} />;
        case 'segmented':
            return <SegmentedField control={control} value={value} onChange={onChange} />;
        case 'slider':
            return <SliderField control={control} value={value} onChange={onChange} />;
        case 'textbox':
            return <TextBoxField control={control} value={value} onChange={onChange} />;
        case 'date':
            return <DateField control={control} value={value} onChange={onChange} />;
        case 'numericTextBox':
            return <NumericTextBoxField control={control} value={value} onChange={onChange} />;
        case 'colorPicker':
            return <ColorPickerField control={control} value={value} onChange={onChange} />;
        default:
            return null;
    }
};

const SectionRenderer: React.FC<{
    section: ConfigSection;
    values: Record<string, any>;
    onValueChange: (name: string, value: any) => void;
}> = ({ section, values, onValueChange }) => (
    <div className="cfg-section">
        <div className="cfg-section-label">{section.label}</div>
        {section.controls.map((control) => (
            <ControlRenderer
                key={control.name}
                control={control}
                value={values[control.name]}
                onChange={(v) => onValueChange(control.name, v)}
            />
        ))}
    </div>
);

export const ConfiguratorPanel: React.FC<ConfiguratorPanelProps> = ({ onClose }) => {
    const { sections, values, setValue } = useConfiguratorContext();

    if (sections.length === 0) {
        return (
            <div className="cfg-panel" role="dialog" aria-modal="true" aria-labelledby="cfg-panel-title">
                <div className="cfg-panel-header">
                    <span className="cfg-panel-title" id="cfg-panel-title">
                        Component Properties
                    </span>
                    <button className="cfg-panel-close" onClick={onClose} title="Close" aria-label="Close">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.1464 3.14651C12.3417 2.95131 12.6582 2.95133 12.8535 3.14651C13.0487 3.34176 13.0487 3.65827 12.8535 3.85354L8.70699 8.00002L12.8535 12.1465C13.0487 12.3418 13.0487 12.6583 12.8535 12.8535C12.6582 13.0488 12.3417 13.0488 12.1464 12.8535L7.99996 8.70705L3.85348 12.8535C3.65822 13.0488 3.34171 13.0488 3.14645 12.8535C2.95125 12.6583 2.95121 12.3417 3.14645 12.1465L7.29293 8.00002L3.14645 3.85354C2.95118 3.65828 2.95118 3.34177 3.14645 3.14651C3.34171 2.95125 3.65822 2.95125 3.85348 3.14651L7.99996 7.29299L12.1464 3.14651Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <div className="cfg-panel-empty">No configurator controls available for this demo.</div>
            </div>
        );
    }

    return (
        <div className="cfg-panel" role="dialog" aria-modal="true" aria-labelledby="cfg-panel-title">
            <div className="cfg-panel-header">
                <span className="cfg-panel-title" id="cfg-panel-title">
                    Component Properties
                </span>
                <button className="cfg-panel-close" onClick={onClose} title="Close" aria-label="Close">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.1464 3.14651C12.3417 2.95131 12.6582 2.95133 12.8535 3.14651C13.0487 3.34176 13.0487 3.65827 12.8535 3.85354L8.70699 8.00002L12.8535 12.1465C13.0487 12.3418 13.0487 12.6583 12.8535 12.8535C12.6582 13.0488 12.3417 13.0488 12.1464 12.8535L7.99996 8.70705L3.85348 12.8535C3.65822 13.0488 3.34171 13.0488 3.14645 12.8535C2.95125 12.6583 2.95121 12.3417 3.14645 12.1465L7.29293 8.00002L3.14645 3.85354C2.95118 3.65828 2.95118 3.34177 3.14645 3.14651C3.34171 2.95125 3.65822 2.95125 3.85348 3.14651L7.99996 7.29299L12.1464 3.14651Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>
            <div className="cfg-panel-content">
                {sections.map((section, i) => (
                    <SectionRenderer
                        key={section.label + i}
                        section={section}
                        values={values}
                        onValueChange={setValue}
                    />
                ))}
            </div>
        </div>
    );
};
