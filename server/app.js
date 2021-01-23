'use strict';
require('dotenv').config();
import path from 'path';
import express from 'express';
import { dbConnect } from './dbConnect';
import { BlogModel } from './Schema';
const app = express();
app.locals.name = 'MR.Wittman-blog';
const appName = app.locals.name;

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.get('/api/blogs', async function (req, res) {
  try {
    const blog = await BlogModel.find();
    return res.send(blog);
  } catch (error) {
    console.log(error);
  }
});

app.post('/api/blogs', async function (req, res) {
  try {
    const blog = await BlogModel.create(req.body);
    return res.send(blog);
  } catch (error) {
    console.log(error);
  }
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
