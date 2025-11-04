const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        Nome: 'Jull Freitas',
        Imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQGilxoruRtY_Q/profile-displayphoto-scale_200_200/B4DZjE2pcOG8AY-/0/1755649318508?e=1763596800&v=beta&t=2kJMkyXUBnhMQ_ZfJC28lgZSjQiDFGGKofUxl1SVdzk',
        Minibio: 'Product Owner, 29 anos, quase 8 anos de Evoluservices. Ama gatinhos, artesanato e café.'
    },
    {
        Nome: 'Fabi Nicchio',
        Imagem: 'https://ca.slack-edge.com/E08UV3N83U5-U06N076RG-9d08c837239c-512',
        Minibio: 'Líder inspiradora, dona do Kovu e da Mia, ama RPG e faz uma pizza incrível.'
    },
    {
        Nome: 'Camis Porfirio',
        Imagem: 'https://ca.slack-edge.com/E08UV3N83U5-U0103BQ88R2-4e228d522f21-512',
        Minibio: 'Faz curso de palhaço e se pendura em bambolê. Dona do George nenê, ama (e arrasa em) tudo que é artesanato.'
    },
    {
        Nome: 'Nat Benson',
        Imagem:'https://ca.slack-edge.com/E08UV3N83U5-UT3KE61M0-b50e8db42587-512',
        Minibio: 'Inteligentíssima, começou com QA, é gestora de pessoas, me inspira a começar a ler uns livros, atura o Vini (não sei como)'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Comemore Jull! Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)