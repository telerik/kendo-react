import * as React from "react";
import * as ReactDOM from "react-dom";

import { Popup } from "@progress/kendo-react-popup";


class AppComponent extends React.Component {
  anchor = null;
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.contentRef = React.createRef();
    this.blurTimeoutRef = React.createRef();
  }

  onOpen = e => {
    this.contentRef.current.focus()
  };

  onFocus = () => {
    // the user is still inside the content
    clearTimeout(this.blurTimeoutRef.current);
  };

  onBlurTimeout = () => {
    // the user is now outside the popup
    this.setState({ show: false });
  };

  onBlur = () => {
    clearTimeout(this.blurTimeoutRef.current);

    this.blurTimeoutRef.current = setTimeout(this.onBlurTimeout,200);
  };

  render() {
    return (
      <div>
        <button
          className="k-button"
          onClick={this.onClick}
          ref={button => {
            this.anchor = button;
          }}
        >
          {this.state.show ? "Hide" : "Show"}
        </button>
        <Popup
          anchor={this.anchor}
          show={this.state.show}
          onOpen={this.onOpen}
          popupClass={"popup-content"}
        >
          <div
            ref={this.contentRef}
            tabindex={0}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            some content
          </div>
        </Popup>
      </div>
    );
  }

  onClick = () => {
    this.setState({ show: !this.state.show });
  };
}

ReactDOM.render(<AppComponent />, document.querySelector("my-app"));
