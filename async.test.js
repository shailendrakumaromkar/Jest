const fetchData = require('./async')
//test cas
describe('async test', ()=>{
    it('async test cases', async()=>{

        const res = await fetchData(1);
        expect(res.id).toBe(1);

    })
})