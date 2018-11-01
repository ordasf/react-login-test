const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5656;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({ express: 'Hello World' });
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Post request: ${req.body.post}`,);
});

app.post('/login', (req, res) => {
    console.log('Login post request received');
    res.send('You are trying to login');
});

app.get('/users', (req, res) => {
    res.send({ user: { username: 'John', password: 'Doe'}});
});

app.listen(port, () => console.log(`Listening on port ${port}`));