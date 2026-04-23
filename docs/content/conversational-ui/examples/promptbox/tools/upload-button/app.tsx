import * as React from 'react';
import { PromptBox, PromptBoxUploadButtonProps, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Checkbox } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
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
    const [multipleFiles, setMultipleFiles] = React.useState<boolean>(false);
    const [restrictFileSize, setRestrictFileSize] = React.useState<boolean>(true);
    const [disabled, setDisabled] = React.useState<boolean>(false);
    const [selectedFileType, setSelectedFileType] = React.useState<string>('all');

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const getUploadButtonSettings = (): PromptBoxUploadButtonProps => {
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

    const handleFileTypeChange = (event: DropDownListChangeEvent) => {
        setSelectedFileType(event.value.value);
    };

    const handleSend = () => {
        setPromptValue('');
    };

    const selectedFileTypeOption = fileTypeOptions.find((opt) => opt.value === selectedFileType) || fileTypeOptions[0];

    return (
        <div className="demo-container">
            <div className="configuration-panel">
                <div className="config-grid">
                    <div className="config-row">
                        <Label className="label-inline">
                            Allow Multiple
                            <Checkbox value={multipleFiles} onChange={(e) => setMultipleFiles(e.value ?? false)} />
                        </Label>
                    </div>

                    <div className="config-row">
                        <Label className="label-inline">
                            Restrict Size (5MB)
                            <Checkbox
                                value={restrictFileSize}
                                onChange={(e) => setRestrictFileSize(e.value ?? false)}
                            />
                        </Label>
                    </div>

                    <div className="config-row">
                        <Label className="label-inline">
                            Disabled
                            <Checkbox value={disabled} onChange={(e) => setDisabled(e.value ?? false)} />
                        </Label>
                    </div>

                    <div className="config-row">
                        <Label className="label-compact">File Types:</Label>
                        <DropDownList
                            data={fileTypeOptions}
                            value={selectedFileTypeOption}
                            onChange={handleFileTypeChange}
                            textField="text"
                            dataItemKey="value"
                            className="dropdown-compact"
                        />
                    </div>
                </div>
            </div>

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
