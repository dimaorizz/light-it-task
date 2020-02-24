process.env.MONGO_URL = 'mongodb://127.0.0.1:27017/test';
const chai = require('chai');
const cahiHttp = require('chai-http');
const app = require('../server');

chai.use(cahiHttp);
chai.should();

describe("Goods tests", () => {
    it("should display all goods", (done) => {
        chai.request(app)
        .get('/goods')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('Array');
            done();
        })
    })
    it("should create new item with correct input", (done) => {
        chai.request(app)
        .post('/goods/create')
        .send({
            "name": "test",
            "cost": 200
        })
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('msg');
            res.body.msg.should.deep.equal('New item created');
            done();
        })
    })
    it("should not create new item with incorrect input", (done) => {
        chai.request(app)
        .post('/goods/create')
        .send({
            "cost": 200
        })
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('msg');
            res.body.msg.should.deep.equal('Bad input');
            done();
        })
    })
});