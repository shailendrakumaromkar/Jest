const sum = require('./sum')

////////
describe('Test Suite', ()=>{

    it('sum of 2 number',()=>{

        expect(sum(2,3)).toBe(5)
    })

    it('To Equal test',()=>{
        const obj = fn(['A','B','C'])
        expect(obj).toEqual(['A','B','C']);
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

    it('String test case',()=>{
        expect('Team').not.toMatch(/L/)
    })
})

/////.//////////
describe('Arrays',()=>{
    it('Arrays Test Case',()=>{
        const list=['Apple','Mango','Banana','Grape']

        expect(list).toContain('Mango')
    })
})


function compileError(){
    throw new Error('Testing error')
}

describe('Exception',()=>{
    it('Exception Test Case',()=>{
        expect(()=> compileError()).toThrow('Testing error')

    })
})