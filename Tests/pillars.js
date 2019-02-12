const callback = new Function('return ' + process.env.method)();

function standard(numPill, dist, width) {
  let pillarCount = 1;
  let distance = 0;
  while (pillarCount < numPill) {
    if (pillarCount === numPill - 1) {
      distance -= width;
    }
    distance = distance + dist * 100 + width;
    pillarCount += 1;
  }
  return distance;
}

const random = n => Math.floor(Math.random() * n);

describe('run some tests', () => {
  it('should equal', () => {
    expect(callback(random(30), random(30))).toBe(standard(50));
    expect(callback(random(20), random(30))).toBe(standard(50));
  });
});

