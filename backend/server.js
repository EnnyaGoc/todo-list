const express = require('express');
const cors = require('cors');

const app = express(); //serve como um framework para criar um servidor web no Node.js, facilitando a criação de rotas, manipulação de requisições HTTP e envio de respostas

app.use(cors()); //Isso habilita o CORS para todas as requisições, permitindo que o backend aceite solicitações de qualquer origem.
app.use(express.json());

const tasks = [];


app.get('/', (req, res) => res.send('Welcome!'));
app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
})

app.listen(5000, () => console.log('Server running on http://localhost:5000'));