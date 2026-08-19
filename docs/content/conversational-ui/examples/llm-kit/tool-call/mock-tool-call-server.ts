/** Events pushed by the simulated tool call run, similar to what an SSE/WebSocket feed would deliver. */
export type ToolCallEvent = { type: 'params' } | { type: 'result'; executionMs: number };

const PARAMS_DELAY = 800; // ms before the tool call's parameters are revealed
export const RESULT_DELAY = 1400; // ms the simulated query takes to execute once parameters are shown

/**
 * Simulates running a tool call against a server: parameters are revealed first,
 * then a result arrives after a simulated execution delay.
 * Returns an unsubscribe function that cancels any events still pending.
 */
export function streamToolCall(onEvent: (event: ToolCallEvent) => void): () => void {
    let runStart = 0;

    const toParams = setTimeout(() => {
        runStart = Date.now();
        onEvent({ type: 'params' });
    }, PARAMS_DELAY);

    const toResult = setTimeout(() => {
        onEvent({ type: 'result', executionMs: Date.now() - runStart });
    }, PARAMS_DELAY + RESULT_DELAY);

    return () => {
        clearTimeout(toParams);
        clearTimeout(toResult);
    };
}
