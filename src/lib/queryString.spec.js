const {queryString}= require('./queryString')

describe('Object ro query string', () => {
    it('should create a valid query string when an object is provider', () =>{
        const obj = {
            name: 'Ricardo',
            professor: 'develop'
        };

        queryString(obj)

        expect(queryString(obj)).toBe(
            'name=Ricardo$professor=develop'
        );
    });
    
});