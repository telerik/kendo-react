import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Editor, EditorTools, ProseMirror } from '@progress/kendo-react-editor';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import { Popup } from '@progress/kendo-react-popup';

const { Bold, Italic, Underline } = EditorTools;

class App extends React.Component {
  state = { show: false }

  onMount = event => {
    return new ProseMirror.EditorView(
      { mount: event.dom }, {
        ...event.viewProps,

        // http://prosemirror.net/docs/ref/#view.EditorProps.handleDOMEvents
        handleDOMEvents: {
          ...(event.viewProps.handleDOMEvents || {}),
          'contextmenu': this.onContextMenu,
          'click': this.onContextMenuClose,
          'blur': this.onContextMenuClose
        }
      }
    );
  }

  onContextMenu = (_view, domEvent) => {
    domEvent.preventDefault();

    this.setState({
      show: true,
      offset: { left: domEvent.clientX + 2, top: domEvent.clientY }
    });
  }

  onContextMenuClose = (_view, _domEvent) => {
    if (this.state.show) {
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <div>
        <Popup show={this.state.show} offset={this.state.offset}>
          <Menu vertical={true} style={{ display: 'inline-block' }}>
            <MenuItem text="Item1">
              <MenuItem text="Item1.1" />
              <MenuItem text="Item1.2">
                <MenuItem text="Item1.2.1" />
                <MenuItem text="Item1.2.2" />
              </MenuItem>
            </MenuItem>
            <MenuItem text="Item2">
              <MenuItem text="Item2.1" />
              <MenuItem text="Item2.2" />
            </MenuItem>
            <MenuItem text="Item3" />
          </Menu>
        </Popup>
        <Editor
          defaultEditMode="div"
          tools={[
            [Bold, Italic, Underline]
          ]}
          contentStyle={{ height: 220 }}
          defaultContent="<p>Context menu event example</p>"
          onMount={this.onMount}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('my-app')
);

