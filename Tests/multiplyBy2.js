const callback = new Function('return ' + process.env.method)();

/* this is the standard solutoin */
function standard(n) {
  return n * 2;
}

const input_1 = Math.floor(Math.random() * 99999);
const input_2 = Math.floor(Math.random() * 99999);
const input_3 = Math.floor(Math.random() * 99999);
const input_4 = Math.floor(Math.random() * 99999);

// this is the jasmine test

describe('testing multiplyBy2', () => {
  it('it should equal', () => {
    // console.log('*****', input);
    expect(callback(input_1)).toBe(standard(input_1));
    expect(callback(input_2)).toBe(standard(input_2));
  });
});
