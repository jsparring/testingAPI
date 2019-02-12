const callback = new Function('return ' + process.env.method)();

function standard(n) {
  return n % 2 ? 'Odd' : 'Even';
}

const input1 = Math.floor(Math.random() * 99999);
const input2 = Math.floor(Math.random() * 99999);
const input3 = Math.floor(Math.random() * 99999);
const input4 = Math.floor(Math.random() * 99999);

describe('testing for even or odd', () => {
  it('should equal', () => {
    expect(callback(input1)).toBe(standard(input1));
    expect(callback(input2)).toBe(standard(input2));
    expect(callback(input3)).toBe(standard(input3));
    expect(callback(input4)).toBe(standard(input4));
  })
})