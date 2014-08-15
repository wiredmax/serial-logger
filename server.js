var app     = require('./app'),
    winston = require('winston');

winston.add(winston.transports.File, { filename: 'serial.log' });

app.listPorts();