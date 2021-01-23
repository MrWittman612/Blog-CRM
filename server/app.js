'use strict';
require('dotenv').config();
import path from 'path';
import express from 'express';
const app = express();
app.locals.name = 'MR.Wittman-blog';
const appName = app.locals.name;

const port = process.env.PORT || 3001;

app.get('/test', function (_req, res) {
  return res.send('Hello World');
});

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const staticFiles = express.static(path.join(__dirname, '../client/build'));
  app.use(staticFiles);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

export function start() {
  app.listen(port, console.log(`${appName} is listening on port: ${port}`));
}
