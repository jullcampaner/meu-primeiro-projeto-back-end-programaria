//aqui estou criando a lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Jull Freitas',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQGilxoruRtY_Q/profile-displayphoto-scale_200_200/B4DZjE2pcOG8AY-/0/1755649318508?e=1763596800&v=beta&t=2kJMkyXUBnhMQ_ZfJC28lgZSjQiDFGGKofUxl1SVdzk',
        minibio: 'Product Owner, 29 anos, quase 8 anos de Evoluservices. Ama gatinhos, artesanato e café.'
    },
    {
        id: '2',
        nome: 'Fabi Nicchio',
        imagem: 'https://ca.slack-edge.com/E08UV3N83U5-U06N076RG-9d08c837239c-512',
        minibio: 'Líder inspiradora, dona do Kovu e da Mia, ama RPG e faz uma pizza incrível.'
    },
    {
        id: '3',
        nome: 'Camis Porfirio',
        imagem: 'https://ca.slack-edge.com/E08UV3N83U5-U0103BQ88R2-4e228d522f21-512',
        minibio: 'Faz curso de palhaço e se pendura em bambolê. Dona do George nenê, ama (e arrasa em) tudo que é artesanato.'
    },
    {
        id: '4',
        nome: 'Nat Benson',
        imagem:'https://ca.slack-edge.com/E08UV3N83U5-UT3KE61M0-b50e8db42587-512',
        minibio: 'Inteligentíssima, começou com QA, é gestora de pessoas, me inspira a começar a ler uns livros, atura o Vini (não sei como).'
    }
]


const { v4: uuidv4 } = require('uuid') //aqui estou iniciando o uuid



//aqui estou setando a função (POST)
async function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)
    response.json(mulheres)
}


    mulheres.push(novaMulher)
    response.json(mulheres)




        function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

     const mulherEncontrada = mulheres.find(encontraMulher)


      function mulherQueSai (mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(mulherQueSai)

    response.json(mulheresQueFicam)





    [
	{
		"id": "1",
		"nome": "Jull Freitas",
		"imagem": "https://media.licdn.com/dms/image/v2/D4D03AQGilxoruRtY_Q/profile-displayphoto-scale_200_200/B4DZjE2pcOG8AY-/0/1755649318508?e=1763596800&v=beta&t=2kJMkyXUBnhMQ_ZfJC28lgZSjQiDFGGKofUxl1SVdzk",
		"minibio": "Product Owner, 29 anos, quase 8 anos de Evoluservices. Ama gatinhos, artesanato e café."
	},
	{
		"id": "2",
		"nome": "Fabi Nicchio",
		"imagem": "https://ca.slack-edge.com/E08UV3N83U5-U06N076RG-9d08c837239c-512",
		"minibio": "Líder inspiradora, dona do Kovu e da Mia, ama RPG e faz uma pizza incrível."
	},
	{
		"id": "3",
		"nome": "Camis Porfirio",
		"imagem": "https://ca.slack-edge.com/E08UV3N83U5-U0103BQ88R2-4e228d522f21-512",
		"minibio": "Faz curso de palhaço e se pendura em bambolê. Dona do George nenê, ama (e arrasa em) tudo que é artesanato."
	},
	{
		"id": "4",
		"nome": "Nat Benson",
		"imagem": "https://ca.slack-edge.com/E08UV3N83U5-UT3KE61M0-b50e8db42587-512",
		"minibio": "Inteligentíssima, começou com QA, é gestora de pessoas, me inspira a começar a ler uns livros, atura o Vini (não sei como)"
	},
	{
		"id": "45afa3a1-6b24-40bf-b366-d909b7b9b17a",
		"nome": "Thai Souza",
		"imagem": "https://media.licdn.com/dms/image/v2/D4D03AQGilxoruRtY_Q/profile-displayphoto-scale_200_200/B4DZjE2pcOG8AY-/0/1755649318508?e=1763596800&v=beta&t=2kJMkyXUBnhMQ_ZfJC28lgZSjQiDFGGKofUxl1SVdzk",
		"minibio": "Product Owner, 29 anos, quase 8 anos de Evoluservices. Ama gatinhos, artesanato e café."
	},
	{
		"id": "9ea8cd0f-c8ee-46b8-9e8a-6c2952cc2a19",
		"nome": "Thai Souza",
		"imagem": "https://media.licdn.com/dms/image/v2/D4D03AQGBYUPzXI69Ng/profile-displayphoto-shrink_200_200/B4DZXsbsoEHsAc-/0/1743428439020?e=1764201600&v=beta&t=UgTQpbKyC7vzLeQJ8EpViSInGR1N6lEYTxFK8_IhsxY",
		"minibio": "Marombeira, começou como DEV e agora é a melhor QA que tem, ama Doja Cat e é sempre muito querida."
	}
]