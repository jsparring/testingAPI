const Express = require('express');
const cors = require('cors');
const jsonFn = require('json-fn');
const test = require('./testingMiddleware.js');
const sendResponse = require('./sendResponse.js');

const app = new Express();

app.use(cors());

app.use((req, res, next) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    req.callback = jsonFn.parse(data);
    next();
  });
});

app.post('/runtest/*', test.runTest, sendResponse.sendJSON);

app.listen(process.env.PORT || 8003, () => {
  console.log('testing server listening at', process.env.PORT || 8003);
});
