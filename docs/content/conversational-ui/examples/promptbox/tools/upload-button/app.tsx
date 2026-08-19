import * as React from 'react';
import { PromptBox, PromptBoxUploadButtonProps, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { useConfigurator } from '@docs-shared/configurator';
import './styles.css';

interface FileTypeOption {
    text: string;
    value: string;
}

const fileTypeOptions: FileTypeOption[] = [
    { text: 'All Files', value: 'all' },
    { text: 'Images (.png, .jpg, .jpeg, .gif)', value: 'images' },
    { text: 'Documents (.pdf, .doc, .docx)', value: 'documents' },
    { text: 'Code Files (.js, .ts, .json)', value: 'code' }
];

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('');
    const config = useConfigurator({
        sections: [
            {
                label: 'Accepted File Types',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'fileTypes',
                        options: fileTypeOptions.map((option) => option.text),
                        defaultValue: fileTypeOptions[0].text
                    }
                ]
            },
            {
                label: 'Upload Button',
                controls: [
                    { type: 'switch', name: 'allowMultiple', label: 'Allow Multiple', defaultValue: false },
                    { type: 'switch', name: 'restrictSize', label: 'Restrict Size (5 MB)', defaultValue: true },
                    { type: 'switch', name: 'disabled', label: 'Disabled', defaultValue: false }
                ]
            }
        ]
    });

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const getUploadButtonSettings = (): PromptBoxUploadButtonProps => {
        const multipleFiles = config.allowMultiple ?? false;
        const restrictFileSize = config.restrictSize ?? true;
        const disabled = config.disabled ?? false;
        const selectedFileType = fileTypeOptions.find((option) => option.text === config.fileTypes)?.value ?? 'all';
        const settings: PromptBoxUploadButtonProps = {
            multiple: multipleFiles,
            disabled: disabled
        };

        if (restrictFileSize) {
            settings.restrictions = {
                maxFileSize: 5 * 1024 * 1024 // 5MB in bytes
            };
        }

        switch (selectedFileType) {
            case 'images':
                settings.accept = 'image/jpeg,image/png,image/gif';
                settings.restrictions = {
                    ...settings.restrictions,
                    allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif']
                };
                break;
            case 'documents':
                settings.accept = '.pdf,.doc,.docx';
                settings.restrictions = {
                    ...settings.restrictions,
                    allowedExtensions: ['.pdf', '.doc', '.docx']
                };
                break;
            case 'code':
                settings.accept = '.js,.ts,.json,.html,.css';
                settings.restrictions = {
                    ...settings.restrictions,
                    allowedExtensions: ['.js', '.ts', '.json', '.html', '.css']
                };
                break;
            default:
                settings.accept = undefined;
        }

        return settings;
    };

    const handleSend = () => {
        setPromptValue('');
    };

    return (
        <div className="demo-container">
            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                uploadButtonConfig={getUploadButtonSettings()}
                placeholder="Attach files and type a message..."
                onPromptAction={handleSend}
            />
        </div>
    );
};

export default App;
