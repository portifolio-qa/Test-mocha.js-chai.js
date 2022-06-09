import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

// const app = require("../app");   //importando a aplicação em node
//const request = chai.request(app);
const request = chai.request("http://localhost:3000"); //Testar uma api externa em qualquer linguagem;

const expect = chai.expect;

describe("suite", () => {

  it("Test", () => {
    expect(1).to.equals(1);
    console.log("Teste");    
  });

  it('Deve retornar Teste com Mocha.js', (done) => {
   request   
   .get("/hello")
   .end((err, res) => {
      expect(res.body.message).to.equals("Teste com Mocha.js");
      done();
    }) // é utilizado para consumir a app    
  })  
})