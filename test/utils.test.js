const state = require('./utils');

describe('getRandomWord', () => {
  test('should be defined', () => {
    expect(state.getRandomWord).toBeDefined();
  });

  test('should return string', () => {
    expect(typeof state.getRandomWord()).toBe('string');
  });

  test('should return a word in English', () => {
    expect(state.getRandomWord()).toMatch(/^[a-z]+$/i);
  });
});

describe('yearNormalize', () => {
  test('should be defined', () => {
    expect(state.yearNormalize).toBeDefined();
  });

  test('should return string', () => {
    expect(typeof state.yearNormalize('1992')).toBe('string');
  });

  test('should return a value that does not end with a dash', () => {
    expect(state.yearNormalize('1999')).toBe('1999');
    expect(state.yearNormalize('1923-')).toBe('1923');
    expect(state.yearNormalize('19235')).toBe('19235');
  });
});
