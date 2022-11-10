import express from 'express'
import {Server as webSocketServer} from 'socket.io'
import http from 'http'

const app = express()
const httpServer = http.createServer(app)
const io = new webSocketServer(httpServer)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket)=>{
    console.log('nueva conexion', socket.id)

    socket.emit('ping')
    socket.on('pong' ,()=>{
        console.log('pong')
    })
})

app.get('/', (req,res)=>{
    res.send('hello World')
})

httpServer.listen(3000)
console.log('Server on port', 3000)