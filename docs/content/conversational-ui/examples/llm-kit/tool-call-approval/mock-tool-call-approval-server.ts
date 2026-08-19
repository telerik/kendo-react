/** The user's decision on the pending tool call. */
export type ToolCallOutcome = 'approved' | 'rejected';

/** Events pushed by the simulated server once the user approves or rejects the tool call. */
export type ToolCallEvent = { type: 'completed'; executionMs: number };

export const EXECUTION_DELAY = 1500; // ms the simulated query takes to execute once approved

/**
 * Simulates the server reacting to the user's approval decision: an approved call
 * "executes" for a bit and reports its elapsed time, while a rejected call has nothing
 * left to simulate. Returns an unsubscribe function that cancels any pending events.
 */
export function runToolCallApproval(outcome: ToolCallOutcome, onEvent: (event: ToolCallEvent) => void): () => void {
    if (outcome === 'rejected') {
        return () => undefined;
    }

    const runStart = Date.now();

    const toCompleted = setTimeout(() => {
        onEvent({ type: 'completed', executionMs: Date.now() - runStart });
    }, EXECUTION_DELAY);

    return () => clearTimeout(toCompleted);
}
