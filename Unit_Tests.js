//test to check GET request for plant
//test for login 

var mocha = require("mocha"); //Run to check test responses
var chai = require("chai"); //Chai assertion library
var chaiHttp = require("chai-http");
var listener = require("./Server.js"); //Require listener variable from Server
var server = require("./Server.js");

it('Should list all plants', function(complete) {
    chai.request(server) //Request from server
      .get('/plant') //Make get request to /plant
      .end(function(err, res){
        res.should.have.status(200); //Looking for a 200 http status code
        complete();
      });
  });

//check for 200 response 