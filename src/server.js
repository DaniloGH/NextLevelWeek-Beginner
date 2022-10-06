/*const proffys = [
  { 
    name: 'Diego Fernandes', 
    avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
    whatsapp: '85 987223548', 
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
    subject: 'Química', 
    cost: '20', 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220], 
  },
  { 
    name: 'Danilo Miguel', 
    avatar: 'https://avatars.githubusercontent.com/u/63322245?v=4',
    whatsapp: '85 987558931', 
    bio: 'Aficionado na aplicação da matemática no ambiente tecnológico.<br><br>Transmite conteúdo de altíssima qualidade, desde matemática básica a cálculos aplicados na resolução de problemas complexos.', 
    subject: 'Matemática', 
    cost: '20', 
    weekday: [1], 
    time_from: [720], 
    time_to: [1220], 
  },
]*/
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
.use(express.urlencoded({ extended: true}))
.use('/public', express.static('public'))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)