import express, { response } from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = 8000;

const app = express();

app.use('^/$', (request, response, next) =>{
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err,data)=> {
        if(err){
            console.log(err);
            return response.status(500).send('There is error');
        }
        return response.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`));
    })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
    console.log(`App works on ${PORT}`);
});