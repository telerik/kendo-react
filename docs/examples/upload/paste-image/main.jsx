import * as React from "react";
import * as ReactDOM from "react-dom";
import { Upload } from "@progress/kendo-react-upload";
import { guid } from "@progress/kendo-react-common";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            files: []
        };
    }

    onAdd = event => {
        console.log(event.newState);
        this.setState({
            files: event.newState
        });
    };

    onRemove = event => {
        this.setState({
            files: event.newState
        });
    };

    onProgress = event => {
        this.setState({
            files: event.newState
        });
    };

    onStatusChange = event => {
        this.setState({
            files: event.newState
        });
    };

    handlePaste = e => {
        if (e.clipboardData.files.length) {
            const fileObject = e.clipboardData.files[0];
            const file = {
                getRawFile: () => fileObject,
                name: fileObject.name,
                size: fileObject.size,
                uid: guid(),
                status: 2,
                progress: 0
            };

            const filesState = this.state.files.map(f => ({ ...f }));
            filesState.push(file);

            this.setState({ files: filesState });
        } else {
            alert('No image data was found in your clipboard. Copy an image first or take a screenshot.');
        }
    };

    render() {
        return (
            <div
                onPaste={this.handlePaste}
            >
                <Upload
                    autoUpload={false}
                    batch={false}
                    multiple={true}
                    files={this.state.files}
                    onAdd={this.onAdd}
                    onRemove={this.onRemove}
                    onProgress={this.onProgress}
                    onStatusChange={this.onStatusChange}
                    withCredentials={false}
                    saveUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/save"}
                    removeUrl={
                        "https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
                    }
                />
                <div style={{ marginTop: 5, padding: 10, fontStyle: 'italic', color: 'red', border: '1px solid red', height: 500 }}>Paste Area</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("my-app"));
