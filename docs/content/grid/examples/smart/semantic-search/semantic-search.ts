/**
 * Service for semantic search using text embeddings.
 * Uses the Xenova/multilingual-e5-small model for generating embeddings.
 */
export class SemanticSearchService {
    private extractor: any = null;
    private initPromise: Promise<boolean> | null = null;

    public async initialize(): Promise<boolean> {
        if (this.extractor) {
            return true;
        }

        if (this.initPromise) {
            return this.initPromise;
        }

        this.initPromise = this.loadModel();
        return this.initPromise;
    }

    private async loadModel(): Promise<boolean> {
        try {
            /**
             * STACKBLITZ/CODESANDBOX COMPATIBILITY WORKAROUND
             *
             * The @huggingface/transformers NPM package requires build tools to bundle WASM files and worker scripts.
             * Since our demos are static projects without build pipelines, the NPM package cannot load these required assets.
             * To work around this limitation, we use a CDN import that provides a pre-bundled browser-compatible version.
             * For production applications with proper build tools, use the NPM package instead of this CDN workaround.
             */
            // eslint-disable-next-line no-new-func
            const { pipeline, env } = await new Function(
                'return import("https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1")'
            )();

            env.allowLocalModels = false;

            this.extractor = await pipeline('feature-extraction', 'Xenova/multilingual-e5-small');

            return true;
        } catch (error) {
            console.error('Failed to initialize semantic search:', error);
            return false;
        }
    }

    /**
     * Generates an embedding vector for a single text.
     */
    public async embed(text: string): Promise<number[]> {
        await this.initialize();

        if (!this.extractor) {
            throw new Error('Model not loaded');
        }

        const output = await this.extractor(text, { pooling: 'mean', normalize: true });
        return Array.from(output.data);
    }

    /**
     * Generates embeddings for multiple texts in batches.
     */
    public async embedBatch(texts: string[], batchSize: number): Promise<number[][]> {
        await this.initialize();

        if (!this.extractor) {
            throw new Error('Model not loaded');
        }

        const results: number[][] = [];

        for (let i = 0; i < texts.length; i += batchSize) {
            const batch = texts.slice(i, i + batchSize);
            const batchPromises = batch.map((text) => this.embed(text));
            const batchResults = await Promise.all(batchPromises);
            results.push(...batchResults);

            if (i + batchSize < texts.length) {
                await new Promise((resolve) => setTimeout(resolve, 0));
            }
        }

        return results;
    }

    /**
     * Calculates the cosine similarity between two vectors.
     */
    public cosineSimilarity(a: number[], b: number[]): number {
        let dot = 0;
        let normA = 0;
        let normB = 0;

        for (let i = 0; i < a.length; i++) {
            dot += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }

        return dot / (Math.sqrt(normA) * Math.sqrt(normB));
    }
}
