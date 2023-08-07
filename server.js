require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const VechileData = require('./schema/Vehicle')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.post('/left', async(req, res) => {
    const data = new VechileData({event: "LEFT"})
    await data.save()
    res.sendStatus(200)
})

app.post('/right', async(req, res) => {
    const data = new VechileData({event: "RIGHT"})
    await data.save()
    res.sendStatus(200)
})

app.post('/brake', async(req, res) => {
    const data = new VechileData({event: "BRAKE"})
    await data.save()
    res.sendStatus(200)
})

app.post('/start', async(req, res) => {
    const data = new VechileData({event: "START"})
    await data.save()
    res.sendStatus(200)
})

app.post('/stop', async(req, res) => {
    const data = new VechileData({event: "STOP"})
    await data.save()
    res.sendStatus(200)
})

app.get('/', async(req, res) => {
    const data = await VechileData.find({})
    res.status(200).send(data)
})

app.listen(3001, ()=> console.log("Server Connected"))