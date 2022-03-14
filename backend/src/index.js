const express = require ("express");
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Métodos HTTP:

GET: Buscar/listas uma informação do backend
POST: Criar uma informação do backend
PUT: Alterar uma informação do backend
DELETE: Deletar uma informação do backend
*/

/*
Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após o "?" (geralmente servem para filtros, paginação);
Route Params: Parâmetros utilizados para identificar recursos;
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
/*
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
NoSQL: MongoDB, CouchDB, etc
*/

app.listen(3333);