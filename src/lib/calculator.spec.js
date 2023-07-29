const {sum} = require('./calculator')

it('should sum and 2 and the result must be 4', () =>{
    
    expect(sum(2,2)).toBe(4)

})

it('Should sum 2 and 2 even if one of them is a string and the result must be 4', () =>{
    expect(sum('2','2')).toBe(4)
})

it('should throw an error if what is provided tothe method cannot be summed', () =>{
    expect(()=>{
        sum('','2')
    }).toThrowError();

    expect(()=>{
        sum('2','2')
    }).not.toThrowError();

    expect(() =>{
        sum({})
    }).toThrowError();

    expect(()=>{
        sum()
    }).toThrowError();
    
})