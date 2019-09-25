const experss = require('express');
const app = experss();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Halo aku express!');
});

app.get('/login', (req, res) => {
    res.send('Login!');
});

app.post('/register', (req, res) =>{
    res.send('Request POST for register!')
});

app.pud('/instal', (req, res) =>{
    res.send('Berhasil di install!')
});

app.pud('/delete', (req, res) =>{
    res.send('Berhasil di delete!')
});
app.listen(port, () => console.log('App listen on port ${port}'))