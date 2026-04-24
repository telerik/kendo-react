import * as React from 'react';
import { saveAs } from '@progress/kendo-file-saver';
import {
    Button,
    ButtonGroup,
    SplitButton,
    SplitButtonItemClickEvent,
    Toolbar,
    ToolbarItem,
    ToolbarSeparator,
    ToolbarSpacer
} from '@progress/kendo-react-buttons';
import { Icon } from '@progress/kendo-react-common';
import { ColorPicker, ColorPickerChangeEvent, Signature, SignatureChangeEvent } from '@progress/kendo-react-inputs';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';
import { Upload, UploadOnAddEvent } from '@progress/kendo-react-upload';

import './styles.css';

loadMessages({
    'upload': {
        'dropFilesHere': '',
        'select': 'Browse Image...'
    }
}, 'en-US');

const App = () => {
    const [value, setValue] = React.useState<string>();
    const [color, setColor] = React.useState<string>();
    const [backgroundColor, setBackgroundColor] = React.useState<string>();
    const [strokeWidth, setStrokeWidth] = React.useState(3);
    const [strokeWidthText, setStrokeWidthText] = React.useState('Wide');
    const [showUpload, setShowUpload] = React.useState(false);
    const [imageURL, setImageURL] = React.useState<string>();

    const strokeWidthOptions = [{
        text: 'Normal',
        value: 1
    }, {
        text: 'Wide',
        value: 3
    }];

    const onChange = (e: SignatureChangeEvent) => {
        setValue(e.value);
    };

    const onColorChange = (e: ColorPickerChangeEvent) => {
        setColor(e.value);
    };

    const onStrokeWidthChange = (e: SplitButtonItemClickEvent) => {
        setStrokeWidth(e.item.value);
        setStrokeWidthText(e.item.text);
    };

    const onBackgroundColorChange = (e: ColorPickerChangeEvent) => {
        setBackgroundColor(e.value);
    };

    const onDrawClick = () => {
        setShowUpload(false);
    };

    const onUploadClick = () => {
        setShowUpload(true);
    };

    const revokeImageURL = () => {
        if (imageURL) {
            console.log('cleanup');
            URL.revokeObjectURL(imageURL);
            setImageURL(undefined);
        }
    };

    // Clean up on unmount.
    React.useEffect(() => revokeImageURL, []);

    const readImage = (file: File) => {
        const reader = new FileReader();

        const onLoad = () => {
            setValue(reader.result as string);
            reader.removeEventListener('load', onLoad);
        };

        reader.addEventListener('load', onLoad);
        reader.readAsDataURL(file);
    };

    const onFileSelect = (e: UploadOnAddEvent) => {
        const entry = e.affectedFiles[0];
        if (entry && entry.getRawFile) {
            const file = entry.getRawFile();
            readImage(file);

            revokeImageURL();
            setImageURL(URL.createObjectURL(file));
        }
    };

    const onSave = () => {
        if (value) {
            saveAs(value, 'signature.png');
        }
    };

    const onClear = () => {
        setValue(undefined);
        revokeImageURL();
    };

    return (
    <div className="example">
      <div className="content-wrapper">
        <Toolbar>
          {!showUpload && (
            <>
              <ToolbarItem className='toolbar-tool'>
                Brush:
                <ColorPicker value={color} onChange={onColorChange} />
              </ToolbarItem>

              <SplitButton
                items={strokeWidthOptions}
                text={strokeWidthText}
                textField='text'
                onItemClick={onStrokeWidthChange}
              />

              <ToolbarSeparator />

              <ToolbarItem className='toolbar-tool'>
                Background:
                <ColorPicker value={backgroundColor} onChange={onBackgroundColorChange} />
              </ToolbarItem>
            </>
          )}

          {showUpload && (
            <ToolbarItem className='toolbar-tool'>
              Upload your signature:
              <LocalizationProvider language="en-US">
                <Upload
                  autoUpload={false}
                  restrictions={{ allowedExtensions: ['png', 'jpeg'] }}
                  showFileList={false}
                  showActionButtons={false}

                  onAdd={onFileSelect}
                />
              </LocalizationProvider>
            </ToolbarItem>
          )}

          <ToolbarSpacer />

          <ToolbarItem>
            <ButtonGroup>
              <Button
                togglable={true}
                selected={!showUpload}
                onClick={onDrawClick}
                icon='brush'
              >Draw</Button>
              <Button
                togglable={true}
                selected={showUpload}
                onClick={onUploadClick}
                icon='upload'
              >Upload</Button>
            </ButtonGroup>
          </ToolbarItem>
        </Toolbar>
        <div className="signature-wrapper">
          {!showUpload && (
            <Signature
              value={value}
              onChange={onChange}

              color={color}
              backgroundColor={backgroundColor}
              strokeWidth={strokeWidth}
              smooth={true}

              maximizable={false}
              hideLine={true}
            />
          )}

          {showUpload && (
            <>
              {!imageURL && (
                <div className='placeholder'>
                  <Icon name='image' size='xlarge' />
                  <span>Please, browse an image to preview here.</span>
                </div>
              )}

              {imageURL && (
                <img
                  src={imageURL}
                  alt="KendoReact Signature uploaded image"
                  title='Uploaded signature'
                  draggable="false"
                />
              )}
            </>
          )}
        </div>

        <div className="notes">
          By using the KendoReact signature component,
          you can enable your end-users to draw handwritten signatures
          using touch or pointer devices.
        </div>

        <Toolbar>
          <Button
            icon='save'
            themeColor='primary'
            disabled={!value}
            onClick={onSave}
          >Save</Button>

          <Button
            onClick={onClear}
          >Clear</Button>
        </Toolbar>
      </div>
    </div>
    );
};

export default App;
