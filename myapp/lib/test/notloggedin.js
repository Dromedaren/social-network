var should = require('should');
var request = require('superagent');
var agent = request.agent();
var assert = require('assert');
var index = require('../lib-coverage/bin/www');

var port = 3000;
var endpoint = "http://localhost:" + port;

describe('Server', function() {

    describe('GET /', function () {
        it('/index should return 200', function (done) {
            request.get(endpoint + '/')
                .end(function (res) {
                    res.statusCode.should.equal(200);
                    done();
                });
        });
    });

    describe('GET /signin', function () {
        it('/signin should return 200', function (done) {
            request.get(endpoint + '/signin')
                .end(function (res) {
                    res.statusCode.should.equal(200);
                    done();
                });
        });
    });
    
    describe('GET /nonexistanturl', function () {
        it('/nonexistanturl should return 404', function (done) {
            request.get(endpoint + '/nonexistanturl')
                .end(function (res) {
                    res.statusCode.should.equal(404);
                    done();
                });
        });
    });

    describe('GET /contact', function () {
        it('/contact should return 200', function (done) {
            request.get(endpoint + '/contact')
                .end(function (res) {
                    res.statusCode.should.equal(200);
                    done();
                });
        });
    });

    describe('POST /signup', function() {
	it('/signup should return 200', function(done) {
	    var profile = {
		username: 'testaccount',
		password: 'test'
	    };
	    request
        .post(endpoint + '/signup')
        .send(profile)
        .end(function(err, res) {
            if (err) {
                throw err;
            }
            res.statusCode.should.equal(200);
            done();
            });
        });
    });

    describe('GET /signout', function () {
        it('/signout should return 200', function (done) {
            request.get(endpoint + '/signout')
                .end(function (res) {
                    res.statusCode.should.equal(200);
                    done();
                });
        });
    });

    describe('GET /profile', function () {
        it('/profile should return 403 when not logged in', function (done) {
            request.get(endpoint + '/profile')
                .end(function (res) {
                    res.statusCode.should.equal(403);
                    done();
                });
        });
    });

});


