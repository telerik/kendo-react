/** Events pushed by the simulated tool call run, similar to what an SSE/WebSocket feed would deliver. */
export type ToolCallEvent = { type: 'error'; text: string };

export const ERROR_TEXT = 'Connection timeout: Unable to reach database server';

const ERROR_DELAY = 1200; // ms before the simulated call fails

/**
 * Simulates a tool call that fails partway through execution: the call stays active
 * for a bit, then reports an error.
 * Returns an unsubscribe function that cancels any events still pending.
 */
export function streamToolCallError(onEvent: (event: ToolCallEvent) => void): () => void {
    const toError = setTimeout(() => onEvent({ type: 'error', text: ERROR_TEXT }), ERROR_DELAY);

    return () => clearTimeout(toError);
}
