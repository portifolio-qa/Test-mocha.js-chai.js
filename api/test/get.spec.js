import chai from "chai";
import chaiHttp from "chai-http";
import tasksModel from "../models/task";

chai.use(chaiHttp);

const app = require("../app");
const request = chai.request.agent(app); //agent irá manter a conexão ligada até o final dos testes
const expect = chai.expect;

describe("get", () => {
  context("Dado que eu tenho tarefas cadastradas", () => {
    //garantir que sempre exista tarefa para validar

    before((done) => {
      //hook mocha
      let tasks = [
        {
          title: "Cenarios Validos",
          email: "teste0@teste.com.br",
          done: false,
        },
        {
          title: "Cenarios Invalidos",
          email: "teste1@teste.com.br",
          done: false,
        },
        { title: "Cenarios Nulos", email: "teste2@teste.com.br", done: false },
      ];

      tasksModel.insertMany(tasks); //insere um array de tarefa no bd
      done();
    });
    it("Então deve retorna a lista task", (done) => {
      request.get("/task").end((err, res) => {
        expect(res).to.has.status(200);
        expect(res.body.data).to.be.an("array"); //valida que o objeto é um array
        done();
      });
    });

    it("Então deve filtrar por palavra chave", (done) => {
      request
        .get("/task")
        .query({ title: "Cenarios" })
        .end((err, res) => {
          expect(res).to.has.status(200);
          expect(res.body.data[0].title).to.equal("Cenarios Validos"); //pega a 1 posicao do array e filtra por cenarios validos
          expect(res.body.data[1].title).to.equal("Cenarios Invalidos");
          done();
        });
    });
  });

  context("Dado que realizo a busca por id", () => {
    it("Então deve retornar uma única tarefa", (done) => {
      let tasks = [
        {title: "Criar cenarios BDD", email: "teste0@teste.com.br",done: false},
      ];

      tasksModel.insertMany(tasks, (err, result) => {
        let id = result[0]._id
        request
            .get('/task/' + id)
            .end((err, res) => {
                expect(res).to.has.status(200);
                expect(res.body.data.title).to.equal('Criar cenarios BDD');
                done();
          })
        })   
      })
    })

    context("Dado que a tarefa não existe", () => {
      it("Então deve retornar status code 404", (done) => {
        let id = require('mongoose').Types.ObjectId();
          request
              .get('/task/' + id)
              .end((err, res) => {
                  expect(res).to.has.status(404);
                  expect(res.body).to.eql({}); //compara valores
                  done();
            })
          })   
        })
      })
  
