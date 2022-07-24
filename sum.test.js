const sum = require('./sum')

describe('Test Suite', ()=>{

    it('sum of 2 number',()=>{

        expect(sum(2,3)).toBe(5)
    })

    it('To Equal test',()=>{
        const obj = {}
        expect(obj).toEqual({});
    })

})


describe('Numbers test',()=>{
    it('number test',()=>{
        const val = 2+3;
        expect(val).toBe(5)
        expect(val).toBeGreaterThan(4)
        expect(val).toBeGreaterThanOrEqual(5)
        expect(val).toBeLessThan(9)
        expect(val).toBeLessThanOrEqual(5)
    })
})
