import * as React from 'react';

import './Skeleton.css';
import { Button } from '@progress/kendo-react-buttons';
import { caretAltDownIcon, moreVerticalIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

const content =
    "Ashley Johnson is a UX Designer with 8 years of experience in Portland, Oregon. She's reliable, and great at making complex ideas simple. Her approach ensures smooth teamwork and great results. Reach her at (555) 248-9173.";

interface SkeletonProps {
    isCopied: boolean;
    onButtonCopy: () => void;
    onTextCopy: () => void;
    showCopiedText: boolean;
}

export function Skeleton({ isCopied, onButtonCopy, onTextCopy, showCopiedText }: SkeletonProps) {
    const textRef = React.useRef<HTMLDivElement>(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(content);
        onButtonCopy();
    };

    const handleTextClick = () => {
        // Select the text
        if (textRef.current) {
            const range = document.createRange();
            range.selectNodeContents(textRef.current);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);
        }
        // Copy to clipboard and highlight text (but don't change button text)
        navigator.clipboard.writeText(content);
        onTextCopy();
    };

    return (
        <div className="editor">
            {/* Toolbar */}
            <div className="editor-toolbar">
                <div className="schematic-toolbar">
                    <div className="button-group">
                        <div className="skeleton-btn skeleton-btn-left">
                            <span className="label" />
                        </div>
                        <div className="skeleton-btn skeleton-btn-right">
                            <span className="label" />
                        </div>
                    </div>

                    <div className="commands">
                        <div className="split-button">
                            <div className="skeleton-btn skeleton-btn-split-main">
                                <span className="label wide" />
                            </div>
                            <div className="skeleton-btn skeleton-btn-split-arrow">
                                <SvgIcon icon={caretAltDownIcon} />
                            </div>
                        </div>
                        <div className="skeleton-btn skeleton-btn-icon">
                            <SvgIcon icon={moreVerticalIcon} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Area */}
            <div className="editor-text-area">
                <div className="content">
                    <div className="editor-body">
                        <div className="editor-body-title">Title</div>
                        <div
                            ref={textRef}
                            className={`editor-body-text${isCopied ? ' copied' : ''}`}
                            onClick={handleTextClick}
                        >
                            {content}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="content-footer">
                <Button onClick={copyToClipboard} fillMode="flat" rounded="large">
                    {showCopiedText ? 'Text Copied' : 'Copy Text'}
                </Button>
            </div>
        </div>
    );
}
