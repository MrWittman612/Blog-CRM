import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;
app.get('/test', function (_req, res) {
  res.send('Hello World');
});

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const staticFiles = express.static(path.join(__dirname, '../client/build'));
  app.use(staticFiles);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
function start() {
  app.listen(port, console.log('man Im really upset right now!!!!'));
}
const _start = start;

export { _start as start };
