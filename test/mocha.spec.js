var chai = require ("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app");   //importando a aplicação em node
const request = chai.request(app);

const expect = chai.expect;

describe("suite", function(){

  it("Test", function(){
    expect(1).to.equals(1);
    console.log("Teste");    
  });

  it('Deve retornar Teste com Mocha.js', function(){
   request.get("/hello").end(function(err, res){
    expect(res.body.message).to.equals("Teste com Mocha.js");
    }) // é utilizado para consumir a app    
  });  
});