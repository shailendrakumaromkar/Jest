const sum = require('./sum')

describe('Test Suite', ()=>{

    it('sum of 2 number',()=>{

        expect(sum(2,3)).toBe(5)
    })

})

