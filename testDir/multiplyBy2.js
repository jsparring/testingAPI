const callback = new Function('return ' + process.env.method)();

/* this is the standard solutoin */
function standard(n) {
  return n * 2;
}

const input1 = Math.floor(Math.random() * 99999);
const input2 = Math.floor(Math.random() * 99999);
const input3 = Math.floor(Math.random() * 99999);
const input4 = Math.floor(Math.random() * 99999);

// this is the jasmine test

describe('testing multiplyBy2', () => {
  it('it should equal', () => {
    // console.log('*****', input);
    expect(callback(input1)).toBe(standard(input1));
    expect(callback(input2)).toBe(standard(input2));
    expect(callback(input3)).toBe(standard(input3));
    expect(callback(input4)).toBe(standard(input4));
  });
});
