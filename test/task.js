// let chai = require('chai')
// let chaiHttp = require('chai-http')
// let router = require("../index")
// let should = chai.should()

// chai.use(chaiHttp);
// // 
// describe('Tasks API',()=>{

    
// describe("GET /books",()=>{
//     it("It should GET all the task",(done)=>{
//         chai.request(router)
//         .get("/books")
//         .end((err,response)=>{
//             response.should.have.status(200)
//             //response.body.should.be.a('json')
//            done()
//         })
//     })
// })

    
// describe("Post /books",()=>{
//     it("It should post new task",(done)=>{
//       chai.request(router)
//         .post("/books")
//         .end((err,response)=>{
//             response.should.have.status(200)
//             //response.body.should.be.a('json')
//            done()
//         })
//     })
// })
// })




let chai = require("chai");
//let chaiHttp = require("chai-http");
var should = chai.should();
//chai.use(chaiHttp);
//let server = require("../app");
//Our parent block
var expect    = chai.expect;
var converter = require("../converter");

var cals=require('../index.js')
var assert =require('assert')

describe("Testing Equal Function", function() {
     it("Check for Same", function() {
      var p=5;

      p.should.equal(5);
    });
  });


describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      var redHex   = converter.rgbToHex(255, 0, 0);
      var greenHex = converter.rgbToHex(0, 255, 0);
      var blueHex  = converter.rgbToHex(0, 0, 255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });
});

// describe('calculator',function(){
//   it('should add two numbers',function(done){
//     var total=cals.add(5,2);
//     assert.equal(total,7);
//     done();
//   }),

//   it('should subtract two numbers',function(done){
//     var total=cals.subtract(5,2);
//     assert.equal(total,3);
//     done();
//   }),

//   it('should divide two numbers',function(done){
//     var total=cals.divide(5,2);
//     assert.equal(total,2.5);
//     done();
//   }),

//   it('should add multiply two numbers',function(done){
//     var total=cals.multiply(5,2);
//     assert.equal(total,10);
//     done();
//   })
// })