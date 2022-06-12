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
         done()
        })
      })
   })
})