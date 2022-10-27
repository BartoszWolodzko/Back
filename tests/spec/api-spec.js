var request = require('request');
const base_url = process.env.BASE_URL || 'http://localhost:3000';

describe("API test suite", () => {
    describe("GET /", () => {
        it("returns status code 200", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns Simple API", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBe('Simple API');
                done();
            });
        });
    });
    describe("/hobbies", () => {
        it('should return all hobbies', function () {
            request(base_url + '/hobbies', function (error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
            request(base_url + '/hobbies', function (error, response, body) {
                expect(body).toBe('[{"hobby_id":1,"hobby":"swimming"},{"hobby_id":2,"hobby":"diving"},{"hobby_id":3,"hobby":"jogging"},{"hobby_id":4,"hobby":"dancing"},{"hobby_id":5,"hobby":"cooking"}]');
                done();
            });
        });
    });
    describe("/hobbies/:id", () => {
        it('should return hobby with id 1', function () {
            request(base_url + '/hobbies/1', function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(body).toBe('[{"hobby_id":1,"hobby":"swimming"}]');
                done();
            });
        });
    });
    describe("average", () => {
        it('should return average hobby_id', function () {
            request(base_url + '/hobbies/average', function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(body).toBe('[{"average":"3.0000000000000000"}]');
                done();
            });
        });
    });
});