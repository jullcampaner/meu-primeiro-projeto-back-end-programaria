const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota

const cors=require('cors') //aqui estou trazendo o pacote cors que permite instalar e consumir essa API por um frontend

const conectaBancoDeDados = require('./bancoDeDados') //aqui estou conectando ao arquivo bancoDeDados
conectaBancoDeDados () //aqui estou chamando a função que conecta o banco de dados

const Mulher = require('./mulherModel') //aqui estou vinculando o objeto mulher ao modelo de preenchimento correto

const app = express() //aqui estou iniciando o app
app.use(express.json())
app.use(cors())

const porta = 3333 //aqui estou criando a porta

//aqui estou setando a função de mostrar mulheres (GET)
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

         response.json(mulheresVindasDoBancoDeDados)

    } catch (erro) {
        console.log(erro)

    }
   
}

//aqui estou setando a função (POST)
async function criaMulher(request, response) {
    const novaMulher = new Mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()

        response.status(201).json (mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//aqui estou setando a função (PATCH)
async function corrigeMulher(request,response){
    try {
        const mulherEncontrada = await Mulher.findById (request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }

        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }

        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }

        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)
        
    } catch (erro) {
        console.log (erro)
    }
}

//aqui estou setando a função (DELETE)
async function deletaMulher(request,response) {
   try {
    await Mulher.findByIdAndDelete(request.params.id)
    response.json({message: 'Mulher deletada com sucesso!'})

   } catch (erro) {
    console.log (erro)
   }
}

app.use(router.get('/mulheres', mostraMulheres)) //aqui estou configurando a rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //aqui estou configurando a rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //aqui estou configurando a rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //aqui estou configurando a rota DELETE /mulheres/:id

//aqui estou setando a função de retorno da PORTA no node
function mostraPorta() {
    console.log("Comemore Jull! Servidor criado e rodando na porta", porta)
}

app.listen(porta, mostraPorta) //aqui o servidor está ouvindo a porta