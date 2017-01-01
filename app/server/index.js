import path from 'path'
import express from 'express'
import config from '../../config'
import middleware from './middleware'

let app = middleware(express(), config)

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.listen(config.port, config.host, function () {
  console.log(`App listening on ${config.host}:${config.port}`)
})

module.exports = app
