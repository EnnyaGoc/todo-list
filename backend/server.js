const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
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