import React, { useEffect, useRef, useState } from 'react';
import {
    InlineAIPrompt,
    InlineAIPromptOutputInterface,
    CommandInterface
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { sparklesIcon } from '@progress/kendo-svg-icons';

const MEETING_TRANSCRIPT = `Moderator: Good afternoon, everyone. Let’s get started. Today’s agenda focuses on AI chat technologies and how they’re changing the way we interact with users. To kick things off, I’d like to hear your thoughts on the current strengths and weaknesses of AI chatbots. Who’d like to start?

Alex: I can begin. One major strength is availability—AI chatbots can provide instant responses 24/7. This is especially valuable for customer service. However, I think one weakness is context awareness. Bots sometimes struggle to maintain coherent conversations over multiple turns, especially when users switch topics or ask ambiguous questions.`;

const GENERAL_COMMANDS: CommandInterface[] = [
    {
        id: 'summarize',
        text: 'Summarize',
        prompt: (selection: string) => `Summarize this text in a clear and concise way:\n\n${selection}`
    },
    {
        id: 'explain',
        text: 'Explain',
        prompt: (selection: string) => `Please explain this text in simple terms:\n\n${selection}`
    },
    {
        id: 'translate',
        text: 'Translate',
        children: [
            {
                id: 'german',
                text: 'German',
                prompt: (selection: string) => `Translate this text to German:\n\n${selection}`
            },
            {
                id: 'spanish',
                text: 'Spanish',
                prompt: (selection: string) => `Translate this text to Spanish:\n\n${selection}`
            }
        ]
    }
];

async function getSuggestion(prompt: string, signal?: AbortSignal): Promise<string> {
    const url = 'https://demos.telerik.com/service/v2/ai/completion';
    const data = [{ role: 'user', contents: [{ $type: 'text', text: prompt }] }];
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            signal
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const result = await res.json();
        return result.messages?.[0]?.contents?.[0]?.text ?? 'Something went wrong. Please try again.';
    } catch (err: any) {
        if (err?.name === 'AbortError') throw err;
        return 'Error making request. Please try again.';
    }
}

