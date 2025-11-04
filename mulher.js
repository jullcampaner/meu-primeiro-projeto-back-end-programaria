const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher (request, response) {
    response.send({
        Nome: 'Julliana Freitas',
        Imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQGilxoruRtY_Q/profile-displayphoto-scale_200_200/B4DZjE2pcOG8AY-/0/1755649318508?e=1763596800&v=beta&t=2kJMkyXUBnhMQ_ZfJC28lgZSjQiDFGGKofUxl1SVdzk',
        Minibio: "Product Owner, 29 anos, quase 8 anos de Evoluservices. Ama gatinhos, artesanato e café."
    })
}

function mostraPorta() {
    console.log("Comemore Jull! Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)