const express = require('express')
const app = express()
const port = process.env.PORT || 3002

app.patch('/', (req, res) => res.send('PATCH endpoint'))
app.post('/', (req, res) => res.send('POST endpoint'))
app.put('/', (req, res) => res.send('PUT endpoint'))
app.get('/', (req, res) => res.send('Games-api'))   //ovo je get na localhost:3000.


app.get('/api', (req, res) => res.send('API version 1.0.0'));
app.get('/place', (req, res) => res.send('Dubec'));
app.get('/api/teams', (req, res) => res.send({name:"Team 1", _id:"423643"}));
app.get('/api/user', (req, res) => res.send([{ime:"Vlado", id:'12'}, {ime:"Hrvoje", id:'34'},{ime:"Matko", id:'56'},{ime:"Bojan", id:'78'}]));
app.get('/players', (req, res) => res.send({ime:'Vlado',ime:'Hrvoje', ime:'Matko'}));
app.get('/api/player/:id', (req, res) => res.send({ id:'99', ime:'Hrvoje', brojIgara:'870', avgBodova:'90'}));
app.get('/api/game', (req, res) => res.send([{imeIgraca:"Ivan"}, {imeIgraca:"Danijel"},{imeIgraca:"Ljubo"}], { lokacija:'Dubec'}, {id:'159'}));

app.post('/api', (req, res) => res.send('API version 1.0.0'));
app.post('/place', (req, res) => res.send('Dubec'));
app.post('/api/teams', (req, res) => res.send({name:"Team 1", _id:"423643"}));
app.post('/api/user', (req, res) => res.send([{ime:"Vlado", id:'12'}, {ime:"Hrvoje", id:'34'},{ime:"Matko", id:'56'},{ime:"Bojan", id:'78'}]));
app.post('/players', (req, res) => res.send({ime:'Vlado',ime:'Hrvoje', ime:'Matko'}));
app.post('/api/player/:id', (req, res) => res.send({ id:'99', ime:'Hrvoje', brojIgara:'870', avgBodova:'90'}));
app.post('/api/game', (req, res) => res.send([{imeIgraca:"Ivan"}, {imeIgraca:"Danijel"},{imeIgraca:"Ljubo"}], { lokacija:'Dubec'}, {id:'159'}));

app.put('/api', (req, res) => res.send('API version 1.0.0'));
app.put('/place', (req, res) => res.send('Dubec'));
app.put('/api/teams', (req, res) => res.send({name:"Team 1", _id:"423643"}));
app.put('/api/user', (req, res) => res.send([{ime:"Vlado", id:'12'}, {ime:"Hrvoje", id:'34'},{ime:"Matko", id:'56'},{ime:"Bojan", id:'78'}]));
app.put('/players', (req, res) => res.send({ime:'Vlado',ime:'Hrvoje', ime:'Matko'}));
app.put('/api/player/:id', (req, res) => res.send({ id:'99', ime:'Hrvoje', brojIgara:'870', avgBodova:'90'}));
app.put('/api/game', (req, res) => res.send([{imeIgraca:"Ivan"}, {imeIgraca:"Danijel"},{imeIgraca:"Ljubo"}], { lokacija:'Dubec'}, {id:'159'}));

app.patch('/api', (req, res) => res.send('API version 1.0.0'));
app.patch('/place', (req, res) => res.send('Dubec'));
app.patch('/api/teams', (req, res) => res.send({name:"Team 1", _id:"423643"}));
app.patch('/api/user', (req, res) => res.send([{ime:"Vlado", id:'12'}, {ime:"Hrvoje", id:'34'},{ime:"Matko", id:'56'},{ime:"Bojan", id:'78'}]));
app.patch('/players', (req, res) => res.send({ime:'Vlado',ime:'Hrvoje', ime:'Matko'}));
app.patch('/api/player/:id', (req, res) => res.send({ id:'99', ime:'Hrvoje', brojIgara:'870', avgBodova:'90'}));
app.patch('/api/game', (req, res) => res.send([{imeIgraca:"Ivan"}, {imeIgraca:"Danijel"},{imeIgraca:"Ljubo"}], { lokacija:'Dubec'}, {id:'159'}));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));


  

