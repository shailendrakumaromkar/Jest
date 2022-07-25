let animals =['cat','cow','dog']

beforeEach(()=>{

    console.log('Before Each');
    animals =['cat','cow','dog']

})

afterEach(()=>{
    console.log('after each');
})

describe('setup tear down',()=>{
    it('add animal to end of array',()=>{
        animals.push('tiger')

        expect(animals[animals.length-1]).toBe('tiger')
    })

    it('add animal to start of array',()=>{
        animals.unshift('lion')

        expect(animals[0]).toBe('lion')
    })

    it('it should initial length of 3',()=>{
        expect(animals.length).toBe(3)
    })
})