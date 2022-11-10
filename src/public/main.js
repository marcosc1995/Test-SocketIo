
const socket = io()

socket.on('ping', ()=>{
    socket.emit('pong')
    console.log('escuchado')
})
