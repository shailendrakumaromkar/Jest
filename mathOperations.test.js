const maths = require('./mathOperations')

describe('math test',()=>{
    // test('add',()=>{
    //     let res= maths.sum(2,3)

    //     expect(res).toBe(5)
    // })

    


    test("equality matchers", () => {
        expect(2*2).toBe(4);
        expect(4-2).not.toBe(1);
      })

      test("truthy operators", () => {
        var name="Software testing help"
        var n = null
        expect(n).toBeNull()
        expect(name).not.toBeNull
      
        // name has a valid value
        expect(name).toBeTruthy()
      
        //fail - as null is non success
       // expect(n).toBeTruthy()
        
        // pass - null treated as false or negative
        expect(n).toBeFalsy()
      
        // 0 - treated as false
        expect(0).toBeFalsy()

        console.log('equality matcher')
      })
    
      test("numeric operators", () => {
 
        var num1 = 100;
        var num2 = -20;
        var num3 = 0;
      
        // greater than
        expect(num1).toBeGreaterThan(10)
      
        // less than or equal
        expect(num2).toBeLessThanOrEqual(0)
      
        // greater than or equal
        expect(num3).toBeGreaterThanOrEqual(0)
      //  console.log('numeric matcher')

      })

      test('string',()=>{

            let s ="Hi Raja Kumar Omkar"

            expect(s).toMatch(/ar/)
            expect(s).not.toMatch('hello')
           // console.log('string matcher')

      })

    //   beforeAll(()=>{
    //     console.log("before all")
    //   })

    //   beforeEach(()=>{
    //     console.log('this is before each')
    //   })
})