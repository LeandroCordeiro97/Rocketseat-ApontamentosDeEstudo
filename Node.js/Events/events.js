const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (a) => {

    console.log('Eu ouvi você', mensage)
})


ev.emit('saySomething', 'Leandro')
ev.emit('saySomething', 'Leandro')