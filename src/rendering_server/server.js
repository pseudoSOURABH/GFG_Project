var express = require('express');
var path = require('path');
var A = require('../client/a').default;
var React = require("react");
var ReactDOM = require('react-dom/server');

let app = express();

app.get('/', (req, res) => {

    console.log();

    let html = ReactDOM.renderToString(<A />);

    res.end(`<html>
        <head></head>
        <body>
        <div id="root">
            ${html}
        </div>
        <script src="bundle.js"></script>
        </body>
    </html>`)

})

app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../public')))

module.exports = app;