import * as React from 'react';
import {
    InlineAIPrompt,
    InlineAIPromptOutputInterface,
    OutputActionInterface
} from '@progress/kendo-react-conversational-ui';
import { downloadIcon, shareIcon, insertBottomIcon, heartIcon, copyIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const [outputs, setOutputs] = React.useState<InlineAIPromptOutputInterface[]>([
        {
            id: 1,
            responseContent:
                'This is an example AI response that demonstrates the custom action commands. You can copy, insert, download, share, or add it to favorites.',
            prompt: 'Example prompt'
        }
    ]);

    const onPromptRequest = (prompt: string) => {
        const newOutput: InlineAIPromptOutputInterface = {
            id: outputs.length + 1,
            responseContent: `Mock AI response for: "${prompt}"`,
            prompt
        };
        setOutputs((prevOutputs) => [...prevOutputs, newOutput]);
    };

    const customOutputActions: OutputActionInterface[] = [
        {
            id: 'copy',
            text: 'Copy Text',
            svgIcon: copyIcon,
            themeColor: 'primary',
            title: 'Copy content'
        },
        {
            id: 'insert',
            text: 'Insert',
            svgIcon: insertBottomIcon,
            themeColor: 'primary',
            title: 'Insert content'
        },
        {
            id: 'download',
            text: 'Download',
            svgIcon: downloadIcon,
            themeColor: 'info',
            title: 'Download as file'
        },
        {
            id: 'share',
            text: 'Share',
            svgIcon: shareIcon,
            themeColor: 'warning',
            title: 'Share content'
        },
        {
            id: 'favorite',
            text: 'Favorite',
            svgIcon: heartIcon,
            themeColor: 'error',
            title: 'Add to favorites'
        },
        {
            id: 'discard',
            text: 'Remove',
            svgIcon: downloadIcon,
            themeColor: 'base',
            title: 'Remove this output'
        }
    ];

    const onOutputAction = (command: OutputActionInterface, output: InlineAIPromptOutputInterface) => {
        switch (command.id) {
            case 'insert':
                alert(`Inserting content: "${output.responseContent.substring(0, 50)}..."`);
                break;
            case 'download': {
                // Create a downloadable file
                const blob = new Blob([output.responseContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `ai-response-${output.id}.txt`;
                a.click();
                URL.revokeObjectURL(url);
                break;
            }
            case 'share': {
                if (navigator.share) {
                    navigator.share({
                        title: 'AI Generated Content',
                        text: output.responseContent
                    });
                } else {
                    alert('Share functionality not available in this browser');
                }
                break;
            }
            case 'favorite':
                alert(`Added to favorites: "${output.responseContent.substring(0, 50)}..."`);
                break;
            default:
                alert(`Custom action executed: ${command.id}`);
                break;
        }
    };

    const onCopy = (output: InlineAIPromptOutputInterface) => {
        alert(`Custom copy handler: Copied "${output.responseContent.substring(0, 30)}..."`);
    };

    const onDiscard = (output: InlineAIPromptOutputInterface) => {
        // Remove the output from the list
        setOutputs((prevOutputs) => prevOutputs.filter((o) => o.id !== output.id));
    };

    return (
        <InlineAIPrompt
            width={650}
            outputs={outputs}
            onPromptRequest={onPromptRequest}
            outputActions={customOutputActions}
            onOutputAction={onOutputAction}
            onCopy={onCopy}
            onDiscard={onDiscard}
            show={true}
        />
    );
};

export default App;
