//const express = require('express')
//const bodyParser = require('body-parser')
//const controllers = require('./controllers');

//const app = express()
//app.use(bodyParser.json())
//app.use('/api/v1', controllers);

//const port = 3000
//app.listen(port, () => {
//    console.log(`Running on http://localhost:${port}`)
//})

// create a user
// app.post('/api/users', (req, res) => {
//     User.create(req.body)
//         .then(user => res.json(user))
// })
// // get all users
// app.get('/api/users', (req, res) => {
//     User.findAll().then(users => res.json(users))
// })

const express = require('express');
const swagger_ui = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const package_info = require('../package.json');
const controllers = require('./controllers');
const body_parser = require('body-parser');
//require('dotenv').config();

// Starting API service
const app = express();
app.use(body_parser.json())
app.disable('etag');
app.use('/api/v1', controllers);

// Swagger stuff
// Swagger Options
const options = {
    swaggerDefinition: {
        info: {
            title: package_info.name,
            version: package_info.version,
            description: package_info.description
        },
        basePath: '/api/v1'
    },
    apis: ['./src/controllers/*.js']
};

// Starting swagger
const specs = swaggerJSDoc(options);
app.use('/', swagger_ui.serve, swagger_ui.setup(specs));

const port = 3000;
app.listen(port, () => {
        console.log(`Running on http://localhost:${port}`)
    })