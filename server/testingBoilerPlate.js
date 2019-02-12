const Jasmine = require('jasmine');
const { TestBody, IndividualTest } = require('./testBodyConstructors.js');

const jasmine = new Jasmine();

const body = new TestBody();

const reporter = {
  // jasmineStarted: info => console.log(info),
  // suiteDone: result => console.log(result),
  specDone: result => {
    console.log(result);
    if (result.status === 'failed') {
      result.failedExpectations.forEach(test => {
        body.tests.push(new IndividualTest(test.message));
      });
    }
  },
  jasmineDone: result => {
    if (result.overallStatus === 'passed') {
      body.passed = true;
    } else {
      body.passed = false;
    }
  }
};

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [`../testDir/${process.env.name}.js`]
});

jasmine.addReporter(reporter);

jasmine.onComplete(() => {
  process.send({ body });
});

process.stdin.on('data', () => {
  jasmine.execute();
});
