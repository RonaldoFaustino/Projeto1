const { queryString } = require('./queryString');

describe('Object ro query string', () => {
  it('should create a valid query string when an object is provider', () => {
    const obj = {
      name: 'Ricardo',
      professor: 'develop',
    };

    queryString(obj);

    expect(queryString(obj)).toBe('name=Ricardo$professor=develop');
  });

  it('should create a valid query string even when as arrays is passed as values', () => {
    const obj = {
      name: 'Ricardo',
      habiliadades: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Ricardo$habiliadades=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Ricardo',
      habiliadades: {
        primeiro: 'JS',
        segundo: 'TDD',
      },
    };

    expect(() => {
        queryString(obj);
    }).toThrowError();
  });
});
