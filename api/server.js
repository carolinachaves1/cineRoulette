/* 
* * * * * * * * * * * * * * * * 
* Inicializar Bibliotecas     *
* * * * * * * * * * * * * * * *  
*/
//conexão com o bd
const express = require('express'); 
 //Permitir o acesso de uma outra aplicação
const cors = require('cors');
const BodyParser = require('body-parser');
const app = express();

//chamar o arquivo com as querys
const main = require('./controllers/main'); 


/* 
* * * * * * * * * * * * * * * * 
* Conexão com banco de dados   *
* * * * * * * * * * * * * * * *  
*/

/* var db = require('knex')({
    client: 'pg',     //mssql, or mysql, or sqlite3, or pb(postgree), or oracledb
    connection: {
      user: "postgres",
      password: "1234",
      server: "localhost",
      port: 5432,
      database: "cineroullet"
    }
  }); */

  //CONEXÃO COM O BANCO MYSQL
  var db = require('knex')({
    client: 'mysql',     //mssql, or mysql, or sqlite3, or pb(postgree), or oracledb
    connection: {
      user: "root",
      password: "",
      server: "localhost",
      port: 3306,
      database: "cineroullet"
    }
  });


//permitir o acesso de qualquer aplicação
app.use(cors()); 
app.options('*', cors()); 


  
//ROTAS
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/view/', (req, res) => main.getTableData(req, res, db));
app.get('/aventura', (req, res) => main.getAventura(req, res, db));
app.get('/acao', (req, res) => main.getAcao(req, res, db));
app.get('/comedia', (req, res) => main.getComedia(req, res, db));
app.get('/drama', (req, res) => main.getDrama(req, res, db));
app.get('/fantasia', (req, res) => main.getFantasia(req, res, db));
app.get('/faroeste', (req, res) => main.getGuerra(req, res, db));
app.get('/suspense', (req, res) => main.getSuspense(req, res, db));
//app.get('*', (req, res) => res.send('Rota Inexistente'));



//configurar a portar em que a aplicação irá rodar
app.listen(process.env.PORT || 3001, () => {
    console.log(`Rodando em ${process.env.PORT || 3001}`)
  })

