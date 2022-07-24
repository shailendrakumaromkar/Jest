let animals =['cat','cow','dog']

describe('setup tear down',()=>{
    it('add animal to end of array',()=>{
        animals.push('tiger')

        expect(animals[animals.length-1]).toBe('tiger')
    })
})