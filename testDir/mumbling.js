const genRandLtrsArr = require('../server/util.js');

const callback = new Function('return ' + process.env.method)();

function standard(str) {
  const answer = '';
  const len = str.length;
  for (let i = 0; i < len; i++) {
    answer.concat(str[i].toUpperCase(), str[i].repeat(i));
    if (i !== len - 1) answer.concat('-');
  }
  return answer;
}

const arr = genRandLtrsArr(20).join('');
const pos = arr.length - 1;
const start = Math.floor(Math.random() * pos);
const end = Math.ceil(Math.random() * (arr.length - start));

describe('test mumbling', () => {
  it('should equal', () => {
    expect(typeof callback(arr.slice(start, end))).toBe('string');
    expect(callback(arr.slice(start, end))).toBe(standard(start, end));
    expect('abcd').toBe('A-Bb-Ccc-Dddd');
    expect('RqaEty').toBe('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
  });
});
