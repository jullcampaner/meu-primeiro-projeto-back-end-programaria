const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraOlanolocal(request, response) {
    response.send("Olá, Jull! Tudo bem?")
}

function mostraPorta() {
    console.log("Comemore Jull! Servidor criado e rodando na porta", porta)
}

app.use(router.get('/ola', mostraOlanolocal))
app.listen(porta, mostraPorta)

