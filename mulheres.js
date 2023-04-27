
const express = require("express")
const router =express.Router()

const app= express()
const porta =3333

const mulheres =[
{
    nome: 'Simaria Conceicao',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora  e Instrutora'
},
{
    nome: 'Simaria Conceicao',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora  e Instrutora'

},
    {
        nome: 'Simaria Conceicao',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora  e Instrutora'
    }

]
function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log('Servidor criado  e rodando na porta ', porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
