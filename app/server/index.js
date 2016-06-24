
import express from 'express'
import config from '../../config'
import middleware from './middleware'

let app = middleware(express())
let port = process.env.PORT || config.port

app.all('*', (req, res) => {
  res.render('index')
})

app.use((err, req, res, next) => {
  console.log('  Error: ' + err.status + ': ' + err.message)
  return res.json({
    error: err.status,
    message: err.message
  })
})

app.listen(port, function () {
  console.log(`App listening on port ${port}`)
})

module.exports = app
