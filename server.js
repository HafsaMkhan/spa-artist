/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const express = require('express');
const path = require('path');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
require('dotenv').config();

const indexEncodingMiddleware = (req, res) => {
  let extension = '.gz';
  let encoding = 'gzip';
  if (req.header('Accept-Encoding').includes('br')) {
    encoding = 'br';
    extension = '.br';
  }
  const extensionHtmlPath = path.join(__dirname, 'build', `index.html${extension}`);
  if (fs.existsSync(extensionHtmlPath)) {
    res.set('Content-Encoding', encoding);
    res.set('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(extensionHtmlPath);
  } else {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
};

const port = process.env.PORT || 3000;
const app = express();
app.use(compression());

app.all(
  '*.(js|css|svg|eot|ttf|woff|html)',
  expressStaticGzip(path.join(__dirname, 'build'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
  })
);

app.all('/', indexEncodingMiddleware);
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
console.log('App is started on port', port);
