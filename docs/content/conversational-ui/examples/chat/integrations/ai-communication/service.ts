import { Message, User } from '@progress/kendo-react-conversational-ui';

/**
 * Real API function to get suggestion from Telerik's AI service
 */
export const getSuggestion = async (prompt: string, signal?: AbortSignal): Promise<string> => {
    const url = 'https://demos.telerik.com/service/v2/ai/completion';
    const data = [
        {
            role: 'user',
            contents: [
                {
                    $type: 'text',
                    text:
                        'You are a helpful AI assistant. Help me with the following request: ' +
                        prompt +
                        '. Provide a clear and concise response. Make the response informative and helpful.'
                }
            ]
        }
    ];

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            signal: signal
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        try {
            const parsedData = result.messages[0].contents[0].text;
            return parsedData;
        } catch (parseError) {
            return 'Something went wrong. Please try again.';
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            throw error; // Re-throw abort errors to handle them specifically
        }
        return 'Error making request. Please try again.';
    }
};

/**
 * Simulates streaming by chunking the response and updating progressively
 */
export const streamResponse = async (
    responseContent: string,
    aiResponse: Message,
    controller: AbortController,
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
    chunkSize: number = 20,
    delay: number = 100
): Promise<void> => {
    let currentIndex = 0;
    while (currentIndex < responseContent.length && !controller.signal.aborted) {
        await new Promise((resolve) => setTimeout(resolve, delay));

        if (controller.signal.aborted) {
            break;
        }

        const nextChunk = responseContent.slice(0, currentIndex + chunkSize);
        setMessages((prevMessages) => {
            const updated = [...prevMessages];
            // Find the AI response message and update its text
            const aiMessageIndex = updated.findIndex((msg) => msg.id === aiResponse.id);
            if (aiMessageIndex !== -1) {
                updated[aiMessageIndex] = {
                    ...updated[aiMessageIndex],
                    text: nextChunk
                };
            }
            return updated;
        });
        currentIndex += chunkSize;
    }
};

/**
 * Creates an AI response message with optional file attachments
 */
export const createAIResponse = (
    messageId: string,
    aiUser: User,
    text: string = '',
    files?: Array<{
        id: string;
        name: string;
        size: number;
        mimetype: string;
        url: string;
        filename: string;
    }>
): Message => {
    return {
        id: messageId,
        author: aiUser,
        text,
        timestamp: new Date(),
        ...(files && { files })
    };
};
