const request = require('supertest')


describe('async test', ()=>{

    it('async test cases', async()=>{

        const res = await request('https://api.chucknorris.io/jokes')
                         .get('/random')
                        .end(function(err, res) {
          if (err) throw err;
          console.log(res.body);
         // document
    })
})


})
