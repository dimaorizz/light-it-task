const mocha = require('mocha');
const chai = require('chai');
const cahiHttp = require('chai-http');
const app = require('../server');

chai.use(cahiHttp);
chai.should();

describe("Signup", () => {
    it("should create new user", (done) => {
        chai.request(app)
        .post('/users/signUp')
        .send({
            "username": "user",
            "password": "user",
            "role": 1
        })
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('msg');
            res.body.msg.should.deep.equal('New user created');
            done();
        })
    })
    it("should not create two same users", (done) => {
        chai.request(app)
        .post('/users/signUp')
        .send({
            "username": "user",
            "password": "user",
            "role": 1
        })
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.msg.should.deep.equal('User creation failed');
            done();
        })
    })
    it("should not create users with undefined field", (done) => {
        chai.request(app)
        .post('/users/signUp')
        .send({
            "password": "user",
            "role": 1
        })
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.msg.should.deep.equal('Bad input');
            done();
        })
    })
});