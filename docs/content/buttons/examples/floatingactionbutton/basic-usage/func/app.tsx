import * as React from 'react';

import { MusicCardComponent } from './shared-bn-music-card';
import { NotesComponent } from './shared-bn-notes';

const App = () => {
    return (
        <div className="example-wrap">
            <MusicCardComponent />
            <NotesComponent />
            <style>
                {`.example-wrap {
                    display: flex;
                    justify-content: space-around;
                }
                .k-card {
                    width: 350px;
                    height: auto;
                    position: relative;
                }
                .k-card-media {
                    height: 200px;
                }
                .k-card button.k-fab:focus {
                    outline: none;
                }
                .title {
                    font-size: 18px;
                    color: #656565;
                }
                .notes-wrap {
                    padding: 50px 20px 50px 20px;
                    position: relative;
                    height: 300px;
                    width: 300px;
                }
                .notes-wrap textarea.k-input {
                    height: 100px;
                    resize: none;
                }
                .k-overlay {
                    position: absolute;
                }`}
            </style>
        </div>
    );
};

export default App;
