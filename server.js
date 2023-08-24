const express = require('express');
const fileRoutes = require('./src/routes');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/FileServer', fileRoutes);



app.listen(port, () => console.log(`app is listening on port ${port}`));