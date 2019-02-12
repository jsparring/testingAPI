const pattern = ['process.', 'fork', 'spawn', 'TABLE', 'DATABASE'];

function sanitize(fnStr) {
  return pattern.some(target => {
    return fnStr.includes(target);
  });
}

module.exports = sanitize;
