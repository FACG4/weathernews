const test = require('tape');
const router = require('./router');
const supertest = require('supertest');

test('Initialise', (t) => {
const num = 2;
t.equal(num, 2, 'Tape is working');
t.end();
});

test('handlePublic ',(t) => {
supertest(router)
.post('/')
.expect(200)
.end((err, res) => {
t.error(err)
t.equal(res.statusCode, 200, 'Should return 200');
t.end();

});
})

test(' handleWeather type of response',(t) => {
supertest(router)
.get('/weather')
.end((err, res) => {
t.error(err)
t.equal(typeof res.body,'object','the type of response');
t.end();

});

});

test(' handlWeather wind speed',(t) => {
supertest(router)
.get('/weather')
.end((err, res,body) => {
t.error(err)
t.equal(res.body.wind.speed, 3.6 ,'the speed of wind');
t.end();

});

});

test('handleWeather status Code',(t) => {
supertest(router)
.get('/weather')
.expect(200)
// .expect('Content-type', /html/)
.end((err, res) => {
t.error(err)
t.equal(res.statusCode, 200, 'Should return 200');
t.end();

});
})
