// sanitize is for testingMiddleware to sanitize user functions for potential dangerous expressions

const pattern = ['process.', 'fork', 'spawn', 'TABLE', 'DATABASE', 'eval'];

function sanitize(fnStr) {
  return pattern.some(target => {
    return fnStr.includes(target);
  });
}

// this is for tests in testDir so no need to re-write functions

function genRandNumArr(limit, size) {
  let i = 0;
  const arr = [];
  while (i < size && size < 30) {
    arr.push(Math.floor(Math.random() * limit));
    i += 1;
  }
  return arr;
}

function genRandLtrsArr(size) {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const len = letters.length;
  let i = 0;
  const arr = [];
  while (i < size && size < 30) {
    const selection = Math.floor(Math.random() * len);
    arr.push(letters[selection]);
    i += 1;
  }
  return arr;
}

module.exports = { sanitize, genRandNumArr, genRandLtrsArr };
