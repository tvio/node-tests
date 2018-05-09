const request  = require ('supertest');
const expect = require ('expect');
var app = require ('./server').app;

it ('should return hello world response',(done)=>{
    request(app)
      .get('/')
      .expect(404)
      .expect((res) =>{
        expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    
    //   .expect({
    //       error: 'Page not found.'
    //   })
      //.expect('Hello World')
      .end(done);
});
