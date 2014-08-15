var _          = require('lodash'),
    winston    = require('winston'),
    SerialPort = require("serialport").SerialPort;

function logSerial(params) {

  if(!_.isString(params.port)) {
    winston.error('Missing parameter: port')
    return;
  }

  if(!_.isNumber(params.baudrate)) {
    winston.error('Missing parameter: baudrate')
    return;
  }

  var serialPort = new SerialPort(params.port, {
        baudrate: params.baudrate
      }, false); // this is the openImmediately flag [default is true]

  serialPort.open(function (error) {
    if ( error ) {
      winston.error('failed to open: '+error);
    } else {
      winston.info('open');
      serialPort.on('data', function(data) {
        winston.info('data received: ' + data);
      });
    }
  });
}

module.exports = logSerial;