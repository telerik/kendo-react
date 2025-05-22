import React from 'react';
import { renderCustomTool } from './CustomRenderingTool';

// KendoReact
import { EditorTools } from '@progress/kendo-react-editor';

// Material UI
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions  from '@material-ui/core/DialogActions';
import DialogContentText  from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

export default function ViewHtml (props) {
    return (
      <EditorTools.ViewHtml
        {...props}
        render={(rendering, _args) => {
          const tool = rendering[0];
          const dialogWrapper = rendering[1];

          return (
            <React.Fragment>
              {renderCustomTool(tool.props)}
              {dialogWrapper && <dialogWrapper.type
                {...dialogWrapper.props}
                render={(defaultDialogRendering, { content, actionButtons }) => {
                  const cancelButton = actionButtons[0];
                  const insertButton = actionButtons[1];
                  return (
                    <Dialog
                      open={true}
                      {...dialogWrapper.props}
                    >
                      <DialogTitle id="simple-dialog-title">{defaultDialogRendering.props.title}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          {content.props.children}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={cancelButton.props.onClick}>{cancelButton.props.children}</Button>
                        <Button color='primary' onClick={insertButton.props.onClick}>{insertButton.props.children}</Button>
                      </DialogActions>
                    </Dialog>
                  );
                }}
              />}
            </React.Fragment>
          );
        }}
      />
    );
  };
