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

    it('adding floats',()=>{
        const val = 0.1+0.2;
        expect(val).toBeCloseTo(0.299999)
    })
})


describe('String test',()=>{
    it('String test case',()=>{
        expect('Team').toMatch(/m/)
    })
})