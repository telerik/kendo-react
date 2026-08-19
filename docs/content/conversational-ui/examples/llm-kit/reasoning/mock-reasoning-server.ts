/** Events pushed by the simulated reasoning stream, similar to what an SSE/WebSocket feed would deliver. */
export type ReasoningEvent = { type: 'text-updated'; text: string } | { type: 'done'; durationSeconds: number };

export const REASONING_TEXT =
    'I need to identify the correct table and apply a quarterly date filter. Revenue should be summed per customer and sorted descending.\n\n' +
    "I'll use query_database with a GROUP BY on customer_name. I'll limit to 5 results.";

const WORD_INTERVAL = 60; // ms between each word revealed while streaming

// Split on whitespace, but keep the blank line between paragraphs as its own token
// so it streams in at the right spot instead of merging into the surrounding words.
const WORDS = REASONING_TEXT.replaceAll('\n\n', ' \n\n ').split(' ');

/** The total duration a run reports once finished, used to render the initial "completed" state before a run starts. */
export const FINAL_DURATION_SECONDS = Math.round((WORDS.length * WORD_INTERVAL) / 1000);

/**
 * Simulates subscribing to a streaming reasoning response (e.g. an SSE or WebSocket feed).
 * Emits the growing text one word at a time, then a `done` event with the total duration.
 * Returns an unsubscribe function that cancels any events still pending.
 */
export function streamReasoning(onEvent: (event: ReasoningEvent) => void): () => void {
    const timeouts = WORDS.map((_, index) =>
        setTimeout(() => {
            // Joining with a space would leave a stray space next to the paragraph break
            // (e.g. "...descending. \n\n I'll use..."), so strip any spaces touching it.
            const text = WORDS.slice(0, index + 1)
                .join(' ')
                .replace(/ ?\n\n ?/g, '\n\n');
            onEvent({ type: 'text-updated', text });

            if (index === WORDS.length - 1) {
                onEvent({ type: 'done', durationSeconds: Math.round(((index + 1) * WORD_INTERVAL) / 1000) });
            }
        }, (index + 1) * WORD_INTERVAL)
    );

    return () => timeouts.forEach(clearTimeout);
}
