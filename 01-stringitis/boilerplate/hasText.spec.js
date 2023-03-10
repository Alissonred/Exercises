const hasText = require('./hasText.js');

describe('has text', () => {
  [
    [['', ''], true],
    [['foo', ''], true],
    [['', 'foo'], false],
    [['Laboratoria', 'oratoria'], true],
    [['Equipo', 'yo'], false],
    [['OMG', 'O'], true],/// revisar
    [['hola', 'no'], false],
  ].forEach(([args, expected]) => {
    it(`should return ${expected} for ${JSON.stringify(args)}`, () => {
      expect(hasText(...args)).toBe(expected);
    });
  });
});

