import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Rating, RatingItem, RatingItemProps } from '@progress/kendo-react-inputs';
import {
    gearIcon,
    questionCircleIcon,
    infoCircleIcon,
    bellIcon,
    commentIcon,
    starIcon
} from '@progress/kendo-svg-icons';
import { SvgIcon, classNames } from '@progress/kendo-react-common';
import './styles.css';

// Extend window interface for suggestion color mapping
declare global {
    interface Window {
        suggestionColorMap: Map<string, string>;
        colorIndex: number;
    }
}

// Category-based suggestion template - with icons and categories
export const CategorySuggestionTemplate = ({ suggestion, onClick }: any) => {
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'action':
                return gearIcon;
            case 'question':
                return questionCircleIcon;
            case 'info':
                return infoCircleIcon;
            case 'help':
                return bellIcon;
            default:
                return commentIcon;
        }
    };

    // Color palette for different suggestions
    const colorPalette = [
        '#007bff', // Blue
        '#28a745', // Green
        '#dc3545', // Red
        '#ffc107', // Yellow
        '#17a2b8', // Cyan
        '#6f42c1', // Purple
        '#fd7e14', // Orange
        '#20c997', // Teal
        '#e83e8c', // Pink
        '#6c757d', // Gray
        '#198754', // Dark Green
        '#0d6efd', // Bright Blue
        '#d63384', // Magenta
        '#795548', // Brown
        '#607d8b' // Blue Gray
    ];

    // Create a global suggestion color map to ensure consistency
    if (!window.suggestionColorMap) {
        window.suggestionColorMap = new Map();
        window.colorIndex = 0;
    }

    // Get or assign color for this suggestion
    const getColorForSuggestion = (suggestion: any): string => {
        const key = suggestion.id || suggestion.text;

        if (!window.suggestionColorMap.has(key)) {
            // Assign next color in sequence
            const color = colorPalette[window.colorIndex % colorPalette.length];
            window.suggestionColorMap.set(key, color);
            window.colorIndex++;
        }

        return window.suggestionColorMap.get(key) || colorPalette[0];
    };

    const suggestionColor = getColorForSuggestion(suggestion);
    const categoryIcon = getCategoryIcon(suggestion.category || 'default');

    return (
        <Button
            onClick={onClick}
            svgIcon={categoryIcon}
            style={{
                backgroundColor: suggestionColor,
                borderColor: suggestionColor,
                color: 'white',
                margin: '4px',
                transition: 'all 0.2s ease',
                boxShadow: `0 2px 4px ${suggestionColor}40`
            }}
            onMouseEnter={(e) => {
                // Darken color on hover
                const darkerColor = suggestionColor + 'cc'; // Add transparency for darker effect
                e.currentTarget.style.backgroundColor = darkerColor;
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = `0 4px 8px ${suggestionColor}60`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = suggestionColor;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 2px 4px ${suggestionColor}40`;
            }}
        >
            {suggestion.text}
        </Button>
    );
};

// Animated suggestion template - with hover animations and effects
export const AnimatedSuggestionTemplate = ({ suggestion, onClick }: any) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            className="animated-suggestion-button"
            style={{
                display: 'inline-flex', // Changed from inline-block to inline-flex
                alignItems: 'center',
                justifyContent: 'center',
                margin: '6px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: '600',
                background: isPressed
                    ? 'linear-gradient(135deg, #2980b9 0%, #0074cc 100%)'
                    : isHovered
                    ? 'linear-gradient(135deg, #5dade2 0%, #1abc9c 100%)'
                    : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                boxShadow: isPressed
                    ? '0 2px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(0,0,0,0.2)'
                    : isHovered
                    ? '0 4px 12px rgba(0,0,0,0.15), 0 0 8px rgba(79,172,254,0.3)' // Reduced shadow spread
                    : '0 2px 8px rgba(0,0,0,0.1)', // Reduced shadow spread
                cursor: 'pointer',
                transform: isPressed
                    ? 'translateY(1px) scale(0.98)'
                    : isHovered
                    ? 'translateY(-1px) scale(1.02)' // Reduced scale and translation for horizontal scroll
                    : 'translateY(0) scale(1)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                whiteSpace: 'nowrap', // Prevent text wrapping in horizontal scroll
                flexShrink: 0, // Prevent shrinking in flex container
                minWidth: 'fit-content' // Ensure minimum width for content
            }}
        >
            {/* Animated shimmer effect */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: isHovered ? '100%' : '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.6s ease-in-out',
                    pointerEvents: 'none'
                }}
            />
            {/* Pulse animation on hover - optimized for horizontal scroll */}
            {isHovered && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '0',
                        height: '0',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        animation: 'pulse 1s infinite',
                        pointerEvents: 'none'
                    }}
                />
            )}
            <span style={{ position: 'relative', zIndex: 1 }}>{suggestion.text}</span>
        </div>
    );
};

// Accessible suggestion template - with proper ARIA labels and keyboard support
export const AccessibleSuggestionTemplate = ({ suggestion, onClick }: any) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <Button
            onClick={onClick}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            fillMode="outline"
            themeColor="primary"
            size="medium"
            rounded="medium"
            style={{
                margin: '4px',
                fontSize: '14px',
                fontWeight: '500',
                border: isFocused ? '3px solid #0056b3' : undefined,
                transition: 'all 0.2s ease',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            aria-label={`Suggestion: ${suggestion.text}. Press Enter or Space to select.`}
            tabIndex={0}
        >
            {suggestion.text}
            {/* Screen reader helper */}
            <span
                className="sr-only"
                style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0,0,0,0)',
                    whiteSpace: 'nowrap',
                    border: 0
                }}
            >
                Press Enter to select this suggestion
            </span>
        </Button>
    );
};

// Card-style suggestion template
export const CardSuggestionTemplate = ({ suggestion, onClick }: any) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                padding: '12px 16px',
                backgroundColor: 'white',
                border: isHovered ? '2px solid #007bff' : '1px solid #e1e5e9',
                borderRadius: '8px',
                cursor: 'pointer',
                margin: '4px',
                boxShadow: isHovered ? '0 4px 12px rgba(0,123,255,0.15)' : '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                minWidth: '120px',
                textAlign: 'center'
            }}
        >
            <div
                style={{
                    fontWeight: 'bold',
                    color: isHovered ? '#007bff' : '#333',
                    fontSize: '0.9em'
                }}
            >
                {suggestion.text}
            </div>
            {suggestion.description && (
                <div
                    style={{
                        fontSize: '0.75em',
                        color: '#666',
                        marginTop: '4px'
                    }}
                >
                    {suggestion.description}
                </div>
            )}
        </div>
    );
};

// Icon-based suggestion template
export const IconSuggestionTemplate = ({ suggestion, onClick }: any) => (
    <div
        onClick={onClick}
        style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 14px',
            backgroundColor: '#ffffff',
            border: '1px solid #d1ecf1',
            borderRadius: '25px',
            cursor: 'pointer',
            margin: '3px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
            transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#d1ecf1';
            e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.transform = 'scale(1)';
        }}
    >
        <span style={{ fontSize: '16px' }}>
            <span role="img" aria-label="chat">
                {suggestion.icon || '💬'}
            </span>
        </span>
        <span style={{ fontSize: '0.9em', color: '#0c5460' }}>{suggestion.text}</span>
    </div>
);

// Interactive poll-style suggestion template
export const PollSuggestionTemplate = ({ suggestion, onClick }: any) => {
    // Map rating labels to values
    const getRatingValue = (text: string): number => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('excellent')) return 5;
        if (lowerText.includes('good')) return 4;
        if (lowerText.includes('average')) return 3;
        if (lowerText.includes('poor')) return 2;
        if (lowerText.includes('bad')) return 1;
        return 3; // Default to average
    };

    // Custom item template for smaller stars (12px)
    const CustomRatingItem = (props: RatingItemProps) => {
        return (
            <RatingItem {...props} style={{ padding: '0 8px 0 0' }}>
                {props.half && (
                    <div
                        className={'k-rating-precision-complement'}
                        style={{
                            width: '12px',
                            [props.dir === 'rtl' ? 'right' : 'left']: '50%'
                        }}
                    >
                        <SvgIcon
                            size="xsmall"
                            icon={starIcon}
                            className={classNames({
                                [`${props.icon}-outline`]: props.icon
                            })}
                        />
                    </div>
                )}
                {props.half && (
                    <div className={'k-rating-precision-part'} style={{ width: '12px' }}>
                        <SvgIcon size="xsmall" icon={starIcon} />
                    </div>
                )}
                {props.half && <div style={{ width: '24px', height: '24px', display: 'block' }} />}
                {!props.half && (
                    <SvgIcon
                        size="xsmall"
                        icon={starIcon}
                        className={classNames({
                            [`${props.icon}`]: props.icon
                        })}
                    />
                )}
            </RatingItem>
        );
    };

    const rating = suggestion.rating || getRatingValue(suggestion.text);
    const [votes, setVotes] = React.useState(suggestion.votes || Math.floor(Math.random() * 50));
    const [hasVoted, setHasVoted] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (!hasVoted) {
            setVotes((prev) => prev + 1);
            setHasVoted(true);
        }
        onClick?.(event);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                padding: 'var(--kendo-spacing-2)',
                border: '1px solid var(--kendo-color-border)',
                borderRadius: 'var(--kendo-border-radius-md)',
                cursor: 'pointer',
                margin: '4px',
                transition: 'all 0.3s ease',
                minWidth: '150px'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'var(--kendo-spacing-1,5)'
                }}
            >
                <span
                    style={{
                        fontFamily: 'var(--kendo-font-family)',
                        fontWeight: 'var(--kendo-font-weight-bold)',
                        fontSize: 'var(--kendo-font-size-md)',
                        letterSpacing: 'var(--kendo-letter-spacing)',
                        color: 'var(--kendo-color-on-app-surface)'
                    }}
                >
                    {suggestion.text}
                </span>
                <span
                    style={{
                        fontFamily: 'var(--kendo-font-family)',
                        fontWeight: 'var(--kendo-font-weight-regular)',
                        fontSize: 'var(--kendo-font-size-sm)',
                        letterSpacing: 'var(--kendo-letter-spacing)',
                        color: 'var(--kendo-color-subtle)'
                    }}
                >
                    {votes} votes
                </span>
            </div>

            {!hasVoted ? (
                <Rating value={rating} readonly={true} item={CustomRatingItem} />
            ) : (
                <div
                    style={{
                        fontSize: '0.8em',
                        color: '#28a745',
                        fontWeight: 'bold'
                    }}
                >
                    ✓ Thanks for voting!
                </div>
            )}
        </div>
    );
};

// Export templates configuration
export const suggestionTemplates = {
    default: {
        component: undefined,
        name: 'Default',
        desc: 'Built-in Chat component default suggestion template'
    },
    category: {
        component: CategorySuggestionTemplate,
        name: 'Category',
        desc: 'Categorized suggestions with icons and color coding'
    },
    animated: {
        component: AnimatedSuggestionTemplate,
        name: 'Animated',
        desc: 'Modern gradient style with smooth hover animations'
    },
    accessible: {
        component: AccessibleSuggestionTemplate,
        name: 'Accessible',
        desc: 'Optimized for keyboard navigation and screen readers'
    },
    card: {
        component: CardSuggestionTemplate,
        name: 'Card',
        desc: 'Card-style with descriptions and hover effects'
    },
    icon: {
        component: IconSuggestionTemplate,
        name: 'Icon',
        desc: 'Icons with text in rounded containers'
    },
    poll: {
        component: PollSuggestionTemplate,
        name: 'Poll',
        desc: 'Interactive voting with progress bars'
    }
};
