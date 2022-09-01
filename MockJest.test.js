it("returns undefined and has been called correct number of times", () => {
    const mock = jest.fn();
  
    const result = mock();
  ///
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith();
  });
  
  ////
  it("has been called with correct arguments and returns a correct value", () => {
    const mock = jest
      .fn()
      .mockReturnValueOnce("first return")
      .mockReturnValueOnce("second return");
  
    const resultFirst = mock("first call");
    const resultSecond = mock("second call");
  
    expect(resultFirst).toBe("first return");
    expect(resultSecond).toBe("second return");
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenNthCalledWith(1, "first call");
    expect(mock).toHaveBeenNthCalledWith(2, "second call");
  });



// fn()
math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});


//jest.mock()

// Set all module functions to jest.fn
jest.mock("./math.js");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});


//spyon

  test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
  
    // override the implementation
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
  
    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
  });

  /*
const res = jest.fn()
res()
expect(res).toHaveBeenCalled()


const res = jest.fn()=>true

expect(res).toBTruthy()



SPYON
Creates a mock function similar to jest.fn() but also tracks calls to object[methodName]. Returns a Jest mock function.”

const callTest = jest.spyOn(className,'methodName')
const returnTest = className.methodName

expect(callTest).toHavebeencalled()
expect(returnTest).toBeTruthy or .toBe(true)



Snalshot testing
 using snapshot tests to detect UI changes
create a snapshot for a link object. 
 The snapshot itself will be stored with the tests and should be committed alongside code changes.

it('renders correctly', () => {
   const tree = renderer
      .create(<Link page="http://www.facebook.com">Facebook</Link>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});



supertest
const request = require('supertest');
 
request('https://dog.ceo')
  .get('/api/breeds/image/random')
  .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
  });



  	
describe('Random Dog Image', function() {
  it('responds with expected JSON structure', function(done) {
    request('https://dog.ceo')
      .get('/api/breeds/image/random')
      .expect(200)
      .expect('Content-Type', 'application/json')
      .expect(/{"message":".*","status":"success"}/, done);
  });
});


Tests may take considerable time to finish. We can skip some tests if needed.
test.skip('3 * 4 = 12', () => {
  expect(mul(3, 4)).toBe(12);
});




  */