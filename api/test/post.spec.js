import chai from "chai";
import chaiHttp from "chai-http";
import tasksModel from "../models/task";

chai.use(chaiHttp);

const app = require("../app");
const request = chai.request.agent(app); //agent irá manter a conexão ligada até o final dos testes
const expect = chai.expect;

describe('post', () => {  

  context('Dado que eu cadastro uma tarefa', () => {
    let task = {title: 'Plano de Teste', owner: 'rosedias@teste.com.br', done: false}

      it('Então deve retornar status code 200', (done) => {
        request
        .post('/task') 
        .send(task)
        .end((err, res) => {
          expect(res).to.has.status(200);
          expect(res.body.data.title).to.be.an('string')
          expect(res.body.data.owner).to.be.an('string') //validação objetos contrato
          expect(res.body.data.done).to.be.an('boolean') //validação objetos contrato
         done()
        })
      })
   })

   context('Dado que não informo o título', () => {
     let task = {title:'', owner: 'rosedias@teste.com.br', done: false}
     it('Então deve retornar status code 400', (done) => {
      request
      .post('/task') 
      .send(task)
      .end((err, res) => {
        expect(res).to.has.status(400); //400 = servidor não entendeu a requisição passada    
        expect(res.body.errors.title.message).to.eql('Atencao! Titulo é obrigatório')    
       done()
      })
    })
  })

  context('Dado que não informo o Owner', () => {
    let task = {title:'Nova Tarefa', owner: '', done: false}
    it('Então deve retornar status code 400', (done) => {
     request
     .post('/task') 
     .send(task)
     .end((err, res) => {
       expect(res).to.has.status(400); //400 = servidor não entendeu a requisição passada    
       expect(res.body.errors.owner.message).to.eql('Atencao! Owner é obrigatório')    
      done()
     })
   })
 })
})