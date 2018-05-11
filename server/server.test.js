const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;


describe('Server', () => {

  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
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

  });

  describe('GET /users/', () => {
    it('Melo by vratit 200 a name:Tomik', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Tomik',
            age: 99
          });
        })

        //   .expect({
        //       error: 'Page not found.'
        //   })
        //.expect('Hello World')
        .end(done);
    });

  });
});





