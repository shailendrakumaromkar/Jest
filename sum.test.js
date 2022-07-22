const sum = require('./sum')

test("add 2 numbers",()=>{
    expect(sum(2,8)).toBe(10)
})


test("add 2 number -ive", ()=>{
    expect(sum(2,3)).not.toBe(6)
})

test("object to equal test",()=>{
    expect(obj()).toEqual({name:'raja'})
})