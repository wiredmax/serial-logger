var serialPort = require('serialport'),
    winston    = require('winston');

function listPorts() {
  serialPort.list(function (err, ports) {
    if(ports.length === 0) {
      winston.warn("No serial port.");
    }
    ports.forEach(function(port) {
      winston.info(port.comName);
    });
  });
}

module.exports = listPorts;