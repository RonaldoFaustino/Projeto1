const { queryString, parse } = require('./queryString');

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

describe('Query string to object', () => {
  it('should convert a query to objetc', () =>{
    const qs = 'name=Fabio&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Fabio',
      profession: 'developer'
    })
  })

  it('should convert a query of a single key-value', () =>{
    const qs = 'name=Fabio';

    expect(parse(qs)).toEqual({
      name: 'Fabio',
    })
  })

  it('should convert a query of a single key-value pair to object', () =>{
    const qs = 'name=Fabio';

    expect(parse(qs)).toEqual({
      name: 'Fabio',
    })
  })

  it('should convert a query string to an objetc taking care of comma separated value', () =>{
    const qs = "name=Fabio&abilities=JS,TDD";

    expect(parse(qs)).toEqual({
      name: 'Fabio',
      abilities: ['JS','TDD']
    })
  })
})
