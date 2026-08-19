import { ThoughtIconKind, TurnData } from './data';

/** A single scripted chain-of-thought step as streamed to the UI, word by word. */
export interface RuntimeThought {
    label: string;
    iconKind: ThoughtIconKind;
    completed: boolean;
    showCitations?: boolean;
}

/** The user's decision on a tool call that is awaiting approval. */
export type ToolCallDecision = 'approve' | 'reject';

/** Events pushed by the simulated conversation, similar to what an SSE/WebSocket feed would deliver. */
export type ConversationEvent =
    | { type: 'reasoning-text'; text: string }
    | { type: 'reasoning-done'; durationSeconds: number }
    | { type: 'reasoning-collapse' }
    | { type: 'thought-added'; thought: RuntimeThought }
    | { type: 'thought-updated'; index: number; thought: RuntimeThought }
    | { type: 'cot-done'; durationSeconds: number }
    | { type: 'cot-collapse' }
    | { type: 'toolcall-awaiting-approval' }
    | { type: 'toolcall-running'; decision: ToolCallDecision }
    | { type: 'toolcall-result' }
    | { type: 'toolcall-settled'; decision: ToolCallDecision }
    | { type: 'response'; rejected: boolean };

/**
 * Handle returned by `runConversation`. `cancel` stops any timers still pending (e.g. on unmount
 * or when a new run replaces this one); `resolveApproval` settles a pending tool-call approval
 * with the user's decision and is a no-op once the run isn't waiting on one (or has already been
 * resolved/cancelled).
 */
export interface ConversationHandle {
    cancel: () => void;
    resolveApproval: (decision: ToolCallDecision) => void;
}

// Timing constants (ms) for the simulated conversation.
const WORD_INTERVAL = 70; // delay between each word revealed in a streaming label/paragraph
const STEP_GAP = 400; // pause between two chain-of-thought steps
const PARAMS_DELAY = 700; // delay before a tool call's parameters/approval request are revealed
const RESULT_DELAY = 1100; // simulated execution time once a tool call is approved
const TOOLCALL_COLLAPSE_DELAY = 1300; // delay before a resolved tool call auto-collapses
const SECTION_COLLAPSE_DELAY = 2000; // delay before a completed reasoning/chain-of-thought step auto-collapses
const START_DELAY = 400; // delay before the agent starts thinking

/**
 * Simulates streaming a single agent turn (e.g. from an SSE or WebSocket feed) for `turn`.
 * Reasoning and chain-of-thought stream in word by word, then — when the turn has a tool call —
 * its parameters are revealed and it pauses in an `awaitingApproval` state until the caller
 * invokes the returned handle's `resolveApproval`: approving runs the tool and answers with the
 * live result/citation, rejecting answers with the turn's cached fallback response/citation
 * instead. Each section starts as soon as the previous one has finished and fully collapsed —
 * there is no additional pause between them. A section's "completed"/final state is only ever
 * applied in the same event that collapses it, never before — matching the dedicated Reasoning,
 * ChainOfThought and ToolCall demos.
 */
export function runConversation(turn: TurnData, onEvent: (event: ConversationEvent) => void): ConversationHandle {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (delay: number, event: ConversationEvent) => {
        timeouts.push(setTimeout(() => onEvent(event), delay));
    };

    let time = START_DELAY;

    if (turn.reasoningText) {
        // Split on whitespace, but keep the blank line between paragraphs as its own token
        // so it streams in at the right spot instead of merging into the surrounding words.
        const words = turn.reasoningText.replaceAll('\n\n', ' \n\n ').split(' ');
        words.forEach((_, wordIndex) => {
            const text = words.slice(0, wordIndex + 1).join(' ');
            schedule(time, { type: 'reasoning-text', text });
            time += WORD_INTERVAL;
        });

        const durationSeconds = Math.max(1, Math.round(time / 1000));
        schedule(time, { type: 'reasoning-done', durationSeconds });

        const collapseTime = time + SECTION_COLLAPSE_DELAY;
        schedule(collapseTime, { type: 'reasoning-collapse' });
        time = collapseTime;
    }

    if (turn.thoughts) {
        turn.thoughts.forEach((thought, thoughtIndex) => {
            const words = thought.label.split(' ');
            // A thought with a thinking pause stays active until its dedicated resolve event below,
            // even once its label has finished streaming in.
            const resolvesWhileStreaming = !thought.thinkingPauseMs;

            words.forEach((_, wordIndex) => {
                const isLastWord = wordIndex === words.length - 1;
                const partial: RuntimeThought = {
                    label: words.slice(0, wordIndex + 1).join(' '),
                    iconKind: thought.iconKind,
                    completed: isLastWord && resolvesWhileStreaming,
                    // The related-table citations (when this step has them) are a "still working"
                    // indicator: they show once the label has finished streaming in and disappear
                    // again once the step actually resolves below.
                    showCitations: isLastWord ? thought.showCitations : undefined
                };

                schedule(
                    time,
                    wordIndex === 0
                        ? { type: 'thought-added', thought: partial }
                        : { type: 'thought-updated', index: thoughtIndex, thought: partial }
                );
                time += WORD_INTERVAL;
            });

            if (thought.thinkingPauseMs) {
                time += thought.thinkingPauseMs;
                schedule(time, {
                    type: 'thought-updated',
                    index: thoughtIndex,
                    thought: {
                        label: thought.completedLabel ?? thought.label,
                        iconKind: thought.iconKind,
                        completed: true
                        // showCitations omitted: the citations were only a "still working" indicator
                        // and disappear now that the step has resolved.
                    }
                });
            }

            time += STEP_GAP;
        });

        const durationSeconds = Math.max(1, Math.round(time / 1000));
        schedule(time, { type: 'cot-done', durationSeconds });

        const collapseTime = time + SECTION_COLLAPSE_DELAY;
        schedule(collapseTime, { type: 'cot-collapse' });
        time = collapseTime;
    }

    let resolveApproval: ((decision: ToolCallDecision) => void) | null = null;

    if (turn.toolCall) {
        time += PARAMS_DELAY;
        schedule(time, { type: 'toolcall-awaiting-approval' });

        resolveApproval = (decision) => {
            if (!resolveApproval) {
                return;
            }
            resolveApproval = null;

            // The badge flips to "active" the moment the user decides; the result (when approved)
            // appears as soon as it's ready, and a rejection's error text appears immediately too — but
            // the final badge state and the auto-collapse only happen together, once the reader has had
            // time to skim the outcome.
            onEvent({ type: 'toolcall-running', decision });

            if (decision === 'approve') {
                const settleTime = RESULT_DELAY + TOOLCALL_COLLAPSE_DELAY;
                timeouts.push(
                    setTimeout(() => onEvent({ type: 'toolcall-result' }), RESULT_DELAY),
                    setTimeout(() => onEvent({ type: 'toolcall-settled', decision }), settleTime),
                    setTimeout(() => onEvent({ type: 'response', rejected: false }), settleTime)
                );
            } else {
                timeouts.push(
                    setTimeout(() => onEvent({ type: 'toolcall-settled', decision }), TOOLCALL_COLLAPSE_DELAY),
                    setTimeout(() => onEvent({ type: 'response', rejected: true }), TOOLCALL_COLLAPSE_DELAY)
                );
            }
        };
    } else {
        schedule(time, { type: 'response', rejected: false });
    }

    return {
        cancel: () => timeouts.forEach(clearTimeout),
        resolveApproval: (decision) => resolveApproval?.(decision)
    };
}
