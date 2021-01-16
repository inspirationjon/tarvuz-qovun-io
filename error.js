const {
  EventEmitter
} = require('events');

const evt = new EventEmitter()
evt.on('error', (title) => console.log(title));

module.exports.evt = evt;