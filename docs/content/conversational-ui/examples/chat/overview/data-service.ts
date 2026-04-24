/**
 * Service for communicating with the AI chat API
 */
export class ChatAIService {
    private readonly AI_ENDPOINT = 'https://demos.telerik.com/service/v2/ai/completion';

    /**
     * Sends a request to the AI service for analysis
     */
    public async analyzeData(prompt: string, fileNames?: string[]): Promise<string> {
        const headers = {
            Accept: '*/*',
            'Content-Type': 'application/json'
        };

        let promptText = prompt;
        if (fileNames && fileNames.length > 0) {
            promptText = `I have attached the following file(s): ${fileNames.join(', ')}.\n\n${prompt}`;
        }

        const requestData = [
            {
                role: 'user',
                contents: [
                    {
                        $type: 'text',
                        text: `${promptText}`
                    }
                ]
            }
        ];

        try {
            const response = await fetch(this.AI_ENDPOINT, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return this.extractResponseText(data);
        } catch (error) {
            console.error('Error calling AI service:', error);
            throw error;
        }
    }

    /**
     * Extracts the text content from the AI service response
     */
    private extractResponseText(response: any): string {
        if (response && response.messages && response.messages.length > 0) {
            const message = response.messages[0];
            if (message.contents && message.contents.length > 0) {
                return message.contents[0].text;
            }
        }

        throw new Error('Invalid response format from AI service');
    }
}
