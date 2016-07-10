import express from 'express'
import config from '../../config'
import middleware from './middleware'

let app = middleware(express(), config)

app.get('*', (req, res) => {
  res.render('index')
})

app.use((err, req, res, next) => {
  console.log(`  Error: ${err.status}: ${err.message}`)
  return res.json({
    error: {
      status: err.status,
      message: err.message
    }
  })
})

app.listen(config.port, config.host, function () {
  console.log(`App listening on ${config.host}:${config.port}`)
})

module.exports = app
