const express = require('express');
const fileRoutes = require('./src/routes');

const app = express();
const port = process.env.port || 3000;

app.set('view engine', 'ejs')

app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users/register', (req, res) => {
    res.render('register');
})

app.get('/users/login', (req, res) => {
    res.render('login');
})

app.get('/users/dashboard', (req, res) => {
    res.render('dashboard', {user: "Gabzz"});
})



app.use('/api/v1/FileServer', fileRoutes);



app.listen(port, () => console.log(`app is listening on port ${port}`));