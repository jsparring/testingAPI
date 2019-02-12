const { spawn } = require('child_process');
const path = require('path');
const { StringDecoder } = require('string_decoder');
const { sanitize } = require('./util.js');

const decoder = new StringDecoder('utf-8');

const test = {
  runTest: (req, res, next) => {
    if (sanitize(req.callback.toString())) {
      res.locals.body = { passed: null };
      next();
    }

    // console.log(req.params['0']);

    Promise.resolve(
      spawn('node', [path.join(__dirname, './testingBoilerPlate.js')], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
        shell: true,
        env: {
          method: req.callback,
          name: req.params['0']
        }
      })
    )
      .then(child => {
        child.stdin.write('start');
        child.stdout.on('data', data =>
          console.log('this is stdout', decoder.write(data))
        );
        child.stderr.on('error', err =>
          console.log('this is stderr', decoder.write(err))
        );
        return new Promise(resolve => {
          child.on('message', result => resolve(result));
        });
      })
      .then(result => {
        // const body = JSON.stringify(result.body);
        // res.send(body);
        res.locals.body = result;
        next();
      })
      .catch(err => console.log('this is err', err));
  }
};

module.exports = test;
