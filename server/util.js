const pattern = ['process.', 'fork', 'spawn'];

function sanitize(fnStr) {
  return pattern.some(target => {
    return fnStr.includes(target);
  });
}

module.exports = sanitize;
