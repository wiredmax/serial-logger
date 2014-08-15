var app     = require('./app'),
    winston = require('winston');

winston.add(winston.transports.File, { filename: 'serial.log' });

app.listPorts();

app.logSerial({
  port: '/dev/ttyUSB0',
  baudrate: 57600
});