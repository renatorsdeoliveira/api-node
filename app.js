const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser')

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false})); // apresentar apenas dados simples
app.use(bodyParser.json()); // só aceitará dados json no body

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);


// Quando não encotrar rota
app.use((res, req, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mesagem: error.message
        }
    })
});

module.exports = app;  