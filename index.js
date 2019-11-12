const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./controllers');

const app = express()
app.use(bodyParser.json())
app.use('/api/v1', controllers);

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

// create a user
// app.post('/api/users', (req, res) => {
//     User.create(req.body)
//         .then(user => res.json(user))
// })
// // get all users
// app.get('/api/users', (req, res) => {
//     User.findAll().then(users => res.json(users))
// })