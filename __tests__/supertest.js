const request = require('supertest');



const server = 'http://localhost:3000';

describe("Route Integration", () => {
    describe('/', () => {
        describe('GET', () => {
            it("Respond with status 200 and text/html content-type", () => {
                return request(server)
                    .get('/')
                    .expect('Content-Type', /text\/html/)
                    .expect(200);
            });
        });    
    });






















});


