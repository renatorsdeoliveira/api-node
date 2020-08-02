const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de pedido'
    });
});

router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: "Usando o Post da rota de pedido",
        pedidoCriado: pedido
    });
});

router.get('/:id_pedido', (res, req, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: "Usando o GET de um pedido via id",
        id: id
    });
});


router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o delete da rota de pedido"
    });
});



module.exports = router;