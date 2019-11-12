const express = require('express');
const swagger_ui = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const package_info = require('../package.json');
const controllers = require('./Controllers');
//const body_parser = require('body-parser');
require('dotenv').config();

// Starting API service
const app = express();
app.disable('etag');
//app.use(body_parser.json());
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
    apis: ['./source/Controllers/*.js']
};

// Starting swagger
const specs = swaggerJSDoc(options);
app.use('/', swagger_ui.serve, swagger_ui.setup(specs));

app.listen(8000);
