import chai from 'chai';
import chaiHttp from 'chai-http';
import tasksModel from '../models/task' 

chai.use(chaiHttp);

const app = require('../app');
const request = chai.request(app);
const expect = chai.expect;




describe('get', () => {

  

  before((done) => {
    tasksModel.deleteMany({});
    done();
  })
  context('quando eu tenho tarefas cadastradas', () => {//garantir que sempre exista tarefa para validar

    before((done) => {//hook mocha
      let tasks = [
        {title: 'Cenario0', email: 'teste0@teste.com.br', done: false },
        {title: 'Cenario1', email: 'teste1@teste.com.br', done: false },
        {title: 'Cenario2', email: 'teste2@teste.com.br', done: false },
      ]
      tasksModel.insertMany(tasks);//insere um array de tarefa no bd
      done(); 
    })
    it('Deve retorna lista task', (done)=> {
      request
      .get('/task')
      .end((err, res) => {
        expect(res).to.has.status(200);
        console.log(typeof res.body.data); //valida se é um objeto
        expect(res.body.data).to.be.an('array'); //valida que o objeto é um array
        done();    
         }) 
      })  
    }) 
  })   