const App = () => {
    const [paragraphs, setParagraphs] = useState<string[]>(MEETING_TRANSCRIPT.split(/\n\s*\n/).filter(Boolean));
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [promptOutput, setPromptOutput] = useState<InlineAIPromptOutputInterface | null>(null);
    const [isStreaming, setIsStreaming] = useState(false);
    const [currentPromptCommands, setCurrentPromptCommands] = useState<CommandInterface[]>(GENERAL_COMMANDS);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [showSparkle, setShowSparkle] = useState(false);
    const sparkleButtonRef = useRef<HTMLElement | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedText, setSelectedText] = useState<string>('');
    const pRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const mainBtnRef = useRef<HTMLElement | null>(null);

    const editorContainerStyle: React.CSSProperties = {
        width: '100%',
        minHeight: 240,
        border: '1px solid #cbd5e1',
        borderRadius: 4,
        padding: 12,
        lineHeight: '20px',
        fontFamily: 'Arial, sans-serif',
        fontSize: 14,
        overflowY: 'auto',
        whiteSpace: 'pre-wrap',
        background: 'white'
    };

    const onParagraphHover = (index: number) => {
        setHoveredIndex(index);
        setShowSparkle(true);
    };

    const handleSparkleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hoveredIndex == null) return;
        const el = pRefs.current[hoveredIndex];
        if (!el) return;
        const text = paragraphs[hoveredIndex];
        setActiveIndex(hoveredIndex);
        setSelectedText(text);
        setAnchorEl(el);
        setCurrentPromptCommands(GENERAL_COMMANDS);
        setShowPrompt(true);
        setPromptOutput(null);
        setShowSparkle(false);
    };

    const handleMainButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (mainBtnRef.current) {
            setAnchorEl(mainBtnRef.current);
            setActiveIndex(null);
            setSelectedText(paragraphs.join('\n\n'));
            setCurrentPromptCommands(GENERAL_COMMANDS);
            setShowPrompt(true);
            setPromptOutput(null);
            setShowSparkle(false);
        }
    };

    const handleDocumentClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (showSparkle && !target.closest('.sparkle-overlay') && !target.closest('.paragraph-hover')) {
            setShowSparkle(false);
            setHoveredIndex(null);
        }
        if (showPrompt && !target.closest('.k-inline-ai-prompt, .k-popup, .sparkle-overlay')) {
            setShowPrompt(false);
            setAnchorEl(null);
            setPromptOutput(null);
            setActiveIndex(null);
            setSelectedText('');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => document.removeEventListener('click', handleDocumentClick);
    }, [showPrompt, showSparkle]);

    const onPromptRequest = async (prompt: string) => {
        if (!prompt.trim()) return;
        setIsStreaming(true);
        try {
            const responseContent = await getSuggestion(prompt);
            setPromptOutput({ id: Date.now().toString(), prompt, responseContent });
        } catch (error: any) {
            setPromptOutput({
                id: Date.now().toString(),
                prompt,
                responseContent: `Error: ${error.message}`
            });
        } finally {
            setIsStreaming(false);
        }
    };

    const onCommandExecute = (command: CommandInterface) => {
        const textToProcess = selectedText || (activeIndex != null ? paragraphs[activeIndex] : paragraphs.join('\n\n'));
        if (typeof command.prompt === 'function') {
            onPromptRequest(command.prompt(textToProcess));
        } else {
            onPromptRequest(`Help me with: ${command.id}\n\n${textToProcess}`);
        }
    };

    const onParagraphInput = (index: number, e: React.FormEvent<HTMLParagraphElement>) => {
        const newText = (e.target as HTMLParagraphElement).innerText;
        setParagraphs((prev) => prev.map((p, i) => (i === index ? newText : p)));
    };

    const closePrompt = () => {
        setShowPrompt(false);
        setAnchorEl(null);
        setPromptOutput(null);
        setActiveIndex(null);
        setSelectedText('');
    };

    return (
        <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ opacity: 0.4 }}>Transcript</h2>
            <div style={{ marginBottom: 16 }}>
                <Button
                    svgIcon={sparklesIcon}
                    themeColor="primary"
                    onClick={handleMainButtonClick}
                    ref={(el) => {
                        if (el) mainBtnRef.current = (el as any).element;
                    }}
                >
                    AI assistance
                </Button>
            </div>
            <p style={{ fontWeight: 'bold', marginBottom: 8 }}>Meeting transcript:</p>

            <div style={{ position: 'relative' }}>
                <div role="textbox" aria-multiline="true" style={editorContainerStyle}>
                    {paragraphs.map((text, idx) => (
                        <p
                            key={idx}
                            ref={(el) => (pRefs.current[idx] = el)}
                            data-index={idx}
                            className="paragraph-hover"
                            contentEditable
                            suppressContentEditableWarning
                            onInput={(e) => onParagraphInput(idx, e)}
                            onMouseEnter={() => onParagraphHover(idx)}
                            style={{
                                margin: '0 0 12px 0',
                                padding: 6,
                                borderRadius: 4,
                                transition: 'background-color 0.2s ease',
                                outline: 'none',
                                backgroundColor: hoveredIndex === idx ? '#f8f9fa' : 'transparent'
                            }}
                        >
                            {text}
                        </p>
                    ))}
                </div>

                {showSparkle && hoveredIndex != null && pRefs.current[hoveredIndex] && (
                    <div
                        style={{
                            position: 'fixed',
                            left: pRefs.current[hoveredIndex]!.getBoundingClientRect().left - 50,
                            top:
                                pRefs.current[hoveredIndex]!.getBoundingClientRect().top +
                                pRefs.current[hoveredIndex]!.getBoundingClientRect().height / 2 -
                                16,
                            zIndex: 1000,
                            pointerEvents: 'auto'
                        }}
                    >
                        <Button
                            ref={(el) => {
                                if (el) sparkleButtonRef.current = (el as any).element;
                            }}
                            className="sparkle-overlay"
                            onClick={handleSparkleClick}
                            svgIcon={sparklesIcon}
                            fillMode="flat"
                            style={{
                                minWidth: 'auto',
                                height: 'auto',
                                padding: 6,
                                background: 'rgba(255,255,255,0.95)',
                                border: '1px solid #e0e0e0',
                                borderRadius: 4,
                                cursor: 'pointer',
                                fontSize: 16,
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                            }}
                            title="Ask AI about this paragraph"
                        />
                    </div>
                )}
            </div>

            {showPrompt && anchorEl && (
                <InlineAIPrompt
                    anchor={anchorEl}
                    outputs={promptOutput ? [promptOutput] : []}
                    show={showPrompt}
                    streaming={isStreaming}
                    onPromptRequest={onPromptRequest}
                    promptPlaceholder={
                        activeIndex != null ? 'Ask AI about this paragraph...' : 'Ask AI about the transcript...'
                    }
                    commands={currentPromptCommands}
                    onCommandExecute={onCommandExecute}
                    width={500}
                    outputActions={[
                        { id: 'replace', text: 'Replace', themeColor: 'primary' },
                        { id: 'discard', text: 'Discard', themeColor: 'base' }
                    ]}
                    onOutputAction={(action, output) => {
                        if (action.id === 'replace' && output) {
                            if (activeIndex != null) {
                                setParagraphs((prev) =>
                                    prev.map((p, i) => (i === activeIndex ? output.responseContent : p))
                                );
                            } else {
                                setParagraphs(output.responseContent.split(/\n\s*\n/));
                            }
                        }
                        closePrompt();
                    }}
                    onClose={closePrompt}
                    onDiscard={closePrompt}
                />
            )}
        </div>
    );
};

export default App;
