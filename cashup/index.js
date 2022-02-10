const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use((req, res, next) => {
  console.log("request", req)
  next()
})

app.get('/', (req,res) => {
  res.render('index', {})
})

app.listen(3001, (err) => {
  if (err) {
    console.error('Startup failed', err)
  } else {
    console.log('Listening')
  }
})