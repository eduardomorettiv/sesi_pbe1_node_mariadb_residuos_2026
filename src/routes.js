const express = require("express")
const router = express.Router()

const usuario = require('./controllers/usuario')
const ocorrencia = require('./controllers/ocorrencia')

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

router.get('/',rotaInicial)
router.get('/usuario', usuario.listar)
router.post('/usuario', usuario.cadastrar)
router.put('/usuario/:id', usuario.alterar)
router.delete('/usuario/:id', usuario.excluir)
router.post('/usuario/login', usuario.login)

router.get('/ocorrencia', ocorrencia.listar)
router.post('/ocorrencia', ocorrencia.cadastrar)
router.put('/ocorrencia/:id', ocorrencia.alterar)
router.delete('/ocorrencia/:id', ocorrencia.excluir)
router.get('/ocorrencia/resumo', ocorrencia.resumo)

module.exports = router