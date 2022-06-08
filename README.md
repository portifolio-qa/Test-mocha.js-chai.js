# Test-mocha.js-chai.js

**Teste API - Microserviço com Node.js**

Automação de Teste, utilizando o mocha.js um framework para trabalhar com testes no node.

**Técnicas de testes**

O projeto de teste apresenta as seguintes tecnologias:

| Recurso                                                        | Tecnologia     |
| -------------------------------------------------------------- | -------------- |
| **SO**                                                   | *Windows 10* |
| **Ferramenta empacotamentoe execução da aplicações** | *docker*     |
| **Biblioteca de testes de aceitação**                  | *Chaijs*     |
| **BDD testes de negócio**                               |                |
| **TDD testes de desenvolvimento**                        | *Mochajs*    |
| **Teste Integração**                                   | *chaiHttp*   |
| **Page Objects**                                         |                |
| **Desing Patterns**                                      |                |

### Installation

* [Site Mocha.js](https://mochajs.org/ "Documentation")
* [Site chai.js](https://www.chaijs.com/ "Documetation")
* [Plugin Chai.js](https://www.chaijs.com/plugins/chai-http "Plugin")

Install Mocha.js;

* Install Mocha.js

```shell
npm install --save-dev mocha
```

* Install Chai.js

```shell
npm install chai --save
```

* Install ChaiHTTP

```shell
npm install chai-http --save
```

* Running project

| Action             | Usage                  |
| ------------------ | ---------------------- |
| Criar Project Node | ***npm init*** |
| Running unit tests | ***npm test*** |
|                    |                        |
|                    |                        |
|                    |                        |
|                    |                        |

### Clone the repo

```shell
git clone https://github.com/portifolio-qa/Test-mocha.js-chai.js.git
```

### Author

Rose Dias

## Info Basic Mocha.js

* Possui uma sintaxe parecida com o ruby/rspec;

```
describe('Suite', function(){
  it('Test', function(){
    console.log('Teste')
  
  });
  
});
```

* ***Mocha:*** Framework de teste unitário, pode ser utilizado do lado servidor com o Node ou no lado do cliente, ele apenas monta a estrutura para criar os testes, para realizar validações, verificações, asserções é necessário utilizar um framework ;
* **Chais.js:** É uma biblioteca de asserções, dá a possibilidade de utilizar BDD e TDD, lembrando que não é o cucumber, é possivel utilizar com Should, Expect e Assert, ambas são iguais, o que muda é a sintaxe. Nesse projeto utilizarmos o expect para seguirmos o padrão do rspec e por ser o mais utilizado na comunidade de testes.
* **ChaiHTTP:** Framework que irá acessar a api, para realizar as requisições nas api, como get, post etc, o node possui diversas ferramentas para testar requisições, aqui poderiamos utilizar o jest também;

## Info Basic Chai.js

* O chaijs puro garante somente as expectativas;

## Info Basic ChaiHttp

* [chaiHttp](https://www.chaijs.com/plugins/chai-http/ "Plugi do Chai Teste Integração")
* Garante que seja possível consumir a api.

O **Chai HTTP** é um plugin para a framework  **Chai** , que é utilizado para permitir a criação de testes de integração com as rotas em servidores Node. JS. Para fazer o teste, você precisa de uma versão do servidor Express e de requisitar a rota desejada.
